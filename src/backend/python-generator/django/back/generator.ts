import { Model } from "../../../models/model.js";
import { generateModuleGenerator } from "./components/index.js";
import {generate as generateSettings} from "./setting-generator.js"
import {generateBDD} from "./bdd/index.js"
import fs from "fs";

export function generate(model: Model, target_folder: string) : void {
    
    generateSettings(model, target_folder)
    generateModuleGenerator(model,target_folder)
    generateBDD(model,target_folder)

}
