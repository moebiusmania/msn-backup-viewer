import { Handlers, PageProps } from "$fresh/server.ts";
import Card from "../components/Card.tsx";
import Conversation from "../components/Conversation.tsx";
import { parse } from "../utils/parse.ts";
import { example } from "../data/samples.ts";
import type { MSNmessage } from "../types.ts";

interface Data {
  messages: MSNmessage[];
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const messages = parse(example);
    return ctx.render({ messages });
  },
};

export default function SamplePage({ data }: PageProps<Data>) {
  return (
    <main class="container md:py-4 lg:py-12">
      <Card>
        <header class="prose">
          <h1 class="text-3xl">
            <a href="/" class="flex items-center gap-2 font-bold no-underline">
              <img
                src="/favicon.png"
                class="my-0 h-7 w-7"
                width={24}
                height={24}
                alt="MSN Messenger icon"
              />
              MSN Messenger viewer - Sample data
            </a>
          </h1>
        </header>

        <Conversation data={data.messages} />
        <hr class="my-4 border-neutral" />
        <p class="mb-6">XML source:</p>
        <pre class="overflow-x-scroll bg-neutral-content p-2 text-neutral">
          {example}
        </pre>
      </Card>
    </main>
  );
}
