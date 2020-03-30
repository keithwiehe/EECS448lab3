function validate()
{
  let password1=document.getElementById('string1').value;
  let password2=document.getElementById('string2').value;
  console.log(password1, password2)
  if(password1===password2)
  {
    if(password1.length<8)
    {
      alert("password entry is too short.");
    }
    else{
      alert("Password correctly entered");
    }
  }
  else {
  alert("password entries do not match.");
  }
}
