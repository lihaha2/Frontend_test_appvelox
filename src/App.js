import React from 'react'
import './css/App.css'
import {Switch, Route, Link} from 'react-router-dom'
//images
import heart from './img/heart1.svg'
import book from './img/book1.svg'
import speak from './img/speak1.svg'
import test from './img/test1.svg'
import vector from './img/vector.svg'
import logo from './img/logo.png'
import help from './img/help1.svg'
import search from './img/search1.svg'
import bell from './img/bell1.svg'
import eye from './img/eye1.svg'
import arrow from './img/раскрыть.svg'
import profile from './img/Alice.svg'
import doc1 from './img/doc1.svg'
import doc2 from './img/doc2.svg'
import report from './img/report1.svg'
import lab from './img/lab1.svg'
import add from './img/add1.svg'
import clock from './img/clock1.svg'
import back from './img/back.svg'
import left from './img/left.svg'
import right from './img/right.svg'


const patient = {
  name:'Alice Cooper',
  icon: profile
}

const patient__posts = {
  0:{
    time:'Понедельник 15.06.20 | 15:30 ',
    where:'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
    who:'Малушко Т. Н.',
    special:'Хирургия',
    icon:'img/doctor1.png'
  },
  1:{
    time:'Понедельник 15.06.20 | 18:30 ',
    where:'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
    who:'Харьков В. С.',
    special:'Терапевтическое отделение',
    icon:'img/doctor2.png'
  }
}

const Bar = ()=>(
  <div className="sidebar">
    <div className="linkbar">
      <Link to="/" className="sidebar__logo">
        <p className="sidebar__logo-text" >Логотип</p>
      </Link>
      <Link to="/" className="sidebar__item sidebar__item-active">
        <img className="sidebar__item-img" src={heart} alt="heart" />
        <p className="sidebar__item-text--active" >Профиль</p>
      </Link>
      <Link to="/" className="sidebar__item">
        <img className="sidebar__item-img" src={vector} alt="heart" />
        <p className="sidebar__item-text" >Врачи и клиники</p>
      </Link>
      <Link to="/" className="sidebar__item">
        <img className="sidebar__item-img" src={speak} alt="heart" />
        <p className="sidebar__item-text" >Сообщения</p>
      </Link>
      <Link to="/" className="sidebar__item">
        <img className="sidebar__item-img" src={test} alt="heart" />
        <p className="sidebar__item-text" >Тестирование</p>
      </Link>
      <Link to="/" className="sidebar__item">
        <img className="sidebar__item-img" src={book} alt="heart" />
        <p className="sidebar__item-text" >Полезно знать</p>
      </Link>
      <Link to="/" className="sidebar__button">
        <p to="/" className="sidebar__button-text">Подать заявку</p>
      </Link>
    </div>
    <div className="sidebar__footer">
      <Link to="/" className="sidebar__item sidebar__footer-item">
        <img className="sidebar__item-img" src={help} alt="help" />
        <p className="sidebar__item-text">Помощь</p>
      </Link>
      <Link to="/">
        <img src={logo} className="sidebar__footer-logo" alt="logo" />
      </Link>
    </div>
  </div>
)

const Header = ()=>(
  <div className="header">
    <div className="header__title">
      Мой профиль
    </div>
    <div className="header__links">
      <Link to="/" className="header__links-link"><img className="header__links-img" src={search} alt="search" /></Link>
      <Link to="/" className="header__links-link"><img className="header__links-img" src={bell} alt="bell" /></Link>
      <Link to="/" className="header__links-link"><img className="header__links-img" src={eye} alt="eye" /></Link>
      <Link to="/" className="header__profile-link"><img className="header__profile-img" src={patient.icon} alt={patient.name} /></Link>
      <Link to="/" className="header__links-link"><img className="header__links-img" src={arrow} alt="arrow" /></Link>
    </div>
  </div>
)

const Content = ()=>{
  const Posts = ()=>(
    <div className="content__items">
      <div className="content__item">
        <div className="content__item-title">
          {patient__posts[0].time}
        </div>
        <div className="content__item-text">
        {patient__posts[0].where}
        </div>
        <div className="content__profile">
          <img src={doc1} alt="doctor" className="content__profile-img" />
          <div className="content__profile-data">
            <p className="content__profile-name">
              {patient__posts[0].who}
            </p>
            <p className="content__profile-special">
            {patient__posts[0].special}
            </p>
          </div>
        </div>
        <Link to="/" className="content__item-button">Отменить</Link>
      </div>
      <div className="content__item">
      <div className="content__item-title">
      {patient__posts[1].time} 
      </div>
      <div className="content__item-text">
      {patient__posts[1].where}
      </div>
      <div className="content__profile">
        <img src={doc2} alt="doctor" className="content__profile-img" />
        <div className="content__profile-data">
          <p className="content__profile-name">{patient__posts[1].who}</p>
          <p className="content__profile-special">{patient__posts[1].special}</p>
        </div>
      </div>
      <Link to="/" className="content__item-button">Отменить</Link>
      </div>
    </div>
  )

  return(
    <div className="content">
      <div className="content__label">
        Записи на прием
      </div>
      <div className="content__posts">
        <Posts />
        <div className="content__more">
          <p className="content__more-text">Еще 3 записи</p>
          <Link to="/doctors" className="content__more-link">Подробнее</Link>
        </div>
      </div>
      <div className="content__container">
        <div className="content__label">
          Электронная карта
        </div>
        <div className="content__cards">
            <Link to="/" className="content__row-item">
              <img src={report} alt="report" className="content__item-img" />
              <div className="content__box">
                <div className="content__box-container">
                  <h1 className="content__box-title">Информация о пациенте</h1>
                  <hr className="content__box-hr" />
                </div>
                <ul className="content__box-list --active">
                  <li>Ваши личные данные</li>
                  <li>Рекомендации врачей</li>
                  <li>История болезней</li>
                </ul>
              </div>
            </Link>
            <Link to="/" className="content__row-item">
              <img src={lab} alt="lab" className="content__item-img" />
              <div className="content__box">
                <div className="content__box-container">
                  <h1 className="content__box-title">Результаты анализов</h1>
                  <hr className="content__box-hr" />
                </div>
                <p className="content__box-text">Вы можете узнать здесь результаты своих анализов</p>
              </div>
            </Link>
            <Link to="/" className="content__row-item">
              <img src={add} alt="lab" className="content__item-img" />
              <div className="content__box">
                <div className="content__box-container">
                  <h1 className="content__box-title">Добавить  информацию</h1>
                  <hr className="content__box-hr" />
                </div>
                <p className="content__box-text">Добавляйте в свою электронную медицинскую карту новые данные</p>
              </div>
            </Link>
            <Link to="/" className="content__row-item">
              <img src={clock} alt="lab" className="content__item-img" />
              <div className="content__box">
                <div className="content__box-container">
                  <h1 className="content__box-title">История приемов</h1>
                  <hr className="content__box-hr" />
                </div>
                <p className="content__box-text">Вся информация о полученных услугах за все время хранится здесь</p>
              </div>
            </Link>
        </div>
      </div>
    </div>
  )
}

const Doctors = ()=>{
  const FullDoctorsList = ()=>(
    <div className="doctors__posts">
      <div className="content__item posts__margin">
        <div className="content__item-title">
          {patient__posts[0].time}
        </div>
        <div className="content__item-text">
        {patient__posts[0].where}
        </div>
        <div className="content__profile">
          <img src={doc1} alt="doctor" className="content__profile-img" />
          <div className="content__profile-data">
            <p className="content__profile-name">
              {patient__posts[0].who}
            </p>
            <p className="content__profile-special">
             {patient__posts[0].special}
            </p>
          </div>
        </div>
        <Link to="/" className="content__item-button">Отменить</Link>
      </div>
      <div className="content__item posts__margin">
        <div className="content__item-title">
          {patient__posts[1].time}
        </div>
        <div className="content__item-text">
        {patient__posts[1].where}
        </div>
        <div className="content__profile">
          <img src={doc2} alt="doctor" className="content__profile-img" />
          <div className="content__profile-data">
            <p className="content__profile-name">
              {patient__posts[1].who}
            </p>
            <p className="content__profile-special">
             {patient__posts[1].special}
            </p>
          </div>
        </div>
        <Link to="/" className="content__item-button">Отменить</Link>
      </div>
      <div className="content__item posts__margin">
        <div className="content__item-title">
        Вторник 30.06.20 | 12:10 
        </div>
        <div className="content__item-text">
        {patient__posts[0].where}
        </div>
        <div className="content__profile">
          <img src={doc1} alt="doctor" className="content__profile-img" />
          <div className="content__profile-data">
            <p className="content__profile-name">
              {patient__posts[0].who}
            </p>
            <p className="content__profile-special">
             {patient__posts[0].special}
            </p>
          </div>
        </div>
        <Link to="/" className="content__item-button">Отменить</Link>
      </div>
      <div className="content__item posts__margin">
        <div className="content__item-title">
          Четверг 02.07.20 | 12:30 
        </div>
        <div className="content__item-text">
        {patient__posts[1].where}
        </div>
        <div className="content__profile">
          <img src={doc2} alt="doctor" className="content__profile-img" />
          <div className="content__profile-data">
            <p className="content__profile-name">
              {patient__posts[1].who}
            </p>
            <p className="content__profile-special">
             {patient__posts[1].special}
            </p>
          </div>
        </div>
        <Link to="/" className="content__item-button">Отменить</Link>
      </div>
      <div className="content__item posts__margin">
        <div className="content__item-title">
          {patient__posts[0].time}
        </div>
        <div className="content__item-text">
        {patient__posts[0].where}
        </div>
        <div className="content__profile">
          <img src={doc1} alt="doctor" className="content__profile-img" />
          <div className="content__profile-data">
            <p className="content__profile-name">
              {patient__posts[0].who}
            </p>
            <p className="content__profile-special">
             {patient__posts[0].special}
            </p>
          </div>
        </div>
        <Link to="/" className="content__item-button">Отменить</Link>
      </div>
      <div className="content__item posts__margin">
        <div className="content__item-title">
          Четверг 02.07.20 | 12:30 
        </div>
        <div className="content__item-text">
        {patient__posts[1].where}
        </div>
        <div className="content__profile">
          <img src={doc2} alt="doctor" className="content__profile-img" />
          <div className="content__profile-data">
            <p className="content__profile-name">
              {patient__posts[1].who}
            </p>
            <p className="content__profile-special">
             {patient__posts[1].special}
            </p>
          </div>
        </div>
        <Link to="/" className="content__item-button">Отменить</Link>
      </div>
      <div className="content__item posts__margin">
        <div className="content__item-title">
          {patient__posts[0].time}
        </div>
        <div className="content__item-text">
        {patient__posts[0].where}
        </div>
        <div className="content__profile">
          <img src={doc1} alt="doctor" className="content__profile-img" />
          <div className="content__profile-data">
            <p className="content__profile-name">
              {patient__posts[0].who}
            </p>
            <p className="content__profile-special">
             {patient__posts[0].special}
            </p>
          </div>
        </div>
        <Link to="/" className="content__item-button">Отменить</Link>
      </div>
      <div className="content__item posts__margin">
        <div className="content__item-title">
          Четверг 02.07.20 | 12:30 
        </div>
        <div className="content__item-text">
        {patient__posts[1].where}
        </div>
        <div className="content__profile">
          <img src={doc2} alt="doctor" className="content__profile-img" />
          <div className="content__profile-data">
            <p className="content__profile-name">
              {patient__posts[1].who}
            </p>
            <p className="content__profile-special">
             {patient__posts[1].special}
            </p>
          </div>
        </div>
        <Link to="/" className="content__item-button">Отменить</Link>
      </div>
      <div className="content__item posts__margin">
        <div className="content__item-title">
          {patient__posts[0].time}
        </div>
        <div className="content__item-text">
        {patient__posts[0].where}
        </div>
        <div className="content__profile">
          <img src={doc1} alt="doctor" className="content__profile-img" />
          <div className="content__profile-data">
            <p className="content__profile-name">
              {patient__posts[0].who}
            </p>
            <p className="content__profile-special">
             {patient__posts[0].special}
            </p>
          </div>
        </div>
        <Link to="/" className="content__item-button">Отменить</Link>
      </div>
    </div>
  )
  
  const Days = ()=>(
    <div className="calendar__body">
      <div className="calendar__days--used"><p className="calendar__days-text--used">1</p></div>
      <div className="calendar__days--used"><p className="calendar__days-text--used">2</p></div>
      <div className="calendar__days--used"><p className="calendar__days-text--used">3</p></div>
      <div className="calendar__days--used"><p className="calendar__days-text--used">4</p></div>
      <div className="calendar__days"><p className="calendar__days-text">5</p></div>
      <div className="calendar__days"><p className="calendar__days-text">6</p></div>
      <div className="calendar__days"><p className="calendar__days-text">7</p></div>
      <div className="calendar__days"><p className="calendar__days-text">8</p></div>
      <div className="calendar__days"><p className="calendar__days-text">9</p></div>
      <div className="calendar__days"><p className="calendar__days-text">10</p></div>
      <div className="calendar__days"><p className="calendar__days-text">11</p></div>
      <div className="calendar__days"><p className="calendar__days-text">12</p></div>
      <div className="calendar__days"><p className="calendar__days-text">13</p></div>
      <div className="calendar__days"><p className="calendar__days-text">14</p></div>
      <div className="calendar__days"><p className="calendar__days-text">15</p><p className="calendar__days-event">2</p></div>
      <div className="calendar__days"><p className="calendar__days-text">16</p></div>
      <div className="calendar__days"><p className="calendar__days-text">17</p></div>
      <div className="calendar__days"><p className="calendar__days-text">18</p></div>
      <div className="calendar__days"><p className="calendar__days-text">19</p></div>
      <div className="calendar__days"><p className="calendar__days-text">20</p></div>
      <div className="calendar__days"><p className="calendar__days-text">21</p></div>
      <div className="calendar__days"><p className="calendar__days-text">22</p></div>
      <div className="calendar__days"><p className="calendar__days-text">23</p></div>
      <div className="calendar__days"><p className="calendar__days-text">24</p></div>
      <div className="calendar__days"><p className="calendar__days-text">25</p></div>
      <div className="calendar__days"><p className="calendar__days-text">26</p></div>
      <div className="calendar__days"><p className="calendar__days-text">27</p></div>
      <div className="calendar__days"><p className="calendar__days-text">28</p></div>
      <div className="calendar__days"><p className="calendar__days-text">29</p></div>
      <div className="calendar__days"><p className="calendar__days-text">30</p><p className="calendar__days-event">1</p></div>
    </div>
  )

  return(
    <div className="doctors">
      <div className="doctors__label">
        <Link to="/" className="doctors__label-link"><img src={back} className="doctors__label-img" alt="arrow to back" /></Link>
        <div className="doctors__label-text">
          Мои записи
        </div>
      </div>
      <div className="doctors__content">
        <FullDoctorsList />
        <div className="doctors__calendar">
          <div className="calendar__header">
            <Link to="/doctors" className="calendar__header-link"><img className="calendar__header-img" src={left} alt="left" /></Link>
            <p className="calendar__header-title">Июнь, 2020</p>
            <Link to="/doctors" className="calendar__header-link"><img className="calendar__header-img" src={right} alt="right" /></Link>
          </div>
          <div className="calendar__title">
            <p>Пн</p>
            <p>Вт</p>
            <p>Ср</p>
            <p>Чт</p>
            <p>Пт</p>
            <p>Сб</p>
            <p>Вс</p>
          </div>
          <Days />
        </div>  
      </div>
      
    </div>
  )
}

const Main = ()=>(
  <Switch>
    <Route exact path='/' component={Content}/>
    <Route path='/doctors' component={Doctors}/>
  </Switch>
)

const App = ()=>(
  <div className="App">
    <Bar />
    <div className="container">
      <Header />
      <Main />
    </div>
  </div>
)

export default App