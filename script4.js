var req=new XMLHttpRequest();//step one 
req.open('GET' ,'https://restcountries.eu/rest/v2/all',true);//step two
//sending connection
req.send();
//step 4 onces the server respond succesfuly then we have to process the data
req.onload=function()
{

    var data=JSON.parse(this.response);
    var regasia=data.filter((ele)=>ele.region==="Asia");
    console.log(regasia)


    var populationof2lac=data.filter((ele)=>ele.population<200000)
    console.log(populationof2lac);



    var totalusedollar=data.filter((ele)=>{
        for(let i in ele.currencies){
            if(ele.currencies[i].code==="USD")
            {
                return true
            }
        }
    })
    console.log(totalusedollar)

     
    var totalpop=data.reduce((acc,ele)=>acc+ele.population,data[0].population)
    console.log(totalpop)
}
