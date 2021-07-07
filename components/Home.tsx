import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";

import AddPost from "./AddPost";
import Post from "./Post";
import PostsList from "./PostsList";

export default function Home() {
  const [postId, setPostId] = useState<string | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  return (
    <>
      <Flex>
        <Box width="20%" p="3" borderRight="1px solid gray" height="100vh">
          <Button
            colorScheme={"blue"}
            onClick={() => setShowAddModal(true)}
            m="5"
          >
            Add Post
          </Button>
          <PostsList updatePostId={setPostId} />
        </Box>
        <Box flex="1" p="3">
          {postId ? <Post postId={postId} /> : "Select a post"}
        </Box>
      </Flex>
      {showAddModal && <AddPost closeModal={() => setShowAddModal(false)} />}
    </>
  );
}
