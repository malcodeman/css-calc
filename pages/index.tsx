import type { NextPage } from "next";
import React from "react";
import { Container, Title } from "@mantine/core";

import PxToRem from "../components/PxToRem";

const Home: NextPage = () => {
  return (
    <Container>
      <Title order={1} align={"center"} mb={"lg"}>
        CSS calc
      </Title>
      <PxToRem />
    </Container>
  );
};

export default Home;
