import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createReciver: builder.mutation({
      query: (body) => ({
        url: "/users/create-zakat-reciver",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const { useCreateReciverMutation } = authApi;
