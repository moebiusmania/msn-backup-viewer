import { component$, $, useContext, useTask$ } from "@builder.io/qwik";
import { Link, type DocumentHead, useNavigate } from "@builder.io/qwik-city";

import pkg from "../../package.json";
import { CTX } from "./layout";

const btnStyle = "btn btn-block btn-primary mt-3 text-white text-lg";

export default component$(() => {
  const nav = useNavigate();
  const state = useContext(CTX);

  const updateText = $((event: any) => {
    state.text = event.target.value;
  });

  useTask$(async () => {
    state.text = "";
  });

  const onSubmit = $(() => {
    nav("/conversation");
  });

  return (
    <>
      <form preventdefault:submit onSubmit$={onSubmit}>
        <textarea
          placeholder="Paste XML content here!"
          class="textarea textarea-bordered h-40 w-full"
          value={state.text}
          onInput$={updateText}
        ></textarea>
        <div>
          <Link
            href="/sample"
            class="btn btn-secondary btn-block mt-3 text-lg text-white"
          >
            🤖 Sample data
          </Link>
          <button class={btnStyle}>💬 Convert</button>
          <Link href="/private" class={btnStyle + " btn-disabled"}>
            🔒 Login
          </Link>
        </div>
      </form>
    </>
  );
});

export const head: DocumentHead = {
  title: pkg.displayName,
  meta: [
    {
      name: "description",
      content: pkg.description,
    },
  ],
};
