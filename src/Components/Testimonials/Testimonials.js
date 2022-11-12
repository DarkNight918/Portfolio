import React from 'react';
import './Testimonials.css';
import BotB from '../img/BotB.jpg'
import CodingDojo from '../img/CodingDojo.jpg'
import Liberty from '../img/Liberty.jpg'
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/components/pagination/pagination.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';


const testimonialData = [
    {
        quote : ' Really Good Developer. He was so good at his work. Have done so many tasks quickly.',
        name : 'William Hindmarch',
        from : 'CEO, BotB',
        img : BotB
    },
    {
        quote : ' He worked as a Lead Instructor of Coding Dojo. His works was awesome. A person with very good leadership. ',
        name : 'Richard Wang',
        from : 'CEO, Coding Dojo',
        img : CodingDojo
    },
    {
        quote : ' He worked with me for couple of months. He was very good at programming especially Blockchain development. I was so happy. ',
        name : 'Lesley baars',
        from : 'PM, Liberty Global',
        img : Liberty
    }
]
const Testimonials = () => {
    SwiperCore.use([Pagination, Autoplay]);
    return (
        <section className="testimonials">
            <div className="container">
                <div className="section-title">
                    <h1 className="test-header mb-5">Testimonials</h1>
                </div>
            </div>
            <div className="mx-sm-5">
                    <Swiper
                        loop={true}
                        pagination={{ clickable: true }}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 2,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={50}
                    >

                        {
                            testimonialData.map((testimonial, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                       <div className="single-testimonial shadow">
                                            <img className="rounded-circle shadow" src={testimonial.img} alt="" width="100" height="100" />
                                            <h4 className="text-gradient">{testimonial.name}</h4>
                                            <h6 className="m-0">{testimonial.from}</h6>
                                            <div className="text-secondary mt-3">
                                                <p>{testimonial.quote.substr(1, 200)}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>
                </div>
        </section>
    );
};

export default Testimonials;