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
import { gql, useMutation } from "urql";
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
  const [addPostResult, addPost] = useMutation<
    AddPostMutation,
    AddPostMutationVariables
  >(AddPost);

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
              disabled={addPostResult.fetching}
              onClick={() => {
                addPost({ title, text }).then((d) => {
                  // closeModal();
                  console.log("done", d);
                });
              }}
            >
              {addPostResult.fetching ? "Adding ..." : "Submit"}
            </Button>
            <Button
              variant="ghost"
              onClick={closeModal}
              disabled={addPostResult.fetching}
            >
              Cancel
            </Button>
          </>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
