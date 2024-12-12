<script>
  import Button from "./Button.svelte";

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

  <Button text="Click" {count} on:click={increase} />
  <Button text="DarkMode" on:click={toggle} />
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
