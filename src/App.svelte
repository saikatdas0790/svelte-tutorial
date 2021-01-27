<script lang="ts">
  import SomeComponent from "./SomeComponent.svelte";
  export let name: string;
</script>

<style lang="scss" global>
  @import "bulma/bulma";
</style>

<main>
  <h1 class="title">Hello {name}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
  <button class="button is-primary">Click me</button>
</main>
<SomeComponent />
