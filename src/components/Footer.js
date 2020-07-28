import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Connect with me</h2>
      <p>
        Always down to build some cool things together or have just simply have
        a chat
      </p>
      <ul className="actions">
        <li>
          <Link
            to="https://www.linkedin.com/in/ri-xin-wang-62ab9b39/"
            className="button"
          >
            Connect
          </Link>
        </li>
      </ul>
    </section>
    <section>
      <h2>Contact me</h2>
      <dl className="alt">
        <dt>Phone</dt>
        <dd>+65 98351262</dd>
        <dt>Email</dt>
        <dd>rixin@ymail.com</dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://www.linkedin.com/in/ri-xin-wang-62ab9b39/"
            className="icon fa-linkedin alt"
          >
            <span className="label">Linkedin</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/wang.rixin"
            className="icon fa-facebook alt"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/rixinhaha" className="icon fa-github alt">
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; Ri Xin. Design: <a href="https://html5up.net">HTML5 UP</a>.
      <div>
        Icons made by{' '}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </p>
  </footer>
)

export default Footer
