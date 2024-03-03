import { component$ } from "@builder.io/qwik";
import get from "lodash.get";

import type { MSNmessage } from "~/types";
import Message from "./Message";

interface Props {
  data: Array<MSNmessage>;
}

export default component$<Props>((props) => {
  const data: Array<MSNmessage> = props.data;
  const key: string = "From.User.FriendlyName";
  let isLeft: boolean = true;

  const refined: Array<MSNmessage> = data
    .filter((e: MSNmessage): MSNmessage => get(e, key))
    .map((e: MSNmessage, i: number, arr: Array<MSNmessage>) => {
      const prev: number = i !== 0 ? i - 1 : 0;
      const condition: boolean = get(e, key) !== get(arr[prev], key);
      if (condition) {
        isLeft = !isLeft;
      }
      return { ...e, left: isLeft };
    });

  return (
    <ul class="list-unstyled">
      {refined.map((e, i) => (
        <Message key={i} item={e} />
      ))}
    </ul>
  );
});
