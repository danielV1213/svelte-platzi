<script>
  let someText = `Frontend Developer at Globant`;
  let count = 0;

  function increase() {
    count++;
  }
</script>

<div class="about">
  <p>
    {someText}
  </p>
  <button on:click={increase}>Click {count === 0 ? "" : count}</button>
</div>

<style>
  p {
    color: var(--theme-color);
    font-size: 22px;
  }
</style>
