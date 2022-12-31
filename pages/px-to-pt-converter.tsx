import React from "react";
import Head from "next/head";
import { Box, Input, InputWrapper, Text, Title } from "@mantine/core";
import { useForm } from "react-hook-form";
import { toString } from "ramda";

const defaultValues = {
  px: "1",
  pt: "0.75",
  dpi: "72",
};

const PxToPtConverter = () => {
  const { register, setValue, getValues } = useForm({ defaultValues });

  function handleOnPxChange(e: React.ChangeEvent<HTMLInputElement>) {
    const px = parseFloat(e.target.value);
    const dpi = parseFloat(getValues("dpi"));
    const pt = px * (dpi / 96);
    setValue("pt", toString(pt));
  }

  function handleOnPtChange(e: React.ChangeEvent<HTMLInputElement>) {
    const pt = parseFloat(e.target.value);
    const dpi = parseFloat(getValues("dpi"));
    const px = pt * (96 / dpi);
    setValue("px", toString(px));
  }

  function handleOnDpiChange(e: React.ChangeEvent<HTMLInputElement>) {
    const dpi = parseFloat(e.target.value);
    const pt = parseFloat(getValues("pt"));
    const px = parseFloat(getValues("px"));
    setValue("pt", toString(px * (dpi / 96)));
    setValue("px", toString(pt * (96 / dpi)));
  }

  return (
    <React.Fragment>
      <Head>
        <title>Pixel to PT Convertor</title>
      </Head>
      <Box>
        <Title order={1} align="center" mb="lg">
          Pixel to PT
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
        <InputWrapper id="pt" label="PT">
          <Input
            id="pt"
            {...register("pt")}
            onChange={handleOnPtChange}
            rightSection={<Text>pt</Text>}
            mb="sm"
          />
        </InputWrapper>
        <InputWrapper id="dpi" label="Dots per inch">
          <Input
            id="dpi"
            {...register("dpi")}
            onChange={handleOnDpiChange}
            rightSection={<Text>dpi</Text>}
            mb="sm"
          />
        </InputWrapper>
      </Box>
    </React.Fragment>
  );
};

export default PxToPtConverter;
