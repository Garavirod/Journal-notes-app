import React from 'react';

export const JournalEntry= () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize:'cover',
                    objectFit:'contain',
                    backgroundImage:'url(https://preview.redd.it/9g7hf0k9jz561.png?width=640&height=798&crop=smart&auto=webp&s=44249240939a799a1c0314b6b86772fbc2c46c3f)'
                }}
            >
            </div>

            <div className="journal__entry-meta">

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

        </div>
    )
}