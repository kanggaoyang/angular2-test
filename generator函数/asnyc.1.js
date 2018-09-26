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
   let [a,b,c] = await Promise.all([
        readFile('data/a.txt'),  
        readFile('data/b.txt'),  
        readFile('data/c.txt')])
    console.log(a.toString());
    console.log(b.toString());
    console.log(c.toString());
    
}
fn();