import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID'];
  post_id: Scalars['ID'];
  body: Scalars['String'];
  Post?: Maybe<Post>;
};

export type CommentFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id?: Maybe<Scalars['ID']>;
  post_id?: Maybe<Scalars['ID']>;
  body?: Maybe<Scalars['String']>;
  id_neq?: Maybe<Scalars['ID']>;
  post_id_neq?: Maybe<Scalars['ID']>;
  body_neq?: Maybe<Scalars['String']>;
};

export type CommentInput = {
  id: Scalars['ID'];
  post_id: Scalars['ID'];
  body: Scalars['String'];
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost?: Maybe<Post>;
  createManyPost?: Maybe<Array<Maybe<Post>>>;
  updatePost?: Maybe<Post>;
  removePost?: Maybe<Post>;
  createUser?: Maybe<User>;
  createManyUser?: Maybe<Array<Maybe<User>>>;
  updateUser?: Maybe<User>;
  removeUser?: Maybe<User>;
  createComment?: Maybe<Comment>;
  createManyComment?: Maybe<Array<Maybe<Comment>>>;
  updateComment?: Maybe<Comment>;
  removeComment?: Maybe<Comment>;
};


export type MutationCreatePostArgs = {
  title: Scalars['String'];
  text: Scalars['String'];
  views: Scalars['Int'];
  user_id: Scalars['ID'];
};


export type MutationCreateManyPostArgs = {
  data?: Maybe<Array<Maybe<PostInput>>>;
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['ID']>;
};


export type MutationRemovePostArgs = {
  id: Scalars['ID'];
};


export type MutationCreateUserArgs = {
  name: Scalars['String'];
};


export type MutationCreateManyUserArgs = {
  data?: Maybe<Array<Maybe<UserInput>>>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};


export type MutationRemoveUserArgs = {
  id: Scalars['ID'];
};


export type MutationCreateCommentArgs = {
  post_id: Scalars['ID'];
  body: Scalars['String'];
};


export type MutationCreateManyCommentArgs = {
  data?: Maybe<Array<Maybe<CommentInput>>>;
};


export type MutationUpdateCommentArgs = {
  id: Scalars['ID'];
  post_id?: Maybe<Scalars['ID']>;
  body?: Maybe<Scalars['String']>;
};


export type MutationRemoveCommentArgs = {
  id: Scalars['ID'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  title: Scalars['String'];
  text: Scalars['String'];
  views: Scalars['Int'];
  user_id: Scalars['ID'];
  User?: Maybe<User>;
  Comments?: Maybe<Array<Maybe<Comment>>>;
};

export type PostFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  title_neq?: Maybe<Scalars['String']>;
  text_neq?: Maybe<Scalars['String']>;
  views_lt?: Maybe<Scalars['Int']>;
  views_lte?: Maybe<Scalars['Int']>;
  views_gt?: Maybe<Scalars['Int']>;
  views_gte?: Maybe<Scalars['Int']>;
  views_neq?: Maybe<Scalars['Int']>;
  user_id_neq?: Maybe<Scalars['ID']>;
};

export type PostInput = {
  id: Scalars['ID'];
  title: Scalars['String'];
  text: Scalars['String'];
  views: Scalars['Int'];
  user_id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  Post?: Maybe<Post>;
  allPosts?: Maybe<Array<Maybe<Post>>>;
  _allPostsMeta?: Maybe<ListMetadata>;
  User?: Maybe<User>;
  allUsers?: Maybe<Array<Maybe<User>>>;
  _allUsersMeta?: Maybe<ListMetadata>;
  Comment?: Maybe<Comment>;
  allComments?: Maybe<Array<Maybe<Comment>>>;
  _allCommentsMeta?: Maybe<ListMetadata>;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
};


export type QueryAllPostsArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<PostFilter>;
};


export type Query_AllPostsMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<PostFilter>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryAllUsersArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<UserFilter>;
};


export type Query_AllUsersMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<UserFilter>;
};


export type QueryCommentArgs = {
  id: Scalars['ID'];
};


export type QueryAllCommentsArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<CommentFilter>;
};


export type Query_AllCommentsMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<CommentFilter>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  Posts?: Maybe<Array<Maybe<Post>>>;
};

export type UserFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  id_neq?: Maybe<Scalars['ID']>;
  name_neq?: Maybe<Scalars['String']>;
};

export type UserInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type AddPostMutationVariables = Exact<{
  title: Scalars['String'];
  text: Scalars['String'];
}>;


export type AddPostMutation = (
  { __typename?: 'Mutation' }
  & { createPost?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id'>
  )> }
);

export type GetPostQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPostQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'title' | 'text' | 'id'>
  )> }
);

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = (
  { __typename?: 'Query' }
  & { Posts?: Maybe<Array<Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'text' | 'title' | 'id'>
  )>>> }
);


declare module '*/AddPost.tsx' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const AddPost: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/Post.tsx' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getPost: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/PostsList.tsx' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const GetPosts: DocumentNode;

  export default defaultDocument;
}
    

export const AddPost = gql`
    mutation AddPost($title: String!, $text: String!) {
  createPost(title: $title, text: $text, views: 0, user_id: 1) {
    id
  }
}
    `;
export const GetPost = gql`
    query getPost($id: ID!) {
  post: Post(id: $id) {
    title
    text
    id
  }
}
    `;
export const GetPosts = gql`
    query GetPosts {
  Posts: allPosts {
    text
    title
    id
  }
}
    `;
import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": {
      "name": "Mutation"
    },
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "Comment",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "post_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "body",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "Post",
            "type": {
              "kind": "OBJECT",
              "name": "Post",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ListMetadata",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "fields": [
          {
            "name": "createPost",
            "type": {
              "kind": "OBJECT",
              "name": "Post",
              "ofType": null
            },
            "args": [
              {
                "name": "title",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "text",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "views",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "user_id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createManyPost",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Post",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updatePost",
            "type": {
              "kind": "OBJECT",
              "name": "Post",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "title",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "text",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "views",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "user_id",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "removePost",
            "type": {
              "kind": "OBJECT",
              "name": "Post",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createUser",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "name",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createManyUser",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateUser",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "name",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "removeUser",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createComment",
            "type": {
              "kind": "OBJECT",
              "name": "Comment",
              "ofType": null
            },
            "args": [
              {
                "name": "post_id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "body",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createManyComment",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Comment",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateComment",
            "type": {
              "kind": "OBJECT",
              "name": "Comment",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "post_id",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "body",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "removeComment",
            "type": {
              "kind": "OBJECT",
              "name": "Comment",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Post",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "text",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "views",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "user_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "User",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "Comments",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Comment",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "Post",
            "type": {
              "kind": "OBJECT",
              "name": "Post",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "allPosts",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Post",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "page",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "perPage",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortField",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortOrder",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "filter",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "_allPostsMeta",
            "type": {
              "kind": "OBJECT",
              "name": "ListMetadata",
              "ofType": null
            },
            "args": [
              {
                "name": "page",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "perPage",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "filter",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "User",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "allUsers",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "page",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "perPage",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortField",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortOrder",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "filter",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "_allUsersMeta",
            "type": {
              "kind": "OBJECT",
              "name": "ListMetadata",
              "ofType": null
            },
            "args": [
              {
                "name": "page",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "perPage",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "filter",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "Comment",
            "type": {
              "kind": "OBJECT",
              "name": "Comment",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "allComments",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Comment",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "page",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "perPage",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortField",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortOrder",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "filter",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "_allCommentsMeta",
            "type": {
              "kind": "OBJECT",
              "name": "ListMetadata",
              "ofType": null
            },
            "args": [
              {
                "name": "page",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "perPage",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "filter",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "User",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "Posts",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Post",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;