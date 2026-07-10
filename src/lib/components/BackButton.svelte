<!--
  BackButton.svelte (Svelte 5 runes)
  Outlined back-navigation button. Label is configurable.
  Uses Feather arrow-left icon.
-->
<script>
    /** @type {{ href?: string, label?: string }} */
    import Ficon from "./Ficon.svelte";
    let { href = "/", label = "Back" } = $props();
</script>

<a {href} class="back-btn btn btn-outline" aria-label={label}>
    <!-- Feather: arrow-left -->
    <Ficon name="arrow-left" size="16" />
    {label}
</a>

<style>
    .back-btn {
        align-self: flex-start;
        font-size: var(--text-sm);
        padding: var(--space-2) var(--space-4);
        border-radius: var(--radius-md);
    }
</style>
