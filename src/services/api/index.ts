import {
    BaseQueryFn,
    createApi,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

const baseQuery = fetchBaseQuery({
    baseUrl: "https://landearn.bumasys.com/",
    prepareHeaders: (headers, { getState }) => {
        headers.set("Content-Type", "application/json");
        headers.set("Accept", "application/json");
        return headers;
    },
});

const baseQueryWithInterceptor: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    return result;
};

export const api = createApi({
    baseQuery: baseQueryWithInterceptor,
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    endpoints: (build) => ({
        // omitted
    }),
});
