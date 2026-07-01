<!--
  src/routes/date/[id]/+page.svelte (Svelte 5 runes)
  Date detail page — standard flow (coming from a category listing).
  "Back to [category]" is shown; "Choose Another Date" CTA is shown.
  In production, load real data from +page.server.js.
-->
<script>
    import BackButton from "$lib/components/BackButton.svelte";
    import DateIdea from "$lib/components/DateIdea.svelte";

    let { data } = $props();

    let category = $derived(data.date.category);
</script>

<svelte:head>
    <title>{data.date.title} — instadate</title>
    <meta name="description" content={data.date.title} />
</svelte:head>

<div class="page-content">
    <header class="content-header">
        <BackButton
            href="/category/{category?.slug}"
            label="Back to {category?.name} Dates"
        />
    </header>
    <DateIdea date={data.date.details} />
</div>

<style>
    header.content-header {
        margin-bottom: 2rem;
    }
</style>
