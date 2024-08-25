<script>
	/* By Connor Rothschild https://www.sveltecharts.com/charts/01e9128d-7056-4de0-bfc2-242328f1aedf
	Scrollytelling component from Russell Goldenberg https://twitter.com/codenberg/status/1432774653139984387 */
	
  import Scrolly from "./Scrolly.svelte";
	
  let value;
  const steps = [
    "<div>data viz</div>",
    "<div>designer</div>",
    "<div>developer</div>",
    "<div>writer</div>",
    "<div>thinker</div>",
    "<div>teacher</div>",
    "<div>speaker</div>",
    "<div>data wrangler</div>",
    "<div>learner</div>",
    "<div>tinkerer</div>",
    "<div>adventurer</div>",
    "<div>climber</div>",
    "<div>baker</div>",
    "<div>volunteer</div>",
    "<div>human being.</div>"
  ];
</script>

<section>
  <div class="section-container">
    <div class="steps-container">
      <Scrolly bind:value>
        {#each steps as text, i}
          <div class="step" class:active={value === i}>
            <div class="step-content">{@html text}</div>
          </div>
        {/each}
        <!-- <div class="spacer" /> -->
      </Scrolly>
    </div>
    <div class="sticky">
        <h1>Alice Feng</h1>
        <div>is a</div>
    </div>
  </div>
</section>

<style>
	:global(body) {
		overflow-x: hidden;
	}
	
    /* .spacer {
        height: 40vh;
    } */

    .sticky {
        position: sticky;
        top: 0;
        flex: 1 1 60%;
        width: 60%;
        height: 500px;
        background-color: #f7f7f7;
        width: 100%;
    }

    .section-container {
        margin-top: 1em;
        transition: background 100ms;
        display: flex;
        flex-direction: column-reverse;
        font-size: 8.75rem; 
        line-height: 1;
    }

    h1 {
        font-size: 8.75rem;
        margin: 0;
        margin-top: 0.7em;
    }

    .step {
        /* height: 80vh; */
    }

    .step-content {
        color: #1a1a1a;
        opacity: 0.3;
        padding: .5rem 0rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: opacity 500ms ease;
        text-align: left;
        width: 100%;
    }

    .step.active .step-content {
        color: #1a1a1a;
        opacity: 1;
    }
	
    .steps-container,
    .sticky {
        height: 100%;
    }

    .steps-container {
        flex: 1 1 40%;
        /* z-index: 10; */
    }
</style>
