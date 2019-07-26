import { ScaleLoader } from "react-spinners";
import React from "react";

const LoadingSpinner = ({ loading }) => {
  return (
    <div>
      <ScaleLoader
        height={200}
        sizeUnit={"px"}
        width={40}
        color={"#fff"}
        loading={loading}
      />
    </div>
  );
};

export default LoadingSpinner;
