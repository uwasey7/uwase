import React from "react";
import Img from "../assets/imgs/vo.jpg";
import elise from "../assets/imgs/conve.jpg";
import duse from "../assets/imgs/ho.jpg";
import fila from "../assets/imgs/go.jpg";
// import dd from "../assets/images/dian.webp";
// import "./home.css";
function images() {
  return (
    <div className="eli">
      <p style={{ color: "white", fontSize: "30px", textAlign: "center" }}>
        travel tours Gallery
      </p>
      <img className="elisee" src={elise} alt=""></img>
      {/* <div class="desc " style={{color:"white",fontSize:"20px",fontFamily:"20px"}}>KINIGI</div> */}
      <img className="elisee" src={duse} alt=""></img>
      <img className="elisee" src={Img} alt=""></img>
      <img className="elisee" src={fila} alt=""></img>
      <p style={{color:"black",fontSize:"18px",fontWeight:"bold"}}>
        Explore the undiscovered ever-changing views of the scenic African
        savannah plains with exceptional activities of mountain gorilla
        trekking, golden monkey tracking, wildlife expeditions, wildebeest
        migration safaris, Rwanda cultural tours, and beautiful scenery
        landscape, picturesque villages, breathtaking volcanoes and countless
        boat trips on your safari holiday!
      </p>
      {/* <img className="elisee"
            src={dd} alt=""></img> */}
    </div>
  );
}
export default images;