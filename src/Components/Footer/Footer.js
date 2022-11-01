import React from 'react';
import classes from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Footer = () => {
  const [mail, setMail] = useState('');
  const [mailValidate, setMailValidate] = useState(false);

  const getMail = e => {
    e.preventDefault();
    setMail(e.target.value);
  };

  const subscribed = async e => {
    e.preventDefault();
    try {
      if (
        mail.includes('@') &&
        mail.includes('.') &&
        !mail.startsWith('@') &&
        mail.length - (mail.lastIndexOf('.') + 1) >= 2
      ) {
        const resp = await fetch(
          'https://email-database-8c3f9-default-rtdb.asia-southeast1.firebasedatabase.app/mails.json',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              mail: mail,
            }),
          }
        );

        if (!resp.ok) {
          throw new Error('Something went wrong!');
        }

        setMailValidate(false);
        setMail('');
      } else {
        setMailValidate(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={classes.footer}>
      <div className={classes.mediaContainer}>
        <h2>Acciojob</h2>
        <div className={classes.iconsContainer}>
          <FontAwesomeIcon
            icon={faFacebook}
            style={{ fontSize: '24px', color: '#23A6F0', cursor: 'pointer' }}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ fontSize: '24px', color: '#23A6F0', cursor: 'pointer' }}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faTwitter}
            style={{ fontSize: '24px', color: '#23A6F0', cursor: 'pointer' }}
          ></FontAwesomeIcon>
        </div>
      </div>
      <hr style={{ margin: '53px 0' }} />
      <div className={classes.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>Company Info</th>
              <th>Legal</th>
              <th>Features</th>
              <th>Resources</th>
              <th>Get in Touch</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>About us</td>
              <td>About us</td>
              <td>Business Marketing</td>
              <td>IOS & Android</td>
              <td rowSpan={3}>
                <div className={classes.subscribeButton}>
                  <input
                    type='text'
                    value={mail}
                    placeholder='Your Mail'
                    onChange={getMail}
                  />
                  <span>
                    <button onClick={subscribed}>Subscribe</button>
                  </span>
                  {mailValidate && (
                    <p className={classes.err}>Mail not valid!</p>
                  )}
                </div>
              </td>
            </tr>
            <tr>
              <td>Carrier</td>
              <td>Carrier</td>
              <td>User Analytic</td>
              <td>Watch a demo</td>
            </tr>
            <tr>
              <td>We are hiring</td>
              <td>We are hiring</td>
              <td>Live Chat</td>
              <td>Customers</td>
            </tr>
            <tr>
              <td>Blog</td>
              <td>Blog</td>
              <td>Unlimited Sport</td>
              <td>API</td>
            </tr>
          </tbody>
        </table>
        {/* <div></div> */}
      </div>
    </div>
  );
};

export default Footer;
