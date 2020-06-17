import IntroductionApp from "./1-introduction/IntroductionApp.svelte";
import ReactivityApp from "./2-reactivity/ReactivityApp.svelte";
import PropsApp from "./3-props/PropsApp.svelte";
import LogicApp from "./4-logic/LogicApp.svelte";
import EventsApp from "./5-events/EventsApp.svelte";
import BindingsApp from "./6-bindings/BindingsApp.svelte";

// const app = new IntroductionApp({
//   target: document.body,
// });

// const app = new ReactivityApp({
//   target: document.body,
// });

// const app = new PropsApp({
//   target: document.body,
// });

// const app = new LogicApp({
//   target: document.body,
// });

// const app = new EventsApp({
//   target: document.body,
// });

const app = new BindingsApp({
  target: document.body,
});

export default app;
