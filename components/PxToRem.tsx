import { Box, Input, InputWrapper } from "@mantine/core";
import { useForm } from "react-hook-form";

const defaultValues = {
  px: "16",
  rem: "1",
  rootFontSize: "16",
};

const PxToRem = () => {
  const { register } = useForm({ defaultValues });

  return (
    <Box>
      <InputWrapper id="px" label="px">
        <Input id="px" {...register("px")} />
      </InputWrapper>
      <InputWrapper id="rem" label="rem">
        <Input id="rem" {...register("rem")} />
      </InputWrapper>
      <InputWrapper id="rootFontSize" label="root font size">
        <Input id="rootFontSize" {...register("rootFontSize")} />
      </InputWrapper>
    </Box>
  );
};

export default PxToRem;
