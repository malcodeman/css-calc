import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import {
  Anchor,
  Center,
  Container,
  List,
  ListItem,
  Title,
} from "@mantine/core";
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
        <Title order={1} align={"center"} mb={"lg"}>
          CSS Calc
        </Title>
        <Center>
          <List>
            {map(
              (item) => (
                <ListItem key={item.value}>
                  <Link href={item.value} passHref>
                    <Anchor>{item.label}</Anchor>
                  </Link>
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
