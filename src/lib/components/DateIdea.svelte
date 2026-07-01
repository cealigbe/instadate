<script>
    /**
     * @type {{
     *  date: Object
     * }}
     */

    /*
    Date Idea Detail Item

    accepts date Object, which contains:
      id: date ID number,
      title: date idea title,
      duration: date idea duration,
      cost: date cost,
      category: category of the date idea,
      tags: descriptive tags for the date,
      img: image describing the date,
      description: description of the date idea,
      enhancements: ideas to enhance the date
    */
    import MetadataChip from "./MetadataChip.svelte";
    import ficons from "$lib/assets/feathericons.json";
    import { icons } from "$lib/assets/icons.js";

    let { date } = $props();

    const imagePaths = import.meta.glob("$lib/img/*.webp", {
        eager: true,
    });
    const imagePath = $derived(imagePaths[`/src/lib/img/${date.img}`]?.default);
</script>

<article class="detail">
    <div class="detail__layout">
        <!-- Image -->
        <div class="detail__image-wrap">
            {#if date.img}
                <img
                    src={imagePath}
                    alt={date.title}
                    class="detail__image"
                    loading="eager"
                />
            {:else}
                <div class="detail__image-placeholder" aria-hidden="true"></div>
            {/if}
        </div>

        <!-- Date detail content -->
        <div class="detail__content">
            <h1 class="detail__title">{date.title}</h1>

            <!-- Metadata chips -->
            <div class="detail__chips" aria-label="Date details">
                {#if date.duration}
                    <MetadataChip label={date.duration} icon={ficons.clock} />
                {/if}

                {#if date.cost}
                    <MetadataChip label={date.cost} icon={ficons.dollarSign} />
                {/if}

                {#if date.category}
                    <MetadataChip label={date.category} icon={ficons.tag} />
                {/if}

                {#if date.tags.length > 0}
                    <MetadataChip label={date.tags[0]} icon={ficons.heart} />
                    <MetadataChip label={date.tags[1]} icon={ficons.mapPin} />
                {/if}
            </div>

            <!-- Description -->
            {#if date.description}
                <p class="detail__description">{date.description}</p>
            {/if}

            {#if date.enhancements}
                <div class="detail__ideas">
                    <div class="detail__ideas-header">
                        <p>
                            {@html icons.lightbulb}
                            <span class="detail__ideas-label">
                                Ideas to make it better:
                            </span>
                        </p>
                    </div>
                    <ul
                        class="detail__ideas-list"
                        aria-label="Enhancement ideas"
                    >
                        {#each date.enhancements as idea}
                            <li class="detail__idea-item">
                                {idea}
                            </li>
                        {/each}
                    </ul>
                </div>
            {/if}
        </div>
    </div>
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

    @media (max-width: 50rem) {
        .detail__layout {
            grid-template-columns: 1fr;
            gap: var(--space-6);
        }
    }

    /* ── Image ── */
    .detail__image-wrap {
        border-radius: var(--radius-lg);
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
        margin-block: 0 0.5rem;
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
        margin-block-end: var(--space-2);
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

    .detail__ideas-header p {
        margin: 0;
        display: flex;
        gap: 0.5rem;
        align-items: end;
    }

    :global(.detail__ideas-header svg path) {
        stroke: #ee8000;
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
</style>
