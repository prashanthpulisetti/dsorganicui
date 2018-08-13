import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import s1 from './images/s1.png';
import s2 from './images/s2.png';
import s3 from './images/s3.png';
class Slider extends Component {
    render() { 
        return ( <Carousel>
            <Carousel.Item>
              <img width={1000} height={500} alt="1000x500" src={s1} />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={1000} height={500} alt="1000x500" src={s2} />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={1000} height={500} alt="1000x500" src={s3} />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
           );
    }
}
 
export default Slider ;

