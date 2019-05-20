import React from 'react'
import styled from 'styled-components'

const FigCaption = styled.div`
  top: auto;
  bottom: 0;
  padding: 1em;
  height: 3.75em;
  background: #fff;
  color: #3c4a50;
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  -webkit-transform: translate3d(0,100%,0);
  transform: translate3d(0,100%,0);
`
const Parking = () => (
  <div className="modal-card" style={{marginTop:"20px"}}>
    <header className="modal-card-head">
     <p className="modal-card-title is-uppercase">{item.title}</p>
     <button className="delete" aria-label="close" onClick={this.props.closeModal}></button>
   </header>
   <figure className="image">
     <Img fluid={item.image.childImageSharp.fluid}/>
   </figure>
   <div className="modal-card-body">
     <p>{item.description}</p>
   </div>
   <footer className="modal-card-foot" >
     <button className="button is-small is-outlined is-inverted">Purchase</button>
   </footer>
 </div>
)

const Modal = () => (
  <div className={modalClass}>
   <div className="modal-background">
     <div className="columns">
       <div className="column is-10 is-offset-1">
         <figure className="image">
           <button className="delete" aria-label="close" onClick={this.props.closeModal}></button>
           <Img fluid={item.image.childImageSharp.fluid}/>
           <FigCaption><h2>hello</h2></FigCaption>
         </figure>
       </div>
     </div>
   </div>
  </div>

)
