import { useState } from "preact/hooks";
// @ts-ignore
import { xmlToJson } from "./xml2json";

import { placeholder } from "./data/samples";
import { InputData } from "./components/Input";
import { Card } from "./components/Card";
import { Messages } from "./components/Messages";
import { MSNobject } from "./type";

const App = (): JSX.Element => {
  const [showInput, toggleInput] = useState<boolean>(true);
  const [data, setData] = useState<MSNobject>({ Log: { Message: [] } });

  const inputHandler = (xmlString: string = placeholder) => {
    const result = new DOMParser().parseFromString(xmlString, "text/xml");
    const parsed: any = xmlToJson(result);

    if (parsed.Log) {
      setData(parsed);
      toggleInput(false);
    }
  };

  return (
    <main class="container md:py-4 lg:py-12">
      <Card>
        <header class="prose">
          <h1 class="text-3xl">MSN Messenger viewer</h1>
        </header>
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
