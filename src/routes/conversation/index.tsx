import { DocumentHead } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

import Conversation from "~/components/Conversation";
import { parse } from "~/utils/parse";

import pkg from "../../../package.json";

export default component$(() => {
  return (
    <>
      <p>conversation here</p>
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
