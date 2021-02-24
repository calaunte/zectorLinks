import React from 'react';
import logo from './zector.png'
import styled from 'styled-components'
//
//
const Link = styled.a`
  margin-bottom: 30px;
  text-align: center;
  border: none;
  width: 100%;
  color: black;
  padding-top: 40px;
  padding-bottom: 40px;
  
  @media only screen and (min-width: 750px){
    width: 45%;
  }

  :hover {
    background-color: #7FEBF2;
  }
`

const Contain = styled.div`
height: 100%;
padding-bottom: 250px;
@media only screen and (min-width: 750px){
  height: 100vh;
  padding: 0;
}
`

const Section = styled.section`
  padding-bottom: 1000px !important;
  height: 100vh !important;

  @media only screen and (min-width: 750px){
    padding-bottom: 0;
  }
`

function App() {
  return (
    <Contain>
      <Section className="section" style={{backgroundColor: `#1B1B1B`, height: `100%`, width: `100%`}}>
      <div>
      <div style={{display: `flex`, flexDirection: `column`, alignItems: `center`}}>
      <img src={logo} alt="zector logo" width="300" height="60" style={{marginBottom: `75px`, textAlign: `center`}}/>
      <Link className="button" href="https://form.jotform.com/202067012412135">Ready to build an app? Get in touch</Link>
      <Link className="button" href="https://www.zector.io/about">Learn more about Zector</Link>
      <Link className="button" href="https://www.zector.io/services">Zector's Services</Link>
      <Link className="button" href="https://www.zector.io/">Zector's Process</Link>
      <Link className="button" href="https://www.zector.io/blog">Check out Zector's latest blog posts</Link>
      <Link className="button" href="https://offers.zector.io/build-a-loyal-fanbase-with-zectors-secret-tool-for-indie-entertainers">Download Our Free Guide<br/> Build a Loyal Fanbase With<br/> Zector's Secret Tool for Indie Entertainers</Link>
    </div>
      </div>
    </Section>
    </Contain>
  );
}

export default App;
