import React from 'react';
import moment from 'moment';
export const JournalEntry= ({id, date, title, body, url}) => {

    const noteDate = moment(date)

    return (
        <div className="journal__entry pointer">
            {
                url && 
                <div 
                    className="journal__entry-picture"
                    style={{
                        backgroundSize:'cover',
                        objectFit:'contain',
                        backgroundImage:`url(${url})`,
/*                         backgroundImage:'url(https://preview.redd.it/9g7hf0k9jz561.png?width=640&height=798&crop=smart&auto=webp&s=44249240939a799a1c0314b6b86772fbc2c46c3f)'
 */                    }}
                >
                </div>
            }

            <div className="journal__entry-meta">

                <div className="journal__entry-body">
                    <p className="journal__entry-title">{title}</p>
                    <p className="journal__entry-content">
                        {body}
                    </p>
                </div>

                <div className="journal__entry-date-box">
                    <span>{noteDate.format('dddd')}</span>
                    <h4>{noteDate.format('Do')}</h4>                
                </div>

            </div>

        </div>
    )
}