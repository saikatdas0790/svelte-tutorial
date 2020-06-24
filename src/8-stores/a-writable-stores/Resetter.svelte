<script>
  import { count } from "./stores.js";

  const reset = () => count.set(0);
</script>

<button on:click={reset}>reset</button>
