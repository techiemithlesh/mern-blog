import React from 'react';
import {Link} from 'react-router-dom';
const Footer = () => {
    return (
        <>

            <footer className="p-4 sm:p-6 dark:bg-gray-900 text-white bg-black">
                <div className='footer_container md:flex md:justify-between md:flex-wrap md:px-16 py-8'>
                    <div className='footer_logo_container'>
                        <div className='footer_logo_img_container'>
                            {/* <img src={Logo} alt="Logo"/> */} </div>
                        <p>CodeKaro.com is an one step website for the software enginners.</p>
                    </div>
                    <div className='resource'>
                        <h2 className="mb-2 text-sm font-semibold  uppercase">Resources</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-2">
                                <Link to="/" className="hover:underline">Home</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/about" className="hover:underline">About</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/blog" className="hover:underline">Blog</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/notes" className="hover:underline">Notes</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='follow'>
                        <h2 className="mb-2 text-sm font-semibold  uppercase">Follow Us</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-2">
                                <a href='https://github.com/techiemithlesh' target="_blank" rel="noreferrer" className="hover:underline">Github</a>
                            </li>
                            <li className="mb-2">
                                <a href='https://www.instagram.com/programmermithlesh/' target="_blank" rel="noreferrer" className="hover:underline">Instagram</a>
                            </li>
                            <li className="mb-2">
                                <a href='#' target="_blank" rel='noreferrer' className="hover:underline">Facebook</a>
                            </li>
                            <li className="mb-2">
                                <a href='https://www.linkedin.com/in/mithlesh-12/' target="_blank" rel='noreferrer' className="hover:underline">Linkedin</a>
                            </li>
                        </ul>
                    </div>
                    <div className='important_link'>
                        <h2 className="mb-2 text-sm font-semibold  uppercase">Important Links</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-2">
                                <Link to="/" className="hover:underline">Author</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/" className="hover:underline">Privacy Policy</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/" className="hover:underline">Terms of Use</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/" className="hover:underline">Cookies</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>

                <p className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023
                    <a href="/">CodeWithPatel™</a>. All Rights Reserved.
                </p>
            </footer>

        </>
    )
}

export default Footer;
