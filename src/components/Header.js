import '../styles/Header.scss';
import LogoIcon from '../svg/LogoIcon.js';

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <LogoIcon />
      </div>
      <div class="header__menu">
        <div class="header__item">
          Features
        </div>
        <div class="header__item">
          Pricing
        </div>
        <div class="header__item">
          Testimonials
        </div>
        <div class="header__item">
          Instructions
        </div>
        <div class="header__item header__button">
          GET TEMPLATE
        </div>
      </div>
    </div>
  );
}

export default Header;
