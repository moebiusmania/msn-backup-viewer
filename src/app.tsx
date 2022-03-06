import { useState } from "preact/hooks";
// @ts-ignore
import { xmlToJson } from "./xml2json";

import { InputData } from "./components/Input";
import { Card } from "./components/Card";
import { Messages } from "./components/Messages";
import { MSNobject } from "./type";

const App = (): JSX.Element => {
  const [showInput, toggleInput] = useState<boolean>(true);
  const [data, setData] = useState<MSNobject>({ Log: { Message: [] } });

  const inputHandler = (xmlString: string = '{"foo": "bar"}') => {
    const result = new DOMParser().parseFromString(xmlString, "text/xml");
    const parsed: any = xmlToJson(result);

    if (parsed.Log) {
      setData(parsed);
      toggleInput(false);
    }
  };

  return (
    <main class="container py-12">
      <Card>
        <h2 class="card-title text-3xl">MSN Messenger viewer</h2>
        {showInput ? (
          <InputData getXML={inputHandler} />
        ) : (
          <Messages data={data.Log.Message} />
        )}
      </Card>
    </main>
  );
};

export { App };
