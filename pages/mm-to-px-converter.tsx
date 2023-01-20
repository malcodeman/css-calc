import React from "react";
import Head from "next/head";
import { Box, Input, InputWrapper, Text, Title } from "@mantine/core";
import { useForm } from "react-hook-form";
import { toString } from "ramda";

const defaultValues = {
  mm: "1",
  px: "3.779527559055118",
};

const MmToPxConverter = () => {
  const { register, setValue } = useForm({ defaultValues });

  function handleOnMmChange(e: React.ChangeEvent<HTMLInputElement>) {
    const mm = parseFloat(e.target.value);
    const px = (mm / 25.4) * 96;
    setValue("px", toString(px));
  }

  function handleOnPxChange(e: React.ChangeEvent<HTMLInputElement>) {
    const px = parseFloat(e.target.value);
    const mm = (px / 96) * 25.4;
    setValue("mm", toString(mm));
  }

  return (
    <React.Fragment>
      <Head>
        <title>mm to Pixel Convertor</title>
      </Head>
      <Box>
        <Title order={1} align="center" mb="lg">
          mm to Pixel
        </Title>
        <InputWrapper id="mm" label="Millimeter">
          <Input
            id="mm"
            {...register("mm")}
            onChange={handleOnMmChange}
            rightSection={<Text>mm</Text>}
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

export default MmToPxConverter;
