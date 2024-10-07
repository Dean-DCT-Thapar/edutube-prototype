import React from 'react'
import Head from 'next/head'
import SearchBar from '../components/search-bar'
import Footer4 from '../components/footer4'

const Dashboard = (props) => {
  return (
    <>
      <div className="dashboard-container1">
        <Head>
          <title>Thapar Edutube</title>
          <meta property="og:title" content="Equatorial Kindhearted Gnu" />
        </Head>
        <div className="dashboard-container2">
          <div className="dashboard-container3">
            <img
              alt="image"
              src="/edutube%20logo-400w.png"
              className="dashboard-image1"
            />
          </div>
        </div>
        <img alt="image" src="/3-400h.png" className="dashboard-image2" />
        <img
          alt="image"
          src="/external/empowering%20education%2C%20empowering%20nation-400h-400h.png"
          className="dashboard-image3"
        />
        <img
          alt="image"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/96edbb7e-2e7d-4703-ac0f-9228e2e675d1/3e75173b-dfc2-4d18-899a-eeddc8c50c78?org_if_sml=120501&amp;force_format=original"
          className="dashboard-image4"
        />
        <h1 className="dashboard-text1">Your Enrolled Courses</h1>
        <h1 className="dashboard-text2">Student information</h1>
        <div className="dashboard-container4">
          <div className="dashboard-container5">
            <div className="dashboard-container6"></div>
          </div>
          <SearchBar rootClassName="search-barroot-class-name1"></SearchBar>
        </div>
        <img alt="image" src="/os-400h.jpg" className="dashboard-image5" />
        <img alt="image" src="/dbms-400h.jpg" className="dashboard-image6" />
        <a href="https://edutube-lecture-window.vercel.app/introduction" target="_blank" rel="noreferrer noopener">
          <img
            alt="pastedImage"
            src="/external/pastedimage-042b-300h.png"
            className="dashboard-pasted-image1"
          />
        </a>
        <a href="https://edutube-lecture-window.vercel.app/introduction" target="_blank" rel="noreferrer noopener">
          <img
            alt="image"
            src="/go%20to%20course%20page%20-400h.png"
            className="dashboard-image7"
          />
        </a>
        <Footer4 rootClassName="footer4root-class-name2"></Footer4>
        <h1 className="dashboard-text3">
          <span>This week&apos;s progress</span>
          <br></br>
        </h1>
        <img
          alt="pastedImage"
          src="/external/pastedimage-7ox-300h.png"
          className="dashboard-pasted-image2"
        />
        <img
          alt="pastedImage"
          src="/external/pastedimage-69h-200h.png"
          className="dashboard-pasted-image3"
        />
      </div>
      <style jsx>
        {`
          .dashboard-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .dashboard-container2 {
            top: 0px;
            flex: 0 0 auto;
            left: 650px;
            width: auto;
            height: 88px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            justify-content: center;
          }
          .dashboard-container3 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: auto;
            height: 88px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            justify-content: center;
          }
          .dashboard-image1 {
            top: -29px;
            left: -666px;
            width: 366px;
            height: 184px;
            position: absolute;
            align-self: center;
            object-fit: cover;
            padding-right: 3px;
          }
          .dashboard-image2 {
            top: 576px;
            left: 72px;
            width: 363px;
            height: 334px;
            position: absolute;
            object-fit: cover;
          }
          .dashboard-image3 {
            top: 137px;
            left: 67px;
            width: 1194px;
            height: 339px;
            position: absolute;
            align-self: flex-start;
            object-fit: cover;
            border-radius: 14px;
          }
          .dashboard-image4 {
            left: -1181px;
            width: 340px;
            bottom: -27px;
            height: 329px;
            position: absolute;
            object-fit: cover;
          }
          .dashboard-text1 {
            top: 507px;
            left: 70px;
            position: absolute;
          }
          .dashboard-text2 {
            top: 515px;
            right: 97px;
            position: absolute;
          }
          .dashboard-container4 {
            width: auto;
            height: 1326px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .dashboard-container5 {
            flex: 0 0 auto;
            width: auto;
            height: 1319px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .dashboard-container6 {
            width: 118px;
            height: 1344px;
            display: flex;
            align-items: flex-start;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: hidden;
            border-width: 2px;
            justify-content: center;
          }
          .dashboard-image5 {
            top: 940px;
            left: 485px;
            width: 357px;
            height: 341px;
            position: absolute;
            object-fit: cover;
          }
          .dashboard-image6 {
            top: 940px;
            left: 70px;
            width: 365px;
            height: 334px;
            position: absolute;
            object-fit: cover;
          }
          .dashboard-pasted-image1 {
            top: 580px;
            right: 93px;
            width: 300px;
            height: 261px;
            position: absolute;
            box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.43);
            border-color: rgba(25, 24, 24, 0.6);
            border-width: 1px;
          }
          .dashboard-image7 {
            top: 577px;
            left: 485px;
            width: 356px;
            height: 335px;
            position: absolute;
            object-fit: cover;
          }
          .dashboard-text3 {
            top: 894px;
            right: 81px;
            position: absolute;
          }
          .dashboard-pasted-image2 {
            top: 956px;
            right: 55px;
            width: 363px;
            height: 243px;
            position: absolute;
            box-shadow: 5px 5px 10px 2px #d4d4d4;
            border-color: rgba(25, 24, 24, 0.6);
            border-width: 1px;
          }
          .dashboard-pasted-image3 {
            top: 34px;
            right: 40px;
            width: 125px;
            height: 61px;
            position: absolute;
          }
        `}
      </style>
    </>
  )
}

export default Dashboard
