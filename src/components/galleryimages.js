import * as React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'

import styled from 'styled-components'

const masonryOptions = {
    transitionDuration: 4
};

const ImageFrame = styled.div`
  border: 8px solid rgba(102, 51, 0, 1);
  padding: 20px 20px;
  background-color: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5) inset;
  cursor: pointer;
  :hover {
    transform: scale(1.01);
  }
`
const imagesLoadedOptions = { background: '.has-background-grey' }

class GalleryImages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'modalOpen': false,
      'selectedArt': this.props.gridItems[0]
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(evt, item) {
    this.setState({
      'modalOpen': true,
      'selectedArt': item
    });
  }

  closeModal(evt) {
    this.setState({
      'modalOpen': false
    });
  }
  render() {
    return (
      <div>
        <Masonry
          className={'colums is-multiline'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={true}
          imagesLoadedOptions={imagesLoadedOptions}
          >
          {this.props.gridItems.map( (item, idx) => {
            return (
              <div key={idx} className="column is-4 is-half-tablet is-full-mobile">
                <ImageFrame onClick={ (evt) => this.openModal(evt, item) }>
                    <figure >
                      <PreviewCompatibleImage imageInfo={item}
                        openModal={this.openModal}

                        />
                    </figure>
                </ImageFrame>
              </div>
            )
          })}
        </Masonry>
        <GalleryModal item={this.state.selectedArt}
          open={this.state.modalOpen} closeModal={this.closeModal}/>
      </div>
    )
  }
}

class GalleryModal extends React.Component {
  render() {
    let item = this.props.item
    let modalClass = this.props.open ? 'modal--open' : 'modal--closed'
    return (
      <div className={modalClass}>
       <div className="modal-background"></div>
         <div className="modal-card" style={{marginTop:"75px"}}>
           <header className="modal-card-head">
            <p className="modal-card-title is-uppercase">{item.title}</p>
            <button className="delete" aria-label="close" onClick={this.props.closeModal}></button>
          </header>
          <div className="image">
            <Img fluid={item.image.childImageSharp.fluid}/>

          </div>
          <div className="modal-card-body">
            <p>{item.description}</p>
          </div>
          <footer className="modal-card-foot" >
            <button className="button is-small is-outlined is-inverted">Purchase</button>
          </footer>
        </div>
      </div>
    )
  }
}

export default GalleryImages
export { GalleryModal }
