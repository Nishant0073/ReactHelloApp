import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

let curDate=new Date();
curDate=curDate.getHours();


let gretting="";

const cssStyle = {
    color:'blanchedalmond',
    textAlign:'center'
};



if(curDate>=1 && curDate<=12)
{
        cssStyle.color = 'lawngreen';
        cssStyle.textAlign = 'center';
        gretting = "Good Morning!";
}
else if(curDate>=12 && curDate<19)
{
        cssStyle.color='Orange';
        cssStyle.textAlign='center';
        gretting="Good Afternoon!";
}
else
{
        cssStyle.color='slateblue';
        cssStyle.textAlign='centor';
        gretting="Good Night!";

}


ReactDOM.render(
    <>
        <div>
        <h1>Hello Sir, <span style={cssStyle}>{gretting}</span></h1>
        </div>
    </>,
    document.getElementById('root')
)
