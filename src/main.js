import IntroductionApp from "./1-introduction/IntroductionApp.svelte";
import ReactivityApp from "./2-reactivity/ReactivityApp.svelte";
import PropsApp from "./3-props/PropsApp.svelte";
import LogicApp from "./4-logic/LogicApp.svelte";

// const app = new IntroductionApp({
//   target: document.body,
// });

// const app = new ReactivityApp({
//   target: document.body,
// });

// const app = new PropsApp({
//   target: document.body,
// });

const app = new LogicApp({
  target: document.body,
});

export default app;
