import { baseApi } from "../../api/baseApi";

const donateApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addDonate: builder.mutation({
      query: (body) => ({
        url: "/donate/create-donate",
        method: "POST",
        body,
      }),
    }),
    getAllDonate: builder.query({
      query: () => ({
        url: "/donate/allDonate",
        method: "POST",
      }),
    }),

    initPayment: builder.mutation({
      query: (paymentData) => ({
        url: "/donate/init-payment",
        method: "POST",
        body: paymentData,
      }),
    }),
  }),
});
export const {
  useAddDonateMutation,
  useGetAllDonateQuery,
  useInitPaymentMutation,
} = donateApi;
