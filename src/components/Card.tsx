import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="card bg-base-100 mx-auto mb-6 md:shadow-lg lg:w-1/2">
      <div class="card-body">
        <Slot />
      </div>
    </div>
  );
});
