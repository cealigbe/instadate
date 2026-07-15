<!--
  src/routes/date/[id]/+page.svelte (Svelte 5 runes)
  Date detail page — standard flow (coming from a category listing).
  "Back to [category]" is shown; "Choose Another Date" CTA is shown.
  In production, load real data from +page.server.js.
-->
<script>
    import { page } from "$app/state";
    import BackButton from "$lib/components/BackButton.svelte";
    import DateIdea from "$lib/components/DateIdea.svelte";
    import Ficon from "$lib/components/Ficon.svelte";
    import ShareButton from "$lib/components/ShareButton.svelte";
    import MoreMenu from "$lib/components/MoreMenu.svelte";

    let { data } = $props();

    let title = $derived(data.date.title);
    let details = $derived(data.date.details);
    let search = $derived(details?.search);

    let category = $derived(data.date.category);
    const shareUrl = page.url.origin + `/date/${details?.id}`;
</script>

<svelte:head>
    <title>{title} — instadate</title>
    <meta name="description" content={title} />
</svelte:head>

<div class="page-content">
    <header class="content-header">
        <BackButton
            href="/category/{category?.slug}"
            label="Back to {category?.name} Dates"
        />

        <MoreMenu {title} text={details?.description} url={shareUrl} {search} />

    </header>
    <DateIdea date={data.date.details} />
</div>

<style>
    header.content-header {
        display: flex;
        width: 100%;
        margin-bottom: 2rem;
        justify-content: space-between;
        align-items: center;
    }
</style>
