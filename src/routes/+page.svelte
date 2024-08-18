<main>
    <section class="socials">
        <a href="mailto:feng.a.g@gmail.com" class="social_link email">
            <img src="./email-icon.svg">
        </a>
        <a href="https://github.com/alicefeng" target="_blank" class="social_link github">
            <img src="./github-icon.svg">
        </a>
        <a href="https://www.linkedin.com/in/agfeng" target="_blank" class="social_link linkedin">
            <img src="./linkedin-icon.svg">
        </a>
        <a href="https://twitter.com/fleecealeece" target="_blank" class="social_link twitter">
            <img src="./twitterx-icon.svg">
        </a>
    </section>
    
    <section class="intro">
        <div>Hello world, this is</div>
        <h1>Alice Feng.</h1>
        <p>I’m a data communicator passionate about visualizing data in equitable, inclusive, and accessible ways.</p>
        <p>I’ve analyzed data and created visualizations at places such as Axios, the United Nations Development Programme, and the Urban Institute and have worked with organizations such as Data4Change, The Pudding, and DataKind. I’m also one of the authors of the <a href="https://www.urban.org/research/publication/do-no-harm-guide-applying-equity-awareness-data-visualization" target="_blank">Do No Harm Guide</a>.</p> 
        <nav>
            Check out: 
            <a href="#">My work</a>
            <a href="#">My writing</a>
            <a href="#">My teaching</a>
        </nav>
    </section>

    <section class="outro">
        <img src="./tiny.jpg">
        <div>
            <p>Thanks for stopping by! If you&rsquo;d like to get in touch, please drop me an <a href="mailto:feng.a.g@gmail.com">email</a>. In the meantime, here&rsquo;s a pic of one of the dogs from the animal shelter I volunteer at. 😁✌️</p>
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

    .outro {
        display: flex;
        gap: 2em;
        align-items: center;
        margin: 5em 0;

        img {
            width: 410px;
        }
    }
</style>
