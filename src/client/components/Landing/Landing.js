/**
 * Created by wathmal on 1/1/17.
 */
import React, {PropTypes} from 'react';
import style from './Landing.scss';

class Landing extends React.Component{

    render(){
        return(
            <div className="container-fluid">
                <div className={style.landing}>
                    <h1>hello ES6</h1>

                </div>
            </div>
        )
    }
}

export default Landing;