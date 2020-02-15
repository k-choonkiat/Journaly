import React from 'react';
import '../styling/body.css';

function Nav(){
return(
    <div class="navbars">
        <ul class="nav2">
            <li><a >website title</a></li>
            <li><a >help line</a></li>
        < li><a >number</a></li>
            <li><a >text</a></li>
        </ul>
        <ul class="nav1">
            <li href='/'><a >Home</a></li>
            <li><a >Who are we</a></li>
            <li><a >Connect With us</a></li>
        </ul>
    </div>
)
}
//className = 'class'
export default Nav;
