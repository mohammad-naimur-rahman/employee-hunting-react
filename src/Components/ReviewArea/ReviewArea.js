import React from 'react';
import ReviewIndivisual from '../ReviewIndivisual/ReviewIndivisual';
import CartArea from '../CartArea/CartArea';

const ReviewArea = () => {
    return (
        <div>
            <h2 className='text-center my-2'>Review Area</h2>
            <div>
                <ReviewIndivisual></ReviewIndivisual>
                <CartArea></CartArea>
            </div>
        </div>
    );
};

export default ReviewArea;