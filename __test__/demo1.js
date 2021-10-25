function * gen() {
    console.log(1)
    let v =   yield   
    console.log(v)

    console.log(2)
    yield  
    console.log(3)
    yield 
}


let g = gen() 


 console.log(g.next('a')) 
 console.log(g.next('a')) 