import React from 'react';
import logo from './zector.png'
import styled from 'styled-components'

const Link = styled.a`
  margin-bottom: 30px;
  text-align: center;
  border: none;
  width: 100%;
  
  @media only screen and (min-width: 750px){
    width: 40%;
  }

  :hover {
    background-color: #7FEBF2;
  }
`

const Contain = styled.div`
height: 100%;
padding-bottom: 180px;
@media only screen and (min-width: 750px){
  height: 100vh;
  padding: 0;
}
`

function App() {
  return (
    <Contain>
      <section className="section" style={{backgroundColor: `#1B1B1B`, height: `100%`, width: `100%`}}>
      <div className="container">
      <div style={{display: `flex`, flexDirection: `column`, alignItems: `center`}}>
      <img src={logo} alt="zector logo" width="300" height="60" style={{marginBottom: `75px`, textAlign: `center`}}/>
      <Link className="button" href="https://www.zector.io/about">Learn more about Zector</Link>
      <Link className="button" href="https://www.zector.io/services">Zector's Services</Link>
      <Link className="button" href="https://www.zector.io/">Zector's process</Link>
      <Link className="button" href="https://blog.zector.io/">Check out Zector's latest blog posts</Link>
      <Link className="button" href="https://form.jotform.com/202067012412135">Ready to build an app? Get in touch</Link>
      </div>
      </div>
    </section>
    </Contain>
  );
}

export default App;
