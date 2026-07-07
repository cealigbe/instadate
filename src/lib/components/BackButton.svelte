<!--
  BackButton.svelte (Svelte 5 runes)
  Outlined back-navigation button. Label is configurable.
  Uses Feather arrow-left icon.
-->
<script>
    /** @type {{ href?: string, label?: string }} */
    let { href = "/", label = "Back" } = $props();
</script>

<a {href} class="back-btn btn btn-outline" aria-label={label}>
    <!-- Feather: arrow-left -->
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
    >
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
    </svg>
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
