import fs from "fs";
import { createPath } from "../../../util/generator-utils.js";
import { expandToString } from "../../../util/template-string.js";
import path from "path";
import SEON from "seon-lib-implementation";

export function generate(project_abstraction: SEON.ProjectAbstraction, target_folder: string) : void {

    const target_folder_public = createPath(target_folder, "public")
    const assets = createPath(target_folder_public, "assets")
    const images = createPath(assets, "images")

    fs.mkdirSync(target_folder_public, {recursive:true})
    fs.mkdirSync(assets, {recursive:true})
    fs.mkdirSync(images, {recursive:true})
    
    fs.writeFileSync(path.join(target_folder_public, 'favicon.png'), generateFavicon());

}  

function generateFavicon(): string {
    return expandToString``
} 