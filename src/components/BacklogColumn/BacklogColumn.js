import React from "react";
import { Stack, Button, Flex, Text } from "@ableco/baseline";
import { ReactComponent as CloseIcon } from "icons/close.svg";
import { Lock } from "@baseline/icons";

const BacklogColumn = () => {
  return (
    <>
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
          <Flex>
            <Lock className="w-6 h-6 fill-current text-neutral-400" />
            <Text className="text-primary-base">
              <Text>
                <CloseIcon width="22" height="22" />
              </Text>
            </Text>
          </Flex>
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
    </>
  );
};
export default BacklogColumn;
