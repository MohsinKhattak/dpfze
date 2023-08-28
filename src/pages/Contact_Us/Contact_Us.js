import "../../assets/css/contactUs.css";
import { FaMapPin, FaEnvelope, FaPhone } from "react-icons/fa";
function ContactUs() {
  return (
    <>
      <div className="contactus_main">
        <div className="contactus_hero_section">
          <h1 className="contact_us_title">Contact Us</h1>
          <hr className="horizontal_line horizontal_line_long" />
          <hr className="horizontal_line horizontal_line_short" />
        </div>
      </div>
      <div className="getInTouch_section">
        <div className="left_area">
          <div className="title_area">
            <h1 className="heading">
              <span className="heading_light">
                Get
                <br />
              </span>
              In Touch
            </h1>
            <hr className="horizontal_line horizontal_line_blue" />
          </div>
          <div className="content_area">
            <FaMapPin className="fa_icons" />
            <h1 className="inline_heading content_area_heading">Location</h1>
            <br />
            <span className="paragraph_title">Dubai: </span>
            <p className="paragraph inline_heading">
              Dayal Building Material Traders, PO Box: 262951, Jebel Ali South
              Zone, UAE, Dubai.
            </p>
            <br />
            <span className="paragraph_title">Dubai: </span>
            <p className="paragraph inline_heading">
              Dayal Building Material Traders, PO Box: 262951, Jebel Ali South
              Zone, UAE, Dubai.
            </p>
          </div>
          <div className="content_area">
            <FaEnvelope className="fa_icons" />
            <h1 className="inline_heading content_area_heading">Email</h1>
            <br />
            <span className="paragraph_title">General:</span>
            <p className="paragraph inline_heading">info@dbmtsteel.com</p>
            <br />
            <span className="paragraph_title">Sales: </span>
            <p className="paragraph inline_heading">sales@dbmtsteel.com</p>
          </div>
          <div className="content_area">
            <FaPhone className="fa_icons " />
            <h1 className="inline_heading content_area_heading">Contact</h1>
            <br />
            <span className="paragraph_title">Telephone: </span>
            <p className="paragraph inline_heading">+ 971 4 803 8300</p> <br />
            <span className="paragraph_title">Fax: </span>
            <p className="paragraph inline_heading">+ 971 4 803 8301</p>
          </div>
        </div>
        <div className="right__area">
          <h1>Right Side</h1>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
