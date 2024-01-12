import React, { useRef } from 'react';
import Pipe from '../../assets/pipe.jpg';
import './About.css';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const variants = {
    initial: {
      x: -200,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  const ref = useRef();

  const isInView = useInView(ref, { margin: '-50px' });
  return (
    <motion.div
      id="about"
      variants={variants}
      initial="initial"
      whileInView="animate"
      ref={ref}
      animate={isInView && 'animate'}
      className="px-lg-5 px-md-4 px-3 py-5"
    >
      <div className="py-lg-5 py-0">
        <div className="d-flex flex-wrap">
          <motion.div
            variants={variants}
            className="col-lg-6 col-12 d-flex  justify-content-center align-items-center"
          >
            <motion.img
              variants={variants}
              src={Pipe}
              alt=""
              className="img-fluid "
              style={{ width: '100%', height: '100%' }}
            />
          </motion.div>
          <div className="col-lg-6 col-12 ">
            <div
              className="px-lg-4 px-0 d-flex  flex-column justify-content-evenly"
              style={{ width: '100%', height: '100%' }}
            >
              <motion.div variants={variants} className="d-flex">
                <h1 className="fw-bold underline-for-heading">About Us</h1>
              </motion.div>
              <motion.div variants={variants} className="">
                <motion.p
                  variants={variants}
                  className="mt-lg-4 mt-3"
                  style={{ fontSize: '18px', textAlign: 'justify' }}
                >
                  The Company founded in 2007 by Mr. Kamruddin Qureshi. Over these years, the company has earned a reputation that has a unique combination of quality,value, trust and reliability.
                </motion.p>
                <motion.p
                  variants={variants}
                  className="mt-lg-4 mt-3"
                  style={{ fontSize: '18px', textAlign: 'justify' }}
                >
                  To Provide Quality Services that exceeds the expectation of our esteemed Customers.
                  We believe in treating our customers with respect and faith We grow though creativity, 
                  Invention and innovation. We integrate Honesty, Integrity and Business ethics into all 
                  aspects of our business functioning. Contact us today to discuss how we can contribute 
                  to the success of your projects and operations. Feel free to customize this description 
                  based on specific details about your company, such as your values, unique offerings, 
                  and notable projects.
                </motion.p>
                <motion.p
                  variants={variants}
                  className="mt-lg-4 mt-3"
                  style={{ fontSize: '18px', textAlign: 'justify' }}
                >
                  Our satisfied and repeat customers of over 3 decades are the
                  who's and who of Civil Construction & Renovation, 
                  Fabrication & Painting, Operation & Maintenance, Manpower Supply, 
                  Earthmover Services, Crane Supply, and Electrical Works. 
                  Nuclear and other sectors in India and globally.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
