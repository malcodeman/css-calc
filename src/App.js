import React from "react";
import {
  Input,
  ThemeProvider,
  DarkTheme,
  LightTheme,
  Typography,
  GlobalStyle,
  FormControl,
} from "malcomponents";
import { usePreferredTheme } from "malhooks";
import styled from "styled-components";

import constants from "./constants";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.theme.malcode.colors.background};
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

  function handleRootFontSizeOnChange(e) {
    const value = e.target.value;

    setRootFontSize(value);
    setRem(px / Number(value));
  }

  return (
    <ThemeProvider theme={darkTheme ? DarkTheme : LightTheme}>
      <Wrapper>
        <Main>
          <Typography.HeadingLarge mb="2rem">CSS calc</Typography.HeadingLarge>
          <Inputs>
            <FormControl label="px">
              <Input type="text" value={px} onChange={handlePxOnChange} />
            </FormControl>
            <FormControl label="rem">
              <Input type="text" value={rem} onChange={handleRemOnChange} />
            </FormControl>
          </Inputs>
          <FormControl label="root font size">
            <Input
              type="text"
              value={rootFontSize}
              onChange={handleRootFontSizeOnChange}
            />
          </FormControl>
        </Main>
      </Wrapper>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
