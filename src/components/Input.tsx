import { useState } from "preact/hooks";

interface Props {
  getXML: Function;
}

const InputData = (props: Props): JSX.Element => {
  const [content, setContent] = useState<string>("");

  const handleChange = ({
    currentTarget,
  }: JSX.TargetedEvent<HTMLTextAreaElement, Event>) =>
    setContent(currentTarget.value);

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    props.getXML(content);
  };

  return (
    <form>
      <textarea
        placeholder="Paste XML content here!"
        class="textarea h-40 w-full textarea-bordered"
        value={content}
        onChange={handleChange}
      ></textarea>
      <div class="d-grid gap-2">
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
