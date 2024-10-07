import React, { Fragment } from 'react'
import Head from 'next/head'

import SignIn3 from '../components/sign-in3'
import Footer4 from '../components/footer4'

const SignIn = (props) => {
  return (
    <>
      <div className="sign-in-container">
        <Head>
          <title>Sign-in - Equatorial Kindhearted Gnu</title>
          <meta
            property="og:title"
            content="Sign-in - Equatorial Kindhearted Gnu"
          />
        </Head>
        <SignIn3
          action1={
            <Fragment>
              <span className="sign-in-text1 thq-body-small">Sign In</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="sign-in-text2 thq-body-small">
                Forgot Password?
              </span>
            </Fragment>
          }
          imageSrc="/image-removebg-preview-200h.png"
        ></SignIn3>
        <Footer4 rootClassName="footer4root-class-name1"></Footer4>
      </div>
      <style jsx>
        {`
          .sign-in-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .sign-in-text1 {
            display: inline-block;
            text-align: center;
          }
          .sign-in-text2 {
            display: inline-block;
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

export default SignIn
