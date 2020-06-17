<script>
  let a = 1;
  let b = 2;
</script>

<label for="">
  <input type="number" name="" id="" bind:value={a} min="0" max="10" />
  <input type="range" name="" id="" bind:value={a} min="0" max="10" />
</label>

<label for="">
  <input type="number" name="" id="" bind:value={b} min="0" max="10" />
  <input type="range" name="" id="" bind:value={b} min="0" max="10" />
</label>

<p>{a} + {b} = {a + b}</p>
