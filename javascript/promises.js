// function checkbalance(){
//     console.log('checking money')
//     function delay(){
//         console.log('money')
//         console.log('thank you')
    


//     }
//     delay()
// }


// let promise = new Promise((resolve,reject) =>
// {
//     setTimeout(() => resolve(console.log('please wait')),3000)
// })
// let promise1 = new Promise((resolve,reject) =>
// {
//     setTimeout(() => resolve(console.log('please wait')),3000)
// })
// async function asyncfunction(){
//     await promise
//     console.log('some action')
//     // setTimeout(() => console.log('please wait'),3000)
//     await promise1
//     console.log('some action')





// }
// asyncfunction()
// console.log('enter money')


let promise3=new Promise((resolve,reject) =>{

    let fileupload=false
    if(fileupload){
        resolve(console.log('file upload'))
    }
    else{
        reject(console.log('error'))
    }

}
)
promise3
        .then(() => console.log('the file has been uploaded'))
         .catch(() => console.log('please try again'))


