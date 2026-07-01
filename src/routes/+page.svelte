<!--
  src/routes/+page.svelte (Svelte 5)
  Home page — welcome copy + 3×3 category grid.
-->
<script>
    import CategoryGrid from "$lib/components/CategoryGrid.svelte";
</script>

<svelte:head>
    <title>instadate — Fresh date ideas for every couple</title>
    <meta
        name="description"
        content="Discover unique and unexpected date ideas designed to spark laughter, connection, serendipity, and adventure."
    />
</svelte:head>

<div class="page-content home">
    <header class="home__header">
        <h1 class="page-title">Welcome to instadate</h1>
        <p class="page-subtitle">
            <strong>Instadate</strong> is your go-to source for fresh and fun date
            ideas that break the boring dinner-and-a-movie routine. Whether it's your
            first date or your 100th, we'll help you choose unforgettable experiences.
        </p>
    </header>

    <CategoryGrid />
</div>

<style>
    .home {
        display: flex;
        flex-direction: column;
        gap: var(--space-8);
    }

    .home__header {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-4);
    }
</style>
