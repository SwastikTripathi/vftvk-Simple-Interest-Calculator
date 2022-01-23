function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    n = document.getElementById("years").value;
    
    const onClick = () => {
        const interest = {p*r*t)/100;
        var text = document.createTextNode(interest);
        document.getElementById("result").appendChild(text);
    }
};
    
}
        
