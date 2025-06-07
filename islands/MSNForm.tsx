import { useSignal } from "@preact/signals";

const btnStyle = "btn btn-secondary btn-block my-2 text-lg text-white";

export default function MSNForm() {
  const text = useSignal("");

  const updateText = (event: Event) => {
    const target = event.target as HTMLTextAreaElement;
    text.value = target.value;
  };

  return (
    <section aria-labelledby="form-heading">
      <h2 id="form-heading" class="sr-only">
        Upload MSN Messenger XML Data
      </h2>

      <form
        method="POST"
        action="/conversation"
        aria-label="Convert MSN XML to conversation format"
      >
        <div class="form-control w-full">
          <label for="xmlData" class="label">
            <span class="label-text font-semibold">
              MSN Messenger XML Content
            </span>
          </label>

          <textarea
            id="xmlData"
            name="xmlData"
            placeholder="Paste your MSN Messenger XML backup content here..."
            class="textarea textarea-bordered h-40 w-full focus:border-primary focus:outline-primary"
            value={text.value}
            onInput={updateText}
            required
            aria-describedby="xml-help"
            aria-invalid={
              text.value.trim().length > 0 && !text.value.includes("<Log>")
                ? "true"
                : "false"
            }
          />

          <div class="label">
            <span id="xml-help" class="label-text-alt text-base-content/70">
              Paste the XML content from your MSN Messenger backup file. The
              content should contain &lt;Log&gt; and &lt;Message&gt; elements.
            </span>
          </div>
        </div>

        <div class="flex flex-col gap-2 mt-4">
          <button
            class="btn btn-primary btn-block text-lg text-white"
            type="submit"
            aria-describedby="convert-help"
          >
            <span role="img" aria-label="Speech bubble">
              💬
            </span>
            Convert to Conversation
          </button>

          <div id="convert-help" class="sr-only">
            This will parse your XML data and display it as a readable
            conversation
          </div>

          <hr class="my-3" aria-hidden="true" />

          <nav aria-label="Additional options">
            <a href="/sample" class={btnStyle} aria-describedby="sample-help">
              <span role="img" aria-label="Robot">
                🤖
              </span>
              View Sample Data
            </a>
            <div id="sample-help" class="sr-only">
              See an example of how the converted conversation will look
            </div>

            <a href="/private" class={btnStyle} aria-describedby="private-help">
              <span role="img" aria-label="Lock">
                🔒
              </span>
              Private Area
            </a>
            <div id="private-help" class="sr-only">
              Access additional features (coming soon)
            </div>
          </nav>
        </div>
      </form>
    </section>
  );
}
