import * as React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'

import styled from 'styled-components'

const masonryOptions = {
    transitionDuration: 4
};

const ImageWrapper = styled.div`
  position: "absolute"
  width: 300px;
  height: auto;
  zIndex: 2;
  transition: .5s ease;
  box-shadow: 0 10px 10px -5px ;
  cursor: pointer;
  backface-visibility: hidden;
  -webkit-filter: brightness(100%);
  border-radius: 5px;
  -webkit-filter: brightness(60%);

`
const View = styled.p`
  background-color: rgba(51, 51, 77, 0.8);
  color: white;
  font-size: 16px;
  padding: 4px 16px;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 5px

`
const Overlay = styled.div`
  transition: .5s ease;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  opacity: 0;
  -webkit-transition: all .5s;
   -moz-transition: all .5s;
   -o-transition: all .5s;
   transition: all .5s;

  }
`

const Container = styled.div`
  position: relative;
  &:hover {
    ${ImageWrapper} {
      opacity: 0.6;
      -ms-transform: scale(1.05);
      -moz-transform: scale(1.05);
      -webkit-transform: scale(1.05);
      -o-transform: scale(1.05);
      transform: scale(1.05);
      -webkit-filter: brightness(50%);
      -webkit-transition: all 1s ease;
      -moz-transition: all 1s ease;
      -o-transition: all 1s ease;
      -ms-transition: all 1s ease;
      transition: all 1s ease;
    }
    ${Overlay} {
      opacity: 1;
    }
  }
`

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
                    <Container>
                      <ImageWrapper>
                        <PreviewCompatibleImage imageInfo={item}
                          openModal={this.openModal}
                          />
                      </ImageWrapper>
                      <Overlay>
                        <View>View</View>
                      </Overlay>

                    </Container>
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
         <div className="modal-card" style={{marginTop:"20px"}}>
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
