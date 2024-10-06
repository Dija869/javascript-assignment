//// weather cards ///
var userWeathers = prompt("how's the weather outside?\nrainy\ncloudy\nwindy\nthunderstrom\nsunny") ;
var weathers = ["rainy" , "cloudy" ,"windy" , "thunderstrom" , "sunny" ]

if(userWeathers === weathers[0]){
    document.write(`
         <div class="card">
       <img  src="./assets/rainy (1).gif" alt="Avatar" style="width:20%  ">
      <div class="container">
         <h4><b>It's Raining </b></h4>
         <p>keep your umberlla with you & enjoy the weather</p>
       </div>
     </div>    `)
}else if (userWeathers === weathers[1]) {
    document.write(`
         <div class="card">
       <img  src="./assets/coludy.gif" alt="Avatar" style="width:25%  ">
      <div class="container">
         <h4><b>It's Cloudy </b></h4>
         <p>It's a right time. To enjoy the weather</p>
       </div>
     </div>    `)
}else if(userWeathers === weathers[2]){
document.write(`
         <div class="card">
       <img  src="./assets/windy.gif" alt="Avatar" style="width:25%  ">
      <div class="container">
         <h4><b>It's Windy </b></h4>
         <p>It's wind blowing outside. Take care off your children</p>
       </div>
     </div> `)
}else if(userWeathers === weathers[4]){
    document.write(`
             <div class="card">
           <img  src="./assets/sunny.gif" alt="Avatar" style="width:25%  ">
          <div class="container">
             <h4><b>It's Sunny </b></h4>
             <p>It's hot outside. Apply the suncream</p>
           </div>
         </div> `)
         }else if(userWeathers === weathers[3]){
            document.write(`
                     <div class="card">
                   <img  src="./assets/thunderstrom.gif" alt="Avatar" style="width:20%  ">
                  <div class="container">
                     <h4><b>It's Thunderstrom </b></h4>
                     <p>It's Thunderstrom. Don't go outside</p>
                   </div>
                 </div> `)}
         
         
         else{
    document.write(`
        <div class="card-error">
      <img  src="https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Error-Page.gif" alt="Avatar" style="width:100%  ">
    
    </div> `)
}
 