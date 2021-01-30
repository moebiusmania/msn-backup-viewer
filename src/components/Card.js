
const Card = (props) => (
  <div className="card shadow-sm">
    <div className="card-body">
      {props.children}
    </div>
  </div>
);

export {
  Card
}