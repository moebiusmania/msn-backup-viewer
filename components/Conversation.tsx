import get from "lodash.get";
import type { MSNmessage } from "../types.ts";
import Message from "./Message.tsx";

interface Props {
  data: Array<MSNmessage>;
}

export default function Conversation({ data }: Props) {
  const key: string = "From.User.@_FriendlyName";
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

  if (refined.length === 0) {
    return (
      <div class="text-center py-8" role="status" aria-live="polite">
        <p>No messages to display.</p>
      </div>
    );
  }

  return (
    <section role="log" aria-label="Conversation messages">
      <h2 class="sr-only">Message History</h2>
      <ol
        class="list-unstyled"
        aria-label={`Conversation with ${refined.length} messages`}
      >
        {refined.map((e, i) => (
          <Message key={`message-${i}`} item={e} />
        ))}
      </ol>
    </section>
  );
}
