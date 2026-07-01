<!--
  CategoryCard.svelte (Svelte 5 runes)
  Home-page category tile. Gradient background, circular icon badge,
  bold label bottom-left. Subtle translate-up + shadow on hover/focus.

  Props:
    id       — category slug used to build the href
    label    — display name
    gradient — CSS gradient string (from design tokens)
    badgeColor — background colour for the icon circle
    href     — optional override; defaults to /category/[id]
    icon     — optional snippet for the badge icon
-->
<script>
    /**
     * @type {{
     *   id?: string,
     *   label?: string,
     *   gradient?: string,
     *   badgeColor?: string,
     *   href?: string,
     *   icon?: import('svelte').Snippet
     * }}
     */

    import featherIcons from "$lib/assets/feathericons.json";

    let {
        id = "",
        label = "",
        gradient = "var(--grad-simple)",
        badgeColor = "#2a5a52",
        href = "",
        icon,
    } = $props();

    let resolvedHref = $derived(href || `/category/${id}`);
</script>

<a
    href={resolvedHref}
    class="cat-card"
    style="background: {gradient};"
    aria-label="Browse {label} date ideas"
>
    <div class="cat-card__badge" style="background-color: {badgeColor};">
        {#if icon}
            {@html icon}
        {:else}
            <!-- Feather: star (fallback) -->
            featherIcons.star
        {/if}
    </div>

    <span class="cat-card__label">{label}</span>
</a>

<style>
    .cat-card {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: var(--space-4);
        border-radius: var(--radius-xl);
        min-height: 10rem;
        text-decoration: none;
        cursor: pointer;
        transition:
            transform var(--transition-smooth),
            box-shadow var(--transition-smooth);
        position: relative;
        overflow: hidden;
        /* subtle inner highlight */
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25);
    }

    .cat-card:hover,
    .cat-card:focus-visible {
        transform: translateY(-5px);
        box-shadow:
            var(--shadow-lg),
            inset 0 1px 0 rgba(255, 255, 255, 0.25);
        outline: none;
    }

    .cat-card:focus-visible {
        outline: 2px solid var(--color-sage-500);
        outline-offset: 3px;
    }

    .cat-card__badge {
        width: 4rem;
        height: 4rem;
        border-radius: var(--radius-full);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: var(--space-3);
        flex-shrink: 0;
        /* soft shadow so badge pops off gradient */
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }

    .cat-card__label {
        font-family: var(--font-sans);
        font-size: var(--text-lg);
        font-weight: var(--weight-bold);
        color: var(--color-forest);
        line-height: var(--leading-tight);
        letter-spacing: -0.01em;
    }

    /* ── Responsive ─── */
    @media (max-width: 600px) {
        .cat-card {
            min-height: 8rem;
            padding: var(--space-3);
        }

        .cat-card__badge {
            width: 3.5rem;
            height: 3.5rem;
        }

        .cat-card__label {
            font-size: var(--text-base);
        }
    }
</style>
