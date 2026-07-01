<!--
  MetadataChip.svelte (Svelte 5 runes)
  Outlined pill displaying a labeled date attribute with a Feather icon.
  Accepts an `icon` snippet so callers can pass any Feather SVG.
-->
<script>
    /** @type {{ label?: string, icon?: import('svelte').Snippet }} */
    let { label = "", icon } = $props();
</script>

<span class="chip">
    {@html icon}
    {label}
</span>

<style>
    /* Inherits .chip from global.css */
</style>
