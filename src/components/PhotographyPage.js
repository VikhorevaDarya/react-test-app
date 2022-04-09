import '../styles/PhotographyPage.scss';
import CalendarIcon from '../svg/CalendarIcon.js'
import ListsIcon from '../svg/ListsIcon.js'

function PhotographyPage() {
  return (
    <div className="ppage">
      <div className="ppage__title">
        FETURES
      </div>
      <div className="ppage__subtitle">
        The latest & greatest in phone photography.
      </div>
      <div className="ppage__container">
        <div className="ppage__item">
          <div class="ppage__item_grey">
            <div class="ppage__logo-background ppage__logo-background_blue">
              <div class="ppage__logo">
                <CalendarIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="ppage__item">
          <div class="ppage__item_grey">
            <div class="ppage__logo-background ppage__logo-background_red">
              <div class="ppage__logo">
                <ListsIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="ppage__item">
          <div class="ppage__item_grey">
            <div class="ppage__logo-background ppage__logo-background_orange">
              <div class="ppage__logo">
                <CalendarIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ppage__container">
       <div className="ppage__item">
          <div class="ppage__item_grey">
            g
          </div>
        </div>
        <div className="ppage__item">
          <div class="ppage__item_grey">
            g
          </div>
        </div>
        <div className="ppage__item">
          <div class="ppage__item_grey">
            g
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotographyPage;