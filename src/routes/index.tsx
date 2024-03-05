import { component$, $, useContext, useTask$ } from "@builder.io/qwik";
import { Link, type DocumentHead, useNavigate } from "@builder.io/qwik-city";

import pkg from "../../package.json";
import { CTX } from "./layout";

const btnStyle = "btn btn-secondary btn-block my-2 text-lg text-white";

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
          required
        ></textarea>
        <div>
          <button class={"btn btn-primary btn-block my-2 text-lg text-white"}>
            💬 Convert
          </button>
          <hr class="my-3" />
          <Link href="/sample" class={btnStyle}>
            🤖 Sample data
          </Link>

          <Link href="/private" class={btnStyle}>
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
