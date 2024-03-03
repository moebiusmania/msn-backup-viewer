import { DocumentHead } from "@builder.io/qwik-city";
import { component$, useContext, useSignal, useTask$ } from "@builder.io/qwik";

import Conversation from "~/components/Conversation";
import { parse } from "~/utils/parse";
import { MSNmessage } from "~/types";

import pkg from "../../../package.json";
import { CTX } from "../layout";

export default component$(() => {
  const data = useSignal<MSNmessage[]>([]);
  const state = useContext(CTX);

  useTask$(async () => {
    data.value = await parse(state.text);
    console.log(data.value);
  });

  console.log(state.text);

  return (
    <>
      <Conversation data={data.value} />
    </>
  );
});

export const head: DocumentHead = {
  title: `${pkg.displayName} - Conversation`,
  meta: [
    {
      name: "description",
      content: pkg.description,
    },
  ],
};
