// Cases API - https://api.covid19india.org/data.json
// Zones API - https://api.covid19india.org/zones.json
// services API - https://api.covid19india.org/resources/resources.json

class covidTracker {
  constructor() {}

  async getCovidDetails() {
    // get covid-19 cases
    const covidData = await fetch(`https://api.covid19india.org/data.json`);
    
    
    // fetch covid-19 cases
    const covidDetails = await covidData.json();
    
    // console.log(covidZonesDetails);

    return covidDetails.statewise
        
  }  
  
}


class covidZoneTracker {
  constructor() {}
  
  async getZones() {

    // get covid-19 zones list
    const covidZonesData = await fetch('https://api.covid19india.org/zones.json');
    
    // fetch covid-19 zones
    const covidZonesDetails = await covidZonesData.json();

    return covidZonesDetails

  }
}  

class covidServices {
  constructor() {} 

  async getServices() {
    const covidServicesData = await fetch('https://api.covid19india.org/resources/resources.json');

    const covidServicesDetails = await covidServicesData.json();

    // console.log(covidServicesDetails);

    return covidServicesDetails.resources
  }
}