import React from "react";
import { Stack, Flex } from "@ableco/baseline";
import BacklogColumn from "components/BacklogColumn";

const Dashboard = () => (
  <Flex className="h-screen flex-grow" direction="vertical">
    <Flex
      as="header"
      className="text-white w-full h-header items-center py-2 px-4 bg-background"
    >
      header
    </Flex>
    <Flex as="section" className="w-full bg-neutral-100 flex-grow h-body">
      <Flex
        direction="vertical"
        className="p-6 w-4/12 border-solid border-r h-body border-neutral-200"
      >
        <BacklogColumn />
      </Flex>
      <Stack className="p-6 h-full flex-grow">Body</Stack>
    </Flex>
  </Flex>
);

export default Dashboard;
