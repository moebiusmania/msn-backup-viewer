import { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
}

const Card = (props: Props): JSX.Element => (
  <div class="card w-1/2 shadow-lg bg-white mx-auto mb-6">
    <div class="card-body">{props.children}</div>
  </div>
);

export { Card };
