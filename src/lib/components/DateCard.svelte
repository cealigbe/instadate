<!--
  DateCard.svelte (Svelte 5 runes)
  A single date idea card used inside the DateCarousel.
  Shows an image, title, and metadata chips when active.
  Scales up subtly when it is the active/center card.

  Props:
    id          — unique id / slug
    title       — date name
    image       — image URL
    imageAlt    — alt text for image
    duration    — e.g. "2–3 hours"
    cost        — e.g. "$" | "$$" | "$$$"
    active      — whether this is the center card
    href        — destination for click/enter
-->
<script>
    /**
     * @type {{
     *   id?: string,
     *   title?: string,
     *   image?: string,
     *   imageAlt?: string,
     *   duration?: string,
     *   cost?: string,
     *   active?: boolean,
     *   href?: string
     * }}
     */

    import Ficon from "./Ficon.svelte";
    import MetadataChip from "./MetadataChip.svelte";

    let {
        id = "",
        title = "",
        image = "",
        imageAlt = "",
        duration = "",
        cost = "",
        active = false,
        href = "",
    } = $props();

    const imagePaths = import.meta.glob("$lib/img/*.webp", {
        eager: true,
    });
    const imagePath = $derived(imagePaths[`/src/lib/img/${image}`]?.default);

    let resolvedHref = $derived(href || `/date/${id}`);
</script>

<a
    href={resolvedHref}
    class="date-card"
    class:date-card--active={active}
    aria-label="{title}{active ? ', currently selected' : ''}"
    tabindex={active ? 0 : -1}
>
    <div class="date-card__image-wrap">
        {#if image}
            <img
                src={imagePath}
                alt={imageAlt || title}
                class="date-card__image"
                loading="lazy"
                draggable="false"
            />
        {:else}
            <div class="date-card__image-placeholder" aria-hidden="true"></div>
        {/if}
    </div>

    <div class="date-card__body">
        <div class="date-card__title-row">
            <span class="date-card__title">{title}</span>
            <!-- Feather: chevron-right -->
            <Ficon name="chevron-right" size="16" />
        </div>

        <div class="date-card__chips">
            {#if duration}
                <MetadataChip
                    label={duration}
                    icon="clock"
                    tooltip="Duration"
                />
            {/if}
            {#if cost}
                <MetadataChip label={cost} icon="dollar-sign" tooltip="Cost" />
            {/if}
        </div>
    </div>
</a>

<style>
    .date-card {
        position: relative;
        display: block;
        border-radius: var(--radius-xl);
        overflow: hidden;
        background-color: var(--color-white);
        width: 20rem;
        aspect-ratio: 1;
        border: 1.5px solid var(--color-border);
        text-decoration: none;
        color: var(--color-text-primary);
        transition:
            transform var(--transition-smooth),
            box-shadow var(--transition-smooth),
            border-color var(--transition-base);
        user-select: none;
        /* prevent layout shift during scale */
        will-change: transform;
    }

    /* Active / center card */
    .date-card--active {
        background-color: var(--color-sage-50);
        border-color: var(--color-sage-300);
        transform: scale(1.1);
        box-shadow: var(--shadow-md);
    }

    .date-card--active:hover,
    .date-card--active:focus-visible {
        transform: scale(1.125);
        box-shadow: var(--shadow-lg);
        outline: none;
    }

    /* Side (non-active) cards */
    .date-card:not(.date-card--active):hover {
        transform: scale(1.05);
    }

    /* Image */
    .date-card__image-wrap {
        width: 100%;
        aspect-ratio: 1;
        overflow: hidden;
        flex-shrink: 0;
    }

    .date-card__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform var(--transition-smooth);
    }

    .date-card--active:hover .date-card__image,
    .date-card--active:focus-visible .date-card__image {
        transform: scale(1.05);
    }

    .date-card__image-placeholder {
        width: 100%;
        height: 100%;
        background: var(--color-sage-100);
    }

    /* Body (only shown when active) */
    .date-card__body {
        position: absolute;
        bottom: 0;
        inset-inline: 0;
        padding: var(--space-3) var(--space-4) var(--space-4);
        display: flex;
        flex-direction: column;
        gap: var(--space-2);
        background-color: var(--color-sage-100);
        opacity: 0;
        transition: opacity var(--transition-base);
        z-index: 2;
    }

    .date-card--active .date-card__body,
    .date-card:is(:hover, :focus) .date-card__body {
        opacity: 1;
    }

    .date-card__title-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--space-2);
    }

    .date-card__title {
        font-size: var(--text-base);
        font-weight: var(--weight-bold);
        color: var(--color-forest);
        line-height: var(--leading-snug);
    }

    .date-card__arrow {
        color: var(--color-text-muted);
        flex-shrink: 0;
    }

    .date-card__chips {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-2);
    }

    @media screen and (max-width: 600px) {
        .date-card {
            width: 15rem;
        }
    }
</style>
