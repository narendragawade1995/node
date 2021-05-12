console.log("Step 1");

const fetchData = (callback) =>{
    setTimeout(()=>{
        callback("Done!");
    },1500);
}
setTimeout(()=>{
    console.log("Step 2");
    fetchData(text =>{
        console.log(text);
        fetchData(text2 =>{
            console.log(text2);
        })
    })
},2000);

console.log("Step 3");