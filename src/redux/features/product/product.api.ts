import baseApi from "@/redux/api/baseApi";
import { TQueryParams } from "@/types/global.type";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allProduct: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/product",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["User"],
    }),

    addProduct: builder.mutation({
      query: (data) => ({
        url: "/product",
        method: "POST",
        body: data,
      }),
    }),

  }),
});

export const { useAllProductQuery, useAddProductMutation  } = productApi;
