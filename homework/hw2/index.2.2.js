const fs = require('fs');
const path = require('path');

const find_js = (root) => {
    fs.readdir(root, (err, filelist) => {
        //console.log(filelist);
        if (!err) {
            filelist.forEach(file => {
                const ext = path.extname(file);
                //console.log(file);
                //console.log(ext);
                if (!ext) find_js(path.join(root, file));
                else if (ext == ".js") console.log(path.join(root, file));
            });
        }
    })
};
find_js('./test');
//find_js('./test');