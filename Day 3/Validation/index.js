const validate = ()=>{
    username = document.forms["frm"]["name"].value;
    age = document.forms["frm"]["age"].value;

    if(age>=18){
        alert(`You are eligible ${username}`);
        return true;
    }else {
        alert(`You are not eligible ${username}`);
        return false;
    }
}