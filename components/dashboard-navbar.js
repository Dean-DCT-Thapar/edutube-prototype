import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

const DashboardNavbar = (props) => {
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  return (
    <>
      <header className={`dashboard-navbar-container1 ${props.rootClassName} `}>
        <img
          alt={props.logoAlt}
          src="/image-removebg-preview-200h.png"
          className="dashboard-navbar-image1"
        />
        <header
          data-thq="thq-navbar"
          className="dashboard-navbar-navbar-interactive"
        >
          <div
            data-thq="thq-navbar-nav"
            className="dashboard-navbar-desktop-menu"
          >
            <nav className="dashboard-navbar-links1">
              <a href={props.link1Url}>
                {props.link1 ?? (
                  <Fragment>
                    <span className="dashboard-navbar-text26 thq-body-small thq-link">
                      Link 1
                    </span>
                  </Fragment>
                )}
              </a>
              <a
                href={props.link3Url}
                target="_blank"
                rel="noreferrer noopener"
              >
                {props.link3 ?? (
                  <Fragment>
                    <span className="dashboard-navbar-text25 thq-body-small thq-link">
                      Link 3
                    </span>
                  </Fragment>
                )}
              </a>
              <div
                onClick={() => setLink5DropdownVisible(!link5DropdownVisible)}
                className="dashboard-navbar-link4-dropdown-trigger"
              >
                <div className="dashboard-navbar-icon-container1">
                  {link5DropdownVisible && (
                    <div className="dashboard-navbar-container2">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="dashboard-navbar-icon10"
                      >
                        <path d="M298 426h428l-214 214z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </nav>
          </div>
          <div
            data-thq="thq-burger-menu"
            className="dashboard-navbar-burger-menu"
          >
            <svg viewBox="0 0 1024 1024" className="dashboard-navbar-icon12">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="dashboard-navbar-mobile-menu"
          >
            <div className="dashboard-navbar-nav">
              <div className="dashboard-navbar-top">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="dashboard-navbar-logo"
                />
                <div
                  data-thq="thq-close-menu"
                  className="dashboard-navbar-close-menu"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="dashboard-navbar-icon14"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="dashboard-navbar-links2">
                <a href={props.link1Url}>
                  {props.link1 ?? (
                    <Fragment>
                      <span className="dashboard-navbar-text26 thq-body-small thq-link">
                        Link 1
                      </span>
                    </Fragment>
                  )}
                </a>
                <a href={props.link2Url}>
                  {props.link2 ?? (
                    <Fragment>
                      <span className="dashboard-navbar-text15 thq-body-small thq-link">
                        Link 2
                      </span>
                    </Fragment>
                  )}
                </a>
                <a href={props.link3Url}>
                  {props.link3 ?? (
                    <Fragment>
                      <span className="dashboard-navbar-text25 thq-body-small thq-link">
                        Link 3
                      </span>
                    </Fragment>
                  )}
                </a>
                <div className="dashboard-navbar-link4-accordion">
                  <div
                    onClick={() => setLink5AccordionOpen(!link5AccordionOpen)}
                    className="dashboard-navbar-trigger"
                  >
                    <span>
                      {props.link4 ?? (
                        <Fragment>
                          <span className="dashboard-navbar-text24 thq-body-small thq-link">
                            Link 4
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <div className="dashboard-navbar-icon-container2">
                      {link5AccordionOpen && (
                        <div className="dashboard-navbar-container3">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="dashboard-navbar-icon16"
                          >
                            <path d="M298 426h428l-214 214z"></path>
                          </svg>
                        </div>
                      )}
                      {!link5AccordionOpen && (
                        <div className="dashboard-navbar-container4">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="dashboard-navbar-icon18"
                          >
                            <path d="M426 726v-428l214 214z"></path>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                  {link5AccordionOpen && (
                    <div className="dashboard-navbar-container5">
                      <a href={props.linkUrlPage1}>
                        <div className="dashboard-navbar-menu-item1">
                          <img
                            alt={props.page1ImageAlt}
                            src={props.page1ImageSrc}
                            className="dashboard-navbar-page1-image1"
                          />
                          <div className="dashboard-navbar-content1">
                            <span>
                              {props.page1 ?? (
                                <Fragment>
                                  <span className="dashboard-navbar-text22 thq-body-large">
                                    Inicio
                                  </span>
                                </Fragment>
                              )}
                            </span>
                            <span>
                              {props.page1Description ?? (
                                <Fragment>
                                  <span className="dashboard-navbar-text14 thq-body-small">
                                    Page One Description
                                  </span>
                                </Fragment>
                              )}
                            </span>
                          </div>
                        </div>
                      </a>
                      <a href={props.linkUrlPage2}>
                        <div className="dashboard-navbar-menu-item2">
                          <img
                            alt={props.page2ImageAlt}
                            src={props.page2ImageSrc}
                            className="dashboard-navbar-page2-image1"
                          />
                          <div className="dashboard-navbar-content2">
                            <span>
                              {props.page2 ?? (
                                <Fragment>
                                  <span className="dashboard-navbar-text21 thq-body-large">
                                    Cursos
                                  </span>
                                </Fragment>
                              )}
                            </span>
                            <span>
                              {props.page2Description ?? (
                                <Fragment>
                                  <span className="dashboard-navbar-text20 thq-body-small">
                                    Page Two Description
                                  </span>
                                </Fragment>
                              )}
                            </span>
                          </div>
                        </div>
                      </a>
                      <a href={props.linkUrlPage3}>
                        <div className="dashboard-navbar-menu-item3">
                          <img
                            alt={props.page3ImageAlt}
                            src={props.page3ImageSrc}
                            className="dashboard-navbar-page3-image1"
                          />
                          <div className="dashboard-navbar-content3">
                            <span>
                              {props.page3 ?? (
                                <Fragment>
                                  <span className="dashboard-navbar-text17 thq-body-large">
                                    Conferencias
                                  </span>
                                </Fragment>
                              )}
                            </span>
                            <span>
                              {props.page3Description ?? (
                                <Fragment>
                                  <span className="dashboard-navbar-text13 thq-body-small">
                                    Page Three Description
                                  </span>
                                </Fragment>
                              )}
                            </span>
                          </div>
                        </div>
                      </a>
                      <a href={props.linkUrlPage4}>
                        <div className="dashboard-navbar-menu-item4">
                          <img
                            alt={props.page4ImageAlt}
                            src={props.page4ImageSrc}
                            className="dashboard-navbar-page4-image1"
                          />
                          <div className="dashboard-navbar-content4">
                            <span>
                              {props.page4 ?? (
                                <Fragment>
                                  <span className="dashboard-navbar-text16 thq-body-large">
                                    Buscar
                                  </span>
                                </Fragment>
                              )}
                            </span>
                            <span>
                              {props.page4Description ?? (
                                <Fragment>
                                  <span className="dashboard-navbar-text23 thq-body-small">
                                    Page Four Description
                                  </span>
                                </Fragment>
                              )}
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  )}
                </div>
              </nav>
              <div className="dashboard-navbar-buttons">
                <button className="thq-button-filled">
                  <span>
                    {props.action1 ?? (
                      <Fragment>
                        <span className="dashboard-navbar-text18">LOGIN</span>
                      </Fragment>
                    )}
                  </span>
                </button>
                <button className="thq-button-outline">
                  <span>
                    {props.action2 ?? (
                      <Fragment>
                        <span className="dashboard-navbar-text27">
                          Secondary Action
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
            <div className="dashboard-navbar-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="thq-icon-x-small"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="thq-icon-x-small"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="thq-icon-small"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
          {link5DropdownVisible && (
            <div className="dashboard-navbar-container6 thq-box-shadow">
              <div className="dashboard-navbar-link5-menu-list">
                <a href={props.linkUrlPage1}>
                  <div className="dashboard-navbar-menu-item5">
                    <img
                      alt={props.page1ImageAlt}
                      src={props.page1ImageSrc}
                      className="dashboard-navbar-page1-image2 thq-img-ratio-1-1"
                    />
                    <div className="dashboard-navbar-content5">
                      <span>
                        {props.page1 ?? (
                          <Fragment>
                            <span className="dashboard-navbar-text22 thq-body-large">
                              Inicio
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span>
                        {props.page1Description ?? (
                          <Fragment>
                            <span className="dashboard-navbar-text14 thq-body-small">
                              Page One Description
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </a>
                <a href={props.linkUrlPage2}>
                  <div className="dashboard-navbar-menu-item6">
                    <img
                      alt={props.page2ImageAlt}
                      src={props.page2ImageSrc}
                      className="dashboard-navbar-page2-image2 thq-img-ratio-1-1"
                    />
                    <div className="dashboard-navbar-content6">
                      <span>
                        {props.page2 ?? (
                          <Fragment>
                            <span className="dashboard-navbar-text21 thq-body-large">
                              Cursos
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span>
                        {props.page2Description ?? (
                          <Fragment>
                            <span className="dashboard-navbar-text20 thq-body-small">
                              Page Two Description
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </a>
                <a href={props.linkUrlPage3}>
                  <div className="dashboard-navbar-menu-item7">
                    <img
                      alt={props.page3ImageAlt}
                      src={props.page3ImageSrc}
                      className="dashboard-navbar-page3-image2 thq-img-ratio-1-1"
                    />
                    <div className="dashboard-navbar-content7">
                      <span>
                        {props.page3 ?? (
                          <Fragment>
                            <span className="dashboard-navbar-text17 thq-body-large">
                              Conferencias
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span>
                        {props.page3Description ?? (
                          <Fragment>
                            <span className="dashboard-navbar-text13 thq-body-small">
                              Page Three Description
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </a>
                <a href={props.linkUrlPage4}>
                  <div className="dashboard-navbar-menu-item8">
                    <img
                      alt={props.page4ImageAlt}
                      src={props.page4ImageSrc}
                      className="dashboard-navbar-page4-image2 thq-img-ratio-1-1"
                    />
                    <div className="dashboard-navbar-content8">
                      <span>
                        {props.page4 ?? (
                          <Fragment>
                            <span className="dashboard-navbar-text16 thq-body-large">
                              Buscar
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span>
                        {props.page4Description ?? (
                          <Fragment>
                            <span className="dashboard-navbar-text23 thq-body-small">
                              Page Four Description
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          )}
          <button className="dashboard-navbar-button thq-button-filled">
            <span>
              {props.action111 ?? (
                <Fragment>
                  <span className="dashboard-navbar-text19 thq-body-small">
                    SIGN OUT
                  </span>
                </Fragment>
              )}
            </span>
          </button>
        </header>
        {link5DropdownVisible && (
          <div
            onClick={() => setLink5DropdownVisible(false)}
            className="dashboard-navbar-container7"
          ></div>
        )}
      </header>
      <style jsx>
        {`
          .dashboard-navbar-container1 {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 1000;
            position: sticky;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .dashboard-navbar-image1 {
            width: 451px;
            height: 150px;
            align-self: center;
          }
          .dashboard-navbar-navbar-interactive {
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: 4px;
            padding-right: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .dashboard-navbar-desktop-menu {
            flex: 1;
            display: flex;
            position: relative;
          }
          .dashboard-navbar-links1 {
            gap: var(--dl-space-space-twounits);
            top: 0px;
            flex: 1;
            right: 0px;
            bottom: 0px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .dashboard-navbar-link4-dropdown-trigger {
            gap: 4px;
            cursor: pointer;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .dashboard-navbar-icon-container1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .dashboard-navbar-container2 {
            display: flex;
            align-items: center;
            animation-name: rotateInDownLeft;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: flex-end;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .dashboard-navbar-icon10 {
            width: 24px;
            height: 24px;
          }
          .dashboard-navbar-burger-menu {
            display: none;
          }
          .dashboard-navbar-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .dashboard-navbar-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-twounits);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .dashboard-navbar-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .dashboard-navbar-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .dashboard-navbar-logo {
            height: 3rem;
          }
          .dashboard-navbar-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .dashboard-navbar-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .dashboard-navbar-links2 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: flex-start;
            flex-direction: column;
          }
          .dashboard-navbar-link4-accordion {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .dashboard-navbar-trigger {
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .dashboard-navbar-icon-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .dashboard-navbar-container3 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .dashboard-navbar-icon16 {
            width: 24px;
            height: 24px;
          }
          .dashboard-navbar-container4 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .dashboard-navbar-icon18 {
            width: 24px;
            height: 24px;
          }
          .dashboard-navbar-container5 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-halfunit);
            grid-template-columns: 1fr;
          }
          .dashboard-navbar-menu-item1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .dashboard-navbar-page1-image1 {
            width: 50px;
            height: 50px;
          }
          .dashboard-navbar-content1 {
            width: 340px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .dashboard-navbar-menu-item2 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .dashboard-navbar-page2-image1 {
            width: 50px;
            height: 50px;
          }
          .dashboard-navbar-content2 {
            width: 340px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .dashboard-navbar-menu-item3 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .dashboard-navbar-page3-image1 {
            width: 50px;
            height: 50px;
          }
          .dashboard-navbar-content3 {
            width: 340px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .dashboard-navbar-menu-item4 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .dashboard-navbar-page4-image1 {
            width: 50px;
            height: 50px;
          }
          .dashboard-navbar-content4 {
            width: 340px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .dashboard-navbar-buttons {
            gap: var(--dl-space-space-twounits);
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
          }
          .dashboard-navbar-icon-group {
            gap: var(--dl-space-space-twounits);
            display: flex;
          }
          .dashboard-navbar-container6 {
            top: 100%;
            left: 0px;
            width: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            animation-name: fadeInDownBig;
            animation-delay: 0s;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .dashboard-navbar-link5-menu-list {
            width: 100%;
            display: grid;
            padding: var(--dl-space-space-oneandhalfunits);
            grid-gap: var(--dl-space-space-halfunit);
            max-width: var(--dl-size-size-maxwidth);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .dashboard-navbar-menu-item5 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            text-decoration: none;
          }
          .dashboard-navbar-page1-image2 {
            width: 30px;
            height: 30px;
          }
          .dashboard-navbar-content5 {
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-direction: column;
          }
          .dashboard-navbar-menu-item6 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            text-decoration: none;
          }
          .dashboard-navbar-page2-image2 {
            width: 30px;
            height: 30px;
          }
          .dashboard-navbar-content6 {
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-direction: column;
          }
          .dashboard-navbar-menu-item7 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            text-decoration: none;
          }
          .dashboard-navbar-page3-image2 {
            width: 30px;
            height: 30px;
          }
          .dashboard-navbar-content7 {
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-direction: column;
          }
          .dashboard-navbar-menu-item8 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            text-decoration: none;
          }
          .dashboard-navbar-page4-image2 {
            width: 30px;
            height: 30px;
          }
          .dashboard-navbar-content8 {
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-direction: column;
          }
          .dashboard-navbar-button {
            border-color: #570f07;
            background-color: #570f07;
          }
          .dashboard-navbar-container7 {
            top: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: fixed;
            align-items: flex-start;
            flex-direction: column;
          }
          .dashboard-navbar-text13 {
            display: inline-block;
          }
          .dashboard-navbar-text14 {
            display: inline-block;
          }
          .dashboard-navbar-text15 {
            display: inline-block;
          }
          .dashboard-navbar-text16 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .dashboard-navbar-text17 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .dashboard-navbar-text18 {
            display: inline-block;
            background-color: rgb(217, 217, 217);
          }
          .dashboard-navbar-text19 {
            display: inline-block;
          }
          .dashboard-navbar-text20 {
            display: inline-block;
          }
          .dashboard-navbar-text21 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .dashboard-navbar-text22 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .dashboard-navbar-text23 {
            display: inline-block;
          }
          .dashboard-navbar-text24 {
            display: inline-block;
          }
          .dashboard-navbar-text25 {
            display: inline-block;
            text-decoration: none;
          }
          .dashboard-navbar-text26 {
            display: inline-block;
            text-align: center;
            text-decoration: none;
          }
          .dashboard-navbar-text27 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .dashboard-navbar-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .dashboard-navbar-burger-menu {
              align-items: center;
              justify-content: center;
            }
            .dashboard-navbar-mobile-menu {
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .dashboard-navbar-container5 {
              grid-gap: 0;
            }
            .dashboard-navbar-link5-menu-list {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .dashboard-navbar-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .dashboard-navbar-desktop-menu {
              display: none;
            }
            .dashboard-navbar-burger-menu {
              display: flex;
            }
            .dashboard-navbar-mobile-menu {
              padding: var(--dl-space-space-unit);
            }
            .dashboard-navbar-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

DashboardNavbar.defaultProps = {
  page3Description: undefined,
  page1Description: undefined,
  link2: undefined,
  page4: undefined,
  page4ImageSrc:
    'https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjgwNDUxNnw&ixlib=rb-4.0.3&q=80&w=1080',
  page3: undefined,
  action1: undefined,
  action111: undefined,
  page2Description: undefined,
  page3ImageAlt: 'image',
  page3ImageSrc:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjgwNDUxN3w&ixlib=rb-4.0.3&q=80&w=1080',
  page2: undefined,
  page1: undefined,
  page2ImageAlt: 'image',
  page1ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  page4Description: undefined,
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  link4: undefined,
  linkUrlPage3: 'https://www.teleporthq.io',
  logoAlt: 'logo',
  linkUrlPage2: 'https://www.teleporthq.io',
  page1ImageAlt: 'image',
  link2Url: 'https://www.teleporthq.io',
  rootClassName: '',
  link3: undefined,
  link1: undefined,
  page4ImageAlt: 'image',
  linkUrlPage4: 'https://www.teleporthq.io',
  linkUrlPage1: 'https://www.teleporthq.io',
  link3Url: 'https://www.teleporthq.io',
  link1Url: 'https://www.teleporthq.io',
  page2ImageSrc:
    'https://images.unsplash.com/photo-1713693212309-acdbf3a3feb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjgwNDUxNnw&ixlib=rb-4.0.3&q=80&w=1080',
  action2: undefined,
}

DashboardNavbar.propTypes = {
  page3Description: PropTypes.element,
  page1Description: PropTypes.element,
  link2: PropTypes.element,
  page4: PropTypes.element,
  page4ImageSrc: PropTypes.string,
  page3: PropTypes.element,
  action1: PropTypes.element,
  action111: PropTypes.element,
  page2Description: PropTypes.element,
  page3ImageAlt: PropTypes.string,
  page3ImageSrc: PropTypes.string,
  page2: PropTypes.element,
  page1: PropTypes.element,
  page2ImageAlt: PropTypes.string,
  page1ImageSrc: PropTypes.string,
  page4Description: PropTypes.element,
  logoSrc: PropTypes.string,
  link4: PropTypes.element,
  linkUrlPage3: PropTypes.string,
  logoAlt: PropTypes.string,
  linkUrlPage2: PropTypes.string,
  page1ImageAlt: PropTypes.string,
  link2Url: PropTypes.string,
  rootClassName: PropTypes.string,
  link3: PropTypes.element,
  link1: PropTypes.element,
  page4ImageAlt: PropTypes.string,
  linkUrlPage4: PropTypes.string,
  linkUrlPage1: PropTypes.string,
  link3Url: PropTypes.string,
  link1Url: PropTypes.string,
  page2ImageSrc: PropTypes.string,
  action2: PropTypes.element,
}

export default DashboardNavbar
