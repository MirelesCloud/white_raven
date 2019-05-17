import React from 'react'

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
