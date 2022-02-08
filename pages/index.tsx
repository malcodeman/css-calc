import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Center, Container, List, ListItem, Title } from "@mantine/core";
import { map } from "ramda";

const LIST = [
  {
    label: "Pixel to REM",
    value: "/px-to-rem-converter",
  },
  {
    label: "REM to Pixel",
    value: "/rem-to-px-converter",
  },
];

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>CSS Calculations</title>
      </Head>
      <Container>
        <Title order={1} align={"center"} my={"lg"}>
          CSS calc
        </Title>
        <Center>
          <List>
            {map(
              (item) => (
                <ListItem key={item.value}>
                  <Link href={item.value}>{item.label}</Link>
                </ListItem>
              ),
              LIST
            )}
          </List>
        </Center>
      </Container>
    </React.Fragment>
  );
};

export default Home;
