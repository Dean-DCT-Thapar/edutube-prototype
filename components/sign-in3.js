import React, { Fragment } from 'react'
import { useRouter } from 'next/router'

import PropTypes from 'prop-types'

const SignIn3 = (props) => {
  const router = useRouter()
  return (
    <>
      <div className="sign-in3-container1 thq-section-padding">
        <div className="sign-in3-max-width thq-section-max-width thq-section-padding">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="sign-in3-image"
          />
          <div className="sign-in3-form-root">
            <div className="sign-in3-form1">
              <h2 className="sign-in3-text1 thq-heading-2">Sign in</h2>
              <form className="sign-in3-form2">
                <div className="sign-in3-email">
                  <label
                    htmlFor="thq-sign-in-1-password"
                    className="thq-body-large"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="thq-sign-in-3-email"
                    required="true"
                    placeholder="Email address"
                    className="sign-in3-textinput1 thq-body-large thq-input"
                  />
                </div>
                <div className="sign-in3-password">
                  <div className="sign-in3-container2">
                    <label
                      htmlFor="thq-sign-in-3-password"
                      className="thq-body-large"
                    >
                      Password
                    </label>
                    <div className="sign-in3-hide-password">
                      <svg viewBox="0 0 1024 1024" className="sign-in3-icon1">
                        <path d="M317.143 762.857l44.571-80.571c-66.286-48-105.714-125.143-105.714-206.857 0-45.143 12-89.714 34.857-128.571-89.143 45.714-163.429 117.714-217.714 201.714 59.429 92 143.429 169.143 244 214.286zM539.429 329.143c0-14.857-12.571-27.429-27.429-27.429-95.429 0-173.714 78.286-173.714 173.714 0 14.857 12.571 27.429 27.429 27.429s27.429-12.571 27.429-27.429c0-65.714 53.714-118.857 118.857-118.857 14.857 0 27.429-12.571 27.429-27.429zM746.857 220c0 1.143 0 4-0.571 5.143-120.571 215.429-240 432-360.571 647.429l-28 50.857c-3.429 5.714-9.714 9.143-16 9.143-10.286 0-64.571-33.143-76.571-40-5.714-3.429-9.143-9.143-9.143-16 0-9.143 19.429-40 25.143-49.714-110.857-50.286-204-136-269.714-238.857-7.429-11.429-11.429-25.143-11.429-39.429 0-13.714 4-28 11.429-39.429 113.143-173.714 289.714-289.714 500.571-289.714 34.286 0 69.143 3.429 102.857 9.714l30.857-55.429c3.429-5.714 9.143-9.143 16-9.143 10.286 0 64 33.143 76 40 5.714 3.429 9.143 9.143 9.143 15.429zM768 475.429c0 106.286-65.714 201.143-164.571 238.857l160-286.857c2.857 16 4.571 32 4.571 48zM1024 548.571c0 14.857-4 26.857-11.429 39.429-17.714 29.143-40 57.143-62.286 82.857-112 128.571-266.286 206.857-438.286 206.857l42.286-75.429c166.286-14.286 307.429-115.429 396.571-253.714-42.286-65.714-96.571-123.429-161.143-168l36-64c70.857 47.429 142.286 118.857 186.857 192.571 7.429 12.571 11.429 24.571 11.429 39.429z"></path>
                      </svg>
                      <span className="thq-body-small">Hide</span>
                    </div>
                  </div>
                  <input
                    type="password"
                    id="thq-sign-in-3-password"
                    required="true"
                    placeholder="Password"
                    className="sign-in3-textinput2 thq-body-large thq-input"
                  />
                </div>
              </form>
              <div className="sign-in3-container3">
                <button
                  type="submit"
                  className="sign-in3-button1 thq-button-filled"
                  onClick={() => router.push('/')}
                >
                  <span>
                    {props.action1 ?? (
                      <Fragment>
                        <span className="sign-in3-text8 thq-body-small">
                          Sign In
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="sign-in3-container4">
            <div className="sign-in3-divider1">
              <div className="sign-in3-divider2"></div>
            </div>
            <button
              type="button"
              className="sign-in3-button2 thq-button-outline"
            >
              <span>
                {props.action2 ?? (
                  <Fragment>
                    <span className="sign-in3-text7 thq-body-small">
                      Forgot Password?
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <img
          alt={props.image1Alt}
          src="/hostelmf-1500w.jpg"
          className="sign-in3-sign-up-image thq-img-ratio-16-9"
        />
      </div>
      <style jsx>
        {`
          .sign-in3-container1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sign-in3-max-width {
            gap: var(--dl-space-space-unit);
            width: 493px;
            height: 609px;
            display: flex;
            opacity: 0.95;
            padding: var(--dl-space-space-twounits);
            z-index: 100;
            box-shadow: 5px 5px 10px 0px #000000;
            align-items: center;
            padding-top: 0px;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            padding-left: 0px;
            border-radius: var(--dl-radius-radius-inputradius);
            padding-right: 0px;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
          }
          .sign-in3-image {
            width: 100%;
            height: 194px;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            object-fit: cover;
            padding-right: 57px;
          }
          .sign-in3-form-root {
            gap: var(--dl-space-space-unit);
            width: 449px;
            height: 50%;
            display: flex;
            overflow: hidden;
            max-width: 600px;
            align-items: center;
            flex-shrink: 0;
            border-radius: var(--dl-radius-radius-radius4);
            justify-content: center;
          }
          .sign-in3-form1 {
            gap: var(--dl-space-space-halfunit);
            width: 377px;
            height: 282px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
          }
          .sign-in3-text1 {
            width: 375px;
            height: 54px;
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .sign-in3-form2 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .sign-in3-email {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .sign-in3-textinput1 {
            width: 100%;
            border-color: var(--dl-color-theme-primary1);
            background-color: transparent;
          }
          .sign-in3-password {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sign-in3-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .sign-in3-hide-password {
            gap: var(--dl-space-space-halfunit);
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-shrink: 1;
            justify-content: center;
          }
          .sign-in3-icon1 {
            fill: var(--dl-color-theme-neutral-dark);
            width: 24px;
            height: 24px;
          }
          .sign-in3-textinput2 {
            width: 100%;
            border-color: var(--dl-color-theme-primary1);
            background-color: transparent;
          }
          .sign-in3-container3 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
          }
          .sign-in3-button1 {
            width: 100%;
            align-self: center;
            margin-bottom: -1px;
            background-color: #b42625;
          }
          .sign-in3-container4 {
            gap: var(--dl-space-space-unit);
            width: 385px;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sign-in3-divider1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .sign-in3-divider2 {
            flex: 1;
            width: var(--dl-size-size-medium);
            height: 1px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-primary1);
          }
          .sign-in3-button2 {
            width: 100%;
            height: 45px;
            align-self: center;
          }
          .sign-in3-sign-up-image {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            opacity: 0.9;
            position: absolute;
          }
          .sign-in3-text7 {
            display: inline-block;
            text-align: center;
          }
          .sign-in3-text8 {
            display: inline-block;
            text-align: center;
          }
          @media (max-width: 991px) {
            .sign-in3-form-root {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .sign-in3-form-root {
              padding: 0px;
            }
            .sign-in3-button1 {
              width: 100%;
            }
            .sign-in3-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

SignIn3.defaultProps = {
  imageSrc: '/image-removebg-preview-1400w.png',
  imageAlt: 'image',
  action2: undefined,
  action1: undefined,
  image1Alt: 'Sign In Image',
}

SignIn3.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  action2: PropTypes.element,
  action1: PropTypes.element,
  image1Alt: PropTypes.string,
}

export default SignIn3
