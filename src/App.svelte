<script>
  import About from "./components/About.svelte";

  export let name;
  export let lastName;
  let svelteLogo =
    "https://user-images.githubusercontent.com/218949/63261050-6ce11600-c27a-11e9-9355-1ee226b4497c.png";
</script>

<main>
  <h1>My name is {name} {lastName}!</h1>
  <About />
  <img src={svelteLogo} alt="svelte-logo" />
</main>

<style>
  /* Global styling */
  :global(body) {
    background-color: #f2eee2;
    color: #0084f6;
  }

  /* Global variables creation */
  :global(:root) {
    --theme-color: purple;
  }

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  main img {
    width: 30%;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
