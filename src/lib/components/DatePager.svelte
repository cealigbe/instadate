<script>
    /**
       * @typedef {{ title: string, href: string }} PagerItem
       *
       * @type {{
       *   prev?:          PagerItem | null,
       *   next?:          PagerItem | null,
       *   categoryLabel?: string,
       * }}
       */

       import Ficon from './Ficon.svelte';

       let { prev = null, next = null, categoryLabel = '' } = $props();
</script>

<nav class="pager" aria-label={`Navigate dates in ${categoryLabel} category`}>
    {#if prev}
        <a href={prev.href} class="pager__item pager__item--prev" aria-label="Previous date">
            <Ficon name="chevron-left" />
            <p class="pager__item--content">
                <strong class="pager__item--title">Previous {categoryLabel} Date</strong> <br />
                {prev.title}
            </p>
        </a>
    {:else}
        <span class="pager__item--none" aria-hidden="true">
            &nbsp;
        </span>
    {/if}
    {#if next}
        <a href={next.href} class="pager__item pager__item--next" aria-label="Next date">
            <p class="pager__item--content">
                <strong class="pager__item--title">Next {categoryLabel} Date</strong> <br />
                {next.title}
            </p>
            <Ficon name="chevron-right" />
        </a>
    {:else}
        <span class="pager__item--none" aria-hidden="true">
            &nbsp;
        </span>
    {/if}
</nav>

<style>
    nav.pager {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--space-4);
        width: 100%;

        @media (min-width: 35rem) {
            grid-template-columns: 1fr 1fr;
        }
    }

    .pager__item {
        display: flex;
        align-items: center;
        gap: var(--space-3);
        padding: var(--space-3) var(--space-4);
        border: 2px solid var(--color-border-medium);
        border-radius: var(--radius-lg);
        text-decoration: none;
        background-color: hsl(from var(--color-phthalo-800) h s l / 0);
        color: var(--color-text-secondary);
        transition: opacity var(--transition-fast), background-color var(--transition-fast);
    }

    .pager__item:hover,
    .pager__item:focus-visible {
        opacity: 0.8;
        background-color: hsl(from var(--color-phthalo-800) h s l / 0.05);
        outline: none;
    }

    .pager__item--next {
        justify-content: flex-end;
        text-align: right;
        order: -1;

        @media (min-width: 35rem) {
            order: 1;
        }
    }

    .pager__item--content {
        margin: 0;
    }

    .pager__item--none {
        display: none;

        @media (min-width: 35rem) {
            display: inline-block;
        }
    }

</style>
