import { DocumentHead } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

// import Conversation from "~/components/Conversation";
// import { parse } from "~/utils/parse";

import pkg from "../../../package.json";

export default component$(() => {
  return (
    <>
      <p>private conversations here</p>
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
