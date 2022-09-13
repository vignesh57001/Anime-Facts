async function foo(){
    let res=await fetch("https://anime-facts-rest-api.herokuapp.com/api/v1");
    let res1=await res.json();
    console.log(res1);
    let result=res1.data;
    console.log(result);
    
    for(var i=0;i<result.length;i++){
        console.log(result[i]);
      var div=document.createElement("div");
      div.setAttribute("class","col-md-3")
      div.innerHTML=`
      <div class="card border-success mb-3" style="max-width: 18rem;">
      <div class="card-body text-success">

      <img src="${result[i].anime_img}"   style="height:200px; width:200px" alt="">
        <h5 class="card-title" >Anime ID : ${result[i].anime_id}</h5>
        <h5 class="card-title" >Anime Name : ${result[i].anime_name}</h5>
      </div>
    </div>`

   
    
       document.getElementById("tc").append(div);

    }
   
}
foo();