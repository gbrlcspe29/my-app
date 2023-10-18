import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="satfooter">
      <div className="container-fluid sat-footer">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <h3>COMPANY</h3>
            <div className="line" />
            <ul className="list-unstyled mb-0">
              <li>
                <Link href="about-us" style={{ textDecoration: "underline" }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  style={{ cursor: "default" }}
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  style={{ cursor: "default" }}
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Careers
                </Link>
              </li>
            </ul>
            <p />
          </div>

          <div className="col-md-3">
            <h3>AFFILIATIONS</h3>
            <div className="line" />
            <ul className="list-unstyled mb-0">
              <li>
                <Link
                  href="#"
                  style={{ cursor: "default" }}
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Tagpros Children International USA
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  style={{ cursor: "default" }}
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <p />
          </div>

          <div className="col-md-3">
            <h3>FOLLOW US</h3>
            <div className="line" />
            <Link
              href="https://www.facebook.com/TagprosOfficial"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook size="2rem" className="icons" />
            </Link>
            <Link
              href="https://twitter.com/TagprosOfficial"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter size="2rem" className="icons" />
            </Link>
            <Link
              href="https://www.instagram.com/tagprosofficial"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram size="2.5rem" className="icons" />
            </Link>
            <p />
          </div>
        </div>
        <br />

        <div className="row justify-content-center">
          <div className="col-md-5">
            <h3>OFFICE HEADQUARTERS</h3>
            <div className="line" />
            <h5>
              <IoLocationSharp size="1.5rem" color="#ff8400" />
              PHILIPPINES
            </h5>
            <p>
              3F National Engineering Center, <br /> Juinio Hall, F. Agoncillo
              St., UP Campus, <br /> Diliman 1101, Quezon City, Philippines
            </p>
            <p />
          </div>

          <div className="col-md-4 us">
            <h5>
              <IoLocationSharp size="1.5rem" color="#ff8400" />
              UNITED STATES
            </h5>
            <p>University Avenue, Fairfax VA 22030</p>
            <p />
          </div>
        </div>
        <br />
        <div className="backtotop">
          <Link href="#">BACK TO TOP</Link>
        </div>
      </div>
      <div className="copyright">
        ©2021 Tagpros Children. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
