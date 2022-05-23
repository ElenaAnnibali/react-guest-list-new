export default function Checkbox({ label, isSelected, onCheckboxChange }) {
  <label>
    <input
      type="checkbox"
      name={label}
      checked={isSelected}
      onChange={onCheckboxChange}
      className="form-check-input"
    />
    {label}🥧
  </label>;
}
