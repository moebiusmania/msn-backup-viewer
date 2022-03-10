import { useState } from "preact/hooks";
import { example } from "./../data/samples";

interface Props {
  getXML: Function;
}

const InputData = (props: Props): JSX.Element => {
  const [content, setContent] = useState<string>("");

  const handleChange = ({
    currentTarget,
  }: JSX.TargetedEvent<HTMLTextAreaElement, Event>) =>
    setContent(currentTarget.value);

  const handleClick = (event: MouseEvent): void => {
    event.preventDefault();
    props.getXML(content);
  };

  const loadSample = (event: MouseEvent): void => {
    event.preventDefault();
    props.getXML(example);
  };

  return (
    <form>
      <textarea
        placeholder="Paste XML content here!"
        class="textarea h-40 w-full textarea-bordered"
        value={content}
        onChange={handleChange}
      ></textarea>
      <div>
        <button
          class="btn btn-block btn-secondary text-white mt-3"
          onClick={loadSample}
        >
          Sample data
        </button>
        <button
          class="btn btn-block btn-primary text-white mt-3"
          onClick={handleClick}
        >
          Convert
        </button>
      </div>
    </form>
  );
};

export { InputData };
