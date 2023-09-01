import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import styled from "styled-components"

function ImgSlider() {
  let setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (

    <Carousel {...setting}>
      <Wrap>
        <a>
          <img src="/images/slider-badging.jpg" alt="" />
          </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/images/slider-scale.jpg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/images/slider-badag.jpg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/images/slider-scales.jpg" alt="" />
        </a>
      </Wrap>
    </Carousel>
  )
}

const Carousel = styled(Slider)`
margin-top:10px;
max-height:300px;

.slick-prev::before {
  opacity:0;
  height: 100%;
  width: 5vw;
  z-index: 1;

  &:hover {
  opacity:1;
    transition: opacity 0.2s ease 0s;
  }
}

  ul li button{
    &::before{
      color:white;
      font-size:9px;
    }
  }
    li.slick-active button::before{
      color:white;
    }
    .slick-list{
      overflow:initial;
    }
    .slick-prev{
      left:-50px;
    }
    .slick-next{
      right:-50px;
    }
`

const Wrap = styled.div`
border-radius:5px;
// height:300px;
// overflow:hidden;

img{
 box-shadow:0 18px 16px -8px rgba(0,0,0,0.5);
padding:2px 5px;
display:inline-block;
width:100%;
height:100%;
}

&:hover {
  border: 2px solid white;
 
}
`

export default ImgSlider