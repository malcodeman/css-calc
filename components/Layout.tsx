import React from "react";
import { Container } from "@mantine/core";

type Props = {
  children: React.ReactNode;
};

function Layout(props: Props) {
  const { children } = props;
  return (
    <React.Fragment>
      <Container>{children}</Container>
    </React.Fragment>
  );
}

export default Layout;
