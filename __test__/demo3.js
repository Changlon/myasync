import {async_,promise} from "../index.js"  

async_(function *() {

    console.log(`测试async_ ... `) 
    let a = 1 
    let b = 2 

    let c =yield new promise((resolve,reject)=>{ 
        setTimeout(()=>{
            resolve(a+b)
        },1000) 
    })

    console.log(`计算结果a+b = ${c}`) 

    console.log(`请求后台数据...`) 

    let result = yield new promise((resolve,reject)=>{ 
            let r =  Math.floor(Math.random()*10)  
            if(r%2==0) {
                resolve({
                    code:200,
                    msg:'请求成功!',
                    data:[
                        {name:'changlon',age:21},
                        {name:'jack',age:25}
                    ]
                })
            }else{
                reject(new Error('网络请求失败!'))
            }
    })

    if(result && result.code==200) {
        console.log(`数据请求成功:${result.data}`)
    }else{
        console.log(`数据请求失败:${result}`)
    }

    console.log(`测试 async_ 完毕。`)

})
