import {
  component$,
  createContextId,
  Slot,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import { Link, type RequestHandler } from "@builder.io/qwik-city";
import Card from "~/components/Card";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const CTX = createContextId<{ text: string }>("state");

export default component$(() => {
  const state = useStore({ text: "" });

  useContextProvider(CTX, state);

  return (
    <main class="container md:py-4 lg:py-12">
      <Card>
        <header class="prose">
          <h1 class="text-3xl">
            <Link
              href="/"
              class="flex items-center gap-2 font-bold no-underline"
            >
              <img
                src="/favicon.png"
                class="my-0 h-7 w-7"
                width={24}
                height={24}
              />
              MSN Messenger viewer
            </Link>
          </h1>
        </header>
        <Slot />
      </Card>
    </main>
  );
});
