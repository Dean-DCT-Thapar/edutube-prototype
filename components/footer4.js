import React from 'react'

import PropTypes from 'prop-types'

const Footer4 = (props) => {
  return (
    <>
      <footer
        className={`footer4-footer7 thq-section-padding ${props.rootClassName} `}
      >
        <div className="footer4-logo1">
          <div className="footer4-links"></div>
        </div>
        <div className="footer4-max-width thq-section-max-width">
          <div className="footer4-content">
            <div className="footer4-logo2"></div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer4-footer7 {
            width: 100%;
            height: 292px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            padding-top: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
            background-color: rgb(227, 227, 227);
          }
          .footer4-logo1 {
            width: 499px;
            height: 146px;
            display: flex;
            align-items: flex-end;
            background-size: cover;
            justify-content: center;
            background-image: url('https://d2lk14jtvqry1q.cloudfront.net/media/small_Thapar_Institute_of_Engineering_and_Technology_Thapar_University_06036259ee_6f106c6e8b_15190eeeb2_65b1d7ffa3.png');
            background-position: center;
          }
          .footer4-links {
            gap: var(--dl-space-space-twounits);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .footer4-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer4-content {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer4-logo2 {
            gap: 24px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer4root-class-name {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            background-color: rgb(227, 227, 227);
          }

          .footer4root-class-name2 {
            left: 0px;
            bottom: 0px;
            position: static;
          }
          @media (max-width: 479px) {
            .footer4-links {
              flex-direction: column;
            }
            .footer4-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Footer4.defaultProps = {
  rootClassName: '',
}

Footer4.propTypes = {
  rootClassName: PropTypes.string,
}

export default Footer4
