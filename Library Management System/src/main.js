function onSubmit() 
{
    const returnDate = new Date(document.getElementById("rd").value);
    const startDate =  new Date(document.getElementById("isd").value);
    const price = document.getElementById("brs").value;
    
    let timeSpan = (returnDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
   
    if(returnDate === "Invalid Date" || startDate === "Invalid Date") 
    {
        if(returnDate === "Invalid Date")
            alert("Invalid Return Date: " + returnDate);
        else
            alert("Invalid Issue Date: " + startDate);
    }
    else if(timeSpan < 0)
        alert("Invalid Issue or Return Date");
    else
    {
        if(timeSpan<=15)
            alert("No Fine")
        else if(timeSpan>15 && timeSpan<=30)
            alert("Total Fine: " + Number(timeSpan-15))
        else if(timeSpan>30 && timeSpan<=60)
            alert("Total FIne: " + Number(2*(timeSpan-15)))
        else
            alert("Return Book Cost as Fine " + price)
    }
}