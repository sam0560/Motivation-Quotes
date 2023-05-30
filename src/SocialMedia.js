
import twitter from './Images/twitter-logo.svg';
import linkedin from './Images/linkedin-logo.svg';
import instagram from './Images/instagram-logo.svg';

const SocialMedia = () => {
    return(
        <div className="social-media">
            <div className="logo-item">
                <a href='/https://twitter.com/kaysam_s' target='_blank'>
                    <img src={twitter} alt="twitter logo redirects to my page" className='logo'/>
                </a>
            </div>
            <div className="logo-item">
                <a href="/https://www.linkedin.com/in/smcode-572330230/" target='_blank'>
                    <img src={linkedin} alt="linkedin logo redirects to my page" className='logo'/>
                </a>
            </div>
            <div className="logo-item">
                <a href="www.instagram.com/kaysam_s" target='_blank'>
                    <img src={instagram} alt="instagram logo redirects to my page" className='logo'/>
                </a>
            </div>
            
        </div>
    );
}

export default SocialMedia;