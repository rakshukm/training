let num=prompt('enter number')
if(num==0)
{
    console.log('factorial is 1')
}
else if(num<0)
{
    console.log('negative number does not hv factorial')
}
else{
    let fact=1
    for(i=1;i<=num;i++){
        fact=fact*i  
    }
    

console.log(fact)
}