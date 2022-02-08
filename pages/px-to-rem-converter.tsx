import React from "react";
import Head from "next/head";
import { Box, Input, InputWrapper, Text, Title } from "@mantine/core";
import { useForm } from "react-hook-form";
import { toString } from "ramda";

const defaultValues = {
  px: "16",
  rem: "1",
  rootFontSize: "16",
};

const PxToRemConverter = () => {
  const { register, setValue, getValues } = useForm({ defaultValues });

  function handleOnPxChange(e: React.ChangeEvent<HTMLInputElement>) {
    const px = parseFloat(e.target.value);
    const rootFontSize = parseFloat(getValues("rootFontSize"));
    setValue("rem", toString(px / rootFontSize));
  }

  function handleOnRemChange(e: React.ChangeEvent<HTMLInputElement>) {
    const rem = parseFloat(e.target.value);
    const rootFontSize = parseFloat(getValues("rootFontSize"));
    setValue("px", toString(rem * rootFontSize));
  }

  function handleOnRootFontSizeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const rootFontSize = parseFloat(e.target.value);
    const px = parseFloat(getValues("px"));
    setValue("rem", toString(px / rootFontSize));
  }

  return (
    <React.Fragment>
      <Head>
        <title>Pixel to REM Convertor</title>
      </Head>
      <Box>
        <Title order={1} align={"center"} mb={"lg"}>
          Pixel to REM
        </Title>
        <InputWrapper id="px" label="Pixel">
          <Input
            id="px"
            {...register("px")}
            onChange={handleOnPxChange}
            rightSection={<Text>px</Text>}
            mb={"sm"}
          />
        </InputWrapper>
        <InputWrapper id="rem" label="REM">
          <Input
            id="rem"
            {...register("rem")}
            onChange={handleOnRemChange}
            rightSection={<Text>rem</Text>}
            mb={"sm"}
          />
        </InputWrapper>
        <InputWrapper id="rootFontSize" label="Root Font Size">
          <Input
            id="rootFontSize"
            {...register("rootFontSize")}
            onChange={handleOnRootFontSizeChange}
          />
        </InputWrapper>
      </Box>
    </React.Fragment>
  );
};

export default PxToRemConverter;
