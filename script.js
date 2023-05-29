let promiseArray = [];
// { name: "Promise 1" , timeTaaken: "1"}

let minTime , maxTime;
function addPromiseStatus(name,start, end) {
if(!minTime){
  minTime = start;
}
maxTime = end;
  promiseArray.push({ name ,time: (end-start)/1000 } );
}

let start1 = new Date().getTime(); 
//milli sec  Jan1 1970
let prom1 = new Promise((resolve , reject)=>{

  setTimeout(()=>{
    resolve();
    let end1 = new Date().getTime(); 
    addPromiseStatus("Promise 1", start1, end1);
  }, 2000);

});

let start2 = new Date().getTime(); 
let prom2 = new Promise((resolve , reject)=>{
  
  setTimeout(()=>{
    resolve();
    let end2 = new Date().getTime(); 
    addPromiseStatus("Promise 2", start2, end2);
  }, 1000);

});

let start3 = new Date().getTime(); 
let prom3 = new Promise((resolve , reject)=>{
  
  setTimeout(()=>{
    resolve();
    let end3 = new Date().getTime(); 
    addPromiseStatus("Promise 3", start3, end3);
  }, 3000);

});

let results = Promise.all([prom1,prom2,prom3]);
results.then(()=>{
  addToTable(promiseArray);
})

let tablebody = document.getElementById("output");

function addToTable(list) {
  tablebody.innerHTML = '';
  for(let i = 0 ; i< list.length; i++){
    let tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${list[i].name}</td>
            <td>${list[i].time.toFixed(0)}</td>`

    tablebody.append(tr);
  }
  // fourth row
  let tr = document.createElement("tr");
  tr.innerHTML = `
              <td>Total</td>
              <td>${(maxTime-minTime)/1000}</td>`;
  tablebody.appendChild(tr);
}


      
