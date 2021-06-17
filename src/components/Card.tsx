
interface Props {
  children: React.ReactNode
}

const Card = (props: Props): JSX.Element => (
  <div className="card shadow-sm">
    <div className="card-body">
      {props.children}
    </div>
  </div>
);

export {
  Card
}