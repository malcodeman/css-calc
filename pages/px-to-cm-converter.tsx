import React from "react";
import Head from "next/head";
import { Box, Input, InputWrapper, Text, Title } from "@mantine/core";
import { useForm } from "react-hook-form";
import { toString } from "ramda";

const defaultValues = {
  px: "1",
  cm: "0.026458333333333334",
};

const PxToCmConverter = () => {
  const { register, setValue } = useForm({ defaultValues });

  function handleOnPxChange(e: React.ChangeEvent<HTMLInputElement>) {
    const px = parseFloat(e.target.value);
    const cm = (px * 2.54) / 96;
    setValue("cm", toString(cm));
  }

  function handleOnCmChange(e: React.ChangeEvent<HTMLInputElement>) {
    const cm = parseFloat(e.target.value);
    const px = (cm * 96) / 2.54;
    setValue("px", toString(px));
  }

  return (
    <React.Fragment>
      <Head>
        <title>Pixel to cm Convertor</title>
      </Head>
      <Box>
        <Title order={1} align="center" mb="lg">
          Pixel to cm
        </Title>
        <InputWrapper id="px" label="Pixel">
          <Input
            id="px"
            {...register("px")}
            onChange={handleOnPxChange}
            rightSection={<Text>px</Text>}
            mb="sm"
          />
        </InputWrapper>
        <InputWrapper id="cm" label="Centimeter">
          <Input
            id="cm"
            {...register("cm")}
            onChange={handleOnCmChange}
            rightSection={<Text>cm</Text>}
            mb="sm"
          />
        </InputWrapper>
      </Box>
    </React.Fragment>
  );
};

export default PxToCmConverter;
