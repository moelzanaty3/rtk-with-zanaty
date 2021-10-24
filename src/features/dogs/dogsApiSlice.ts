import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IDog } from '../../interfaces/IDog'

const DOGS_API_KEY = 'c74ee653-3552-4f47-a703-feae3606401c'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thedogapi.com/v1',
    prepareHeaders(headers) {
      headers.set('x-api-key', DOGS_API_KEY)
      return headers
    },
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<IDog[], number | void>({
        query(limit = 10) {
          return `/breeds?limit=${limit}`
        },
      }),
    }
  },
})

export const { useFetchBreedsQuery } = apiSlice
