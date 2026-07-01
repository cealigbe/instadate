<!--
  src/routes/about/+page.svelte (Svelte 5)
  About Page
-->
<script>
    let homeURL = "/";
</script>

<svelte:head>
    <title>About Instadate — instadate</title>
    <meta name="description" content="About page for the instadate app" />
</svelte:head>

<div class="page-content about">
    <header class="about__header">
        <h1 class="page-title">About Us</h1>
    </header>

    <main class="about__main">
        <p>
            Welcome to <strong>Instadate</strong>, where planning the perfect
            date is just a few clicks away! Whether you’re craving quirky
            adventures, outdoor escapes, classic romance, or quick and simple
            rendezvous, we’ve got the inspiration you need to keep your love
            life fresh and exciting. Our mission? To help couples connect, have
            fun, and create memories that last a lifetime—no matter the vibe or
            occasion.
        </p>

        <h2 id="who-we-are">Who We Are</h2>

        <p>
            We’re a team of dreamers, romantics, and experience-seekers who
            believe that dating should be anything but boring. As busy
            professionals ourselves, we know all too well how hard it can be to
            come up with unique date ideas that fit into busy schedules and
            varying budgets. That’s why we created Instadate—to take the stress
            out of planning and bring back the joy of spending quality time
            together.
        </p>

        <h2 id="what-we-offer">What We Offer</h2>

        <p>
            At Instadate, we celebrate all kinds of connections and styles of
            dating. Whether you’re in the mood for something spontaneous or
            sophisticated, cozy or adventurous, we’ve got date ideas for every
            type of couple and every kind of day. Here’s what you’ll find:
        </p>
        <ul>
            <li>
                <strong>Quirky Dates:</strong> Think outside the box with offbeat
                activities that are sure to spark laughter and unforgettable moments.
            </li>
            <li>
                <strong>Outdoorsy Dates:</strong> From scenic hikes to stargazing
                picnics, these ideas are perfect for nature lovers and adventure seekers.
            </li>
            <li>
                <strong>Classic Dates:</strong> Timeless options like candlelit dinners,
                movie nights, and strolls through the park – because some things never
                go out of style.
            </li>
            <li>
                <strong>Sophisticated Dates:</strong> For when you’re feeling fancy,
                we’ve got upscale suggestions like wine tastings, art gallery tours,
                and jazz nights.
            </li>
            <li>
                <strong>Simple Dates:</strong> Sometimes less is more. These low-key
                ideas are perfect for relaxing and enjoying each other’s company.
            </li>
            <li>
                <strong>Quick Dates:</strong> Short on time? No problem. These bite-sized
                dates pack maximum fun into minimal time.
            </li>
            <li>
                <strong>Anniversary Dates:</strong> Perfect options to celebrate those
                special milestones in your relationship, whether it's just starting
                or in its golden years.
            </li>
            <li>
                <strong>First Dates:</strong> Finally out of the talking phase? These
                surefire ideas will hit it out of the park and get you to that second
                date.
            </li>
        </ul>

        <h2 id="why-instadate">Why Instadate?</h2>

        <ul>
            <li>
                <strong>Curated for You:</strong> We’ve done the brainstorming so
                you don’t have to. All you need to do is pick an idea and enjoy!
            </li>
            <li>
                <strong>For Every Budget:</strong> From luxe experiences to free outings,
                we offer options for every wallet size.
            </li>
            <li>
                <strong>Modern &amp; Relatable:</strong> Forget cheesy clichés—our
                ideas are fresh, fun, and totally Instagram-worthy (if that’s your
                thing).
            </li>
            <li>
                <strong>Inclusive &amp; Versatile:</strong> Whether you’re planning
                a first date, celebrating years together, or just looking for something
                new, Instadate has something for everyone.
            </li>
        </ul>

        <h2 id="lets-bring-back-the-fun-in-dating">
            Let’s Bring Back the Fun in Dating
        </h2>

        <p>
            At Instadate, we believe that dating should feel exciting, not like
            another item on your to-do list. Life moves fast, but your
            connection deserves time to grow and thrive. So, whether you’re
            keeping it casual or going all out, let us help you turn ordinary
            days into extraordinary moments.
        </p>
        <p>
            Ready to plan your next great adventure? Explore our collection of
            ideas and get ready to fall in love with dating all over again.
        </p>
        <p>
            Love,
            <br />
            <strong>The Instadate Team</strong>
        </p>

        <hr />

        <h2 id="postscript">P.S. (Acknowledgements)</h2>

        <p>
            Instadate is designed and developed by <a
                href="http://chuck.aligbe.com"
                target="_blank">Chuck Aligbe</a
            >. The app was built in
            <a href="http://svelte.dev" target="_blank">SvelteKit</a>
            with assistance from
            <a href="http://claude.ai" target="_blank">Claude Code</a>. Date
            ideas are curated from
            <a href="http://claude.ai" target="_blank">Claude</a>, and date
            images are aggregated from
            <a href="http://unsplash.com" target="_blank">Unsplash</a>.
        </p>
    </main>
</div>

<style>
    .about {
        display: flex;
        flex-direction: column;
        gap: var(--space-8);

        a {
            color: var(--color-link);
            text-decoration: none;
            font-weight: bold;
            transition: opacity var(--transition-base);
        }

        a:hover,
        a:focus {
            opacity: 0.8;
            text-decoration: underline;
        }
    }

    .about__header {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-4);
    }

    .about__main {
        max-width: 75ch;
        margin: 0 auto;
    }
</style>
