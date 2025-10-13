const container= document.getElementById('container')
// console.log(container)
const root= ReactDOM.createRoot(container);
const h2= React.createElement("h2",{style:{backgroundColor:"yellowgreen",color:"white",paddingLeft:"600px"}},"Web development Profile")
root.render(h2)



const myName=React.createElement("h3",{style:{color:'white'}},"Rohan Kumar")
const image=React.createElement("img",{src:"https://imgs.search.brave.com/y0RdP_M5ctsg5I9kG1v6cVdA8PaJh35mBB1G8ceHn-0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzMyLzU5LzY1/LzM2MF9GXzMzMjU5/NjUzNV9sQWRMaGY2/S3piVzZQV1hCV2VJ/RlRvdlRpaTFkcmti/VC5qcGc",style:{height:"100px",width:"100px",borderRadius:"50%"}})


const div=React.createElement("div",{style:{
    display:'flex',
    alignItems:'center',
    gap:'5px',
    backgroundColor:'brown'
}},image,myName)

const li1=React.createElement("li",{},"Java Program")
const li2=React.createElement("li",{},"Python Programming")
const li3=React.createElement('li',{},"React")
const ul=React.createElement("ul",{style:{backgroundColor:'cyan'}},li1,li2,li3)
const wrapper=React.createElement("div",{},h2,div,ul)

//JSX
const h21=<h2>Welcome to React Development</h2>
const li4=<li>Angular</li>
const li5=<li>Vue JS</li>
const ul1=<ul>{li4}{li5}</ul>

const  container1=(
    <div>
        {wrapper},{h21},{ul1}
    </div>
)


root.render(container1)