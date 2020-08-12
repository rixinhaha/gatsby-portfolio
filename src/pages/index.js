import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import profile from '../assets/images/profile.jpg'
import dbLogo from '../assets/images/db-logo.png'
import capsolLogo from '../assets/images/capsol.png'
import learningExtension from '../assets/images/learning-extension.jpg'
import govtechLogo from '../assets/images/govtech-logo.gif'
import shopeeLogo from '../assets/images/shopee-logo.png'
import datatureLogo from '../assets/images/datature-logo.png'
import galleryOne from '../assets/images/gallery-1.jpg'
import galleryTwo from '../assets/images/gallery-2.jpg'
import galleryThree from '../assets/images/gallery-3.jpg'
import galleryFour from '../assets/images/gallery-4.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import Gallery from 'react-photo-gallery'

const photos = [
  {
    src: galleryOne,
    width: 4,
    height: 3,
  },
  {
    src: galleryTwo,
    width: 4,
    height: 3,
  },
  {
    src: galleryThree,
    width: 4,
    height: 3,
  },
  {
    src: galleryFour,
    width: 4,
    height: 3,
  },
]

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="imRex">
          <link rel="icon" href={profile} />
        </Helmet>
        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Hello</h2>
                </header>
                <p style={{ textAlign: 'justify' }}>
                  I am Ri Xin and you can also call me Rex. I am studying
                  Computer Science and Engineering at UCLA. I was born and
                  raised on the sunny island of Singapore. I am passionate about
                  front-end engineering because I get to solve problems that are
                  technically challenging and complex. At the same time, it is
                  the layer in a software product that interacts directly with
                  the users. Currently, I am trying to gain more experience in
                  this field through internships and side projects.
                </p>
                <ul className="icons">
                  <li>
                    <a
                      href="https://www.facebook.com/wang.rixin"
                      className="icon fa-facebook alt"
                    >
                      <span className="label">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/rixinhaha"
                      className="icon fa-github alt"
                    >
                      <span className="label">GitHub</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/ri-xin-wang-62ab9b39/"
                      className="icon fa-linkedin alt"
                    >
                      <span className="label">Linkedin</span>
                    </a>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={profile} alt="Profile picture" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Work Experience</h2>
              <p>
                <a href="https://drive.google.com/file/d/1KRohSgOVP1MS2Ottame7XF-ZtBUMRnDD/view?usp=sharing">
                  Click to view resume
                </a>
              </p>
              <ul className="features">
                <div className="features-item-wrapper">
                  <p>Software Engineering Intern</p>
                  <p className="features-item-date">Jun 2020 - Sep 2020</p>
                  <li className="features-item">
                    <div className="career-item">
                      <span className="company-image-wrapper">
                        <img
                          className="company-image"
                          src={govtechLogo}
                          alt="GovTech logo"
                          href="https://www.mylegacy.gov.sg/"
                        />
                      </span>

                      <ul>
                        <li>
                          GovTech is the Singapore government's software
                          development agency
                        </li>
                        <li>
                          Fullstack JavaScript (TypeScript) developer in an
                          AGILE team to develop and maintain the{' '}
                          <a href="https://www.mylegacy.gov.sg/">myLegacy</a>{' '}
                          web-application, which is a one-stop portal to assist
                          Singaporeans in post-death matters
                        </li>
                        <li>
                          Worked with TypeScript, React.js, Next.js to build new
                          static pages and reusable dashboard components for the
                          portal's public and private pages
                        </li>
                        <li>
                          Modified the existing Koa.js middlewares to match the
                          new user behavior due to the overhaul in the
                          information architecture of the web portal
                        </li>
                        <li>
                          Presented to the dev team about{' '}
                          <a href="https://docs.google.com/presentation/d/1-wzHDakVsRKzFGAj_AmRj86fN-MS9-Ad_tFtxDGNNVY/edit?usp=sharing">
                            React state
                          </a>{' '}
                          to highlight common misconceptions and improve the
                          team's state management practices
                        </li>
                      </ul>
                    </div>
                  </li>
                </div>
                <div className="features-item-wrapper">
                  <p>Software Engineering Intern</p>
                  <p className="features-item-date">Apr 2020 - Jun 2020</p>
                  <li className="features-item">
                    <div className="career-item">
                      <span className="company-image-wrapper">
                        <img
                          className="company-image"
                          src={datatureLogo}
                          alt="Datature logo"
                          href="https://datature.io/"
                        />
                      </span>

                      <ul>
                        <li>
                          Datature Analytics is an early-stage computer-vision
                          start-up that aims to provide a web-based platform for
                          training and deploying machine-learning models swiftly
                        </li>
                        <li>
                          Worked extensively with React.js and Typescript to
                          develop an interactive "drag and drop" node-editor for
                          users to customize their machine-learning workflows
                          without any code
                        </li>
                      </ul>
                    </div>
                  </li>
                </div>
              </ul>
            </header>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Projects</h2>
              <p>Click on the icons to view the demos</p>
            </header>

            <ul className="features">
              <li className="features-item">
                <ul className="icons">
                  <li>
                    <a
                      href="https://youtu.be/iqgoSEcbgBk"
                      className="icon fa-youtube alt"
                    >
                      <span className="label">Project demo video</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/dailybruin/meow"
                      className="icon fa-github alt"
                    >
                      <span className="label">Project GitHub repository</span>
                    </a>
                  </li>
                </ul>
                <span className="project-image-wrapper">
                  <img
                    className="project-image"
                    src={dbLogo}
                    alt="Daily Bruin logo"
                    href="https://github.com/dailybruin/meow"
                  />
                </span>
                <h3>Daily Bruin Online</h3>
                <p>
                  Daily Bruin is UCLA's student media. I part of the online
                  internal tools team which develops open-source newsroom tools
                  to help the editors better manage the organization. I
                  contributed to "Meow", a social-media scheduling
                  web-application build on React-Django stack.
                </p>
                <p>
                  "Meow" is used daily by the social-media editors to track and
                  schedule posts to Daily Bruin's social media accounts
                  (Facebook. Instagram, Twitter). I revamped the entire
                  user-profile dashboard and added the feature where users are
                  able to create, customize, and share their dashboard color
                  themes with one another.
                </p>
              </li>
              <li className="features-item">
                <ul className="icons">
                  <li>
                    <a
                      href="https://youtu.be/29arU1M8RJE"
                      className="icon fa-youtube alt"
                    >
                      <span className="label">Project demo video</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://devpost.com/software/capsol"
                      className="icon fa-external-link alt"
                    >
                      <span className="label">Project Devpost submission</span>
                    </a>
                  </li>
                </ul>
                <span className="project-image-wrapper">
                  <img
                    className="project-image"
                    src={capsolLogo}
                    alt="Capsol logo"
                    href="https://devpost.com/software/capsol"
                  />
                </span>
                <h3>Capsol</h3>
                <p>
                  Capsol is a smart pill-box my team built for{' '}
                  <a href="http://www.ideahacks.la/">Ideahacks 2020</a>. Using
                  React-Native, we created an Android application that allows
                  users to submit their medications. The application, together
                  with the bluetooth connected Arduino pill-box, will remind the
                  user to take the submitted medications on time. At the same
                  time, the pill-box helps the user better differentiate the
                  different medications so as to prevent mix-ups.
                </p>
              </li>
              <li className="features-item">
                <ul className="icons">
                  <li>
                    <a
                      href="https://youtu.be/0dGFAcZmQ10"
                      className="icon fa-youtube alt"
                    >
                      <span className="label">Project demo video</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://devpost.com/software/learning-extension"
                      className="icon fa-external-link alt"
                    >
                      <span className="label">Project Devpost submission</span>
                    </a>
                  </li>
                </ul>
                <span className="project-image-wrapper">
                  <img
                    className="project-image"
                    src={learningExtension}
                    alt="Learning Extension logo"
                    href="https://devpost.com/software/learning-extension"
                  />
                </span>
                <h3>Youtube Chatroom Extension</h3>
                <p>
                  We prototyped this project as part of{' '}
                  <a href="https://lahacks.com">LA Hacks 2020</a>. We build this
                  chrome extension where chatrooms are created based on the
                  YouTube video links and users are able to chat with those
                  watching the same video. The chat client was built with
                  React.js and the chat server was built with Express.js and
                  MongoDB. We also used Socket.io to enable real-time updates to
                  the server to the client for chat messages to be displayed
                  lived to all users in the same chatroom.
                </p>
              </li>
            </ul>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>I am not boring</h2>
              <p>
                <a href="https://rixinphoto.wordpress.com/">
                  Visit my photo blog
                </a>
              </p>
              <Gallery photos={photos} />
            </header>

            <footer className="major">
              <ul className="actions">
                <li>
                  <Link
                    to="https://rixinphoto.wordpress.com/"
                    className="button"
                  >
                    See more
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
