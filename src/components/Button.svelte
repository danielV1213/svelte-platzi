<script>
  export let count = 0;
  export let text;
</script>

<!-- Add the event to the element so you can handle it from here -->
<button on:click>
  {text}
  {count === 0 ? "" : count}
</button>
