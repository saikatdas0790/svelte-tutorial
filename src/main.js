import IntroductionApp from "./1-introduction/IntroductionApp.svelte";
import ReactivityApp from "./2-reactivity/ReactivityApp.svelte";

// const app = new IntroductionApp({
//   target: document.body,
// });
const app = new ReactivityApp({
  target: document.body,
});

export default app;
