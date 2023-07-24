function login() {
  const loginForm = document.getElementById("login-form");
  const formData = new FormData(loginForm);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  const json = JSON.stringify(data);
  fetch("/logindata", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: json
  })
  .then(response => response.json())
 .then(data => {
   if(data.ok === true) {
    location.reload()
   } else {
     if(typeof data.errors !== "string") {
     document.getElementById("error").innerHTML = data.errors?.join(", ");
     } else {
    document.getElementById("error").innerHTML = data.errors;
     }
   }
 })
  .catch(error => {
    console.log(error)
});
}