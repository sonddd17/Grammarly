import React from 'react';
import "../../Styles/AboutUs.css";

function TeamMember({name, role, bio, image, socialLinks }) {
    return (
        <div className='team-member'>
            <img src={image} alt={name} className='profile-image' />
            <h3>{name}</h3>
            <p className="role">{role}</p>
            <p className="bio">{bio}</p>
            <div className="social-links">
                {socialLinks.map((link, idx) => {
                    
                    <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className='social-icon'>
                        {link.icon}
                    </a>

                    let linkProps = link.isEmail ? { href: link.url } : { href: link.url, target: "_blank", rel: "noopener noreferrer" };
                    return (
                        <a key={idx} {...linkProps} className="social-icon">
                            {link.icon}
                        </a>)
                    ;
                })}
            </div>
        </div>
    )
}

export default TeamMember;