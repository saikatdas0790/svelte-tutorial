<script>
  let w;
  let h;
  let size = 42;
  let text = "edit me";
</script>

<style>
  input {
    display: block;
  }

  div {
    display: inline-block;
  }

  span {
    word-break: break-all;
  }
</style>

<input type="range" bind:value={size} min="12" max="1000" />
<input bind:value={text} />

<p>size: {w}px x {h}px</p>
<p>font size: {size}</p>

<div bind:clientWidth={w} bind:clientHeight={h}>
  <span style="font-size: {size}px">{text}</span>
</div>
