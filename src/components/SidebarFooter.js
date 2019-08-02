import React, { Component } from 'react';
import '../styling/css/sidebarfooter.css'

export default class SidebarFooter extends Component {
    render() {
        return (
            <div className='sbar-footer-container'>

                <div className="sbar-footer-begin">
                    <p>
                        Made with <i class="icon-heart" aria-hidden="true"></i> by 
                        <a href="https://github.com/varnitmittal" target="_blank"> Varnit Mittal</a>
                    </p>
                </div>

                <div className='sbar-footer-list'>
                    <div className="sbar-footer-list-item"><a href="#"><i class="icon-facebook2"></i></a></div>
                    <div className="sbar-footer-list-item"><a href="#"><i class="icon-twitter2"></i></a></div>
                    <div className="sbar-footer-list-item"><a href="#"><i class="icon-instagram"></i></a></div>
                    <div className="sbar-footer-list-item"><a href="#"><i class="icon-linkedin2"></i></a></div>
                </div>

                <p className='sbar-footer-end'>
                    &copy; varnitmittal | 2019
                </p>

            </div>
        )
    }
}
