import { fetchBaseQuery } from "@reduxjs/toolkit/query"
import {createApi} from "@reduxjs/toolkit/query/react"

export const baseApi = createApi({ 
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://library-mgt-api.vercel.app/api"}),
    endpoints: (builder) => ({
       getBooks: builder.query({
        query: () => "/books",
       }),
       //mutation
       createBooks: builder.mutation({
        query: (bookData) => ({
        url:"/books",
        method: "POST",
        body: bookData
        }),
        
       }),
    //    createBooks: builder.mutation({
    //     query: (bookData) => {
    //     console.log('Posting body:', bookData);
    //     return {
    //       url: '/books',
    //       method: 'POST',
    //       body: bookData,
    //     };
    //   },
    //    })

    }),
   
})
 console.log(baseApi);

export const {useGetBooksQuery, useCreateBooksMutation} = baseApi

