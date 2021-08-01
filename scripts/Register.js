const user_array=[];
const user_obj={};
let index=0;
let inputs = document.getElementsByClassName('form__fields')[0].getElementsByTagName('input');
let gender = document.getElementsByClassName('form__radio')[0].getElementsByTagName('input');
let register_btn=document.getElementsByClassName("signUp")[0].getElementsByTagName("input")[0];
const get_data=(e)=>{
    e.preventDefault();
    let result = document.getElementsByClassName("form__name")[0].getElementsByTagName("h3")[0];
    for(let i=0;i<inputs.length;i++){
    user_obj[inputs[i].name]=inputs[i].value;
    inputs[i].value = ('');
}
for(let i=0 ; i < gender.length ; i++){
    if(gender[i].checked){
        user_obj[gender[i].name]=gender[i].value;
    }
    gender[i].checked = false;
    }
    user_array.push(user_obj);
    result.innerHTML = ("ثبت نام موفق آمیز بود");
}
register_btn.addEventListener("click",get_data);
