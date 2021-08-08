
interface Props {
  children: React.ReactNode
}

const Card = (props: Props): JSX.Element => (
  <div className="card w-1/2 shadow-lg bg-white mx-auto mb-6">
    <div className="card-body">
      {props.children}
    </div>
  </div>
);

export {
  Card
}