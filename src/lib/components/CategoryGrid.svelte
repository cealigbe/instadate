<!--
  CategoryGrid.svelte (Svelte 5 runes)
  3-column responsive grid of CategoryCards for the home page.
  Renders all 9 default categories with built-in Feather icons.
-->
<script>
    import { icons } from "$lib/assets/icons.js";
    import CategoryCard from "./CategoryCard.svelte";

    /**
     * @typedef {Object} Category
     * @property {string} id
     * @property {string} label
     * @property {string} gradient
     * @property {string} badgeColor
     * @property {string} [href]
     * @property {string} [icon]
     */

    /**
     * @type {{
     *   categories?: Category[]
     * }}
     */
    let {
        categories = [
            {
                id: "simple",
                label: "Simple",
                gradient: "var(--grad-simple)",
                badgeColor: "var(--badge-simple)",
                icon: icons.easy,
            },
            {
                id: "outdoorsy",
                label: "Outdoorsy",
                gradient: "var(--grad-outdoorsy)",
                badgeColor: "var(--badge-outdoorsy)",
                icon: icons.mountain,
            },
            {
                id: "quick",
                label: "Quick",
                gradient: "var(--grad-quick)",
                badgeColor: "var(--badge-quick)",
                icon: icons.countdown,
            },
            {
                id: "sophisticated",
                label: "Sophisticated",
                gradient: "var(--grad-sophisticated)",
                badgeColor: "var(--badge-sophisticated)",
                icon: icons.wineglass,
            },
            {
                id: "classic",
                label: "Classic",
                gradient: "var(--grad-classic)",
                badgeColor: "var(--badge-classic)",
                icon: icons.coffee,
            },
            {
                id: "quirky",
                label: "Quirky",
                gradient: "var(--grad-quirky)",
                badgeColor: "var(--badge-quirky)",
                icon: icons.sparkle,
            },
            {
                id: "adventurous",
                label: "Adventurous",
                gradient: "var(--grad-adventurous)",
                badgeColor: "var(--badge-adventurous)",
                icon: icons.balloon,
            },
            {
                id: "first-date",
                label: "First Date",
                gradient: "var(--grad-first-date)",
                badgeColor: "var(--badge-first-date)",
                icon: icons.bloom,
            },
            {
                id: "anniversary",
                label: "Anniversary",
                gradient: "var(--grad-anniversary)",
                badgeColor: "var(--badge-anniversary)",
                icon: icons.present,
            },
            {
                id: "surprise",
                label: "Surprise Me",
                gradient: "var(--grad-surprise)",
                badgeColor: "var(--badge-surprise)",
                href: "/surprise",
                icon: icons.question,
            },
        ],
    } = $props();
</script>

<div class="cat-grid" role="list">
    {#each categories as cat (cat.id)}
        <div role="listitem">
            <CategoryCard
                id={cat.id}
                label={cat.label}
                gradient={cat.gradient}
                badgeColor={cat.badgeColor}
                href={cat.href ?? ""}
                icon={cat.icon}
            />
        </div>
    {/each}
</div>

<style>
    .cat-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--space-4);
    }

    @media (min-width: 400px) {
        .cat-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-3);
        }
    }

    @media (min-width: 700px) {
        .cat-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: var(--space-4);
        }

        .cat-grid [role="listitem"]:last-of-type {
            grid-column: 1 / -1;
        }
    }
</style>
