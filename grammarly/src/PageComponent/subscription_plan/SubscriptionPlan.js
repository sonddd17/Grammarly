import React from 'react';
import PriceCard from './PriceCard';
import { faGraduationCap, faBuilding, faUsers } from '@fortawesome/free-solid-svg-icons';
import Menu from '../Menu';


function SubscriptionPlan() {
  const plans = [
    {
        icon: faGraduationCap,
        plan: 'Plus',
        price: '2.9',
        targetCustomer: 'For small teams',
        features: [
            'Unlock academic mode', 
            'Faster processing speed', 
            'Plagiarism Checker',
            '1000 words document supported'
        ],
        buttonText: 'Upgrade to Plus',
        buttonVariant: 'primary',
    },

    {   
        icon: faUsers,
        plan: 'Pro',
        price: '9',
        targetCustomer: 'For scaling business',
        features: [
            'Paraphraser History',
            '1500 words document supported',
            'Paraphrase with more modes (Simple, Creative, Shorten)'
        ],
        buttonText: 'Upgrade to Pro',
        buttonVariant: 'primary',
    },

    {
        icon: faBuilding,
        plan: 'Enterprise',
        price: '29',
        targetCustomer: 'For large-scale company',
        features: [
            '3000 words supported',
            'Recommended Rewrites',
            'Allow translator to other languages (Beta)',
            'Generate citations'
        ],
        buttonText: 'Talk to sales',
        buttonVariant: 'primary',
    }
  ];

  return (
    <div className='container'>
      <Menu/>
      <div className='subscription-plans'>
        <h1>PICK A PLAN</h1>
        <p>All of price plan are just our assumptions only for references</p>
        <div className='plan'>
          {plans.map((plan, index) => (
            <PriceCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
