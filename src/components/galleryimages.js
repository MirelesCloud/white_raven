import * as React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import signature from '../img/wrsignature.png'

import styled from 'styled-components'

const masonryOptions = {
    transitionDuration: 2
};

const Title = styled.h1`
  margin: 0;
  color: white;
  position: relative;
  z-index: 1;
`

const Header = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px 10px;
  background: inherit;
  background-attachment: fixed;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    top: -20px;
    left: 0;
    width: 200%;
    height: 200%;
    background: inherit;
    background-attachment: fixed;
    -webkit-filter: blur(4px);
    filter: blur(4px);
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25)
  }
`
const ImageWrapper = styled.div`
  position: "absolute";
  maxWidth: 300px;
  height: auto;
  zIndex: 2;
  transition: .5s ease;
  box-shadow: 0 10px 10px -5px ;
  cursor: pointer;
  backface-visibility: hidden;
  -webkit-filter: brightness(100%);
  border-radius: 5px;
  -webkit-filter: brightness(100%);
`
const View = styled.p`
  color: white;
  font-size: 1.3rem;
  padding: 4px 16px;
  cursor: pointer;
  text-transform: uppercase;

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
      -ms-transform: scale(1.04);
      -moz-transform: scale(1.04);
      -webkit-transform: scale(1.04);
      -o-transform: scale(1.04);
      transform: scale(1.01);
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
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.5) inset;
  cursor: pointer;

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
                        <div style={{position: "relative"}}>
                          <PreviewCompatibleImage imageInfo={item}
                            openModal={this.openModal}
                            style={{position: "relative"}}
                            />

                        </div>
                      </ImageWrapper>
                      <Overlay>
                        <View>{item.title}</View>
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
        <div className="modal-content" style={{marginTop: "5%"}}>
          <button className="modal-close is-large" aria-label="close"
            onClick={this.props.closeModal}>Close</button>
          <figure className="image" style={{position: "relative"}}>
            <Img fluid={item.image.childImageSharp.fluid} style={{position: "relative"}}/>
            <img src={signature}
              style={{
              width: "10%",
              height: "auto",
              position: "absolute",
              top: "88%",
              left: "85%",
              borderRadius: "5px"
            }}
            />
            <Header><Title>{item.title}</Title></Header>
          </figure>
          <button className="modal-close is-large" aria-label="close"
            onClick={this.props.closeModal}>Close</button>
        </div>
      </div>
    )
  }
}

export default GalleryImages
export { GalleryModal }
