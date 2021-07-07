import { Link, List } from "@chakra-ui/react";
import { GetPostsQuery, GetPostsQueryVariables } from "@components/types";
import ListItem from "@material-ui/core/ListItem";
import React from "react";
import { gql, useQuery } from "urql";

const query = gql`
  query GetPosts {
    Posts: allPosts {
      text
      title
      id
    }
  }
`;
export type PostsListProps = { updatePostId: (postId: string) => void };
export default function PostsList({ updatePostId }: PostsListProps) {
  const [result] = useQuery<GetPostsQuery, GetPostsQueryVariables>({ query });
  const data = result.data?.Posts;
  return (
    <List spacing={3}>
      {data?.map((post, index) => (
        <ListItem key={post?.id}>
          <Link onClick={() => post?.id && updatePostId(post.id)}>
            {post?.title}
          </Link>
        </ListItem>
      ))}
    </List>
  );
}
