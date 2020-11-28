// instantiate covidTracker
const covid = new covidTracker

// instantiate covidZoneTracker
const zones = new covidZoneTracker

// instantiate covidZoneTracker
const services = new covidServices

// instantiate UI
const ui = new UI;


// call getCovidDetails 
covid.getCovidDetails()
.then(data => {
    // call showCovidResults to show on UI
    ui.showCovidResults(data);
    // call showStages() to show crucial stages on UI
    ui.showStages(data);
});

zones.getZones()
.then(data => {
    // console.log(data)
    ui.showZones(data); 
});

services.getServices()
.then(data => {
    ui.showServices(data);
});