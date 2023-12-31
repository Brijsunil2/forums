import { apiSlice } from "./apiSlice";
const FORUMS_URL = "/api/forums";

export const forumsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createForum: builder.mutation({
      query: (data) => ({
        url: `${FORUMS_URL}/create-forum`,
        method: "POST",
        body: data,
      }),
    }),
    getForums: builder.mutation({
      query: (data) => ({
        url: `${FORUMS_URL}/${data.skip}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateForumMutation, useGetForumsMutation } = forumsApiSlice;