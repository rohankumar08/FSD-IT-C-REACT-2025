// const div=document.getElementsByTagName('div'); 
// div[0].innerText="hell0 world"
// div[0].style.backgroundColor="red"
// div[0].style.Color="green"
// console.log(div)

// const container=document.getElementsByClassName("container")
// console.dir(container)
// container[0].innerHTML='<h2 style=color:red>HElloo world</h2>'


// const h2=document.createElement('h2')
// h2.innerText='ABES'
// h2.style.backgroundColor="#212121"
// h2.style.color="#fff"
// container[0].appendChild(h2)

// const img=document.createElement('img')
// img.src="https://img.static-af.com/transform/45cb9a13-b167-4842-8ea8-05d0cc7a4d04/"
// img.setAttribute('height','200px')
// img.setAttribute('width','200px')
// container[0].appendChild(img)

//  const button=document.getElementById('btn')
//  document.getElementById('disp').innerText="Loading image........"
//  button.addEventListener('click',function(){
//     const pic=document.createElement('img')
//     pic.src="https://content.r9cdn.net/rimg/dimg/e7/e2/a092e93b-city-13998-1641eaba8a3.jpg?width=1366&height=768&xhint=1016&yhint=1024&crop=true"
//     pic.setAttribute('height',"200px")
//      pic.setAttribute('width',"200px")

//      document.getElementById('disp').appendChild(pic)
//       const button=document.getElementById('btn')


//  })
// function msg(){
//     // return "hello , i am working on DOM"
//     // alert('hi i am using dom')    
//     const name=document.createElement('h3')
//     name.innerText="ABES"
//     name.style.color="grey"
//     name.style.backgroundColor="black"
//     console.log(name)
//     container[0].appendChild(name)
// }
// button.addEventListener('click',msg)    

//***************************************************************************************************************************************** */

// console.log and for loop is blocking code
 
// const button=document.getElementById('btn')
// function longData(){
//    console.log("start")
//    for(let i=0;i<10000000;i++){
//       console.log(i)
//    }
//    console.log('end')
// }

// button.addEventListener('click',longData)


// console.log('start')
// setTimeout(function(){   // settimeout is a nonBlocking code
//    console.log('Welcome to fsd')
// },2000)
// console.log('end')


//****************************************************CALL BACK FUNCTION******************************* */

// function msg(myname){
//     return "Hii"+" "+myname+" "+"Welcome";
// }
// function msgHandler(msg,clbk){
//     // console.log(msg);
//     const data=clbk(msg);
//     return data;

// }
// const student=["rahul","aman","vansh"];
// student.forEach((name)=>{
//     console.log(msgHandler(name,msg));


// })
// const c=msgHandler("Hii",msg);
// console.log(c);



//**********************************************************PROMISE********************************************** */

// const myPromise=new Promise(function(resolve,reject){
//    const password="98765fghjbvc"
//    if(password.length>8){
//       resolve("Password length is ok")
//    }
//    else 
//       reject("password length is not as our policy")
// });

// // myPromise
// // .then(function(result){console.log(result)})
// // .catch(function(error){console.log(error)})
// // .finally(function(){console.log("All the resource have closed")})

// async function handleData(){
//      console.log(await myPromise)

// }
// handleData()



//*********************************FETCHED API********************************* */
// const button=document.getElementById('btn')
// const disp=document.getElementById('disp')
// disp.style.backgroundColor="lightyellow"
// disp.style.padding="40px"
// let table='<table border=1  >'
//  async function fetchedData(){
//    disp.innerHTML="<h2>data id loading............</h2>"
//    const response= await fetch('https://dummyjson.com/recipes')
//    const jsonnData= await response.json()
//    console.log(jsonnData.recipes)
//    // disp.innerHTML=`<h2>${jsonnData.recipes[0].id}${jsonnData.recipes[0].name} </h2> <img src="${jsonnData.recipes[0].image}" height="200px/>`
//    jsonnData.recipes.forEach(element => {
//       table+=`<tr>
//          <td>${element.id}</td>
//          <td><img src=${element.image} height=200 width=200 > </td>
//          <td>${element.name}</td>
//          <td>${element.ingredients}</td>
//       </tr>`
//    });

//    table+='</table>'
//    disp.innerHTML=table
// }

// button.addEventListener('click',fetchedData)

const button=document.getElementById('btn')
const disp=document.getElementById('disp')
disp.style.backgroundColor="lightyellow"
disp.style.padding="40px"
let table='<table border=1  >'
 async function fetchedData(){
   disp.innerHTML="<h2>data id loading............</h2>"
   const response= await fetch('https://dummyjson.com/users')
   const jsonnData= await response.json()
   console.log(jsonnData.users)
   // disp.innerHTML=`<h2>${jsonnData.recipes[0].id}${jsonnData.recipes[0].name} </h2> <img src="${jsonnData.recipes[0].image}" height="200px/>`
   jsonnData.users.forEach(element => {
      table+=`<tr>
         <td>${element.id}</td>
         <td><img src=${element.image} height=200 width=200 > </td>
         <td>${element.firstName}</td>
         <td>${element.lastName}</td>
      </tr>`
   });

   table+='</table>'
   disp.innerHTML=table
}

button.addEventListener('click',fetchedData)