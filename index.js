import promise from './node_modules/mypromise/index.js' 

export {
    async_,
    promise
}

function async_(generator) {     

    const isValid = generator && "[object Generator]" === Object.prototype.toString
   .call(generator.prototype)   
   
   if(!isValid) throw new Error(`async_ typeError: 请传入生成器函数！错误类型 => ${generator}`) 
   const gen =  generator() 
   excutor( gen ,gen.next() ) 
   function excutor(gen,result) {    
       if(result.done) return void 0 
       promise.resolve(result.value).then(val=>{  
          excutor(gen,gen.next(val))
       })
       .catch(err=>{
           excutor(gen,gen.next(err))
       })   
   }
}




