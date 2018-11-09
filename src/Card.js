import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
    return (
        <div>
            <div className="card p-2 " style={{ width: "22rem" }}>
                <img className="card-img-top" src={props.src} alt="Card image cap" />
                <div className="card-body d-flex justify-content-end p-1">
                    <span className="text-muted mx-1 text-small"><i className="fa fa-eye "></i> {props.views}</span>
                    <span className="text-muted mx-1 text-small"><i className="fa fa-comment"></i> {props.comments}</span>
                    <span className="text-muted mx-1 text-small"><i className="fa fa-heart"></i> {props.liks}</span>
                </div>
            </div>
        </div>
    );
}
Card.propTypes = {
    src: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
};

export default Card;