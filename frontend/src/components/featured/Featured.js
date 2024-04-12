import React from 'react'
import "./featured.css"
const Featured = () => {
    return (
        <div className="featured">
            <div className='featuredItem'>
                <img className="featuredImg" src='https://cf.bstatic.com/xdata/images/city/600x600/688853.jpg?k=f6427c8fccdf777e4bbc75fcd245e7c66204280181bea23350388c76c57348d1&o=' alt='' />
                <div className='featuredTitles'>
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className='featuredItem'>
                <img className="featuredImg" src='https://cf.bstatic.com/xdata/images/city/600x600/688853.jpg?k=f6427c8fccdf777e4bbc75fcd245e7c66204280181bea23350388c76c57348d1&o=' alt='' />
                <div className='featuredTitles'>
                    <h1>Austin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className='featuredItem'>
                <img className="featuredImg" src='https://cf.bstatic.com/xdata/images/city/600x600/688853.jpg?k=f6427c8fccdf777e4bbc75fcd245e7c66204280181bea23350388c76c57348d1&o=' alt='' />
                <div className='featuredTitles'>
                    <h1>Reno</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured