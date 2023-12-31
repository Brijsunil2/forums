import { apiSlice } from "./apiSlice";
const FORUMS_URL = "/api/forums";

export const forumsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createForum: builder.mutation({
      query: (data) => ({
        url: `${FORUMS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateForumMutation } = forumsApiSlice;