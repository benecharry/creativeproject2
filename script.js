function onClick(e) {
    e.preventDefault();
    
    let url = "https://dog.ceo/api/breeds/image/random"
    // call API
    fetch(url)
      .then(function(response) {
        // make sure the request was successful
        if (response.status != 200) {
          return {
            text: "Error calling the Dog API service: " + response.statusText
          }
        }
        return response.json();
      }).then(function(json) {
        // update DOM with response
        updateResult(json["message"]);
      });
  }
  
  function updateResult(info) {
    document.getElementById('result').src = info;
  }
  
  document.getElementById('getImage').addEventListener('click', onClick);