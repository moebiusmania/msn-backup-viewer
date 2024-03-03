import { server$, type DocumentHead } from "@builder.io/qwik-city";
import { component$, $, useSignal } from "@builder.io/qwik";

// import Conversation from "~/components/Conversation";
// import { parse } from "~/utils/parse";

import pkg from "../../../package.json";

export default component$(() => {
  const logged = useSignal<boolean>(false);

  const checkPswd = server$(function (pswd: string) {
    return pswd === this.env.get("PASSWORD");
  });

  const onInput = $(async (event: any) => {
    logged.value = await checkPswd(event.target.value);
  });

  return (
    <>
      <p>private conversations here</p>
      <input type="text" onInput$={onInput} />
      <p>user is logged: {logged.value.toString()}</p>
    </>
  );
});

export const head: DocumentHead = {
  title: `${pkg.displayName} - Private conversations`,
  meta: [
    {
      name: "description",
      content: pkg.description,
    },
  ],
};
