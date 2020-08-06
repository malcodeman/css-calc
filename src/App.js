import React from "react";
import {
  Input,
  ParagraphMedium,
  ThemeProvider,
  DarkTheme,
  LightTheme,
  HeadingLarge,
} from "malcomponents";
import { usePreferredTheme } from "malhooks";
import styled from "styled-components";

import GlobalStyle from "./GlobalStyle";
import constants from "./constants";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.bg};
  height: 100vh;
  @media (min-width: ${constants.BREAKPOINTS.MEDIUM_DEVICES}) {
    align-items: center;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 2rem;
`;

const Title = styled(HeadingLarge)`
  margin-bottom: 2rem;
`;

const Inputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 2rem;
`;

function App() {
  const [rootFontSize, setRootFontSize] = React.useState("16");
  const [px, setPx] = React.useState("16");
  const [rem, setRem] = React.useState("1");
  const darkTheme = usePreferredTheme();

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
    <ThemeProvider theme={darkTheme ? DarkTheme : LightTheme}>
      <Wrapper bg={darkTheme ? "#000" : "#fff"}>
        <Main>
          <Title>CSS calc</Title>
          <Inputs>
            <div>
              <ParagraphMedium>px</ParagraphMedium>
              <Input type="text" value={px} onChange={handlePxOnChange} />
            </div>
            <div>
              <ParagraphMedium>rem</ParagraphMedium>
              <Input type="text" value={rem} onChange={handleRemOnChange} />
            </div>
          </Inputs>
          <div>
            <ParagraphMedium>root font size</ParagraphMedium>
            <Input
              type="text"
              value={rootFontSize}
              onChange={(e) => setRootFontSize(e.target.value)}
            />
          </div>
        </Main>
      </Wrapper>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
