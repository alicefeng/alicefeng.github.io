<script>
	/* By Connor Rothschild https://www.sveltecharts.com/charts/01e9128d-7056-4de0-bfc2-242328f1aedf
	Scrollytelling component from Russell Goldenberg https://twitter.com/codenberg/status/1432774653139984387 */
	
  import Scrolly from "./Scrolly.svelte";
	
  let value;

  let stickyDivHeight;
  let sectionContainerHeight;
  let stepHeight;
  let topValue = 0;
  let y = 0;
  $:isActive = y - (sectionContainerHeight - (stepHeight * 1.6)); // y - (section-container height minus stepHeight with some padding)

  // $:console.log(stickyDivHeight);
  // $:console.log(sectionContainerHeight);
  // $:console.log(stepHeight);
  $:topValue = stickyDivHeight - stepHeight + 70;
//   $:console.log(topValue);
  // $:console.log(y);
  // $:console.log(isActive);

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
    "<div>volunteer</div>"
  ];
</script>

<svelte:window bind:scrollY={y}/>

<section>
  <div 
    class="section-container" 
    bind:clientHeight={sectionContainerHeight}>
    <div class="steps-container">
      <Scrolly top={topValue} bind:value>
        {#each steps as text, i}
          <div class="step" class:active={value === i} bind:clientHeight={stepHeight}>
            <div class="step-content">{@html text}</div>
          </div>
        {/each}
        <!-- <div class="spacer" /> -->
      </Scrolly>
    </div>
    <div 
      class="sticky" 
      bind:clientHeight={stickyDivHeight}>
        <h1>Alice Feng</h1>
        <div>is a</div>
    </div>
  </div>
  <div 
    class="step last-step"
    class:active={isActive > 0}>
    <div class="step-content">human being.</div>
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
        height: 500px;
        background-color: #f7f7f7;
        width: 100%;
    }

    .section-container {
        margin-top: 1em;
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
        padding: 0.05em 0;
        transition: opacity 300ms ease;
        text-align: left;
        width: 100%;
    }

    .step.active .step-content {
        color: #1a1a1a;
        opacity: 1;
    }
	
    .last-step {
      font-size: 8.75rem;
      line-height: 1;
    }

    .steps-container,
    .sticky {
        height: 100%;
    }

    .steps-container {
        /* flex: 1 1 40%; */
        /* z-index: 10; */
    }
</style>
