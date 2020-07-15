import React from "react";
import { Stack, Button, Flex, Text } from "@ableco/baseline";

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
        <Flex className="justify-between mb-6 w-full">
          <Text as="h1">Backlog</Text>
          <Button
            variant="solid"
            color="primary"
            className="rounded-lg py-2 px-4"
          >
            <Text color="white" size="s">
              + Add
            </Text>
          </Button>
        </Flex>
        <Stack className="overflow-auto flex-grow w-full">
          <Stack className="w-full bg-white px-4 py-2 rounded-md mb-2">
            OKRs Hierarchy
          </Stack>
          <Stack className="w-full bg-white px-4 py-2 rounded-md mb-2">
            OKRs Hierarchy
          </Stack>
          <Stack className="w-full bg-white px-4 py-2 rounded-md mb-2">
            OKRs Hierarchy
          </Stack>
          <Stack className="w-full bg-white px-4 py-2 rounded-md mb-2">
            OKRs Hierarchy
          </Stack>
          <Stack className="w-full bg-white px-4 py-2 rounded-md mb-2">
            OKRs Hierarchy
          </Stack>
          <Stack className="w-full bg-white px-4 py-2 rounded-md mb-2">
            OKRs Hierarchy
          </Stack>
          <Stack className="w-full bg-white px-4 py-2 rounded-md mb-2">
            OKRs Hierarchy
          </Stack>
          <Stack className="w-full bg-white px-4 py-2 rounded-md mb-2">
            OKRs Hierarchy
          </Stack>
          <Stack className="w-full bg-white px-4 py-2 rounded-md mb-2">
            OKRs Hierarchy
          </Stack>
          <Stack className="w-full bg-white px-4 py-2 rounded-md mb-2">
            OKRs Hierarchy
          </Stack>
          <Stack className="w-full bg-white px-4 py-2 rounded-md mb-2">
            OKRs Hierarchy
          </Stack>
          <Stack className="w-full bg-white px-4 py-2 rounded-md mb-2">
            OKRs Hierarchy
          </Stack>
          <Stack className="w-full bg-white px-4 py-2 rounded-md mb-2">
            OKRs Hierarchy
          </Stack>
          <Stack className="w-full bg-white px-4 py-2 rounded-md mb-2">
            OKRs Hierarchy
          </Stack>
          <Stack className="w-full bg-white px-4 py-2 rounded-md mb-2">
            OKRs Hierarchy
          </Stack>
          <Stack className="w-full bg-white px-4 py-2 rounded-md mb-2">
            OKRs Hierarchy
          </Stack>
          <Stack className="w-full bg-white px-4 py-2 rounded-md mb-2">
            OKRs Hierarchy
          </Stack>
          <Stack className="w-full bg-white px-4 py-2 rounded-md mb-2">
            OKRs Hierarchy
          </Stack>
        </Stack>
      </Flex>
      <Stack className="p-6 h-full flex-grow">Body</Stack>
    </Flex>
  </Flex>
);

export default Dashboard;
