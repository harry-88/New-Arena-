import React, { useEffect } from 'react'
import './styles/navbar.css'
import logo from './images/logo.jpg'
import $ from 'jquery';

export default function Navbar() {
    useEffect(() => {
        handleNavbar();
    }, []);
    const handleNavbar = () => {
        $(function () {
            // open and close nav
            $('#navbar-toggle').click(function () {
                $('nav ul').slideToggle();
            });

            // Hamburger toggle
            $('#navbar-toggle').on('click', function () {
                this.classList.toggle('active');
            });

            // If a link has a dropdown, add sub menu toggle.
            $('nav ul li a:not(:only-child)').click(function (e) {
                $(this).siblings('.navbar-dropdown').slideToggle('slow');

                // Close dropdown when selecting another dropdown
                $('.navbar-dropdown').not($(this).siblings()).hide('slow');
                e.stopPropagation();
            });

            // Click outside the dropdown will remove the dropdown class
            $('html').click(function () {
                $('.navbar-dropdown').hide();
            });
        });
    };



    return (
        <div>
            <section class="navigation">
                <div class="nav-container">
                    <div class="brand">
                        <img src={logo} alt='' />
                    </div>
                    <nav>
                        <div class="nav-mobile"><a id="navbar-toggle" href="#!"><span></span></a></div>
                        <ul class="nav-list">
                            <li>
                                <a href="#!">Home</a>
                            </li>
                            <li>
                                <a href="#!">About</a>
                            </li>
                            <li>
                                <a href="#!">Services</a>
                            </li>
                            <li>
                                <a href="#!">Portfolio</a>
                            </li>
                            <li>
                                <a href="#!">Category</a>
                            </li>
                            <li>
                                <a href="#!">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        </div>
    )
}
