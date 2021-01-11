import React from 'react';

export const JournalEntry= () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize:'cover',
                    backgroundImage:'url(https://static.vecteezy.com/system/resources/thumbnails/000/246/312/original/mountain-lake-sunset-landscape-first-person-view.jpg)'
                }}
            >
            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">Do it or not, but never try to</p>
                <p className="journal__entry-content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus voluptate possimus soluta expedita ipsa consequatur quia nisi officiis quam! Maxime repellat officia temporibus ipsa magnam voluptatum, odio sequi aut velit!
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>23</h4>                
            </div>
        </div>
    )
}