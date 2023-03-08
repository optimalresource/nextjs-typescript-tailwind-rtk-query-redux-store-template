import { api } from ".";

// An example function to generate query string
const generateQueryStr = (baseString: string, query: Object): string => {
    const queryString: string =
        baseString +
        Object.entries(query)
            .map(([key, value]) => `${key}=${value}`)
            .join("&");

    return queryString;
};

export const waitlistEndpoint = api.injectEndpoints({
    overrideExisting: true,
    endpoints: (build) => ({
        addWaitlist: build.mutation({
            query: (data) => ({
                url: `/waitlist`,
                method: "POST",
                body: data,
            }),
        }),
        getWaitlistDetails: build.query<any, Object>({
            // An example to use query params from the generated query string.
            query: (queryParams) => {
                const queryStr = generateQueryStr("waitlists?", queryParams);

                return { url: queryStr };
            },
        }),
    }),
});

export const {
    useAddWaitlistMutation,
    useGetWaitlistDetailsQuery
} = waitlistEndpoint;
