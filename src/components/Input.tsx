
import { SyntheticEvent, useState } from 'react';

interface Props {
  getXML: Function
};

const InputData = (props: Props): JSX.Element => {
  const [content, setContent] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => 
    setContent(event.target.value);

  const handleClick = (event: SyntheticEvent) => {
    event.preventDefault();
    props.getXML(content);
  }

  return (
    <form>
      <textarea 
        placeholder="Paste XML content here!"
        className="form-control"
        value={content}
        onChange={handleChange}
      ></textarea>
      <div className="d-grid gap-2">
        <button 
          className="btn btn-primary btn-lg"
          onClick={handleClick}
        >Convert</button>
      </div>
    </form>
  )
}

export {
  InputData
}