import { Rating } from "@mui/material";
import { useEffect, useState } from "react";

export const RateContainer = ({rate}) => {
    const [averageFeedback, setAverageFeedback] = useState(0);
    return(
        <>
        <div className="heading">
            <h3 className="text-center">Average rate</h3>
            <h2 className="text-center text-success">{rate}</h2>
          </div>
          <div className="rate-container text-center">
            <Rating
              value={rate} // Giá trị đánh giá ban đầu
              readOnly={true}
            />
          </div>
        </>
    );
}