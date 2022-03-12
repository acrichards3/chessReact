import React from 'react';
import { Link } from 'react-router-dom';
import './terms.css';

export default function Terms() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="title">Terms & Conditions</h1>
      </div>
      <div className="row">
        <p className="text">
          These Website Standard Terms and Conditions written on this webpage
          shall manage your use of our website, ChessInfo accessible at
          https://ChessInfo.com. These Terms will be applied fully and affect to
          your use of this Website. By using this Website, you agreed to accept
          all terms and conditions written in here. You must not use this
          Website if you disagree with any of these Website Standard Terms and
          Conditions. Users below 13 years old are not allowed to use this
          Website.
        </p>
      </div>
      <div className="row">
        <h4 className="header">Intellectual Property Rights</h4>
      </div>
      <div className="row">
        <p className="text">
          Other than the content you own, under these Terms, ChessInfo and/or
          its licensors own all the intellectual property rights and materials
          contained in this Website.
        </p>
        <p className="text">
          You are granted limited license only for purposes of viewing the
          material contained on this Website.
        </p>
      </div>
      <div className="row">
        <h4 className="header">Restrictions</h4>
      </div>
      <div className="row">
        <p className="text">
          You are specifically restricted from all of the following:
        </p>
      </div>
      <div className="row">
        <ul>
          <li className="listItem">
            ♙ publishing any Website material in any other media;
          </li>
          <li className="listItem">
            ♙ selling, sublicensing and/or otherwise commercializing any Website
            material;
          </li>
          <li className="listItem">
            ♙ publicly performing and/or showing any Website material;
          </li>
          <li className="listItem">
            ♙ using this Website in any way that is or may be damaging to this
            Website;
          </li>
          <li className="listItem">
            ♙ using this Website in any way that impacts user access to this
            Website;
          </li>
          <li className="listItem">
            ♙ using this Website contrary to applicable laws and regulations, or
            in any way may cause harm to the Website, or to any person or
            business entity;
          </li>
          <li className="listItem">
            ♙ engaging in any data mining, data harvesting, data extracting or
            any other similar activity in relation to this Website;
          </li>
          <li className="listItem">
            ♙ using this Website to engage in any advertising or marketing.
          </li>
        </ul>
      </div>
      <div className="row">
        <p className="text">
          Certain areas of this Website are restricted from being access by you
          and ChessInfo may further restrict access by you to any areas of this
          Website, at any time, in absolute discretion. Any user ID and password
          you may have for this Website are confidential and you must maintain
          confidentiality as well.
        </p>
      </div>
      <div className="row">
        <h4 className="header">Your Content</h4>
      </div>
      <div className="row">
        <p className="text">
          In these Website Standard Terms and Conditions, “Your Content” shall
          mean any audio, video text, images or other material you choose to
          display on this Website. By displaying Your Content, you grant
          ChessInfo a non-exclusive, worldwide irrevocable, sub licensable
          license to use, reproduce, adapt, publish, translate and distribute it
          in any and all media.
        </p>
        <p className="text">
          Your Content must be your own and must not be invading any
          third-party’s rights. ChessInfo reserves the right to remove any of
          Your Content from this Website at any time without notice.
        </p>
      </div>
      <div className="row">
        <h4 className="header">Your Privacy</h4>
      </div>
      <div className="row">
        <p className="text">
          Please read our <Link to="/privacy-policy">Privacy Policy</Link>
        </p>
      </div>
      <div className="row">
        <h4 className="header">No Warranties</h4>
      </div>
      <div className="row">
        <p className="text">
          This Website is provided “as is,” with all faults, and ChessInfo
          express no representations or warranties, of any kind related to this
          Website or the materials contained on this Website. Also, nothing
          contained on this Website shall be interpreted as advising you.
        </p>
      </div>
      <div className="row">
        <h4 className="header">Limitation of Liability</h4>
      </div>
      <div className="row">
        <p className="text">
          In no event shall ChessInfo, nor any of its officers, directors and
          employees, shall be held liable for anything arising out of or in any
          way connected with your use of this Website whether such liability is
          under contract. ChessInfo, including its officers, directors and
          employees shall not be held liable for any indirect, consequential or
          special liability arising out of or in any way related to your use of
          this Website.
        </p>
      </div>
      <div className="row">
        <h4 className="header">Indemnification</h4>
      </div>
      <div className="row">
        <p className="text">
          You hereby indemnify to the fullest extent ChessInfo from and
          against any and/or all liabilities, costs, demands, causes of action,
          damages and expenses arising in any way related to your breach of any
          of the provisions of these Terms.
        </p>
      </div>
      <div className="row">
        <h4 className="header">Severability</h4>
      </div>
      <div className="row">
        <p className="text">
          If any provision of these Terms is found to be invalid under any
          applicable law, such provisions shall be deleted without affecting the
          remaining provisions herein.
        </p>
      </div>
      <div className="row">
        <h4 className="header">Variation of Terms</h4>
      </div>
      <div className="row">
        <p className="text">
          ChessInfo is permitted to revise these Terms at any time as it sees
          fit, and by using this Website you are expected to review these Terms
          on a regular basis.
        </p>
      </div>
      <div className="row">
        <h4 className="header">Assignment</h4>
      </div>
      <div className="row">
        <p className="text">
          ChessInfo is allowed to assign, transfer, and subcontract its rights
          and/or obligations under these Terms without any notification.
          However, you are not allowed to assign, transfer, or subcontract any
          of your rights and/or obligations under these Terms.
        </p>
      </div>
      <div className="row">
        <h4 className="header">Entire Agreement</h4>
      </div>
      <div className="row">
        <p className="text">
          These Terms constitute the entire agreement between ChessInfo and you
          in relation to your use of this Website, and supersede all prior
          agreements and understandings.
        </p>
      </div>
      <div className="row">
        <h4 className="header">Governing Law & Jurisdiction</h4>
      </div>
      <div className="row">
        <p className="text end">
          These Terms will be governed by and interpreted in accordance with the
          laws of the State of us, and you submit to the non-exclusive
          jurisdiction of the state and federal courts located in us for the
          resolution of any disputes.
        </p>
      </div>
    </div>
  );
}
