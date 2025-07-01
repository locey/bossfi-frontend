// src/lib/api-client/api.ts
import service from '@/utils/request'
import { DefaultApi } from './generated'

export const apiClient = new DefaultApi(undefined, undefined, service)
