<!--
  src/routes/surprise/+page.svelte (Svelte 5 runes)
  Surprise Me flow — randomly picks a date and shows the detail page.
  "Back to Home" is shown; "Choose Another Date" CTA is hidden.
-->
<script>
    import { page } from "$app/state";
    import { icons } from "$lib/assets/icons.js";
    import BackButton from "$lib/components/BackButton.svelte";
    import DateIdea from "$lib/components/DateIdea.svelte";
    import ShareButton from "$lib/components/ShareButton.svelte";

    let { data } = $props();

    let theDate = $derived(data.date.details);
    const shareUrl = page.url.origin + `/date/${theDate?.id}`;
</script>

<svelte:head>
    <title>{theDate.title} — instadate</title>
    <meta name="description" content={theDate.title} />
</svelte:head>

<div class="page-content">
    <header class="content-header">
        <BackButton href="/" label="Back to Categories" />
        <ShareButton
            title={theDate.title}
            text={theDate.description}
            url={shareUrl}
        />
    </header>
    <DateIdea date={theDate} />
    <footer class="content-footer">
        <div class="detail__cta">
            <a
                href="/surprise"
                data-sveltekit-reload
                class="btn btn-outline btn-lg detail__choose-btn"
            >
                <!-- Feather: shuffle -->
                {@html icons.dice}
                <span>Choose Another Date</span>
            </a>
        </div>
    </footer>
</div>

<style>
    header.content-header {
        display: flex;
        width: 100%;
        margin-bottom: 2rem;
        justify-content: space-between;
        align-items: center;
    }
    footer.content-footer {
        margin-top: 2rem;
    }
    .detail__cta {
        width: max-content;
        margin: 0 auto;
    }
    .detail__choose-btn {
        min-width: 220px;
    }
</style>
