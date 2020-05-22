import React,{Component} from 'react'
import {connect} from 'react-redux'
import AwesomeSwiper from 'react-awesome-swiper';
import {
    HomeBanner
} from '../style'
const config = {
    loop : true,
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
    speed: 500,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      bulletElement : 'li',
      hideOnClick :true,
      clickable :true,
    },
    on: {
      slideChange: function () {
        console.log(this.activeIndex);
      },
    },
  };
class ReactBanner extends Component{
    swiperRef = null
    goNext = () => {//use `this.swiperRef.swiper` to get the instance of Swiper
        this.swiperRef.swiper.slideNext();
    }
    bannerRender(){
        const {bannerList} = this.props
        const bannerListJS = bannerList.toJS()
        const bannerUI = []
        if(bannerListJS.banner){
              bannerListJS.banner.map(item =>{
                  bannerUI.push(
                    <div className="swiper-slide" key={item.id}>
                        <img className='img' src={item.imgUrl} alt="" />
                    </div>
                  )
              })
            return bannerUI
         }
    }
   render () {
       return (
        <HomeBanner>
            <AwesomeSwiper ref={ref => (this.swiperRef = ref)} config={config} className="your-classname">
                <div className="swiper-wrapper">
                    {
                        this.bannerRender()
                    }
                </div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-pagination"></div>
            </AwesomeSwiper>
        </HomeBanner>
       )
   }
}
const mapState = state =>({
    bannerList: state.home.get('bannerList')
})
const mapDispath = disPath =>({
})
export default connect(mapState,mapDispath)(ReactBanner)