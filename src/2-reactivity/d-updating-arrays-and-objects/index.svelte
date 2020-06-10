<script>
  let numbers = [1, 2, 3, 4];

  function multiplyNumber() {
    numbers = [...numbers, numbers.length + 1];
  }

  $: product = numbers.reduce((t, n) => t * n, numbers[0]);
</script>

<p>{numbers.join(' + ')} = {product}</p>

<button on:click={multiplyNumber}>Multiply a number</button>
