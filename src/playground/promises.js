const promise= new Promise((resolve,reject)=>{
 resolve('this is resolved data');
});

promise.then((data) => {
    console.log(data);
}).catch((error)=> {
    console.log('its an error');
});