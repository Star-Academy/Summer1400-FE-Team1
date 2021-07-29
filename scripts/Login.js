const user_data=[
    {'name': "maei",
    'lastName' : "karimi",
    'password' : 1234,
    'userName' : "maeikeyar",
    'email' : "maei@gmail.com",
    'gender' : "female"},
    {'name': "hana",
    'lastName' : "karimi",
    'password' : 4567,
    'userName' : "hanakeyar",
    'email' : "hana@gmail.com",
    'gender' : "female"},
    {'name': "mohammad",
    'lastName' : "karimi",
    'password' : 7890,
    'userName' : "mhkeyar",
    'email' : "mohammad@gmail.com",
    'gender' : "male"},
    {'name': "sara",
    'lastName' : "karimi",
    'password' : 0123,
    'userName' : "sarakeyar",
    'email' : "sara@gmail.com",
    'gender' : "female"},
    {'name': "reza",
    'lastName' : "karimi",
    'password' : 3456,
    'userName' : "rezakeyar",
    'email' : "reza@gmail.com",
    'gender' : "male"},
];
let login_btn = document.getElementsByClassName("login")[0].getElementsByTagName("input")[0];
let inputs = document.getElementsByClassName("form__fields")[0].getElementsByTagName("input");
const checkData = (e) => {
    e.preventDefault();
    let result = document.getElementsByClassName("form__name")[0].getElementsByTagName("h3")[0];
    for( let i = 0 ; i < user_data.length ; i++){
        if(user_data[i].userName === inputs[0].value && user_data[i].password == inputs[1].value ) {
        result.innerHTML = "ورود موفقیت آمیز بود";
        break;
    }
    else result.innerHTML = "کاربری با این اطلاعات وجود ندارد";
}
for(let i = 0 ; i < inputs.length ; i++){
    inputs[i].value = ('');
}
}

login_btn.addEventListener("click",checkData);

