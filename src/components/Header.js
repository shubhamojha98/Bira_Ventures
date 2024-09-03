import React,{useEffect} from "react";
import $ from 'jquery';

const Header = () => {

    useEffect(() => {  
        $(window).on('load', function() {

            $('#js-preloader').addClass('loaded');
    
        });
    })
  return (
    <>
      <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Header;
