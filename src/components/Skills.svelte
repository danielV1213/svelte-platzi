<script>
  import { each } from "svelte/internal";

  let skills = [
    {
      id: 1,
      name: "HTML",
    },
    {
      id: 1,
      name: "CSS",
    },
    {
      id: 1,
      name: "JavaScript",
    },
  ];
</script>

<!-- In this case, the destructuring of the skills array is being done -->
<!-- It is recommended up to a maximum of 3 properties -->
<!-- When there are more than 3 properties, it is ideal to iterate through the array and extract each property within the template -->
<div class="skills">
  <h3>Habilidades:</h3>
  <ul>
    {#each skills as { name }, i}
      <li>{name}</li>
    {/each}
  </ul>
</div>

<style>
  .skills {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: inline;
    margin: 0 0 0 0.4em;
  }
</style>
