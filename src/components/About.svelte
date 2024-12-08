<script>
  let someText = `Frontend Developer at Globant`;
  let count = 0;
  let styles = { darkMode: false };

  function increase() {
    count++;
  }

  function toggle() {
    styles.darkMode = !styles.darkMode;
    window.document.body.classList.toggle("dark-mode");
  }
</script>

<div class="about">
  {#if !styles.darkMode}
    <p class="light-mode-paragraph">{someText}</p>
  {:else}
    <p class="dark-mode-paragraph">Hello Dark Mode</p>
  {/if}

  <button on:click={increase}>Click {count === 0 ? "" : count}</button>
  <button on:click={toggle}>DarkMode</button>
</div>

<style>
  p {
    font-size: 22px;
  }
  p.light-mode-paragraph {
    color: var(--theme-color);
  }

  p.dark-mode-paragraph {
    color: inherit;
  }
</style>
