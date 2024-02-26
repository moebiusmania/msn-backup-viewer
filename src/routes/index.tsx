import { component$, $, useSignal } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

import pkg from "../../package.json";

const btnStyle = "btn btn-block btn-primary mt-3 text-white text-lg";

export default component$(() => {
  const text = useSignal("ciao");

  const updateText = $((event: any) => {
    text.value = event.target.value;
  });

  const onSubmit = $(() => {
    console.log("submit");
  });

  return (
    <>
      <form preventdefault:submit onSubmit$={onSubmit}>
        <textarea
          placeholder="Paste XML content here!"
          class="textarea textarea-bordered h-40 w-full"
          value={text.value}
          onInput$={updateText}
        ></textarea>
        <div>
          <Link
            href="/sample"
            class="btn btn-block btn-secondary mt-3 text-lg text-white"
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
