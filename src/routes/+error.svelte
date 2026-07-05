<script>
    import { page } from "$app/state";
</script>

<div class="page-content error">
    <h1>{page.status}</h1>

    <p>{page.error?.message}</p>

    <a href="/" class="btn btn-primary btn-lg">
        <!-- Feather: arrow-left -->
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path d="M15 18l-6-6 6-6"></path>
        </svg>
        Back to Home
    </a>
</div>

<style>
    .error {
        text-align: center;

        h1 {
            font-size: clamp(6rem, 5rem + 5vw, 9rem);
        }
        p {
            font-size: 1.5rem;
            margin-bottom: 2em;
        }
    }
</style>
