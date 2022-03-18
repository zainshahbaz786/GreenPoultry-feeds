import React from 'react'
import fb from './Images/fb.svg'
import li from './Images/linkedin.svg'
import yt from './Images/youtube.svg'
const SocialAcc = () => {
    return (
        <>
<div className="SocialAc">


<div style={{display:"flex"}}>
        {/* 1st div */}
        <div style={{width:"50%"}}>
        <h1 style={{paddingLeft:"25px"}}>Get in Touch</h1>
        
        <div style={{display:"flex",paddingLeft:"25px"}}>
    <div style={{paddingRight:"40px"}}><a href="#">
        <img src={fb} alt="" style={{width:"60px",height:"60px"}}></img>
        </a>
    </div>
    
    <div style={{paddingRight:"40px"}}><a href="#">
        <img src={li}  alt="" style={{width:"60px",height:"60px"}}></img></a>
    </div>
    
    <div style={{paddingRight:"40px"}}><a href="#">
        <img src={yt} alt="" style={{width:"60px",height:"60px"}}></img></a>
    </div>


</div>


        </div>

{/* second div */}
        <div style={{width:"50%"}}>
<h1>Contact Detail</h1>

{/* its the elements of the contact detail compoennt */}
{/* 1 st element */}
<div style={{display:"flex",paddingBottom:"30px"}}>
<img src="https://img.icons8.com/color/70/000000/marker--v1.png" alt=""/>
<div>
    <h2>Manufacturing Unit</h2>
<span>Here we provide address</span>
</div>
</div>


{/* 2nd element */}
<div style={{display:"flex", paddingBottom:"30px"}}>
<img src="https://img.icons8.com/color/70/000000/marker--v1.png" alt=""/>
<div>
    <h2>Manufacturing Unit</h2>
<span>Here we provide address</span>
</div>
</div>


{/* 3rd element */}
<div style={{display:"flex", paddingBottom:"30px"}}>
<img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/70/000000/external-call-business-elements-and-symbols-metaphors-flatart-icons-outline-flatarticons.png" alt=""/>
<div>
    <h2>Telephone Office</h2>
<span>Here we provide address</span>
</div>
</div>


{/* 4th element */}
<div style={{display:"flex", paddingBottom:"30px"}}>
<img src="https://img.icons8.com/clouds/80/000000/link-company-parent.png" alt=""/>
<div>
    <h2>Head Office Location </h2>
<span>Here we provide address</span>
</div>
</div>

        </div>


</div>


</div>


<div className="Footer">
<img src="https://img.icons8.com/material-outlined/24/000000/creative-commons-all-rights-reserved.png"/>
All Rights Reserved
<div>Powered by Al Noor Assications</div>
<div>Developed with ❤️ From Zain Shahbaz </div>



</div>

       </>
    )
}

export default SocialAcc
