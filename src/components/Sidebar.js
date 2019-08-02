import React, { Component } from 'react';
import SidebarFooter from './SidebarFooter';
import '../styling/css/sidebar.css'

export default class Sidebar extends Component {
    render() {
        return (
            <div class="mycss-sbar" /* style={{border: '4px solid red'}} */>
                <div className="mycss-sbar-content" /* style={{border: '4px solid green'}} */>
                    <h2 id=""><a href="index.html">Redesigned the MyBase with React JS for better production optimized build.</a></h2>
                    <h3 id="mycss-sbar-text" class="test7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Proin convallis augue placerat velit mollis dignissim sit amet nec nisl.
                    Vivamus eget lacinia turpis. Pellentesque ac enim risus. 
                    Aenean sed vulputate justo. Vestibulum erat neque, bibendum vitae lacus sed, lobortis rhoncus velit. 
                    Sed laoreet eget nunc placerat bibendum. Sed gravida ex blandit lacus imperdiet tincidunt.
                    sit amet interdum sem ligula eu libero. Praesent auctor hendrerit massa, aliquam ultrices nibh dapibus id.</h3>
                </div><SidebarFooter />
           </div>
        )
    }
}
