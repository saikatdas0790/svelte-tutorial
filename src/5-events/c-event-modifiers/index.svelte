<script>
  const handleClick = () => {
    alert("will be shown only one time");
  };
</script>

<button on:click|once={handleClick}>Click me</button>
