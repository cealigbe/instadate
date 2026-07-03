<script>
    import ficons from "$lib/assets/feathericons.json";

    let { title, text, url } = $props();

    async function handleShare() {
        const shareData = {
            title,
            text,
            url,
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (error) {
                alert("Sharing failed or aborted: " + error);
            }
        } else {
            setClipboard(shareData.url);
        }
    }

    async function setClipboard(text) {
        const type = "text/plain";
        const clipData = { [type]: text };

        const clipItem = new ClipboardItem(clipData);
        await navigator.clipboard.write([clipItem]);
        alert("Copied to clipboard");
    }
</script>

<button class="btn share-btn btn-icon btn-ghost" onclick={handleShare}>
    {@html ficons.share}
    <span> Share </span>
</button>

<style>
    .share-btn {
        width: 2.25rem;
        height: 2.25rem;
    }

    :global(.share-btn > svg) {
        width: 1rem;
        height: 1rem;
    }
</style>
