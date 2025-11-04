function InputName({ name, setName }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label>Enter your name: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default InputName;
