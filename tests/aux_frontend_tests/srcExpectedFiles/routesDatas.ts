import path from "path";
import { srcRoutesPath } from "../foldersDatas";
import { expandToString } from "../../../src/util/template-string";


export const srcRoutesFiles: { [key: string]: string } = {};

srcRoutesFiles[path.join(srcRoutesPath, "index.ts")] = expandToString`
import { type RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import Login from '@/views/Login.vue'



export const routes: RouteRecordRaw[] = [
  {
    name: 'login',
    path: '/',
    // impedindo que o usuario navege para a pagina de login
    // se estiver logado
    beforeEnter: () => {
      const auth = useAuthStore()
      if (auth.estaLogado()) {
        return { name: 'entidade1-home' }
      }
      return true

    },
    component: Login
  }
]`;