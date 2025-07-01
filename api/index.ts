// src/lib/api-client/api.ts
import { Configuration, DefaultApi } from './generated'

const configuration = new Configuration({
  basePath: process.env.NEXT_PUBLIC_API_BASE_URL,
})

export const apiClient = new DefaultApi(configuration)
