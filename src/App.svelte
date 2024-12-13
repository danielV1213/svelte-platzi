<script>
  import About from "./components/About.svelte";
  import Text from "./components/Text.svelte";
  import Person from "./components/Person.svelte";
  import Skills from "./components/Skills.svelte";
  import Input from "./components/Input.svelte";
  import Photos from "./components/Photos.svelte";

  export let name;
  export let lastName;
  let svelteLogo =
    "https://user-images.githubusercontent.com/218949/63261050-6ce11600-c27a-11e9-9355-1ee226b4497c.png";
  let text = "Hola";
  let textTwo = "Mundo!";

  const data = {
    name: "Daniel",
    lastName: "Vélez",
    age: 22,
  };
</script>

<main>
  <h1>My name is {name} {lastName}!</h1>
  <About />
  <!-- Here are two ways to pass props -->
  <Text textOne={text} {textTwo} />
  <!-- Passing data with object propagation -->
  <Person {...data} />
  <Skills />
  <Input />
  <Photos />
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

  :global(body.dark-mode) {
    background-color: #1d3040;
    color: #bfc2c7;
  }

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  main img {
    width: 10%;
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
