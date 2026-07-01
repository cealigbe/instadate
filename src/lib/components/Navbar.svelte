<!--
  Navbar.svelte (Svelte 5 runes)
  Site-wide navigation bar. Logo links to home, text links use
  link-interactive hover state (opacity + underline).
-->
<script>
    /** @type {{ currentPath?: string }} */
    let { currentPath = "/" } = $props();
</script>

<header class="navbar">
    <div class="navbar__inner">
        <a href="/" class="navbar__logo" aria-label="Instadate — go to home">
            instadate
        </a>

        <nav class="navbar__nav" aria-label="Primary navigation">
            <a
                href="/about"
                class="navbar__link link-interactive"
                aria-current={currentPath === "/about" ? "page" : undefined}
            >
                About
            </a>
            <!-- <a
                href="/contact"
                class="navbar__link link-interactive"
                aria-current={currentPath === "/contact" ? "page" : undefined}
            >
                Contact
            </a> -->
        </nav>
    </div>
</header>

<style>
    .navbar {
        position: sticky;
        min-height: 5rem;
        top: 0;
        z-index: 100;
        background-color: var(--color-sage-100);
        border-bottom: 1px solid var(--color-border);
        height: var(--nav-height);
        display: flex;
        align-items: center;
    }

    .navbar__inner {
        width: 100%;
        max-width: var(--page-max-width);
        margin-inline: auto;
        padding-inline: var(--page-padding);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .navbar__logo {
        font-family: var(--font-logo);
        font-weight: 700;
        font-size: var(--text-3xl);
        color: var(--color-forest);
        letter-spacing: -0.02em;
        text-decoration: none;
        transition: opacity var(--transition-fast);
    }

    .navbar__logo:hover,
    .navbar__logo:focus-visible {
        opacity: 0.8;
        outline: none;
    }

    .navbar__nav {
        display: flex;
        align-items: center;
        gap: var(--space-6);
    }

    .navbar__link {
        font-size: var(--text-reg);
        font-weight: var(--weight-semibold);
        color: var(--color-forest);
        letter-spacing: 0.07em;
        text-transform: uppercase;
    }

    .navbar__link[aria-current="page"] {
        opacity: 0.6;
        pointer-events: none;
    }

    @media (max-width: 400px) {
        .navbar__logo {
            font-size: var(--text-2xl);
        }

        .navbar__nav {
            gap: var(--space-4);
        }

        .navbar__link {
            font-size: var(--text-sm);
        }
    }
</style>
