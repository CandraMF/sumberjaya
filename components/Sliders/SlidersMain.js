
import { Component } from "react"
import Slider from "react-slick";

export default class SliderMain extends Component{
    
    render() {
        const images = [
            "https://images.unsplash.com/photo-1516655855035-d5215bcb5604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
            "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60"
        ];

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrow: true,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <>
                <Slider>
                    {
                        images.map((value, index) => {
                            return (
                            <div>
                                <img src={value}/>
                            </div>
                            )
                        })
                    }
                    
                </Slider>
            </>
        )
    }
}