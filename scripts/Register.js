const user_array=[];
const user_obj={};
let index=0;
let inputs = document.getElementsByClassName('form__fields')[0].getElementsByTagName('input');
let gender = document.getElementsByClassName('form__radio')[0].getElementsByTagName('input');
let register_btn=document.getElementsByClassName("signUp")[0].getElementsByTagName("input")[0];
const get_data=(e)=>{
    e.preventDefault();
    for(let i=0;i<inputs.length;i++){
    user_obj[inputs[i].name]=inputs[i].value;
    }
    for(let i=0 ; i < gender.length ; i++){
        if(gender[i].checked){
        user_obj[gender[i].name]=gender[i].value;
        }
    }
    user_array.push(user_obj);
    // console.log(user_array);
}
register_btn.addEventListener("click",get_data);
