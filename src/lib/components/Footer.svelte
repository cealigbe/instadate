<script>
    // JavaScript goes here
</script>

<footer class="site-footer">
    <p>
        &copy; {new Date().getFullYear()} Instadate. All rights reserved. Designed
        by <a href="https://chuck.aligbe.com/" target="_blank">Chuck Aligbe</a>.
        Built with
        <a href="https://svelte.dev/" target="_blank">Svelte</a>
        and <a href="https://claude.ai/" target="_blank">Claude Code</a>.
    </p>
</footer>

<style>
    .site-footer {
        margin-block-start: 1em;
        padding: 1rem;
        font-size: var(--text-sm);
        text-align: center;

        p {
            margin: 0;
        }

        a {
            font-weight: bold;
            color: var(--color-link);
            transition: opacity var(--transition-base);
        }

        a:hover,
        a:focus {
            text-decoration: underline;
            opacity: 0.8;
        }
    }
</style>
