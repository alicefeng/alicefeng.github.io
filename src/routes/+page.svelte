<script>
    import writingsData from "$lib/data/writings.json"
    import projectsData from "$lib/data/projects.json"
    import WritingItem from "$lib/components/WritingItem.svelte";
    import RoleTag from "$lib/components/RoleTag.svelte";
    import ProjectItem from "$lib/components/ProjectItem.svelte";
</script>

<main>
    <section class="socials">
        <a href="mailto:feng.a.g@gmail.com" class="social_link email">
            <img src="./email-icon.svg" alt="" aria-label="Email me">
        </a>
        <a href="https://github.com/alicefeng" target="_blank" class="social_link github">
            <img src="./github-icon.svg" alt="" aria-label="View my Github">
        </a>
        <a href="https://www.linkedin.com/in/agfeng" target="_blank" class="social_link linkedin">
            <img src="./linkedin-icon.svg" alt="" aria-label="View my LinkedIn">
        </a>
        <a href="https://twitter.com/fleecealeece" target="_blank" class="social_link twitter">
            <img src="./twitterx-icon.svg" alt="" aria-label="View my X account">
        </a>
    </section>
    
    <section class="intro">
        <div>Hello world, this is</div>
        <h1>Alice Feng.</h1>
        <p>I’m a data communicator passionate about visualizing data in equitable, inclusive, and accessible ways.</p>
        <p>I’ve analyzed data and created visualizations at places such as Axios, the United Nations Development Programme, and the Urban Institute and have worked with organizations such as Data4Change, The Pudding, and DataKind. I’m also one of the authors of the <a href="https://www.urban.org/research/publication/do-no-harm-guide-applying-equity-awareness-data-visualization" target="_blank">Do No Harm Guide</a>.</p> 
        <nav>
            Check out: 
            <a href="#project">My work</a>
            <a href="#writing">My writing</a>
            <a href="#teaching">My teaching</a>
        </nav>
    </section>

    <section id="project" class="project">
        <h2>Here's what I've made...</h2>
        <div class="legend">
            My role: <RoleTag role={"Data Analysis"} /> <RoleTag role={"Design"} /> <RoleTag role={"Development"} />
        </div>
        <div class="projectCardContainer">
            {#each projectsData as project}
                <ProjectItem 
                    title={project.title}
                    outlet={project.outlet}
                    roles={project.role}
                    url={project.link}
                    imgName={project.img}
                />
            {/each}
        </div>
    </section>

    <section id="writing" class="writing">
        <h2>Here's what I've written...</h2>
        <div class="writingCardContainer">
            {#each writingsData as writing}
                <WritingItem 
                    title={writing.title} 
                    outlet={writing.outlet}
                    date={writing.date}
                    url={writing.link}
                />
            {/each}
        </div>
    </section>

    <section id="teaching" class="teaching">
        <h2>Oh, and I teach as well...</h2>
        <p>I teach two courses for Claremont Graduate University&rsquo;s The Evaluators&rsquo; Institute — <strong>Introduction to Data Visualization</strong> and <strong>Applying an Equity Lens to Visualizing and Communicating Data</strong>.</p>
        <p>I also co-facilitate the <strong>Data Storytelling</strong> session for Data Science Africa.</p>
        <p>In addition to course teaching, I&rsquo;ve conducted workshops and trainings for a variety of organizations including Harvard University, the University of Pittsburgh, and the National Library of Medicine and  given presentations to places such as the Centers for Disease Control, the Congressional Budget Office, and the Census Bureau as well as at conferences such as Outlier and the Tableau Conference.</p>
    </section>

    <section class="outro">
        <enhanced:img src="/static/tiny.jpg" alt="A German Shepherd sitting on a bench on a sunny day" />
        <div>
            <p>Thanks for stopping by! If you&rsquo;d like to get in touch, please drop me an <a href="mailto:feng.a.g@gmail.com">email</a>. In the meantime, here&rsquo;s a pic of one of the dogs from the animal shelter I volunteer at.✌️</p>
        </div>
    </section>
</main>

<style lang="scss">
    main {
        max-width: 1000px;
        width: 100%;
        margin: 0 auto;
        /* border: 1px solid rebeccapurple; */
    }

    .socials {
        position: fixed;
        left: 1em;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2em;
        margin: 0;

        .social_link {
            display: inline-block;
        }
        
        img {
            width: 36px;
            height: 36px;
        }

        .github img {
            width: 41px;
            height: 41px;
        }
    }

    .intro {
        div {
            font-size: 3.125rem;
            margin-top: 4em;
        }

        h1 {
            font-size: 8.75rem;
            line-height: 1.2;
            font-weight: 700;
            margin: 0;
        }

        p{
            font-size: 2rem;
            margin: 1em 0;
        }

        nav {
            font-size: 2rem;
            font-weight: 700;
            display: flex;
            gap: 2.5em;
        }
    }

    .legend {
        display: flex;
        gap: 0.25em;
        align-items: center;
    }

    .projectCardContainer {
        display: flex;
        flex-wrap: wrap;
        gap: 2em;
        justify-content: space-between;
        margin-top: 1em;
    }

    .writingCardContainer {
        display: flex;
        flex-wrap: wrap;
        gap: 2em;
        justify-content: space-between;
    }

    .outro {
        display: flex;
        /* gap: 2em; */
        align-items: center;
        justify-content: space-between;

        img {
            width: 410px;
            height: 544.533px;
        }

        div {
            width: 50%;
        }
    }
</style>
