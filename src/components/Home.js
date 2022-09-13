import React from "react";
import { Link } from "react-router-dom";

import Button from "./Button";
import Caption from "./Caption";
import InteractivePiano from "./InteractivePiano";

const Home = () => {
  return (
    <React.Fragment>
      <div className="page-container d-flex flex-column justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col">
              <InteractivePiano />
            </div>
          </div>
          <div className="row">
            <div className="col mt-4">
              <Caption
                size="h4"
                text="The free and fun way to practice your perfect pitch ability!"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-4 mx-auto">
              <Link to="/onboarding">
                <Button text="Continue" color="red" wide></Button>
              </Link>
              <div className="row">
                <div className="col">
                  <a
                    href="https://twitter.com/RyanPunwasi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button text="Report a bug" color="blue" wide></Button>
                  </a>
                </div>
              </div>
              {/* <div className='row'>
          <div className='col'>
            <Link to='/credits'>
              <Button text='Credits' color='green' wide></Button>
            </Link>
          </div>
        </div> */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
