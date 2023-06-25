import { Link } from "react-router-dom";
import Style from "./Dashboard/Style";

const thanks = () => {
  return (
    <Style>
      <div className="text-center mt-5 thanks">
        THANK YOU <p>FOR YOUR ORDER!</p>
        <Link to={"/kiosk"}>Home</Link>
      </div>
    </Style>
  );
};

export default thanks;
