
import { useState } from 'react';

const InputData = (props) => {
  const [content, setContent] = useState('');

  const handleChange = (event) => setContent(event.target.value);

  const handleClick = (event) => {
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