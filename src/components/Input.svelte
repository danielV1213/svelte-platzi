<script>
  export let name = "World";
</script>

<!-- Data binding used to link the variable 'name' to the input -->
<!-- So the variable is updated whenever the user does it with the input -->
<div class="input-component">
  <input type="text" bind:value={name} />
  <p>Hello {name}!</p>
</div>
