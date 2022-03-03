import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/' }),
  endpoints: (build) => ({
    getProduct: build.query({
      query: () => `products`,
    }),
    addProduct:build.mutation({
  
        query:(body) => ({
            url: 'products',
            method: 'POST',
            body,
            
        })
    })
  }),
});


export const {useGetProductQuery, useAddProductMutation} = productApi
