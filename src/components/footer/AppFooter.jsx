'use client';

import React from 'react';
import footerWave from "../../../public/images/svgs/footerWave.svg";
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok } from 'react-icons/fa';
import Image from 'next/image';

const AppFooter = () => {
    
    return (
        <div
            className="w-full"
        >

            <div className="max-w-7xl bg-[#b89d7e] text-white mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* INFORMATION */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">INFORMATION</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#">About Us</Link></li>
                        <li><Link href="#">Store Locator</Link></li>
                        <li><Link href="#">Product Catalogues</Link></li>
                        <li><Link href="#">Blog</Link></li>
                        <li><Link href="#">Payments</Link></li>
                        <li><Link href="#">Shipping</Link></li>
                        <li><Link href="#">Authorized Dealers</Link></li>
                        <li><Link href="#">Careers</Link></li>
                        <li><Link href="#">Terms of Offers for Sale</Link></li>
                        <li><Link href="#">Terms of Use</Link></li>
                        <li><Link href="#">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* USER AREA */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">USER AREA</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#">Corporate</Link></li>
                        <li><Link href="#">Contact Us</Link></li>
                        <li><Link href="#">Corporate Form</Link></li>
                        <li><Link href="#">Information/Lead Form</Link></li>
                        <li><Link href="#">Rewards</Link></li>
                        <li><Link href="#">Loyalty Form</Link></li>
                    </ul>
                </div>

                {/* FOLLOW US & JOIN OUR MAILING LIST */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">FOLLOW US</h3>
                    <div className="flex space-x-3 text-xl mb-6">
                        <Link href="#"><FaTiktok /></Link>
                        <Link href="#"><FaYoutube /></Link>
                        <Link href="#"><FaLinkedinIn /></Link>
                        <Link href="#"><FaInstagram /></Link>
                        <Link href="#"><FaTwitter /></Link>
                        <Link href="#"><FaFacebookF /></Link>
                    </div>

                    <h3 className="text-lg font-semibold mb-2">JOIN OUR MAILING LIST</h3>
                    <p className="text-sm mb-3">
                        Subscribe to our newsletter to get the latest news and product updates directly to your email.
                    </p>
                    <form className="flex items-center border border-white rounded overflow-hidden">
                        <input
                            type="email"
                            placeholder="Enter your mail address"
                            className="flex-grow px-3 py-2 text-black placeholder-gray-500 text-sm"
                        />
                        <button
                            type="submit"
                            className="bg-white text-black px-4 text-sm font-semibold"
                        >
                            →
                        </button>
                    </form>
                </div>

                {/* CONTACT INFO */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">CONTACT INFO</h3>
                    <p className="text-sm mb-2">021-111-203-203</p>
                    <p className="text-sm">info@jadeedsoft.com</p>
                </div>

            </div>

        </div>
    );
};

export default AppFooter;
