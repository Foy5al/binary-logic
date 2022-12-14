// eslint-disable-next-line 
import React from 'react';
import './ContactUs.css';

const ContactUs = () => {

    return (

        <article className='py-5 m-0 bg-Black'>
            <div className="container">
                <h1 className='articleTitle text-center mb-5 '>Contact Us</h1>
                <div className='row'>

                    <div className='col-12 col-lg-6 order-1'>
                        <div className='row row-cols-2  mt-3'>

                            <div className="col">
                                <div className='d-flex justify-content-center'>
                                    <h1 className='imageIcon p-3 px-4 rounded-circle'><i className="fa-solid fa-location-dot articleIcon"></i></h1>
                                </div>
                                <h4 className='flexTitle text-center'>Address:</h4>
                                <p className='text-center flexParagraph  mt-0'>Tejgaon  <br />Dhaka, Dhaka-1212</p>
                            </div>

                            <div className="col">
                                <div className='d-flex justify-content-center'>
                                    <h1 className='imageIcon p-3 px-4 rounded-circle'><i className="fa-solid fa-envelope articleIcon"></i></h1>
                                </div>
                                <h4 className='flexTitle text-center'>Email:</h4>
                                <p className='text-center flexParagraph mt-0 paragraph'>mh.foysal.h@gmail.com </p>
                            </div>

                            <div className="col">
                                <div className='d-flex justify-content-center'>
                                    <h1 className='imageIcon p-3 px-4 rounded-circle'><i className="fa-solid fa-phone articleIcon"></i></h1>
                                </div>
                                <h5 className='flexTitle text-center'>Call US;</h5>
                                <p className='text-center flexParagraph mt-0'>+88 0168888888 <br />
                                    +88 01711111111</p>
                            </div>

                            <div className="col">
                                <div className='d-flex justify-content-center'>
                                    <h1 className='flexTitle fs-5 mt-4'> Contact Us</h1>
                                </div>
                                <p className='text-center flexParagraph my-0 mb-2 pt-0'>Contact us  for a quote. Help or join the team.</p>
                                <div className='d-flex justify-content-center fs-2 gap-3 text-white  socialIcons'>
                                    <a target='_blank' href="https://www.facebook.com/" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a target='_blank' href="https://twitter.com/" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
                                    <a target='_blank' href="https://www.instagram.com/" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                                    <a target='_blank' href="https://www.pinterest.com/" rel="noreferrer"> <i className="fa-brands fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12  col-lg-6 order-2 mapHeight p-3 p-lg-5'>
                        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.21814718087563!2d90.4093199751501!3d23.765546865050883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x45ddac7c16b4e43b!2zUmVraGFjaXRybyAtIOCmsOCnh-CmluCmvuCmmuCmv-CmpOCnjeCmsA!5e0!3m2!1sen!2sbd!4v1659552863549!5m2!1sen!2sbd" className='w-100 h-100 zoomToFit'></iframe>
                    </div>

                </div>
            </div>
        </article>

    );
};

export default ContactUs;