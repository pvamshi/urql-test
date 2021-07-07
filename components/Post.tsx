import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { gql, useQuery } from "urql";

import { GetPostQuery, GetPostQueryVariables } from "./types";

const query = gql`
  query getPost($id: ID!) {
    post: Post(id: $id) {
      title
      text
      id
    }
  }
`;

export type PostProps = { postId: string };
export default function Post({ postId }: PostProps) {
  const [{ data }] = useQuery<GetPostQuery, GetPostQueryVariables>({
    query,
    variables: { id: postId },
  });

  return (
    <>
      <Heading p="5">{data?.post?.title}</Heading>
      <Box p="5">{data?.post?.text}</Box>
    </>
  );
}
