import React from 'react'
import s from './About.module.css'
import Flow from './Flow/Flow'

function About({id}) {
  return (
    <div id={id} className={s.container}>
      <div className={s.about}>
        <div className={s.titleContainer}>
          <h2>Who I Am</h2>
          <h3>Who I Am</h3>
        </div>
        <p className={s.aboutMe}>I'm a <em> full stack developer</em> with a passion for
          developing <em> scalable</em>, <em>user-friendly</em> web applications.
          I'm looking to join a team with whom <em> communication</em>, <em> empathy</em> and 
          <em> teamwork</em> are paramount.
        </p>
      </div>
      <div className={s.about}>
        <div className={s.titleContainer}>
          <h2>What I Do</h2>
          <h3>What I Do</h3>
          <Flow/>
        </div> 
      </div>
    </div>
  )
}

export default About