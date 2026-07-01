<!--
  DateDetail.svelte (Svelte 5 runes)
  Full date detail view. Two-column layout on desktop, stacked on mobile.
  Shows image, title, metadata chips, description, and ideas list.
  Optional "Choose Another Date" CTA (omit on Surprise Me flow via showChooseAnother).
-->
<script>
    import MetadataChip from "./MetadataChip.svelte";
    import BackButton from "./BackButton.svelte";

    /**
     * @type {{
     *   title?: string,
     *   image?: string,
     *   imageAlt?: string,
     *   duration?: string,
     *   cost?: string,
     *   vibe?: string,
     *   energy?: string,
     *   description?: string,
     *   ideas?: string[],
     *   backHref?: string,
     *   backLabel?: string,
     *   showChooseAnother?: boolean,
     *   chooseAnotherHref?: string
     * }}
     */
    let {
        title = "",
        image = "",
        imageAlt = "",
        duration = "",
        cost = "",
        vibe = "",
        energy = "",
        description = "",
        ideas = [],
        backHref = "/",
        backLabel = "Back to Categories",
        showChooseAnother = true,
        chooseAnotherHref = "/",
    } = $props();
</script>

{#snippet clockIcon()}
    <!-- Feather: clock -->
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        ><circle cx="12" cy="12" r="10" /><polyline
            points="12 6 12 12 16 14"
        /></svg
    >
{/snippet}

{#snippet dollarIcon()}
    <!-- Feather: dollar-sign -->
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        ><line x1="12" y1="1" x2="12" y2="23" /><path
            d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
        /></svg
    >
{/snippet}

{#snippet tagIcon()}
    <!-- Feather: tag -->
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        ><path
            d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
        /><line x1="7" y1="7" x2="7.01" y2="7" /></svg
    >
{/snippet}

{#snippet zapIcon()}
    <!-- Feather: zap -->
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        ><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg
    >
{/snippet}

<article class="detail">
    <!-- Back navigation -->
    <div class="detail__back">
        <BackButton href={backHref} label={backLabel} />
    </div>

    <!-- Main content -->
    <div class="detail__layout">
        <!-- Image -->
        <div class="detail__image-wrap">
            {#if image}
                <img
                    src={image}
                    alt={imageAlt || title}
                    class="detail__image"
                    loading="eager"
                />
            {:else}
                <div class="detail__image-placeholder" aria-hidden="true"></div>
            {/if}
        </div>

        <!-- Content panel -->
        <div class="detail__content">
            <h1 class="detail__title">{title}</h1>

            <!-- Metadata chips -->
            <div class="detail__chips" aria-label="Date details">
                {#if duration}
                    <MetadataChip label={duration} icon={clockIcon} />
                {/if}

                {#if cost}
                    <MetadataChip label={cost} icon={dollarIcon} />
                {/if}

                {#if vibe}
                    <MetadataChip label={vibe} icon={tagIcon} />
                {/if}

                {#if energy}
                    <MetadataChip label={energy} icon={zapIcon} />
                {/if}
            </div>

            <!-- Description -->
            {#if description}
                <p class="detail__description">{description}</p>
            {/if}

            <!-- Ideas -->
            {#if ideas.length > 0}
                <div class="detail__ideas">
                    <div class="detail__ideas-header">
                        <!-- Feather: sun (lightbulb feel) -->
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#d97706"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            aria-hidden="true"
                            ><circle cx="12" cy="12" r="5" /><line
                                x1="12"
                                y1="1"
                                x2="12"
                                y2="3"
                            /><line x1="12" y1="21" x2="12" y2="23" /><line
                                x1="4.22"
                                y1="4.22"
                                x2="5.64"
                                y2="5.64"
                            /><line
                                x1="18.36"
                                y1="18.36"
                                x2="19.78"
                                y2="19.78"
                            /><line x1="1" y1="12" x2="3" y2="12" /><line
                                x1="21"
                                y1="12"
                                x2="23"
                                y2="12"
                            /><line
                                x1="4.22"
                                y1="19.78"
                                x2="5.64"
                                y2="18.36"
                            /><line
                                x1="18.36"
                                y1="5.64"
                                x2="19.78"
                                y2="4.22"
                            /></svg
                        >
                        <span class="detail__ideas-label"
                            >Ideas to make it better:</span
                        >
                    </div>
                    <ul
                        class="detail__ideas-list"
                        aria-label="Enhancement ideas"
                    >
                        {#each ideas as idea}
                            <li class="detail__idea-item">
                                {idea}
                            </li>
                        {/each}
                    </ul>
                </div>
            {/if}
        </div>
    </div>

    <!-- Choose Another Date CTA -->
    {#if showChooseAnother}
        <div class="detail__cta">
            <a
                href={chooseAnotherHref}
                class="btn btn-outline btn-lg detail__choose-btn"
            >
                <!-- Feather: shuffle -->
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                    ><polyline points="16 3 21 3 21 8" /><line
                        x1="4"
                        y1="20"
                        x2="21"
                        y2="3"
                    /><polyline points="21 16 21 21 16 21" /><line
                        x1="15"
                        y1="15"
                        x2="21"
                        y2="21"
                    /></svg
                >
                Choose Another Date
            </a>
        </div>
    {/if}
</article>

<style>
    .detail {
        display: flex;
        flex-direction: column;
        gap: var(--space-8);
        width: 100%;
    }

    /* ── Layout ── */
    .detail__layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-8);
        align-items: start;
    }

    @media (max-width: 768px) {
        .detail__layout {
            grid-template-columns: 1fr;
            gap: var(--space-6);
        }
    }

    /* ── Image ── */
    .detail__image-wrap {
        border-radius: var(--radius-xl);
        overflow: hidden;
        width: 100%;
        aspect-ratio: 4 / 3;
        background-color: var(--color-sage-100);
    }

    .detail__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .detail__image-placeholder {
        width: 100%;
        height: 100%;
        background: var(--color-sage-100);
    }

    /* ── Content ── */
    .detail__content {
        display: flex;
        flex-direction: column;
        gap: var(--space-4);
    }

    .detail__title {
        font-size: clamp(var(--text-xl), 3vw, var(--text-3xl));
        font-weight: var(--weight-bold);
        color: var(--color-forest);
        line-height: var(--leading-tight);
        letter-spacing: -0.02em;
    }

    .detail__chips {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-2);
    }

    .detail__description {
        font-size: var(--text-base);
        color: var(--color-text-secondary);
        line-height: var(--leading-loose);
    }

    /* ── Ideas ── */
    .detail__ideas {
        display: flex;
        flex-direction: column;
        gap: var(--space-3);
        padding-top: var(--space-2);
    }

    .detail__ideas-header {
        display: flex;
        align-items: center;
        gap: var(--space-2);
    }

    .detail__ideas-label {
        font-size: var(--text-base);
        font-weight: var(--weight-semibold);
        color: var(--color-forest);
    }

    .detail__ideas-list {
        padding-inline: 1.25rem 0;
    }

    .detail__idea-item {
        padding: 0.125rem 0.25rem;
        align-items: baseline;
        font-size: var(--text-sm);
        color: var(--color-text-secondary);
        line-height: var(--leading-normal);
    }

    .detail__idea-bullet {
        color: var(--color-sage-400);
        font-weight: var(--weight-bold);
        font-size: var(--text-base);
        flex-shrink: 0;
        line-height: 1;
        margin-top: 1px;
    }

    /* ── CTA ── */
    .detail__cta {
        display: flex;
        justify-content: center;
        padding-top: var(--space-2);
    }

    .detail__choose-btn {
        min-width: 220px;
    }

    /* ── Back ── */
    .detail__back {
        display: flex;
    }
</style>
