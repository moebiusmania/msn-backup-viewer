import { DocumentHead } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

import { example } from "~/data/samples";
import Conversation from "~/components/Conversation";
import { parse } from "~/utils/parse";

import pkg from "../../../package.json";

const data = await parse(example);

export default component$(() => {
  return (
    <>
      <Conversation data={data} />
      <hr class="border-neutral my-4" />
      <p class="mb-6">XML source:</p>
      <pre class="bg-neutral-content text-neutral overflow-x-scroll p-2">
        {example}
      </pre>
    </>
  );
});

export const head: DocumentHead = {
  title: `${pkg.displayName} - Sample data`,
  meta: [
    {
      name: "description",
      content: pkg.description,
    },
  ],
};
