import logo from '../logo.svg';
import '../static/homepage.css';
import NavBar1 from './shared/navbar'
import dumbell_curl from '../static/dumbell_curl_img.webp'
import healthy_plate from '../static/healthy_plate.webp'
import refreshed from '../static/refreshed.png'
import couple_jog from '../static/couple_jog.jpg'
import React from 'react';

class Home extends React.Component{
    
    
    //componentDidMount{

    //}
    
    render()
    {
        return (
            <div>
                <div>
                    <NavBar1 />
                </div>
                
                    <h1 id = "title">
                        FitHub: The One Thing You Lack for All Your Fitness Gains
                    </h1>
                

                <div className = "home_block_left">
                    <h2>
                        Get an Effective Workout Plan
                    </h2>
                    <img src={dumbell_curl} alt="Guy lifting dumbell" width="475" height="300" />
                </div>

                <div className = "home_block_right">
                    <h2>
                        Find a Effective Diet That Fits You
                    </h2>
                    <img src={healthy_plate} alt="Healthy Dish" width="500" height="334" />
                </div>

                <div className = "home_block_left">
                    <h2>
                        Skip the Hassle of Counting Calories
                    </h2>
                    <img src={refreshed} alt="Person with Hands Stretched" width="500" height="337" />
                </div>

                <div className = "home_block_right">
                    <h2>
                        Get the Tools and Info to Improve Your Health
                    </h2>
                    <img src={couple_jog} alt="Couple Jogging" width="612" height="408" />
                </div>

                <div className = "home_block_left">
                    <h2>
                        Begin the Journey to a Healthier You
                    </h2>
                    <button>Register Today </button>
                </div>


            </div>
        );
    }
}


export default Home