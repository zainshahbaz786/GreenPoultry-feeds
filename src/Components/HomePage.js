import React from 'react'
import Topbar from './Topbar'
import BPFP from './BPFP'

const HomePage = () => {
    return (
        <>
            {/* main home page */}


{/* remaining data of home page */}
<div className="header">
    <h1 style={{paddingLeft:"25px",fontSize:"56px"}}>Green Poultry Feeds</h1>

        <div style={{paddingRight:"350px"}}>
                        <p style={{paddingLeft:"25px",paddingRight:"120px",fontSize:"20px",color:"black"}}>Al Noor Feeds aims to be one of the best poultry feeds mills in Pakistan.
                We are providing a comprehensive range of competitive poultry products and 
                technical services to our customers through adoption of innovative technology
                and effective resource management.
                <br/>
                We aim at achieving this goal by maintaining high ethical and professional 
                standards in ourselves and our products.
                
                </p>

     </div>
</div>  
<br/><br/><br/><br/>
<BPFP/>


        </>
    )
}

export default HomePage
