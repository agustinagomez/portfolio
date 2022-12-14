import React from 'react'
import s from './Home.module.css'
import polygon from '../../img/polygon.png'
import img from '../../img/agustina.png'

function Home({id}) {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer')
  };

  return (
    <div id={id} className={s.container}>
      <div className={s.firstHalf}>
        <h1>WELCOME</h1>
        <div className={s.followMe}>
          <h3>Follow Me</h3>
          <span className={s.followDivider}></span>
          <ul className={s.socialIcons}>
            <li className={s.icon} onClick={ () => openInNewTab('https://www.linkedin.com/in/agustinagomez-dev')}>
              <svg width="5vh" height="5vh" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.3924 1.79406C26.3153 0.683893 28.6843 0.683894 30.6072 1.79406L47.8049 11.7232C49.7278 12.8333 50.9123 14.885 50.9123 17.1054V36.9636C50.9123 39.1839 49.7278 41.2356 47.8049 42.3458L30.6072 52.2749C28.6843 53.3851 26.3153 53.385 24.3924 52.2749L7.19467 42.3458C5.2718 41.2356 4.08727 39.1839 4.08727 36.9636V17.1054C4.08727 14.885 5.2718 12.8333 7.19468 11.7232L24.3924 1.79406Z" fill="#393E46"/>
                <g clip-path="url(#clip0_236_752)">
                  <path d="M14 15.7906C14 14.8016 14.8219 14 15.8359 14H37.1641C38.1781 14 39 14.8016 39 15.7906V37.2094C39 38.1984 38.1781 39 37.1641 39H15.8359C14.8219 39 14 38.1984 14 37.2094V15.7906ZM21.7234 34.9281V23.6391H17.9719V34.9281H21.7234ZM19.8484 22.0969C21.1563 22.0969 21.9703 21.2313 21.9703 20.1469C21.9469 19.0391 21.1578 18.1969 19.8734 18.1969C18.5891 18.1969 17.75 19.0406 17.75 20.1469C17.75 21.2313 18.5641 22.0969 19.8234 22.0969H19.8484V22.0969ZM27.5172 34.9281V28.6234C27.5172 28.2859 27.5422 27.9484 27.6422 27.7078C27.9125 27.0344 28.5297 26.3359 29.5672 26.3359C30.925 26.3359 31.4672 27.3703 31.4672 28.8891V34.9281H35.2187V28.4531C35.2187 24.9844 33.3688 23.3719 30.9 23.3719C28.9094 23.3719 28.0172 24.4656 27.5172 25.2359V25.275H27.4922C27.5005 25.262 27.5088 25.2489 27.5172 25.2359V23.6391H23.7672C23.8141 24.6984 23.7672 34.9281 23.7672 34.9281H27.5172Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_236_752">
                  <rect width="25" height="25" fill="white" transform="translate(14 14)"/>
                </clipPath>
                </defs>
              </svg>
            </li>
            <li className={s.icon} onClick={ () => openInNewTab('https://github.com/agustinagomez')}>
              <svg width="5vh" height="5vh" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.3924 2.72509C26.3153 1.61492 28.6843 1.61492 30.6072 2.72509L47.8049 12.6542C49.7278 13.7644 50.9123 15.8161 50.9123 18.0364V37.8946C50.9123 40.115 49.7278 42.1666 47.8049 43.2768L30.6072 53.2059C28.6843 54.3161 26.3153 54.3161 24.3924 53.2059L7.19467 43.2768C5.2718 42.1666 4.08727 40.115 4.08727 37.8946V18.0364C4.08727 15.8161 5.2718 13.7644 7.19468 12.6542L24.3924 2.72509Z" fill="#393E46"/>
                <g clip-path="url(#clip0_236_574)">
                  <path d="M27 12.396C18.16 12.396 11 19.56 11 28.396C11 35.4667 15.584 41.4627 21.94 43.576C22.74 43.7267 23.0333 43.232 23.0333 42.8067C23.0333 42.4267 23.02 41.42 23.0133 40.0867C18.5627 41.052 17.624 37.94 17.624 37.94C16.896 36.0933 15.844 35.6 15.844 35.6C14.3947 34.608 15.956 34.628 15.956 34.628C17.5627 34.74 18.4067 36.276 18.4067 36.276C19.8333 38.7227 22.152 38.016 23.0667 37.6067C23.2107 36.572 23.6227 35.8667 24.08 35.4667C20.5267 35.0667 16.792 33.6907 16.792 27.56C16.792 25.8133 17.412 24.3867 18.4387 23.2667C18.2587 22.8627 17.7187 21.236 18.5787 19.032C18.5787 19.032 19.9187 18.6027 22.9787 20.672C24.2587 20.316 25.6187 20.14 26.9787 20.132C28.3387 20.14 29.6987 20.316 30.9787 20.672C34.0187 18.6027 35.3587 19.032 35.3587 19.032C36.2187 21.236 35.6787 22.8627 35.5187 23.2667C36.5387 24.3867 37.1587 25.8133 37.1587 27.56C37.1587 33.7067 33.4187 35.06 29.8587 35.4533C30.4187 35.9333 30.9387 36.9147 30.9387 38.4133C30.9387 40.5547 30.9187 42.2747 30.9187 42.7947C30.9187 43.2147 31.1987 43.7147 32.0187 43.5547C38.42 41.456 43 35.456 43 28.396C43 19.56 35.836 12.396 27 12.396" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_236_574">
                    <rect width="32" height="32" fill="white" transform="translate(11 12)"/>
                  </clipPath>
              </defs>
              </svg>
            </li>
          </ul>
        </div>
        <h2>I'm</h2>
        <div className={s.name}>
          <h2>Agustina</h2>
          <h2 className={s.pink}>Gomez</h2>
        </div>
        <span className={s.divider}></span>
        <h3>FULL STACK WEB DEVELOPER</h3>
      </div>
      <div className={s.secondHalf}>
        <img className={s.polygon} src={polygon} alt=""/>
        <img className={s.myimg} src={img} alt="" />
        <div className={s.quote}>
          <h5>Steve Jobs, co-founder of Apple, Inc.</h5>
          <h5>???The only way to do great work is to love what you do.???</h5>
        </div>
      </div>
    </div>
  )
}

export default Home