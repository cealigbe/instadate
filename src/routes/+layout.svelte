<!--
  src/routes/+layout.svelte (Svelte 5 runes)
  Root layout — loads global styles and renders the Navbar on every page.
-->
<script>
    import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

    import { injectAnalytics } from "@vercel/analytics/sveltekit";

    import "$lib/styles/global.css";
    import favicon from "$lib/assets/favicon.svg";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { page } from "$app/state";
    import { dev } from "$app/environment";

    /** @type {{ children?: import('svelte').Snippet }} */
    let { children } = $props();

    import { onNavigate } from "$app/navigation";

    onNavigate((navigation) => {
        if (!document.startViewTransition) return;

        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });

    injectSpeedInsights();
    injectAnalytics({ mode: dev ? "development" : "production" });
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<div class="page-wrapper header-zone">
    <Navbar currentPath={page.url.pathname} />

    <main>
        {@render children?.()}
    </main>

    <Footer />
</div>

<style>
    main {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
</style>
