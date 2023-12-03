import { useState } from "react";
//import logo from './img/logo192.png';

// function App1() {
//   const [container, setContainer] = useState("Hi!");

  
//   const style1 = {backgroundColor: "green"};
//   const style2 = {backgroundColor: "darkgray"};
//   const [backgroundStar, setBackgroundStart] = useState(style1);


//   const text=()=> {
//     setContainer("otro mensaje")
//   }

//   const image=()=> {
//     setContainer(<img src={logo} alt="logo"/>)
//   }


//   const background=()=> {
//     setBackgroundStart(style2)
//   }

//   return (
//     <>
//     <button onClick={()=>{text()}}>Boton A </button>
//     <button onClick={()=>{image()}}>Boton b </button>
//     <button onClick={()=>{background()}}>Boton c </button>


//       <div style={backgroundStar} className="App">
//         {container}
//       </div>
//     </>

//   );
// }
// export default App1;


function App2() {
  const [backgroundStar, setBackgroundStar] = useState({ backgroundColor: 'green' });
  const [container, setContainer] = useState("GO");

  const color1 = () => {
    setBackgroundStar({ backgroundColor: 'green' });
    setContainer('GO');
  }

  const color2 = () => {
    setBackgroundStar({ backgroundColor: 'yellow' });
    setContainer('READY');
  }

  const color3 = () => {
    setBackgroundStar({ backgroundColor: 'red' });
    setContainer('STOP');
  }

  return (
    <>
      <button className="btn" onClick={color1}>Verde</button>
      <button className="btn"  onClick={color2}>Amarillo</button>
      <button className="btn"  onClick={color3}>Rojo</button>

      <div  style={backgroundStar} className="App2">
        {container}
      </div>
    </>
  );
}

export default App2;
