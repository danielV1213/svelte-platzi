import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "Daniel",
    lastName: "Vélez",
  },
});

export default app;
