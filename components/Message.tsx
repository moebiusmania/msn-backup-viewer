import type { MSNmessage } from "../types.ts";

interface Props {
  item: MSNmessage;
}

export default function Message({ item }: Props) {
  const badge = (check?: boolean): string =>
    check
      ? "badge-primary text-base-100 block"
      : "inline-block bg-neutral-content border-neutral-content";
  const align = (check?: boolean): string =>
    check ? "my-2" : "text-right my-2";

  // Create a more accessible date string
  const dateTimeString = `${item.Date} ${item.Time}`;
  const friendlyName = item.From.User["@_FriendlyName"];

  return (
    <li
      class={align(item.left)}
      role="article"
      aria-label={`Message from ${friendlyName}`}
    >
      <header class="block text-sm font-bold" aria-label="Message sender">
        {friendlyName}
      </header>

      <blockquote
        class={
          "badge my-1 h-auto whitespace-normal break-words rounded " +
          badge(item.left)
        }
        aria-label="Message content"
      >
        {item.Text["#text"]}
      </blockquote>

      <footer class="block text-xs italic">
        <time
          dateTime={dateTimeString}
          aria-label={`Sent on ${dateTimeString}`}
        >
          {item.Date} {item.Time}
        </time>
      </footer>
    </li>
  );
}
