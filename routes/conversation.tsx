import { Handlers, PageProps } from "$fresh/server.ts";
import Card from "../components/Card.tsx";
import Conversation from "../components/Conversation.tsx";
import { parse } from "../utils/parse.ts";
import type { MSNmessage } from "../types.ts";

interface Data {
  messages: MSNmessage[];
  error?: string;
}

export const handler: Handlers<Data> = {
  async POST(req, ctx) {
    try {
      const form = await req.formData();
      const xmlData = form.get("xmlData") as string;

      if (!xmlData) {
        return ctx.render({ messages: [], error: "No XML data provided" });
      }

      const messages = parse(xmlData);
      return ctx.render({ messages });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return ctx.render({
        messages: [],
        error: "Failed to parse XML data: " + errorMessage,
      });
    }
  },

  GET(req, ctx) {
    // For direct access, show empty state
    return ctx.render({ messages: [] });
  },
};

export default function ConversationPage({ data }: PageProps<Data>) {
  return (
    <main class="container md:py-4 lg:py-12">
      <Card as="article" ariaLabel="MSN Conversation Display">
        <header class="prose">
          <h1 class="text-3xl">
            <a
              href="/"
              class="flex items-center gap-2 font-bold no-underline"
              aria-label="Return to MSN Messenger viewer home"
            >
              <img
                src="/favicon.png"
                class="my-0 h-7 w-7"
                width={24}
                height={24}
                alt="MSN Messenger icon"
              />
              MSN Messenger viewer - Conversation
            </a>
          </h1>
        </header>

        {data.error ? (
          <div class="alert alert-error">
            <span>{data.error}</span>
          </div>
        ) : data.messages.length > 0 ? (
          <Conversation data={data.messages} />
        ) : (
          <div class="py-8 text-center">
            <p>No conversation data available.</p>
            <a href="/" class="btn btn-primary text-white mt-4">
              Go back to upload
            </a>
          </div>
        )}
      </Card>
    </main>
  );
}
