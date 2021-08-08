
import { useState, useEffect } from 'react';
import { xml2json } from 'xml-js'; 

import { InputData } from './components/Input';
import { Card } from './components/Card';
import { Messages } from './components/Messages';
import { MSNobject } from './type';

// const Empty = (): JSX.Element => <div></div>;

const App = (): JSX.Element => {
  const [content, setContent] = useState<string>('');
  const [showInput, toggleInput] = useState<boolean>(true);
  const [data, setData] = useState<MSNobject>({ Log: { Message: [] }});

  const inputHandler = (xmlString: string) => setContent(xmlString);

  useEffect(() => {
    const result: string = xml2json(content, { compact: true, spaces: 4 });
    const parsed: any = JSON.parse(result);

    if (parsed.Log) {
      setData(parsed);
      toggleInput(false);
    }
  }, [content]);

  return (
    <main className="container py-12">
      <Card>
        <h2 className="card-title text-3xl">MSN Messenger viewer</h2>
        {showInput ? <InputData getXML={inputHandler} /> : <Messages data={data.Log.Message} />}
      </Card>
    </main>
  );
}

export default App;
