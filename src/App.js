import React from "react";

function App() {
  const [rootFontSize, setRootFontSize] = React.useState("16");
  const [px, setPx] = React.useState("16");
  const [rem, setRem] = React.useState("1");

  function handlePxOnChange(e) {
    const value = e.target.value;

    setPx(value);
    setRem(value / Number(rootFontSize));
  }

  function handleRemOnChange(e) {
    const value = e.target.value;

    setRem(value);
    setPx(value * Number(rootFontSize));
  }

  return (
    <div>
      <h1>CSS calc</h1>
      <div>
        <input
          type="text"
          value={rootFontSize}
          onChange={(e) => setRootFontSize(e.target.value)}
        />
        <span>root font size</span>
      </div>
      <div>
        <input type="text" value={px} onChange={handlePxOnChange} />
        <span>px</span>
      </div>
      <div>
        <input type="text" value={rem} onChange={handleRemOnChange} />
        <span>rem</span>
      </div>
    </div>
  );
}

export default App;
