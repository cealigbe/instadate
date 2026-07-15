<!--
  DateCarousel.svelte (Svelte 5 runes)
  Horizontal card carousel for date listings.
  - Center card is active (scaled, labeled, chips visible)
  - Left/right chevron buttons shift focus one card at a time
  - Dot indicators reflect current position; active dot stretches to a pill
  - Keyboard: Arrow keys navigate, Enter opens the active card
  - Touch: swipe left/right supported
-->
<script>
    import DateCard from "./DateCard.svelte";
    import Ficon from "./Ficon.svelte";

    /**
     * @typedef {Object} DateItem
     * @property {string}  id
     * @property {string}  title
     * @property {string}  [img]
     * @property {string}  [imageAlt]
     * @property {string}  [duration]
     * @property {string}  [cost]
     * @property {string}  [href]
     */

    /**
     * @type {{
     *   dates?: DateItem[],
     *   categoryName?: string,
     *   initialIndex?: number
     * }}
     */
    let { dates = [], categoryName = "", initialIndex = 0 } = $props();

    let activeIndex = $state(initialIndex);
    let trackEl = $state(/** @type {HTMLDivElement | null} */ (null));

    let count = $derived(dates.length);
    let canPrev = $derived(activeIndex > 0);
    let canNext = $derived(activeIndex < count - 1);

    // ── Core navigation ─────────────────────────────────────────────────

    function go(newIndex) {
        if (newIndex < 0 || newIndex >= count) return;
        activeIndex = newIndex;
        scrollToActive();
    }

    function prev() {
        go(activeIndex - 1);
    }
    function next() {
        go(activeIndex + 1);
    }

    function scrollToActive() {
        if (!trackEl) return;
        const cards = trackEl.querySelectorAll(".carousel__item");
        if (!cards[activeIndex]) return;
        const card = cards[activeIndex];
        const trackRect = trackEl.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();
        const offset =
            cardRect.left -
            trackRect.left -
            (trackRect.width / 2 - cardRect.width / 2);
        trackEl.scrollBy({ left: offset, behavior: "smooth" });
    }

    // ── Wheel / trackpad ────────────────────────────────────────────────
    //
    // Trackpads fire many low-deltaX wheel events per gesture. We accumulate
    // the raw deltaX until it crosses a threshold (50 px), then advance one
    // card and lock further advances until the gesture goes quiet (120 ms).
    // This ensures exactly one card change per discrete scroll gesture,
    // whether from a mouse wheel click or a trackpad swipe.

    /** Accumulated horizontal delta for the current wheel gesture. */
    let wheelAccum = 0;

    /**
     * True from the first card-change in a gesture until 120 ms after the
     * last wheel event. Prevents a single fast flick advancing multiple cards.
     */
    let isWheeling = false;
    let wheelQuietTimer = -1;

    /** Threshold in pixels before a wheel gesture advances one card. */
    const WHEEL_THRESHOLD = 60;

    /** Quiet period in ms after the last wheel event before the lock releases. */
    const WHEEL_QUIET_MS = 80;

    function onWheel(e) {
        // Only intercept horizontal scrolling (deltaX). Vertical wheel on a
        // mouse or a two-finger vertical trackpad scroll should not hijack the
        // page scroll — only step in when the user is clearly scrolling sideways.
        if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;

        e.preventDefault(); // stop the track div from natively scrolling

        wheelAccum += e.deltaX;

        // Reset the quiet timer on every wheel tick.
        clearTimeout(wheelQuietTimer);
        wheelQuietTimer = setTimeout(() => {
            // Gesture ended — reset accumulator and lock so the next gesture
            // starts fresh.
            wheelAccum = 0;
            isWheeling = false;
        }, WHEEL_QUIET_MS);

        // Once locked, ignore remaining ticks in this gesture.
        if (isWheeling) return;

        if (wheelAccum > WHEEL_THRESHOLD) {
            isWheeling = true;
            wheelAccum = 0;
            next();
        } else if (wheelAccum < -WHEEL_THRESHOLD) {
            isWheeling = true;
            wheelAccum = 0;
            prev();
        }
    }

    // Attach wheel listener with { passive: false } so preventDefault works.
    // This must be done imperatively — Svelte's onwheel directive is passive
    // by default and cannot call preventDefault.
    $effect(() => {
        if (!trackEl) return;
        trackEl.addEventListener("wheel", onWheel, { passive: false });
        return () => trackEl.removeEventListener("wheel", onWheel);
    });

    // ── Touch swipe ─────────────────────────────────────────────────────

    let touchStartX = 0;

    /** Minimum horizontal distance in px to register as a deliberate swipe. */
    const SWIPE_THRESHOLD = 60;

    function onTouchStart(e) {
        touchStartX = e.touches[0].clientX;
    }

    function onTouchEnd(e) {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > SWIPE_THRESHOLD) {
            dx < 0 ? next() : prev();
        }
    }

    // ── Keyboard navigation ──────────────────────────────────────────────

    function onKeydown(e) {
        if (e.key === "ArrowLeft") {
            e.preventDefault();
            prev();
        }
        if (e.key === "ArrowRight") {
            e.preventDefault();
            next();
        }
    }

    // ── Initial scroll-into-view ─────────────────────────────────────────

    $effect(() => {
        if (trackEl) scrollToActive();
    });
</script>

<section class="carousel" aria-label="{categoryName} date ideas">
    <!-- Track -->
    <div
        class="carousel__viewport"
        onkeydown={onKeydown}
        ontouchstart={onTouchStart}
        ontouchend={onTouchEnd}
        role="region"
        aria-label="Scrollable date cards"
        tabindex="0"
    >
        <div class="carousel__track" bind:this={trackEl}>
            {#each dates as date, i (date.id)}
                <div
                    class="carousel__item"
                    class:carousel__item--active={i === activeIndex}
                >
                    <DateCard
                        id={date.id}
                        title={date.title}
                        image={date.img ?? ""}
                        imageAlt={date.description ?? date.title}
                        duration={date.duration ?? ""}
                        cost={date.cost ?? ""}
                        active={i === activeIndex}
                        href={date.href ?? ""}
                    />
                </div>
            {/each}
        </div>
    </div>

    <!-- Navigation row -->
    <div class="carousel__nav" aria-label="Carousel navigation">
        <button
            class="btn btn-ghost btn-circle carousel__chevron"
            onclick={prev}
            disabled={!canPrev}
            aria-label="Previous date"
        >
            <!-- Feather: chevron-left -->
            <Ficon name="chevron-left" size="24" />
        </button>

        <!-- Dot indicators -->
        <div class="carousel__dots" role="tablist" aria-label="Select a date">
            {#each dates as date, i (date.id)}
                <button
                    class="carousel__dot"
                    class:carousel__dot--active={i === activeIndex}
                    role="tab"
                    aria-selected={i === activeIndex}
                    aria-label="Go to {date.title}"
                    onclick={() => go(i)}
                ></button>
            {/each}
        </div>

        <button
            class="btn btn-ghost btn-circle carousel__chevron"
            onclick={next}
            disabled={!canNext}
            aria-label="Next date"
        >
            <!-- Feather: chevron-right -->
            <Ficon name="chevron-right" size="24" />
        </button>
    </div>
</section>

<style>
    .carousel {
        display: flex;
        flex-direction: column;
        gap: var(--space-6);
        width: 100%;
    }

    /* ── Viewport & track ── */
    .carousel__viewport {
        overflow: hidden;
        width: 100%;
    }

    .carousel__viewport:focus-visible {
        outline: 2px solid var(--color-sage-500);
        outline-offset: 3px;
        border-radius: var(--radius-md);
    }

    .carousel__track {
        display: flex;
        align-items: center;
        gap: var(--space-4);
        min-height: 25rem;
        padding-inline: clamp(1rem, 8vw, 6rem);
        /* scroll snapping as progressive enhancement */
        overflow: hidden;
        overscroll-behavior-x: contain;
        padding-block: var(--space-4); /* room for scale effect */
    }

    /* ── Items ── */
    .carousel__item {
        /*flex: 0 0 clamp(200px, 38vw, 340px);*/
        scroll-snap-align: center;
        /*transition: flex-basis var(--transition-smooth);*/
    }

    .carousel__item--active {
        /*flex: 0 0 clamp(240px, 42vw, 380px);*/
        margin: 0 var(--space-4);
    }

    /* ── Nav row ── */
    .carousel__nav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--space-4);
    }

    /* ── Chevron buttons ── */
    .carousel__chevron {
        width: 2.5rem;
        height: 2.5rem;
        flex-shrink: 0;
    }

    .carousel__chevron:disabled {
        opacity: 0.3;
        cursor: not-allowed;
    }

    .carousel__chevron:disabled:hover {
        opacity: 0.3;
    }

    /* ── Dots ── */
    .carousel__dots {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 240px;
    }

    .carousel__dot {
        height: 8px;
        width: 8px;
        border-radius: var(--radius-full);
        background-color: var(--color-border-medium);
        border: none;
        padding: 0;
        cursor: pointer;
        transition:
            width var(--transition-smooth),
            background-color var(--transition-base),
            opacity var(--transition-fast);
        flex-shrink: 0;
    }

    .carousel__dot:hover,
    .carousel__dot:focus-visible {
        opacity: 0.8;
        outline: none;
        background-color: var(--color-sage-400);
    }

    .carousel__dot--active {
        width: 22px;
        background-color: var(--color-forest);
    }

    /* ── Responsive ── */
    @media (max-width: 600px) {
        .carousel__item {
        }

        .carousel__item--active {
        }

        .carousel__track {
            padding-inline: clamp(0.75rem, 5vw, 2rem);
        }
    }
</style>
