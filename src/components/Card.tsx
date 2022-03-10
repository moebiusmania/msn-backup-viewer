import { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
}

const Card = (props: Props): JSX.Element => (
  <div class="card lg:w-1/2 md:shadow-lg bg-base-100 mx-auto mb-6">
    <div class="card-body">{props.children}</div>
  </div>
);

export { Card };
