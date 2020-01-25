import React from 'react';

const Title = ({ children = "", subTitle = "" }) => {
    return (
        <div className="section-title">
            {subTitle !== "" && <p className="sub-title">{subTitle}</p>}
            <h3 className="title">{children}</h3>
            <div className="bar" ></div>
        </div>
    )
}

export default Title;