import InsidePrOrderListSection from "../../section/order/InsidePrOrderListSection";
import { useParams } from "react-router-dom";

const ReqInsidePrOrder = () => {
  const { addressId } = useParams();
  return <InsidePrOrderListSection addressId={addressId} status="all" />;
};

export default ReqInsidePrOrder;
