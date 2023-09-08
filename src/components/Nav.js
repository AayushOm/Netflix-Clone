import React,{useState,useEffect} from 'react'
import "./Nav.css"

function Nav() {

    const [show,handleShow]=useState();

    useEffect(()=>{

        window.addEventListener("scroll",()=>{
            if(window.scrollY>100)
            {
                handleShow(true);
            }
            else{
                handleShow(false);
            }
        });
        return ()=>{
            window.removeEventListener("scroll",handleShow);
        };

    },[])



  return (
    <div className={`nav ${show && "nav__black"}`}>

        <img className="nav__logo" 
        src="https://th.bing.com/th/id/R.033c9f5edecaa49d48e351389b5711c5?rik=KwNoYV0DRvUFiA&riu=http%3a%2f%2fwww.lollygagblog.com%2fwp-content%2fuploads%2f2015%2f02%2fNetflix_Logo_Print_FourColorCMYK.png&ehk=YfphzW5j0fdT%2f1j9mFN%2bTDoH8HHsYeqms7M5%2bPl%2fypY%3d&risl=&pid=ImgRaw&r=0" 
        alt="Netflix Logo" 
        />
        
        <img className='nav__avatar' 
        src="https://th.bing.com/th/id/R.2483ccb6b5edeb29c6fcd00e9ad1a6b3?rik=Q4WFhQGPZLHxKw&riu=http%3a%2f%2fblogs.studentlife.utoronto.ca%2flifeatuoft%2ffiles%2f2015%2f02%2fFullSizeRender.jpg&ehk=1rcUA0Bsl0EVLugfIDj3%2f2CF4FPQ4xx%2bfEj1bPIVCsI%3d&risl=&pid=ImgRaw&r=0" 
        alt="User Logo" 
        />
    </div>
  )
}

export default Nav
