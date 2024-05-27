import React from 'react'
import logo from './styles/login-design.png';
import image1  from "./styles/image1.jpg";
import image2  from "./styles/image2.jpg";
import image3  from "./styles/image3.jpg";
import image4  from "./styles/image4.jpg";
import image5  from "./styles/image5.jpg";
import image6  from "./styles/image6.jpg";
import image7  from "./styles/image7.jpg";
import image8  from "./styles/image8.jpg";
import image9  from "./styles/image9.jpg";
import image10 from "./styles/image10.jpg";
import image11 from "./styles/image11.jpg";
import image12 from "./styles/image12.jpg";




export const Home = () => {
    const message="Added Sucessfully";
    
    const pgRooms=[
        {
            id:"1",
            palce:"Chennai",
            Bedrooms:"1",
            Rent:"4500",
            src:"/styels/login-design.png",
            Owner:"Ravi K",
            mobile:"+91 7012345689" 
        },
        {
            id:"2",
            palce:"Coimbatore",
            Bedrooms:"3",
            Rent:"6500",
            src:"/styels/login-design.png",
            Owner:"Raju S",
            mobile:"+91 7012345689" 
        },
        {
            id:"3",
            palce:"Chennai",
            Bedrooms:"1",
            Rent:"7500",
            src:"/styels/login-design.png",
            Owner:"Kesavan R",
            mobile:"+91 7012345689" 
        },
        {
            id:"4",
            palce:"Chennai",
            Bedrooms:"2",
            Rent:"6300",
            src:"/styels/login-design.png",
            Owner:"Vaishnavi K",
            mobile:"+91 7012345689" 
        },
        {
            id:"5",
            palce:"Madurai",
            Bedrooms:"1",
            Rent:"4500",
            src:"/styels/login-design.png",
            Owner:"Ravi A",
            mobile:"+91 7012345689" 
        },
        {
            id:"6",
            palce:"Chennai",
            Bedrooms:"1",
            Rent:"5500",
            src:"/styels/login-design.png",
            Owner:"Saravana J",
            mobile:"+91 7012345689" 
        },
        {
            id:"7",
            palce:"Coimbatore",
            Bedrooms:"3",
            Rent:"10500",
            src:"/styels/login-design.png",
            Owner:"Raveena M.S",
            mobile:"+91 7012345689" 
        },
        {
            id:"8",
            palce:"Bangalore",
            Bedrooms:"2",
            Rent:"9500",
            src:"/styels/login-design.png",
            Owner:"Vinoth S",
            mobile:"+91 7012345689" 
        },
        {
            id:"9",
            palce:"Coimbatore",
            Bedrooms:"1",
            Rent:"4500",
            src:"/styels/login-design.png",
            Owner:"Pream P",
            mobile:"+91 7012345689" 
        },
        {
            id:"10",
            palce:"Chennai",
            Bedrooms:"2",
            Rent:"8500",
            src:"/styels/login-design.png",
            Owner:"Ravi R.N",
            mobile:"+91 7012345689" 
        },
        {
            id:"11",
            palce:"Bangalore",
            Bedrooms:"2",
            Rent:"8500",
            src:"/styels/login-design.png",
            Owner:"Ravi R.N",
            mobile:"+91 7012345689" 
        },
        {
            id:"12",
            palce:"Chennai",
            Bedrooms:"2",
            Rent:"8500",
            src:"/styels/login-design.png",
            Owner:"Sekar N",
            mobile:"+91 7012345689" 
        },
        {
            id:"13",
            palce:"Chennai",
            Bedrooms:"2",
            Rent:"8500",
            src:"/styels/login-design.png",
            Owner:"Sekar N",
            mobile:"+91 7012345689" 
        }
    ]


  return (
    <div className='container'>
    <nav> 
      <div className='hd-main-bx'>
        <div id='hd-txt'>
          <h4><span>R</span>entify</h4>
        </div>
        <div className='nav-bx'>
            <ul>
              <li>Home</li>
              <li>Favorite</li>
            </ul>
        </div>
      </div>
      </nav>    
      <img src={logo} id='design-logo' />
      <div className='sub-hd'>
      
        <h1> Rentify</h1>
        <p id='hd-ph'>Where Renting Meet Simplicity</p>
        <h2>About Rentify</h2>
        <div className='sub-ph'>
            <p>Rentify is your trusted platform for finding the perfect rental property that suits your lifestyle and budget. Our mission is to simplify the rental process for work-from-office employees, providing adoptable rent prices and a seamless user experience.</p>
        </div> 
      </div>
      <div className='filter-sec'>
        <input type='search' placeholder='Location'/>
        <button>Search</button>
      </div>
      <img src={logo} id='design-logo1' />
      <div className='rent-opts'> 
        <div className='rent-main-bx'>
            <div className='rent-op-bx'>
                <div className='rent-bx' >
                    <img src={image1} alt='img' />
                    <h4>{pgRooms[0].palce}</h4>
                    <p>Rent : {pgRooms[0].Rent}</p>
                    <p>Available Bedrooms  {pgRooms[0].Bedrooms}</p>
                    <button >I'm Interest</button>
                </div>
                <div className='rent-bx'>
                <img src={image2}  alt='img'/>
                <h4>{pgRooms[1].palce}</h4>
                    <p>Rent : {pgRooms[1].Rent}</p>
                    <p>Available Bedrooms  {pgRooms[1].Bedrooms}</p>
                    <button>I'm Interest</button>
                </div>
                <div className='rent-bx'>
                <img src={image3} alt='img'/>
                <h4>{pgRooms[2].palce}</h4>
                    <p>Rent : {pgRooms[2].Rent}</p>
                    <p>Available Bedrooms  {pgRooms[2].Bedrooms}</p>
                    <button>I'm Interest</button>
                    
                </div>  

                <div className='rent-bx'>
                    <img src={image4} alt='img'/>
                    <h4>{pgRooms[3].palce}</h4>
                    <p>Rent : {pgRooms[3].Rent}</p>
                    <p>Available Bedrooms  {pgRooms[4].Bedrooms}</p>
                    <button>I'm Interest</button> 
                </div>

            </div>
        </div>
        
        <div className='rent-main-bx'>
            <div className='rent-op-bx'>
                <div className='rent-bx'>
                    <img src={image5} alt='img'/>
                    <h4>{pgRooms[5].palce}</h4>
                    <p>Rent : {pgRooms[5].Rent}</p>
                    <p>Available Bedrooms  {pgRooms[5].Bedrooms}</p>
                    <button>I'm Interest</button>
                </div>
                <div className='rent-bx'>
                    <img src={image6} alt='img'/>
                    <h4>{pgRooms[6].palce}</h4>
                    <p>Rent : {pgRooms[6].Rent}</p>
                    <p>Available Bedrooms  {pgRooms[6].Bedrooms}</p>
                    <button>I'm Interest</button>
                </div>
                <div className='rent-bx'>
                    <img src={image7} alt='img'/>
                    <h4>{pgRooms[7].palce}</h4>
                    <p>Rent : {pgRooms[7].Rent}</p>
                    <p>Available Bedrooms  {pgRooms[7].Bedrooms}</p>
                    <button>I'm Interest</button>
                </div>  
                <div className='rent-bx'>
                    <img src={image8} alt='img'/>
                    <h4>{pgRooms[8].palce}</h4>
                    <p>Rent : {pgRooms[8].Rent}</p>
                    <p>Available Bedrooms  {pgRooms[8].Bedrooms}</p>
                    <button>I'm Interest</button> 
                </div>
            </div>
        </div>
            
         <div className='rent-main-bx'>
            <div className='rent-op-bx'>
                <div className='rent-bx'>
                    <img src={image9} alt='img'/>
                    <h4>{pgRooms[9].palce}</h4>
                    <p>Rent : {pgRooms[9].Rent}</p>
                    <p>Available Bedrooms  {pgRooms[9].Bedrooms}</p>
                    <button>I'm Interest</button>
                </div>
                <div className='rent-bx'>
                    <img src={image10} alt='img'/>
                    <h4>{pgRooms[10].palce}</h4>
                    <p>Rent : {pgRooms[10].Rent}</p>
                    <p>Available Bedrooms  {pgRooms[10].Bedrooms}</p>
                    <button>I'm Interest</button>
                </div>
                <div className='rent-bx'>
                    <img src={image11} alt='img'/>
                    <h4>{pgRooms[11].palce}</h4>
                    <p>Rent : {pgRooms[11].Rent}</p>
                    <p>Available Bedrooms  {pgRooms[11].Bedrooms}</p>
                    <button>I'm Interest</button>
                </div>  
                <div className='rent-bx'>
                    <img src={image12} alt='img'/>
                    <h4>{pgRooms[12].palce}</h4>
                    <p>Rent : {pgRooms[12].Rent}</p>
                    <p>Available Bedrooms  {pgRooms[12].Bedrooms}</p>
                    <button>I'm Interest</button> 
                </div>
            </div> 

          </div>
       </div>
       <footer>
            <div className='footer-msec'>
                <div className='footer-sec'> 
                    <p>About</p>
                    <p>Services</p>
                    <h3>Location</h3>
                    <ul>
                        <li>Chennai</li>
                        <li>Bangalore</li>
                        <li>Cochin</li>
                        <li>Coimbatore</li>
                        <li>Vellacheri</li>
                        <li>Siruseri</li>
                        <li>Salem</li>
                        <li>Kovilpatti</li>
                        <li>Navalur</li>
                    </ul>
                </div>
                <div className='footer-sec'> 
                    <ul>
                        <li>Chegalpattu</li>
                        <li>Kakkanad</li>
                        <li>Palarivattom</li>
                        <li>Anna Nagar</li>
                        <li>Neelambur</li>
                        <li>Kaloor</li>
                        <li>Dickenson Road</li>
                        <li>Aavalahalli</li>
                        <li>Thudiyalur</li>
                        <li>Nava India</li>
                        <li>Adayar</li>
                        <li>Hasthampatti</li>
                        <li>Meyyanur</li>
                        <li>Ammapet</li>
                        <li>Vallipalayam</li>
                    </ul>
                </div>
                <div className='footer-sec'> 
                    <ul>
                        <li>Thudiyalur</li>
                        <li>Nava India</li>
                        <li>Adayar</li>
                        <li>Hasthampatti</li>
                        <li>Meyyanur</li>
                        <li>Aavalahalli</li>
                        <li>Thudiyalur</li>
                        <li>Nava India</li>
                        <li>Adayar</li>
                        <li>Hasthampatti</li>
                        <li>Chegalpattu</li>
                        <li>Kakkanad</li>
                        <li>Palarivattom</li>
                        <li>Anna Nagar</li>
                        <li>Neelambur</li>
                    </ul>
                </div>
            </div>    
       </footer>
  </div>    
            
  )
}
