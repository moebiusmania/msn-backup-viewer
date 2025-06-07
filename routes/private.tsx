import Card from "../components/Card.tsx";

export default function PrivatePage() {
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
              MSN Messenger viewer - Private
            </a>
          </h1>
        </header>

        <div class="py-8 text-center">
          <h2 class="mb-4 text-2xl">🔒 Private Area</h2>
          <p class="mb-4">This section is under development.</p>
          <a href="/" class="btn btn-primary text-white">
            Go back to home
          </a>
        </div>
      </Card>
    </main>
  );
}
