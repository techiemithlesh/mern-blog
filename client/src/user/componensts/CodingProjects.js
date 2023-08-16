import React, {useRef, useState} from 'react';
import CodingProject from './CodingProject';
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import {Pagination} from "swiper";

const CodingProjects = () => {
    const projects = [
        {
            id: 1,
            name: 'Weather App',
            description: 'A weather app built with React that displays the current weather and a 5-day forecast for any location.',
            imageUrl: 'https://picsum.photos/id/1003/400/300',
            technologies: [
                'React', 'OpenWeatherMap API', 'Tailwind CSS'
            ],
            demoUrl: 'https://example.com/weather-app',
            sourceUrl: 'https://github.com/example/weather-app'
        }, {
            id: 2,
            name: 'Task Tracker',
            description: 'A task tracker built with React that allows users to add, delete, and toggle tasks.',
            imageUrl: 'https://picsum.photos/id/1021/400/300',
            technologies: [
                'React', 'Tailwind CSS', 'NodeJS'
            ],
            demoUrl: 'https://example.com/task-tracker',
            sourceUrl: 'https://github.com/example/task-tracker'
        }, {
            id: 3,
            name: 'E-commerce Site',
            description: 'An e-commerce site built with React and Stripe that allows users to browse products, add items to their cart, and checkout securely.',
            imageUrl: 'https://picsum.photos/id/1040/400/300',
            technologies: [
                'React', 'Stripe API', 'Tailwind CSS'
            ],
            demoUrl: 'https://example.com/e-commerce',
            sourceUrl: 'https://github.com/example/e-commerce'
        }, 
        {
            id: 4,
            name: 'E-commerce Site',
            description: 'An e-commerce site built with React and Stripe that allows users to browse products, add items to their cart, and checkout securely.',
            imageUrl: 'https://picsum.photos/id/1040/400/300',
            technologies: [
                'React', 'Stripe API', 'Tailwind CSS'
            ],
            demoUrl: 'https://example.com/e-commerce',
            sourceUrl: 'https://github.com/example/e-commerce'
        }, 
        {
            id: 5,
            name: 'E-commerce Site',
            description: 'An e-commerce site built with React and Stripe that allows users to browse products, add items to their cart, and checkout securely.',
            imageUrl: 'https://picsum.photos/id/1040/400/300',
            technologies: [
                'React', 'Stripe API', 'Tailwind CSS'
            ],
            demoUrl: 'https://example.com/e-commerce',
            sourceUrl: 'https://github.com/example/e-commerce'
        }
    ];


    return (
      <>
      <h1 className='text-xl text-bold my-4'>Coding Projects</h1>
        <Swiper slidesPerView={3}
            spaceBetween={30}
            pagination={
                {clickable: true}
            }
            modules={
                [Pagination]
            }
            className="mySwiper">
            {
            projects.map((project, index) => {
                return (
                 
                  
                    <SwiperSlide key={index}>
                        <CodingProject key={
                                project.id
                            }
                            name={
                                project.name
                            }
                            description={
                                project.description
                            }
                            imageUrl={
                                project.imageUrl
                            }
                            technologies={
                                project.technologies
                            }
                            demoUrl={
                                project.demoUrl
                            }
                            sourceUrl={
                                project.sourceUrl
                            }/>
                    </SwiperSlide>
                );
            })
        } </Swiper>
        </>
    );
    
};

export default CodingProjects;
