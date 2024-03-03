import { component$ } from "@builder.io/qwik";

import type { MSNmessage } from "~/types";

interface Props {
  item: MSNmessage;
}

export default component$<Props>((props) => {
  const item: MSNmessage = props.item;
  const badge = (check?: boolean): string =>
    check
      ? "badge-primary text-base-100 block"
      : "inline-block bg-neutral-content border-neutral-content";
  const align = (check?: boolean): string =>
    check ? "my-2" : "text-right my-2";

  return (
    <li class={align(item.left)}>
      <span class="block text-sm font-bold">
        {item.From.User["@_FriendlyName"]}
      </span>
      <span
        class={
          "badge my-1 h-auto whitespace-normal break-words rounded text-neutral " +
          badge(item.left)
        }
      >
        {item.Text["#text"]}
      </span>
      <span class="block text-xs italic">
        {item.Date} {item.Time}
      </span>
    </li>
  );
});
