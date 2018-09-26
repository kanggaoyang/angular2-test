const fs = require('fs');

const readFile = function(fileName){
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName,(err,data)=>{
            if(err) reject(err);
            resolve(data);
        })
    })
}



async function fn(){  // 表示异步，这个函数里面有异步任务
    try {
        let f1 = await readFile('data/a.txt');  // 表示后面结果需要等待
        let f2 = await readFile('data/b.txt');
        let f3 = await readFile('data/c.txt');
        console.log(f1.toString());
        console.log(f2.toString());
        console.log(f3.toString());
    } catch (error) {
        
    }
    
}
fn();