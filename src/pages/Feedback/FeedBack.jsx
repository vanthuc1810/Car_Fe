import { useEffect, useState } from "react";
import { getFeedbackReport } from "../../api/feedback-api/feedbackApi";

import "./FeedBack.scss";
import { RateContainer } from "./components/RateContainer/RateContainer";
import { CartItem } from "./components/CartItem/CartItem";
export const FeedBack = () => {
  const [listFeedBack, setListFeedBack] = useState([]);
  const [rate, setRate] = useState(0);
  useEffect(() => {
    getFeedbackReport().then((res) => setListFeedBack(res.result.sort().reverse()));
  }, []);

  useEffect(() => {
    if(listFeedBack){
        var sum = 0;
        listFeedBack.forEach(feedback => {
            sum += feedback?.rate;
        });
        setRate(sum/listFeedBack.length);
    }
  },[listFeedBack])
  return (
    <>
      <h1>Feedback Report</h1>
      {listFeedBack?.length > 0 ? (
        <div className="container">
          <RateContainer rate={rate}/>
          {
            listFeedBack?.map((feedback, index) => (
                <CartItem feedback={feedback} key={index} />
            ))
          }
        </div>
      ) : (
        <div className="container nofeedback-container d-flex align-items-center justify-content-center">
          <div className="row">
            <h1 className="text-center">No feedback!</h1>
          </div>
        </div>
      )}
    </>
  );
};
