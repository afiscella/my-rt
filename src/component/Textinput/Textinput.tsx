import "./Textinput.css";

interface TextinputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  additionalClasses?: string;
}

export default function Textinput(props: TextinputProps) {
  const { label, additionalClasses, ...otherProps } = props;

  return (
    <div id="child">
      <h5 className="textInputLabel">{label}</h5>
      <input {...otherProps} className={`textInput ${additionalClasses}`} type="text" />
    </div>
  );
}
