import { component$ } from "@builder.io/qwik";
import get from "lodash.get";

import { MSNmessage } from "~/types";

interface Props {
  item: MSNmessage;
}

const mock: MSNmessage = {
  Date: "",
  Time: "",
  Text: "",
  From: { User: { FriendlyName: "" } },
};

export default component$<Props>((props) => {
  const item: MSNmessage = props.item || mock;
  const badge = (check?: boolean): string =>
    check
      ? "badge-primary text-base-100 block"
      : "inline-block bg-neutral-content border-neutral-content";
  const align = (check?: boolean): string =>
    check ? "my-2" : "text-right my-2";

  return (
    <li class={align(item.left)}>
      <span class="block text-sm font-bold">{item.From.User.FriendlyName}</span>
      <span
        class={
          "badge text-neutral my-1 h-auto whitespace-normal break-words rounded " +
          badge(item.left)
        }
      >
        {item.Text}
      </span>
      <span class="block text-xs italic">
        {item.Date} {item.Time}
      </span>
    </li>
  );
});
