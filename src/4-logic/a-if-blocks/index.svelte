<script>
  let user = { loggedIn: false };

  const toggle = () => (user.loggedIn = !user.loggedIn);
  $: console.log(user);
</script>

{#if user.loggedIn}
  <button on:click={toggle}>Log out</button>
{/if}

{#if !user.loggedIn}
  <button on:click={toggle}>Log in</button>
{/if}
