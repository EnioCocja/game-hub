import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { BsMoonFill, BsSun, BsSunFill } from "react-icons/bs";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Text whiteSpace={"nowrap"}>
        <BsSunFill />
      </Text>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace={"nowrap"}>
        <BsMoonFill />
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
