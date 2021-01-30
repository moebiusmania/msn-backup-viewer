import get from 'lodash.get';

const mock = {
  _attributes: { Date: '', Time: '' },
  Text: { _text: '' },
  From: { User: { _attributes: { FriendlyName: '' } } }
};

const Message = (props) => {
  const item = props.item || mock;
  const badge = (check) => check ? 'badge bg-primary' : 'badge bg-secondary';
  const align = (check) => check ? 'message' : 'message right';

  return (
    <li className={align(item.left)}>
      <span className="from">{item.From.User._attributes.FriendlyName}</span>
      <span className={badge(item.left)}>{item.Text._text}</span>
      <span className="timestamp">{item._attributes.Date} {item._attributes.Time}</span>
    </li>
  );
}

const Messages = (props) => {
  const data = props.data || [mock,mock];
  const key = 'From.User._attributes.FriendlyName';
  let isLeft = true;

  const refined = data
    .filter(e => get(e, key))
    .map((e,i, arr) => {
      const prev = i !== 0 ? i-1 : 0;
      const condition = get(e, key) !== get(arr[prev], key) 
      if (condition) { isLeft = !isLeft };
      return {...e, left: isLeft};
    });

  return (
    <ul className="list-unstyled">
      {refined.map((e,i) => <Message key={i} item={e} />)}
    </ul>
  )
}

export {
  Messages
}