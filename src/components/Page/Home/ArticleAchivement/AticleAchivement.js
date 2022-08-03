import React from 'react';
import './ArticelAchivement.css';
import VisibilitySensor from 'react-visibility-sensor';


const AticleAchivement = () => {


    return (
        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (

                <article className='pt-5 pb-0 m-0 bg-semiBlack'>
                    <div className="container d-flex flex-column  align-items-center">
                        <h3 className='articleTitle fs-2 text-center pb-2 '>OUR  ACHIEVEMENTS</h3>

                        <div className='row row-cols-2 row-cols-md-2 row-cols-lg-4 mt-5  gx-0 gx-md-5'>

                            <div className="col">
                                <div className='d-flex justify-content-center'>
                                    <h1 className='emojiSize'><i className="fa-regular fa-face-smile articleIcon "></i></h1>
                                </div>

                                <h4 className='flexTitle fs-5 text-center mb-0 pb-0 '>Happy Client</h4>
                                <p className='text-center flexParagraph invisible mb-0 pb-0 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            </div>

                            <div className="col">
                                <div className='d-flex justify-content-center'>
                                    <h1 className='emojiSize'><i className="fa-regular fa-flag articleIcon"></i></h1>
                                </div>

                                <h4 className='flexTitle fs-5 text-center mb-0 pb-0 '>Country Reached</h4>
                                <p className='text-center flexParagraph invisible mb-0 pb-0  '>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

                            </div>

                            <div className="col">
                                <div className='d-flex justify-content-center'>
                                    <h1 className='emojiSize'><i className="fa-regular fa-copyright articleIcon"></i></h1>
                                </div>

                                <h4 className='flexTitle fs-5 text-center mb-0 pb-0 '>Connected Brands</h4>
                                <p className='text-center flexParagraph invisible mb-0 pb-0  '>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

                            </div>

                            <div className="col">
                                <div className='d-flex justify-content-center'>
                                    <h1 className='emojiSize'><i className="fa-solid fa-computer articleIcon"></i></h1>
                                </div>

                                <h4 className='flexTitle fs-5 text-center mb-0 pb-0 '>Unique Product</h4>
                                <p className='text-center flexParagraph invisible mb-0 pb-0  '>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

                            </div>
                        </div>
                    </div>
                </article >

            )}
        </VisibilitySensor>


    );
};

export default AticleAchivement;