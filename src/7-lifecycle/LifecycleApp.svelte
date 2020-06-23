<script>
  import LifecycleOnMount from "./a-onmount/index.svelte";
  import LifecycleOnDestroy from "./b-ondestroy/index.svelte";
  import LifecycleBeforeUpdateAndAfterUpdate from "./c-beforeupdate-and-afterupdate/index.svelte";
  import LifecycleTick from "./d-tick/index.svelte";
</script>

<!-- <LifecycleOnMount></LifecycleOnMount> -->
<!-- <LifecycleOnDestroy></LifecycleOnDestroy> -->
<!-- <LifecycleBeforeUpdateAndAfterUpdate /> -->
<LifecycleTick />
