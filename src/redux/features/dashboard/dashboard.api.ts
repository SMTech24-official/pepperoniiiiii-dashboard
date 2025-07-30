import baseApi from "@/redux/api/baseApi";
import { TQueryParams } from "@/types/global.type";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    overView: builder.query({
      query: () => ({
        url: "/dashboard/overview",
        method: "GET",
      }),
    }),

    chart: builder.query({
      query: () => ({
        url: "/dashboard/revenue-chart",
        method: "GET",
      }),
    }),

    allUser: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/users",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["User"],
    }),

    allOrders: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/purchase-product",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["User"],
    }),

    blockUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["User"],
    }),

  }),
});

export const {
  useOverViewQuery,
  useChartQuery,
  useAllOrdersQuery,
  useAllUserQuery,
  useBlockUserMutation
} = authApi;
