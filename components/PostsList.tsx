import { Link, List } from "@chakra-ui/react";
import { GetPostsQuery, GetPostsQueryVariables } from "@components/types";
import ListItem from "@material-ui/core/ListItem";
import React from "react";
import { gql, useQuery } from "@apollo/client";

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
  const { data } = useQuery<GetPostsQuery, GetPostsQueryVariables>(query);
  if (!data?.Posts) return null;
  return (
    <List spacing={3}>
      {data.Posts.map((post, index) => (
        <ListItem key={post?.id}>
          <Link onClick={() => post?.id && updatePostId(post.id)}>
            {post?.title}
          </Link>
        </ListItem>
      ))}
    </List>
  );
}
