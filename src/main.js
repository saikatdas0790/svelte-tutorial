import IntroductionApp from "./1-introduction/IntroductionApp.svelte";
import ReactivityApp from "./2-reactivity/ReactivityApp.svelte";
import PropsApp from "./3-props/PropsApp.svelte";
import LogicApp from "./4-logic/LogicApp.svelte";
import EventsApp from "./5-events/EventsApp.svelte";
import BindingsApp from "./6-bindings/BindingsApp.svelte";
import LifecycleApp from "./7-lifecycle/LifecycleApp.svelte";
import StoresApp from "./8-stores/StoresApp.svelte";
import MotionApp from "./9-motion/MotionApp.svelte";
import TransitionsApp from "./10-transitions/TransitionsApp.svelte";
import AnimationsApp from "./11-animations/AnimationsApp.svelte";
import ActionsApp from "./12-actions/ActionsApp.svelte";
import ClassesApp from "./13-classes/ClassesApp.svelte";
import ComponentCompositionApp from "./14-component-composition/ComponentCompositionApp.svelte";
import ContextAPIApp from "./15-context-api/ContextAPIApp.svelte";

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

// const app = new BindingsApp({
//   target: document.body,
// });

// const app = new LifecycleApp({
//   target: document.body,
// });

// const app = new StoresApp({
//   target: document.body,
// });

// const app = new MotionApp({
//   target: document.body,
// });

// const app = new TransitionsApp({
//   target: document.body,
// });

// const app = new AnimationsApp({
//   target: document.body,
// });

// const app = new ActionsApp({
//   target: document.body,
// });

// const app = new ClassesApp({
//   target: document.body,
// });

// const app = new ComponentCompositionApp({
//   target: document.body,
// });

const app = new ContextAPIApp({
  target: document.body,
});

export default app;
