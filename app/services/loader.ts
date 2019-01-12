import { readdirSync, statSync } from 'fs';

export const loader = (path: string, router?) => {

    readdirSync(path).forEach((file) => {
        let newPath: string = path + file;
        let stat = statSync(newPath);
        
        if(stat.isFile()) {
            require(newPath)(router);
        } else if(stat.isDirectory()) {
            loader(newPath, router);
        }

    });
}

