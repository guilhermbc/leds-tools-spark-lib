import path from "path";
import { srcUtilsPath } from "../foldersDatas";
import { expandToString } from "../../../src/util/template-string";


export const srcUtilsFiles: { [key: string]: string } = {};


srcUtilsFiles[path.join(srcUtilsPath,"regras.ts")] = expandToString`
export type ValidationResult = string | boolean;
export type ValidationResultFunction = (value: any) => ValidationResult
// type ValidationResultFunction = (value: any) => ValidationResult


export const campoNecessario: ValidationResultFunction = (campo) => {
  if (!!campo) {
    return true
  }
  return 'Este campo é necessário.'
}

export const minimo3caracteres: ValidationResultFunction = (texto) => {
  if (texto.length >= 3) {
    return true
  }
  return 'Este campo deve possuir pelo menos 3 caracteres.'
}
// Note que cada regra é responsável por um tipo de validação, sem interseção.
export const caracteresEspeciais: ValidationResultFunction = (senha) => {
  if (/[!@#\\$%\\^]/.test(senha)) {
    return true
  }
  return 'A senha deve possuir caracteres especiais como: ! @ # $ % ^'
}`;