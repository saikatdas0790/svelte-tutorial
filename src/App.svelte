<script lang="ts">
  export let name: string;
</script>

<style>
  h1 {
    background-color: teal;
  }
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
