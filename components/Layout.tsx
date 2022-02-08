import React from "react";
import Link from "next/link";
import { Anchor, Box, Button, Container, Group } from "@mantine/core";
import { GitHub, Home } from "react-feather";
import { useMediaQuery } from "@mantine/hooks";

const REPO_LINK = "https://github.com/malcodeman/css-calc";

type Props = {
  children: React.ReactNode;
};

function Layout(props: Props) {
  const { children } = props;
  const isSmallWidth = useMediaQuery("(max-width: 576px)");
  return (
    <React.Fragment>
      <Container mb={"lg"}>
        <Group position={"apart"}>
          <Anchor component={Link} href={"/"}>
            <Button
              leftIcon={<Home size={16} />}
              size={"sm"}
              variant={"default"}
              fullWidth={isSmallWidth ? true : false}
            >
              Home
            </Button>
          </Anchor>
          <Button
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href={REPO_LINK}
            leftIcon={<GitHub size={16} />}
            size={"sm"}
            fullWidth={isSmallWidth ? true : false}
          >
            Repo
          </Button>
        </Group>
      </Container>
      <Box mb={"lg"}>
        <Container>{children}</Container>
      </Box>
    </React.Fragment>
  );
}

export default Layout;
