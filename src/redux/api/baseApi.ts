import { fetchBaseQuery } from "@reduxjs/toolkit/query"
import {createApi} from "@reduxjs/toolkit/query/react"

export const baseApi = createApi({ 
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://library-mgt-api.vercel.app/api"}),
    endpoints: (builder) => ({
       getBooks: builder.query({
        query: () => "/books",
       }),
    }),
   
})
 console.log(baseApi);

export const {useGetBooksQuery} = baseApi

