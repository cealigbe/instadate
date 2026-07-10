<script>
    import { page } from "$app/state";
    import Ficon from "$lib/components/Ficon.svelte";
</script>

<div class="page-content error">
    <h1>{page.status}</h1>

    <p>{page.error?.message}</p>

    <a href="/" class="btn btn-primary btn-lg">
        <!-- Feather: arrow-left -->
        <Ficon name="arrow-left" size="20" />
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
