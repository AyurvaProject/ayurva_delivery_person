import InsideOrderListSection from "../../section/order/InsideOrderListSection";
import { useParams } from "react-router-dom";

const ReqInsideOrder = () => {
  const { addressId } = useParams();
  return <InsideOrderListSection addressId={addressId} status="all" />;
};

export default ReqInsideOrder;
