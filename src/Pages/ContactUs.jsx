import React from 'react';

function ContactUs() {
    return (
        <div className="contactus">
        <div className='container py-5'>
            <div className="row justify-content-center">
                <div className=" col-xxl-6 col-xxl-5 col-lg-7 col-md-8 col-sm-10 col-12">
                    <div className="form-outer text-center  p-5">
                        <h1>Get In Touch With Us :</h1>
                        <form className='mt-4'>
                            <div className="row justify-content-center">
                                <div className="col-xxl-9 col-xl-8 col-lg-9 col-md-10 col-sm-10 col-10 mb-4 d-flex align-items-center">
                                    <input type="text" className='form-control' placeholder='Full name:' />
                                </div>
                                <div className="col-xxl-9 col-xl-8 col-lg-9 col-md-10 col-sm-10 col-10  mb-4 d-flex align-items-center">
                                    <input type="email" className='form-control' placeholder='Email:' />
                                </div>
                                <div className="col-xxl-9 col-xl-8 col-lg-9 col-md-10 col-sm-10 col-10  mb-4 d-flex align-items-center">
                                    <input type="number" className='form-control' placeholder='+91' />
                                </div>
                                <div className="col-xxl-9 col-xl-8 col-lg-9 col-md-10 col-sm-10 col-10  mb-4 d-flex align-items-center">
                                <textarea className="form-control" rows="3" placeholder="comments:"></textarea>
                                </div>
                                <div className="col-xxl-9 col-xl-8 col-lg-9 col-md-10 col-sm-10 col-10  mb-4">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label " htmlFor="exampleCheck1">I agree to the processing of personal data</label>
                                    </div>
                                </div>
                                <div className="col-xxl-9 col-xl-8 col-lg-9 col-md-10 col-sm-10 col-10 mt-5">
                                    <button type="submit" className='btn btn-light w-100'>Submit Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ContactUs;
