import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Container, Title } from "@mantine/core";

import PxToRem from "../components/PxToRem";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>CSS Calculations</title>
      </Head>
      <Container>
        <Title order={1} align={"center"} mb={"lg"}>
          CSS calc
        </Title>
        <PxToRem />
      </Container>
    </React.Fragment>
  );
};

export default Home;
