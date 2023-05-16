// Add your code here
function submitData(name, email) {
    let formData = {
       name: name,
       email: email
    }
    const configurationData = {
    method: 'POST',
    headers: {
       'Content-Type': 'application/json' ,
       "Accept" : "application/json"
    },
    body: JSON.stringify(formData)

    }


  return fetch("http://localhost:3000/users", configurationData)
  .then(res => res.json())
  .then(function(data) {
    let newId = data.id;
    document.body.innerHTML += `newId: ${newId}`
    console.log(data)
  } )
  .catch(function (error) {
    document.body.innerHTML += error.message
    console.log(error.message);
  });
}
