fetch("https://data.covid19india.org/data.json")
    .then( response => {
      return response.json();
    })
    .then( data => {
      console.log(data.statewise[0]);
      document.getElementById("recovered").innerHTML = data.statewise[0].recovered;
      document.getElementById("confirmed").innerHTML = data.statewise[0].confirmed;
      document.getElementById("deaths").innerHTML = data.statewise[0].deaths;
      document.getElementById("active").innerHTML = data.statewise[0].active;
      document.getElementById("lastupdatedtime").innerHTML = data.statewise[0].lastupdatedtime;
      
    });