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

  /*** how to get the last step to "lock in place" and not disappear on scroll:
   * 1. move the last step ("human being.") to its own div outside <Scrolly> so it doesn't scroll behind .sticky
   * 2. toggle whether that step is active or not (i.e., at full or reduced opacity) based on the scroll position
   * 3. if the top of .last-step is pretty much right under .sticky, then it should be set to .active
   * 4. how to determine where the top of .last step is? by using the svelte:window scrollY binding
   *    we listen to where the vertical scroll position is
   *    when it's greater than the height of .section-container (i.e., the scrolly container) minus 
   *    its own height (which is the same height as all of the steps) with some buffer, then we add .active to 
   *    .last-step
  ***/

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
        margin-top: 0.3em;
    }

    /* .step {
        height: 80vh;
    } */

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

    /* .steps-container {
        flex: 1 1 40%;
        z-index: 10;
    } */

    @media screen and (max-width: 974px) {
      .section-container, h1, .last-step {
        font-size: 6rem;
      }
    }

    @media screen and (max-width: 599px) {
      .section-container, h1, .last-step {
        font-size: 4rem;
      }
    }
</style>
