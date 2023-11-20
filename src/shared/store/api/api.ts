import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { TPost } from '../../types/Post';

const URL = 'https://jsonplaceholder.typicode.com/posts';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({
    getPostById: builder.query<TPost, number>({
      query: (id) => `/${id}`,
    }),
    getPosts: builder.query<TPost[], number>({
      query: (prevId) => `?_start=${prevId}&_limit=10`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems)
      },
    }),
  }),
})

export const { useGetPostByIdQuery, useGetPostsQuery } = postApi
