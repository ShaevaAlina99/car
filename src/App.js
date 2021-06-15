import './App.css';
import React, { useState } from "react";
import Slider from './Components/Slider/Slider'
import burgerMenu from'./menu_btn.svg';
import Menu from './burgerMenu/Menu';
import group from './Group.svg';

function App() {
  const [menuActive, setMenuActive] = useState(false)

  const items = [{value:"парковка", href:"/parkovka"},
  {value:"страховка", href:"/strahovka"},
  {value:"бензин", href:"/benzin"},
  {value:"обслуживание", href:"/obcluzivanie"}
]

  return (
   
    <div >
      
      <nav>
        <div className="nav">
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
        <img src={burgerMenu} alt="no download"></img>
        </div>
        <div className="lang">
          <span>Eng</span>
        </div>
       </div>
      </nav>
      <main>
      <h1 className="wrapper">Need for drive</h1>  
      <div className="ukaz">
      <img src={group}/>
      <h2 className="p">Ульяновск</h2>
      </div>
      <h3 className="wrapper1">Каршеринг</h3>
      <h4 className="wrapper2">Need for drive</h4>
      <h5 className="wrapper3">Поминутная аренда авто твоего города</h5>
      <button className="b1">Забронировать</button>
      <h6 className="wrapper4">© 2016-2019 «Need for drive»</h6>
      <h7 className="wrapper5">8 (495) 234-22-44</h7>
      </main>
      <Menu active = {menuActive} setActive = {setMenuActive} items={items}/>
      <Slider />
    </div>
  );
}

export default App;
