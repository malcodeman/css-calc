import React from "react";
import Head from "next/head";
import { Box, Input, InputWrapper, Text, Title } from "@mantine/core";
import { useForm } from "react-hook-form";
import { toString } from "ramda";

const defaultValues = {
  m: "1",
  px: "3.779527559055118",
};

const MToPxConverter = () => {
  const { register, setValue } = useForm({ defaultValues });

  function handleOnmChange(e: React.ChangeEvent<HTMLInputElement>) {
    const m = parseFloat(e.target.value);
    const px = m / 0.0002645833;
    setValue("px", toString(px));
  }

  function handleOnPxChange(e: React.ChangeEvent<HTMLInputElement>) {
    const px = parseFloat(e.target.value);
    const m = px * 0.0002645833;
    setValue("m", toString(m));
  }

  return (
    <React.Fragment>
      <Head>
        <title>m to Pixel Convertor</title>
      </Head>
      <Box>
        <Title order={1} align="center" mb="lg">
          m to Pixel
        </Title>
        <InputWrapper id="m" label="Meter">
          <Input
            id="m"
            {...register("m")}
            onChange={handleOnmChange}
            rightSection={<Text>m</Text>}
            mb="sm"
          />
        </InputWrapper>
        <InputWrapper id="px" label="Pixel">
          <Input
            id="px"
            {...register("px")}
            onChange={handleOnPxChange}
            rightSection={<Text>px</Text>}
            mb="sm"
          />
        </InputWrapper>
      </Box>
    </React.Fragment>
  );
};

export default MToPxConverter;
