
import React from 'react';
const propTypes = {};

const defaultProps = {};
const Images = ({data}) => {
    return (
    <div className="row">
    {data.map((image) =><div key={image.id}>
    <div className="col-md-4" id="xx">
    <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} 
   height="180" width="200" alt={image.title}/>
    </div>
    </div>)}
    </div>
    )
}

Images.propTypes = propTypes;
Images.defaultProps = defaultProps;
export default Images;
