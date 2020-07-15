import React from "react";
import MyButton from "components/shared/Button";
import { Stack, Flex, Text, Button } from "@ableco/baseline";

const Home = () => (
  <>
    <Text as="h2">My Button</Text>
    <MyButton>My button</MyButton>
    <Text as="h2">Buttons demo</Text>
    <Button color="secondary">Button secondary</Button>
    <Button color="tertiary">Button tertiary</Button>
    <Text as="h2">Flex demo</Text>
    <Flex direction="horizontal">
      <Stack>
        <Button>Button default inside a Stack component</Button>
      </Stack>
      <Button>Button default</Button>
    </Flex>
  </>
);

export default Home;
