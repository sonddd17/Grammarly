import React from 'react';
import '../../Styles/PriceCard.css'
import { FaGraduationCap, FaBuilding, FaUsers, FaCheck  } from 'react-icons/fa6';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function PriceCard({ icon, plan, price, targetCustomer, features, buttonText, buttonVariant }) {
    return (
        <div className='price-card'>
            <div className='card-image'>
                <FontAwesomeIcon icon={icon} className='fa-5x'/> 
            </div>

            <div className='card-content'>
                <h2>{plan}</h2>

                <div className='card-price'>
                    <h1 className='card-name'>{`$${price}`}</h1>
                    <p>-15% Discount</p>
                </div>

                <p className='pay-options'>per user/ month</p>  
            </div>

            <button className='button'>{buttonText}</button>
            <p className='target-customer'>{targetCustomer}</p>
            <ul className='features'>
                {features.map((feature, idx) => (
                    <li key={idx}> 
                        <FontAwesomeIcon icon={faCheck} className="feature-list-icon" /> {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PriceCard;