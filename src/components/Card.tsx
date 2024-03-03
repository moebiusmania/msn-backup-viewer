import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="card mx-auto mb-6 bg-base-100 md:shadow-lg lg:w-1/2">
      <div class="card-body">
        <Slot />
      </div>
    </div>
  );
});
