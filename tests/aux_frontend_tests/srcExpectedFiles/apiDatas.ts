import path from "path"
import { srcApiPath } from "../foldersDatas"
import { expandToString } from "../../../src/util/template-string"

export const srcApiFiles: { [key: string]:   string  } = {}


srcApiFiles[path.join(srcApiPath, "admin.ts")] = expandToString`
import axios from 'axios'
import { useUiStore } from '@/stores/ui'


// api para backend-admin, por isso adminApi.
export const adminApiConfig = {
  baseURL: import.meta.env.VITE_BACKEND_ADMIN_BASE_URL,
  headers: {
    'Authorization': ${generateBearer()}
  }
}

const adminApi = axios.create(adminApiConfig)

adminApi.interceptors.request.use((config) => {
  const ui = useUiStore()
  ui.carregando = true
  return config
}, (error) => {
  const ui = useUiStore()
  ui.carregando = false
  throw error
})

adminApi.interceptors.response.use((config) => {
  const ui = useUiStore()
  ui.carregando = false
  return config
}, (error) => {
  const ui = useUiStore()
  ui.carregando = false
  throw error
})

export default adminApi`

function generateBearer() : string {
    const str = "`" + "Bearer ${import.meta.env.VITE_BACKEND_ADMIN_AUTH_TOKEN}" + "`"
    return str
}