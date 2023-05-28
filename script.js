//your JS code here. If required.
let array = [];
let prom1 = new Promise((resolve , reject)=>{

  setTimeout(()=>{
    resolve();
  }, 1000);

});
array.push(prom1);

let prom2 = new Promise((resolve , reject)=>{
  
  setTimeout(()=>{
    resolve();
  }, 2000);

});
array.push(prom2);

let prom3 = new Promise((resolve , reject)=>{
  
  setTimeout(()=>{
    resolve();
  }, 3000);

});
array.push(prom3);
      
let tablebody = document.getElementById("output");
tablebody.innerHTML = `
      <tr>
        <td>Loading...</td>
        <td>Loading...</td>
		  </tr>`;

let result = Promise.all(array);
results.then(()=>{
  console.log(results)
  tablebody.innerHTML = '';

  for(let i = 0 ; i< results.length; i++){
    let row = document.createElement("tr");
    let promiseCell = document.createElement("td");
    promiseCell.innerText = "Promise " + (i + 1);

    let timeCell = document.createElement("td");
    timeCell.innerText = results[i];
    row.appendChild(promiseCell);
    row.appendChild(timeCell);
    tablebody.appendChild(row);
  }
});

//  // Add the "Total" row
//     const totalRow = document.createElement('tr');
//     const totalCell = document.createElement('td');
//     totalCell.textContent = 'Total';
//     const totalTimeCell = document.createElement('td');
//     const totalTime = results.reduce((acc, time) => acc + time, 0);
//     totalTimeCell.textContent = totalTime.toFixed(3);
//     totalRow.appendChild(totalCell);
//     totalRow.appendChild(totalTimeCell);
//     tableBody.appendChild(totalRow);
 
//   .catch((error) => {
//     console.error(error);
//   });