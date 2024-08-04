// // let div =document.createElement("div")
// // document.body.appendChild(div)
// // div.setAttribute("id","container")


// // let h1 =document.createElement("h1")
// // div.appendChild(h1)
// // h1.innerText="i am head"


// // let p =document.createElement("p")
// // div.appendChild(p)
// // p.setAttribute("class","demo")
// // p.innerText="i am pare"



// // let btn =document.createElement("button")
// // div.appendChild(btn)
// // btn.innerText="Submit";


// // import React from "react";
// // import ReactDOM  from "react-dom";


// // let ele= React.createElement("div",{id:"cont"},"i am div tag")

// // console.log(ele);

// // ReactDOM.render(ele,document.getElementById("root"))
// // let ele = React.createElement("div", { id: "cont" }, React.createElement("h1", null, "iam head"), React.createElement("p", { className: "demo" }, "iam pare"), React.createElement("button", { id: null }, "submit"))

// // console.log(ele);

// // ReactDOM.render(ele, document.getElementById("root"))

// // ReactDOM.render(<h1 className="Cont">hi friends</h1>,document.getElementById("root"))

// // let ele=<h1 className="Cont">hi friends</h1>
// // ReactDOM.render(ele,document.getElementById("root"))



// // let ele=[<img src="https://tse4.mm.bing.net/th?id=OIP.slb2i-HLWadyYNFWyn7AggHaHa&pid=Api&P=0&h=220" />,<img src="https://tse4.mm.bing.net/th?id=OIP.vvg-s-VlbtKIrnS51IdubAHaEK&pid=Api&P=0&h=220" />]
// // ReactDOM.render(ele,document.getElementById("root"))


// import React from "react";
// import ReactDOM from "react-dom";
// import "./style.css"

// ReactDOM.render(

//     <div className="a1">
//         <div class="card">
//             <img src="https://tse4.mm.bing.net/th?id=OIP.slb2i-HLWadyYNFWyn7AggHaHa&pid=Api&P=0&h=220" alt="Placeholder Image" />
//             <h2>Krishna</h2>
//             <p>Krishna is a major deity in Hinduism. He is worshipped as the eighth avatar of Vishnu and also as the Supreme God in his own right. He is the god of protection, compassion, tenderness, and love; and is one of the most popular</p>
//             (5.0)
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             (100M)views

//             <div id="ih">
//                 <button>Join</button>
//                 <button id="hi">login</button>
//             </div>
//         </div>


//         <div class="card">
//             <img src="https://tse4.mm.bing.net/th?id=OIP._2eH8VttMaWx5jDqLeZNRQHaHE&pid=Api&P=0&h=220" alt="Placeholder Image" />
//             <h2>RadhaKrishna</h2>
//             <p>RadhaKrishn is a drama romance series that depicts the love story of Radha and Krishna, the Hindu deities of love and beauty. Watch the never-seen-before retelling of the eternal love and sacrifice of Radha and Krishna, the Hindu gods of love and music</p>
//             (5.0)
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             (1000M)views

//             <div id="ih">
//                 <button>Join</button>
//                 <button id="hi">login</button>
//             </div>
//         </div>


//         <div class="card">
//             <img src="https://tse2.mm.bing.net/th?id=OIP.zt_SsI4F7xOEgpJzwcVBUwHaEK&pid=Api&P=0&h=220" alt="Placeholder Image" />
//             <h2>Rukmini</h2>
//             <p>Rukmini, also known as a form of Devi as Goddess Lakshmi, is the wife of Lord Krishna. She was believed to be known for her beauty, love, and honesty. Rukmini is the first and prominent queen of Lord Krishna.
//             </p>
//             (5.0)
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             (100M)views

//             <div id="ih">
//                 <button>Join</button>
//                 <button id="hi">login</button>
//             </div>
//         </div>



//         <div class="card">
//             <img src="https://tse2.mm.bing.net/th?id=OIP.goi6fx434ous8yYTP3FeWgAAAA&pid=Api&P=0&h=220" alt="Placeholder Image" />
//             <h2>Radha</h2>
//             <p>Radha, also called Radhika, is a Hindu goddess and the chief consort of the god Krishna. She is the goddess of love, tenderness.Radha is an important goddess in the Vaishnavite traditions of Hinduism.
//             </p>
//             (5.0)
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             (100M)views

//             <div id="ih">
//                 <button>Join</button>
//                 <button id="hi">login</button>
//             </div>
//         </div>

//     </div>, document.getElementById("root"))


import React from "react";
import ReactDOM   from "react-dom/client"
import Card from "./card";

 let root=ReactDOM.createRoot(document.getElementById("root"))
 
 root.render(
   <>
  <Card src="https://tse3.mm.bing.net/th?id=OIP.T0FYosiY7N79BnqjwAPppwHaFc&pid=Api&P=0&h=220" 
  src1="https://tse4.mm.bing.net/th?id=OIP.D6NK3PB6xkWxGBFLkW3KxQHaEK&pid=Api&P=0&h=220"
  src2="https://tse4.mm.bing.net/th?id=OIP.7RqtlpIkgTNyG8tD0123mQHaGB&pid=Api&P=0&h=220"
  name="RadhaKrishna"

  />
  
   </>
)