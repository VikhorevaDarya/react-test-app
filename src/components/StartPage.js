import '../styles/StartPage.scss';
import BigLogoIcon from '../svg/BigLogoIcon.js';
import StartPageLogo from '../svg/StartPageLogo.js'

function StartPage() {
  return (
    <div className="page">
      <div className="container">
        <div class="container__text">
          <div class="container__logo">
            <BigLogoIcon />
          </div>
          <div class="container__title">
            The future of digitals photos.
          </div>
          <div class="container__subtitle">
          The H(app)y app is the latest & greatest in phone photography.
          It's available in the App Store right now. Go check it out!
          </div>
          <div class="container__buttons">
            <div class="container__button">
              DOWNLOAD
            </div>
            <div class="container__button">
              READ MORE
            </div>
          </div>
        </div>
        <div class="container__img">
          <StartPageLogo />
        </div>
      </div>
    </div>
  )
}

export default StartPage;