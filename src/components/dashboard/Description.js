import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Description.css";

function Description() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="description__page">
      {/* <section className="section__header description__backbutton  ">
        <Link className="section__header--link description__backbtn " to="/">
          &#8592; Back
        </Link>
      </section> */}
      <div className="description__heading">Challenge of the day!</div>
      <div className="description__main">
        <div className="description__left">
          <div className="description__container">
            <div className="description__banner"></div>

            <div className="description__content">
              <p className="description__para">
                CRED is an app, which gives you rewards on timely payments of
                your credit card payment. It is also equipped with the cred to
                protect feature which is an AI (Artificial Intelligence) backed
                system, that keeps track of every single nuance of a credit card
                payment journey – right from due date reminders, spending
                patterns and other card usage statistics.
              </p>
              <p className="description__para">
                There are various brand offers and coupons from categories like
                dining out, food delivery apps, flight tickets, and even
                shopping? Here is one instance. You get different kinds of
                rewards on using or raising the credit card bill amount. For
                example, you have a PVR credit card from Kotak bank, for every
                Rs. 15,000 credit card bill, you get points to redeem against 2
                PVR tickets (max. Rs. 400 for 1 ticket). Because of this, you
                get influenced to pay your bills mostly by credit card to reach
                at Rs.15,000 of bill every month.
              </p>
              <p className="description__para">
                Coming to the main point of getting rewards and benefits from
                the CRED app, below are the following things
              </p>
              <ul className="description__para">
                <li>Cashbacks on paying bills</li>
                <li>Discounts</li>
                <li> Free gifts and offers</li>
                <li>Spending Analysis</li>
                <li>Credit Score tracking</li>
              </ul>
              <p className="description__para">
                Recently we launched a new lending product and recurring bill
                payment feature for paying rent and other household bills on its
                app.
              </p>
              <p className="description__para">
                Our latest lending product— CRED Stash—will offer a low-interest
                instant credit line, through a pilot with IDFC First Bank. While
                its second feature named RentPay allows users to pay recurring
                household expenses and bills, and monthly rent payments using
                credit cards.
              </p>
              <p className="description__para">
                Present a new business model for CRED and come up with marketing
                strategies to implement the same.
              </p>
            </div>
          </div>
        </div>

        <div className="description__right">
          <div className="description__rightContainer">
            <div className="description__svg"></div>
            <div className="description__rightContent">
              <div className="description__rightTitle">
                Project-based hiring
              </div>
              <div className="description__rightDesc">
                Complete some of the challenges of your dream companies, submit
                the proposals and get hired
              </div>
              <div className="description__submit">Submit proposal</div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="submit__proposalContainer">
        <div className="proposalContainer">
          <div className="submit__textareaTitle">Leave a message ... </div>
          <textarea className="submit__textarea" rows="4" cols="50">
            At w3schools.com you will learn how to make a website. They offer
            free tutorials in all web development technologies.
          </textarea>
          <div className="submit__proposal"></div>
        </div>
      </div> */}
    </div>
  );
}

export default Description;
