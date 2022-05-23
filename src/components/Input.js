export default function Input(props) {
  return (
    <>
      <label htmlFor={props.htmlFor}>{props.text}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
}
