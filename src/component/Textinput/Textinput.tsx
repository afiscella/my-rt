import "./Textinput.css";

interface TextinputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

export default function Textinput(props: TextinputProps) {
  const { label, ...otherProps } = props;

  return (
    <div id="child">
      <h5 className="textInputLabel">{label}</h5>
      <input {...otherProps} className="textInput" type="text" />
    </div>
  );
}
