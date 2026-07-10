<!--
  MetadataChip.svelte (Svelte 5 runes)
  Outlined pill displaying a labeled date attribute with a Feather icon.
  Accepts an `icon` snippet so callers can pass any Feather SVG.
-->
<script>
    /** @type {{ label?: string, icon?: string, tooltip?: string }} */

    import Ficon from "./Ficon.svelte";
    let { label = "", icon, tooltip = "" } = $props();
</script>

<span class="chip" title={tooltip}>
    <Ficon name={icon} size="12" />
    <i class="alt-text">{tooltip}</i>
    {label}
</span>

<style>
    /* Inherits .chip from global.css */
</style>
