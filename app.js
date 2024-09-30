fetch(url, options)
    .then(response => response.json())   // Parse the response as JSON
    .then(data => console.log(data))     // Handle the data
    .catch(error => console.error('Error:', error));  // Handle errors

    fetch('https://api.example.com/data')
    .then(response => response.json())   // Convert the response to JSON
    .then(data => console.log(data))     // Log the data to the console
    .catch(error => console.error('Error:', error));  // Log any errors


    fetch('https://api.example.com/submit', {
      method: 'POST',            // Set the HTTP method to POST
      headers: {
          'Content-Type': 'application/json'  // Specify that we are sending JSON data
      },
      body: JSON.stringify({     // Convert the JavaScript object to a JSON string
          name: 'John Doe',
          age: 30
      })
  })
      .then(response => response.json())   // Parse the response as JSON
      .then(data => console.log('Success:', data))  // Handle the response data
      .catch(error => console.error('Error:', error));  // Handle any errors

      
      fetch('https://api.example.com/submit', {
        method: 'POST',            // Set the HTTP method to POST
        headers: {
            'Content-Type': 'application/json'  // Specify that we are sending JSON data
        },
        body: JSON.stringify({     // Convert the JavaScript object to a JSON string
            name: 'John Doe',
            age: 30
        })
    })
        .then(response => response.json())   // Parse the response as JSON
        .then(data => console.log('Success:', data))  // Handle the response data
        .catch(error => console.error('Error:', error));  // Handle any errors

        
        fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
