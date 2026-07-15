<script>
    import { DropdownMenu } from "bits-ui";
    import Ficon from "./Ficon.svelte";

    let { title, text, url, search } = $props();

    function handleSearch() {
        url = `https://www.google.com/maps/search/${search}`;
        window.open(url, "_blank");
    }

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

<DropdownMenu.Root>
    <DropdownMenu.Trigger class="btn btn-icon btn-outline btn-dropdown">
        <Ficon name="more-horizontal" size="20"/>
        <span>More</span>
    </DropdownMenu.Trigger>
    <DropdownMenu.Portal>
        <DropdownMenu.Content>
            <DropdownMenu.Group aria-label="More menu">
                {#if search}
                <DropdownMenu.Item onSelect={handleSearch}>
                    <div class="menu-item">
                        <Ficon name="map" />
                        <span>Find a date spot</span>
                    </div>
                </DropdownMenu.Item>
                {/if}
                <DropdownMenu.Item onSelect={handleShare}>
                    <div class="menu-item">
                        <Ficon name="share-2" />
                        <span>Share</span>
                    </div>
                </DropdownMenu.Item>

            </DropdownMenu.Group>
        </DropdownMenu.Content>
    </DropdownMenu.Portal>
</DropdownMenu.Root>

<style>
    :global(.btn-dropdown) {
        width: 2.25rem;
        height: 2.25rem;
    }

    :global([data-dropdown-menu-content]) {
        background-color: hsl(100 0 96%);
        min-width: 15rem;
        margin: 0.25rem;
        padding: 0.5rem 0;
        border-radius: 0.5rem;
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
        animation: fade-in 0.2s ease;
    }

    .menu-item {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.625rem 1rem;
        background-color: hsl(0 0 90% / 0);
        cursor: pointer;
        transition: background-color 0.2s ease;

        &:is(:hover, :focus-within) {
            background-color: hsl(0 0 90% / 1);
        }

        & > span {
            flex-grow: 1;
        }
    }

    .menu-item :global(svg) {
        color: var(--color-forest-light);

    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>
