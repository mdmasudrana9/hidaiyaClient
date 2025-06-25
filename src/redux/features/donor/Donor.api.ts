import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createDonor: builder.mutation({
      query: (body) => ({
        url: "/users/create-zakat-donor",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const { useCreateDonorMutation } = authApi;
