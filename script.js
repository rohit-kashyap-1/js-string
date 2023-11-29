setTimeout(function(){magic()},2000)


function magic(){
    fetch('https://dummyjson.com/users').then(x => x.text()).then(y => displayData(y))

function displayData(user) {

    let loader  =document.getElementById("loader")
    loader.remove()

    console.log(user)
    user = JSON.parse(user) //convert json to object 
    /*
    {
        "users":[{},{},{}],
        "length":20
    }
    */
    user = user.users
    let row = document.getElementById("row")



    for (i = 0; i < user.length; i++) {
        row.innerHTML += `<div class="col-md-3 mb-3">
                    <div class="border p-3 rounded text-center">
                        <img src='${user[i].image}' class='img-fluid mb-2'>
                        <h3>${user[i].firstName} ${user[i].lastName}</h3>
                        <p class='mb-1'>${user[i].email}</p>
                        <p class='mt-0 fw-bold'>${user[i].address.city}</p>
                    </div>
                </div>`
    }

}

}

'{"name":"rohit","email":"rohit@gmail.com"}' //text format: json