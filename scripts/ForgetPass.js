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
let reset_pass = document.getElementsByClassName("send-email")[0].getElementsByTagName("input")[0];
let inputs = document.getElementsByClassName("form__fields")[0].getElementsByTagName("input")[0];
console.log(inputs);
const send_mail = (e) => {
    e.preventDefault();
    let result = document.getElementsByClassName("form__name")[0].getElementsByTagName("h3")[0];
    let result_text = "کاربری با این اطلاعات یافت نشد";
    for ( let i = 0 ; i < user_data.length ; i++){
        if(user_data[i].email === inputs.value || user_data[i].userName === inputs.value ){
            //send mail
            console.log('ers');
            result_text = "لینک بازیابی به ایمیل شما ارسال شد";
            break;
        }
    }
    inputs.value = ('');
    result.innerHTML = result_text;
}
reset_pass.addEventListener("click",send_mail);
