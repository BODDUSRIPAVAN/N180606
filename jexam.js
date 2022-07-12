var ok=1
function hovering(){
    document.getElementById("he").style.color="yellow";
    document.getElementById("hf").style.color="yellow";
    document.getElementById("divi").style.backgroundColor="green";
}
function non_hovering(){
    document.getElementById("he").style.color="white";
    document.getElementById("hf").style.color="red";
    document.getElementById("divi").style.backgroundColor="#00aeff";
}
function user()
{
    var t=document.getElementById("username").value;
    var pattern=/^f[a-z]{3,8}$/i
    if(!pattern.test(t))
    {
        document.getElementById("username").style.background="red";
        ok=0;
    }
    else
    {
        document.getElementById("username").value=t.toUpperCase();
        document.getElementById("username").style.background="white";
        ok=1;
    }
}
function email_fun()
{
    var emailv=document.getElementById("email").value;
    var e_pattern=/^[a-z]*@[a-z]+\.(com)|(in)|(net)|(edu)$/i;
    if(!e_pattern.test(emailv))
    {
        document.getElementById("email").style.background="red";
        ok=0;
    }
    else
    {
        document.getElementById("email").style.background="white";
        ok=1;
    }
}
function mobile_fun()
{
    var mob=document.getElementById("mobile").value;
    var mobpa=/^977[0-9]{7}$/i;
    var mobpb=/^[0-9]{4}-[0-9]{4}-[0-9]{4}$/i;
    if(mobpa.test(mob) || mobpb.test(mob))
    {
        document.getElementById("mobile").style.background="white";
        ok=1;
    }
    else
    {
        document.getElementById("mobile").style.background="red";
        ok=0;
    }
}
function dd_fun()
{
    var ddv=document.getElementById("dd").value;
    var ddva=/^SBIN[0-9]{7}$/;
    var ddvb=/^[0-9]{11}$/;
    if(ddva.test(ddv) || ddvb.test(ddv))
    {
        document.getElementById("dd").style.background="white";
        ok=1;
    }
    else
    {
        document.getElementById("dd").style.background="red";
        ok=0;
    }
}
function beer_fun()
{
    var na=document.getElementById("nation").value;
    if(na==="India" || na==="Other Firm Representatives of RGUKT")
    {
        document.getElementById("beerok").disabled=true;
    }
    else
    {
        document.getElementById("beerok").disabled=false;
    }

}

function staying()
{
    var aaa=document.getElementById("N").checked;
    var bbb=document.getElementById("K").checked;
    var ccc=document.getElementById("S").checked;
    var ddd=document.getElementById("O").checked;
    var count=document.getElementById("stay").value;
    if(aaa || bbb)
    {
        alert(count*2000)
    }
    if(ccc || ddd)
    {
        alert(count*3000)
    }
}
var list=["url('1.jpg')","url('4.jpg')","url('12.jpg')","url('malayantiger.jpg')","url('13.jpg')"]
            var i=0
function chameleon_body()
{
    document.getElementById("tablee").style.backgroundImage=list[i]
    i=(i+1)%list.length
    setTimeout(chameleon_body,1000)
}
function submission()
{
    if(ok==1)
    {
        return true;
    }
    else
    {
        return false;
    }
}