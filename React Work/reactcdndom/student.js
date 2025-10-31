const parent=document.getElementById("container");
// console.log(parent)
const root= ReactDOM.createRoot(parent);
const h2= React.createElement("h2",{style:{backgroundColor:"brown",color:"white",paddingLeft:"50px"}},"Profile page");
// root.render(h2)
const myName=<h3 >Name: Rohan</h3>
const roll=<h3>Roll Number: 204</h3>
const branch=<h3>Brannch: Information Technology</h3>
const section=<h3>Section: C</h3>
const college=<h3>College: ABES Engineering College</h3>


const container=(
    <div style={{textAlign:"center", border:"1px solid black", width:'600px', marginLeft:'500px'}}>
        {h2}{myName}{roll}{branch}{section}{college}
    </div>
)
root.render(container)