import React from 'react';
import SocialAcc from './SocialAcc';
import logo from "./Images/logo.png"
// import darklogo from "./Images/darklogo.png"

const AboutUsPage = () => {
  return <>

<div className="aboutuspage">

  <h1 style={{textAlign:"center"}}>About Green Poultry Feeds</h1>
<img src={logo} alt="logo" style={{backgroundColor:"black",display:"Block",marginLeft:"auto",marginRight:"auto",padding:"50px",paddingBottom:"50px",textAlign:"center",justifyContent:"center",width:"300px",height:"300px",}}></img>


<br/>

  <p>Al Noor FEEDs vision is to achieve and then remain as the most progressive and profitable Poultry organization in Pakistan.</p>
  
  <p>Incorporated in 2011 with limited feed products but today Al Noor FEEDs broadly undertakes all Poultry Feed Products in Pakistan.</p>
  
<br/>
<br/>
  <p>The poultry feed industry in Pakistan is evolving with time. Al Noor FEEDs aims to be the best Feed Mill in Pakistan. Currently, the feed mill is one of the best Feed Mills in Lower Punjab.

We have, and our violent effort developing a portfolio of our business to compare with the major players within this respective industry.<br/><br/>

Bringing together outstanding knowledge of customer needs with leading-edge technology platforms, our company undertakes to provide superior products to its Poultry Feed customers.</p>

<br/><br/>
  <p>The financial strength of the Al Noor FEEDs Group has been enabled it to create an effective in diverse sectors of the economy. The Group has continuously invested in its existing operations and also developing new business areas of interest.</p>

  <br/>

  <p>Feed formulation is the main factor because it is chemistry by which we can produce feed at an economical price with full of nutrition required for each category of Feed.</p>

  <br/><br/>
  <p>The use of modern equipment to enhance the quality of products along with the Induction of most talented and experienced staff has an edge on competitors.</p>

<SocialAcc/>

</div>
  </>;
};

export default AboutUsPage;
