let recoveryArr = [ ];
let zoneArr = [ ];
let table = document.getElementById('covidResult');

// console.log(table);
// console.log(covidTable);

// UI Class
class UI {
  constructor() {}
  
  
  showCovidResults(data) {
        
    if(document.getElementById('covidResult')) { 
      data.forEach((list) => {

        // console.log(list);
        const active = list.active;
        const recovered = list.recovered;
        const death = list.deaths;
        const totalCases = list.confirmed;
                
        let recoveryRate = Math.floor((recovered / totalCases) * 100);
                
        recoveryArr.push(recoveryRate);

        table.innerHTML += `
        <tr>
          <td>${list.state}</td>
          <td>${list.confirmed}</td>
          <td>${list.active}</td>
          <td>${list.recovered}</td>
          <td>${list.deaths}</td>
          <td>${recoveryRate}%</td>
        </tr> 
        `;
        // console.log(data.length);
        
        if(list.state === 'State Unassigned') {
          // console.log(table.children)
          table.children;
        }
      }); 
  }
    
  }


  showStages(data) {
    if(document.getElementById('covidResult')) {
      const tableElement = table.children;
      
      // console.log(recoveryArr);

      for(let i=1; i<tableElement.length; i++) {
        
        if(recoveryArr[i] >= 70) {
            tableElement[i].classList.add('table-success');
        }
        else if(recoveryArr[i] > 50 && recoveryArr[i] <70) {
            tableElement[i].classList.add('table-primary');
        }
        else  {
            tableElement[i].classList.add('table-danger');
        }
        
      }
    }

  }

  showZones(data) {
    if(document.getElementById('covidZones')) {
      const zoneList = document.getElementById('covidZones');
      let zoneTable = document.getElementById('covidZoneTable');

      zoneList.addEventListener('keyup', (e) => {
        const text = e.target.value.toLowerCase();
        const dist = data.zones;
         if(text.length >=2) { 
           zoneTable.innerHTML = "";
           zoneArr = [ ];
          for(let i=0; i < dist.length; i++) {

            if(dist[i].district.toLowerCase().indexOf(text) != -1) {
              // console.log(districts);
              zoneTable.innerHTML += `
              <tr class="show pb-2">
              <td>${dist[i].district}</td>
              <td>${dist[i].state}</td>
              <td>(${dist[i].statecode})</td>
              <td class="mx-auto">${dist[i].zone} Zone</td>
              </tr>    
              `;
  
              zoneArr.push(dist[i].zone);
              // console.log(zoneArr);

            } 
            
          }

          const test = zoneTable.children;
          for(let i=0; i<test.length; i++) {

            if(zoneArr[i] === 'Red') {
                  zoneTable.children[i].classList.add('table-danger');
                }
                if(zoneArr[i] === 'Green') {
                  zoneTable.children[i].classList.add('table-success');
                }
                if(zoneArr[i] === 'Orange') {
                  zoneTable.children[i].classList.add('table-warning');
                }
          }
          
         
        }

        if(text === '') {
          zoneTable.innerHTML = '';
        }

        e.preventDefault();
      });

    }
  }

  showServices(data) {
    // console.log(data);
    if(document.getElementById('covidServices')) {
      const serviceSearch = document.getElementById('covidServices');
      const serviceCard = document.getElementById('covidServiceCard');
      
      serviceSearch.addEventListener('keyup', (e) => {
        const text = e.target.value.toLowerCase();
        // console.log(text);
        if(text.length >= 3) {
          // console.log(data);
          serviceCard.innerHTML = '';
          data.forEach((list) => {
            // console.log(list);
            if(list.city.toLowerCase().indexOf(text) != -1) {

              serviceCard.innerHTML += `
              
              <div class="card text-light bg-success mb-3" style="width: 100%; height: 100%;">
              <div class="card-header">
                <h6>${list.category} (${list.city}, ${list.state})</h6>
              </div>
              <div class="card-body">
                <h4 class="card-title">${list.nameoftheorganisation}</h4>
                <p class="card-text">${list.descriptionandorserviceprovided}</p>
              </div>
              <div class="card-header">
                <a href="${list.contact}" target="_blank" class=""><button type="button" class="btn btn-light text-dark">Connect</button></a>
                <h6 class=" phone"><i class="fas fa-phone-alt" style="margin-right: 5px;"></i>${list.phonenumber}</h6>
              </div>
            </div>              

              `;

            }

          })
        }

        if(text === '') {
          serviceCard.innerHTML = '';
        }
      });
    }
  }
  
}
