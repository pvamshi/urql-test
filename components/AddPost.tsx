import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { AddPostMutation, AddPostMutationVariables } from "./types";

const AddPost = gql`
  mutation AddPost($title: String!, $text: String!) {
    createPost(title: $title, text: $text, views: 0, user_id: 123) {
      id
      title
      text
      views
      user_id
    }
  }
`;
export type AddPostProps = {
  closeModal: () => void;
};
export default function AddPostModal({ closeModal }: AddPostProps) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [addPost, addPostResult] = useMutation(AddPost, {
    onCompleted() {
      closeModal();
    },
    refetchQueries: ["GetPosts"],
    // update: (cache, mutationResult) => {
    //   const newPost = mutationResult.data.createPost;
    //   const data: { Posts: {}[] } | null = cache.readQuery({ query });
    //   cache.writeQuery({
    //     query,
    //     data: { Posts: [...(data ? data.Posts : []), newPost] },
    //   });
    // },
  });

  return (
    <Modal isOpen={true} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Post</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="Post title"
            m="3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Post content"
            m="3"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </ModalBody>

        <ModalFooter>
          <>
            <Button
              colorScheme="blue"
              mr={3}
              disabled={addPostResult.loading}
              onClick={() => {
                addPost({ variables: { title, text } });
              }}
            >
              {addPostResult.loading ? "Adding ..." : "Submit"}
            </Button>
            <Button
              variant="ghost"
              onClick={closeModal}
              disabled={addPostResult.loading}
            >
              Cancel
            </Button>
          </>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
