import React, {useState, useEffect} from "react"
import './App.css';
import pics1 from './pics/searchicon.png';
import pics2 from './pics/prev.png'
import pics4 from './pics/black.svg'
import pics5 from './pics/kobo.png'
import pics6 from './pics/pro.jpg'
import pics7 from './pics/reliance.png'
import pics8 from './pics/fair.png'
import pics9 from './pics/elalan.png'
import pics10 from './pics/chris.png'
import pics11 from './pics/cyon.png'
import pics12 from './pics/sbc.png'
import pics13 from './pics/gbi.png'
import pics14 from './pics/zer.png'
import pics15 from './pics/pool.png'
import pics16 from './pics/map.PNG'
import pics17 from './pics/hr.PNG'
import pics18 from './pics/career.png'
import pics19 from './pics/landing.png'








const App =()=> {

  const [counter, setCounter]=useState(0);
  const bgcolortext =[
    {bg : "#123E7D" , narrate : "Land your dream job home and abroad"},
    {bg : "#240B28" , narrate : "Take your future to the apex"},
    {bg : "#048198" , narrate : "Our community has you covered"},
    {bg : "#000" , narrate : "Start from a leap"}
  ]


  // const add = ()=>{
  //   setCounter(counter+1)
  // }
  // const red = ()=>{
  //   setCounter(counter-1)
  // }
  useEffect(()=>{
    setInterval(()=>{
  setCounter((el)=>el+1)
    },2000)
  },[])

  return (
    <div className="App">
      <div className="header">
        <header>
          <div className="headwrapper">
            <div className="logo">
              <img src ={pics4}/>
            </div>
             <div className="rightheader">
             <nav>Find job</nav>
             <nav>Coaching</nav>
             <nav>Sign in</nav>
           <span className="bbb">  <nav className="enquire"><button>For Employers</button></nav></span>
             </div>
          </div>
        </header>
      </div>
       <div className="heropart" style={{backgroundColor:bgcolortext[counter % bgcolortext.length].bg}}>
        <div className="wrap">
         <div className="description">
          <h2>{bgcolortext[counter% bgcolortext.length].narrate}</h2>
         </div>
         <div className="text">
         We connect you with top companies hiring talented professionals in the <span className="us">US </span>and<span className="us"> Africa</span>
         </div>
         <div className="inputwrap">
         <div className="icon">
           <img alt ="pics" src ={pics1}/>
         </div>
         <div className="input">
         <input placeholder ="Search"/>
         <button>Search</button>
         </div>
       </div>
       {/* <div className="splits">
       <div className="prev" onClick={red}>
         <img src ={pics2}/>
       </div>
       <div  className="nxt" onClick={add}>
<img src ={pics3}/>
       </div>
       </div> */}
       </div>
       </div>
       <div className="jobs">
         <div className="post">
           Recently posted jobs
         </div>
         <div className="boxeswrap">
           <div className="leftbox">
             <div className="leftboxwrap">
             <div className="eng">
               Backend Engineer
             </div>
             <div className="koko">
               {/* <span><img src ={pics5}/></span> */}
               <span className="k3">Kobo 360 (Kobo logistics...</span>
             </div>
             <div className="location">Lagos</div>
             <div className="months">
               <span className="down">3 months ago</span>
               <span className="down"><button className="apply">APPLY</button></span>
             </div>
             
         </div>
         <div className="spn"><img src ={pics5}/></div>

           </div>

           <div className="rightbox">
           <div className="leftboxwrap">
           
             <div className="eng">
              Influencer & Community...
             </div>
             <div className="koko">
               <span><img/></span>
               <span className="k3">Reliance HMO Limited</span>
             </div>
             <div className="location">Lagos</div>
             <div className="months">
               <span className="down">3 months ago</span>
               <span className="down"><button className="apply">APPLY</button></span>
             </div>
             </div>
         <div className="spn"><img src ={pics6}/></div>
           
           </div>
         </div>

       </div>
       <div className="jobs">
         <div className="post">
           Recently posted jobs
         </div>
         <div className="boxeswrap">
           <div className="leftbox">
             <div className="leftboxwrap">
             <div className="eng">
               IOS Mobile Developer
             </div>
             <div className="koko">
               {/* <span><img src ={pics5}/></span> */}
               <span className="k3">TUA Nigeria Inter-Global...</span>
             </div>
             <div className="location">Lagos</div>
             <div className="months">
               <span className="down">7 days ago</span>
               <span className="down"><button className="apply">APPLY</button></span>
             </div>
             
         </div>
         <div className="spn"><img src ={pics6}/></div>

           </div>

           <div className="rightbox">
           <div className="leftboxwrap">
           
             <div className="eng">
              Backend Software Engine...
             </div>
             <div className="koko">
               <span><img/></span>
               <span className="k3">TUA Nigeria Inter-Global</span>
             </div>
             <div className="location">Lagos</div>
             <div className="months">
               <span className="down">a month ago</span>
               <span className="down"><button className="apply">APPLY</button></span>
             </div>
             </div>
         <div className="spn"><img src ={pics6}/></div>
           
           </div>
         </div>
         <div className="explore"><button className="expl">Explore All Jobs</button></div>
       </div>
       <div className="recruitment">
         <div className="company">
       Companies recruiting from our talentlist
         </div>
         <div className="photos">
           <span className="display"><img src={pics7}/></span>
           <span className="display"><img src={pics8}/></span>
           <span className="display"><img src={pics9}/></span>
           <span className="display"><img src={pics10}/></span>
         </div>
         <div className="photos2">
           <span className="display"><img src={pics11}/></span>
           <span className="display"><img src={pics12}/></span>
           <span className="display"><img src={pics13}/></span>
           <span className="display"><img src={pics14}/></span>
         </div>
       </div>
       <div className="stand">
         <div className="company">
           Lets help you stand out
         </div>
         <div className="leftandright">
           <div className="left">
             <div className="talentlist">
               Join Our Talent List
             </div>
             <div className="talentcreate">
               Create your professional profile by uploading your CV and<br/>filling a profile form
             </div>
             <div className="join">
              JOIN NOW 
             </div>
           </div>
           <div className="right">
             <img src ={pics15}/>
           </div>

         </div>
       </div>
       <div className="map">
         <div className="right2">
           <img src ={pics16}/>
         </div>
         <div className="left2">
         <div className="talentlist">
               Get US-based remote jobs
             </div>
             <div className="talentcreate">
               Finding your dream remote job just got easier. We curate<br/>and deliver top remote jobs in the Us straight to your inbox
             </div>
             <div className="join">
              JOIN NOW 
             </div>
         </div>

       </div>
       <div className="map2">
         <div className="left2">
         <div className="talentlist">
               Showcase your talent by taking<br/>our HR-endorsed assessment
             </div>
             <div className="talentcreate">
              pass the online assessment once and for all
             </div>
             <div className="join">
              JOIN NOW 
             </div>
         </div>
         <div className="right2">
         <img src={pics17}/>
         </div>
       </div>
       <div className="map">
         <div className="right2">
           <img src ={pics18}/>
         </div>
         <div className="left2">
         <div className="talentlist">
               Career coaching
             </div>
             <div className="talentcreate">
               We offer periodic FREE career coaching to mid-senior level managers
               
               we help you review your career path. optimize your CV to land biggerroles. prep interviews and negotiations
             </div>
             <div className="join">
              LEARN MORE
             </div>
         </div>

       </div>
       <div className="land">
       
        <div className="lands">
          Land a dream US remote job
        </div>
        
        <div className="checks">
          Employees are always checking our pool of talent for their next hire
        </div>
        
        <div className="lastbutts">
          <span className="full2"><button>Join Now</button></span>
          <span className="full"><button>search jobs</button></span>
          
        </div>
        <div className="landings">
          <img src={pics19}/>
        </div>
       </div>
      
    </div>
  );
}

export default App;
