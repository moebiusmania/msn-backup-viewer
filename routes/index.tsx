import Card from "../components/Card.tsx";
import MSNForm from "../islands/MSNForm.tsx";

export default function Home() {
  return (
    <main class="container md:py-4 lg:py-12">
      <Card as="article" ariaLabel="MSN Backup Viewer Main Interface">
        <header class="prose">
          <h1 class="text-3xl">
            <a
              href="/"
              class="flex items-center gap-2 font-bold no-underline"
              aria-label="MSN Messenger viewer home page"
            >
              <img
                src="/favicon.png"
                class="my-0 h-7 w-7"
                width={24}
                height={24}
                alt="MSN Messenger icon"
              />
              MSN Messenger viewer
            </a>
          </h1>
        </header>
        <MSNForm />
      </Card>
    </main>
  );
}
