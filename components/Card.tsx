import { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  as?: "section" | "article" | "div";
  ariaLabel?: string;
}

export default function Card({ children, as = "section", ariaLabel }: Props) {
  const Component = as;

  return (
    <Component
      class="card mx-auto mb-6 bg-base-100 md:shadow-lg lg:w-1/2"
      aria-label={ariaLabel}
    >
      <div class="card-body">{children}</div>
    </Component>
  );
}
