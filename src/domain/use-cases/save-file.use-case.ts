import { string } from "yargs";
import fs from 'fs';


export interface SaveFileUseCase {
    execute: (options: Options) => boolean;
}

export interface Options {
    filecontent: string;
    destination?: string;
    fileName?: string;
}



export class SaveFile implements SaveFileUseCase {
    constructor(
        /**
         * repository: StoreRepository
         *  */
        ) {
        
    }

    execute({filecontent, destination = 'outputs', fileName = 'table'}: Options): boolean {
        try {
            fs.mkdirSync(destination, { recursive:true} )
            fs.writeFileSync(`${destination}/tabla-${fileName}.txt`, filecontent);
            console.log('File created!!!');
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}