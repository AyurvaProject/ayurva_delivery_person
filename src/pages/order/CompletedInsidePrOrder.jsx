import InsidePrOrderListSection from "../../section/order/InsidePrOrderListSection";
import { useParams } from "react-router-dom";

const CompletedInsidePrOrder = () => {
  const { addressId } = useParams();
  return <InsidePrOrderListSection addressId={addressId} status="completed" />;
};

export default CompletedInsidePrOrder;
