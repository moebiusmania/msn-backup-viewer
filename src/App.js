
import { useState, useEffect } from 'react';
import { xml2json } from 'xml-js'; 

import { InputData } from './components/Input';
import { Card } from './components/Card';
import { Messages } from './components/Messages';

import './App.scss';

const Empty = () => <div></div>;

function App() {
  const [content, setContent] = useState('');
  const [showInput, toggleInput] = useState(true);
  const [data, setData] = useState({ Log: { Message: [] }});

  const inputHandler = (xmlString) => setContent(xmlString);

  useEffect(() => {
    const result = xml2json(content, { compact: true, spaces: 4 });
    const parsed = JSON.parse(result);

    if (parsed.Log) {
      setData(parsed);
      toggleInput(false);
    }
  }, [content]);

  return (
    <main className="container">
      <Card>
        <h2>MSN Messenger viewer</h2>
        {showInput ? <InputData getXML={inputHandler} /> : <Messages data={data.Log.Message} />}
      </Card>
    </main>
  );
}

export default App;
