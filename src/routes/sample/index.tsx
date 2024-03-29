import type { DocumentHead } from "@builder.io/qwik-city";
import { component$, useSignal, useTask$ } from "@builder.io/qwik";

import { example } from "~/data/samples";
import Conversation from "~/components/Conversation";
import { parse } from "~/utils/parse";
import type { MSNmessage } from "~/types";

import pkg from "../../../package.json";

export default component$(() => {
  const data = useSignal<MSNmessage[]>([]);

  useTask$(async () => {
    data.value = await parse(example);
  });

  return (
    <>
      <Conversation data={data.value} />
      <hr class="my-4 border-neutral" />
      <p class="mb-6">XML source:</p>
      <pre class="overflow-x-scroll bg-neutral-content p-2 text-neutral">
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
