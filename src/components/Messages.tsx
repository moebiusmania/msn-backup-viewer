import get from "lodash.get";
import { MSNmessage } from "../type";

interface MsgProps {
  item: MSNmessage;
}

interface Props {
  data: Array<MSNmessage>;
}

const mock: MSNmessage = {
  "@attributes": { Date: "", Time: "" },
  Text: "",
  From: { User: { "@attributes": { FriendlyName: "" } } },
};

const Message = (props: MsgProps): JSX.Element => {
  const item: MSNmessage = props.item || mock;
  const badge = (check?: boolean): string =>
    check
      ? "badge-primary text-base-100 block"
      : "inline-block bg-gray-500 border-gray-500";
  const align = (check?: boolean): string =>
    check ? "my-2" : "text-right my-2";

  return (
    <li class={align(item.left)}>
      <span class="text-sm font-bold block">
        {item.From.User["@attributes"].FriendlyName}
      </span>
      <span
        class={
          "badge my-1 whitespace-normal break-words rounded h-auto " +
          badge(item.left)
        }
      >
        {item.Text}
      </span>
      <span class="text-xs italic block">
        {item["@attributes"].Date} {item["@attributes"].Time}
      </span>
    </li>
  );
};

const Messages = (props: Props): JSX.Element => {
  const data: Array<MSNmessage> = props.data || [mock, mock];
  const key: string = "From.User.@attributes.FriendlyName";
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
};

export { Messages };
