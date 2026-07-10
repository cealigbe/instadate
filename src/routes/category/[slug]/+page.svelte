<!--
  src/routes/category/[slug]/+page.svelte (Svelte 5 runes)
  Category listing page — heading + DateCarousel + Back to Categories CTA.
  In a real project, `dates` would be loaded from a server load function.
-->
<script>
    import { page } from "$app/state";
    import DateCarousel from "$lib/components/DateCarousel.svelte";
    import Ficon from "$lib/components/Ficon.svelte";

    let { data } = $props();

    let slug = $derived(page.params.slug);
    let categoryName = $derived(
        slug
            ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
            : "Dates",
    );
</script>

<svelte:head>
    <title>{categoryName} Date Ideas — instadate</title>
    <meta
        name="description"
        content="Discover {categoryName} date ideas and find the perfect date night for you and your partner."
    />
</svelte:head>

<div class="page-content listing">
    <header class="listing__header">
        <h1 class="page-title">{categoryName} Date Ideas</h1>
        <p class="page-subtitle">
            {data.category.subtitle}
        </p>
    </header>

    <DateCarousel dates={data.category.ideas} {categoryName} />

    <section class="listing__back-cta">
        <a href="/" class="btn btn-primary btn-lg">
            <!-- Feather: arrow-left -->
            <Ficon name="arrow-left" size="20" />
            Back to Categories
        </a>
    </section>
</div>

<style>
    .listing {
        display: flex;
        flex-direction: column;
        gap: var(--space-6);
    }

    .listing__header {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-4);
    }

    .listing__back-cta {
        display: flex;
        justify-content: center;
    }
</style>
