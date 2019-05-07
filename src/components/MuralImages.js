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

class MuralImages extends React.Component {
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
        <MuralModal item={this.state.selectedArt}
          open={this.state.modalOpen} closeModal={this.closeModal}/>
      </div>
    )
  }
}

class MuralModal extends React.Component {
  render() {
    let item = this.props.item
    let modalClass = this.props.open ? 'modal--open' : 'modal--closed'
    console.log(this.props.item.image)
    return (
      <div className={modalClass}>
       <div className="modal-background"></div>
         <div className="modal-card">
          <div className="image" style={{margin:"100px"}}>
            <Img fluid={item.image.childImageSharp.fluid}/>
              <footer className="modal-card-foot" style={{backgroundColor:"#fff"}}>
                <button className="button" onClick={this.props.closeModal}>Close</button>
              </footer>
          </div>
        </div>
      </div>
    )
  }
}

export default MuralImages
export { MuralModal }
