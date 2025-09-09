import InsidePrOrderListSection from "../../section/order/InsidePrOrderListSection";
import { useParams } from "react-router-dom";

const PendingInsidePrOrder = () => {
  const { addressId } = useParams();
  return <InsidePrOrderListSection addressId={addressId} status="pending" />;
};

export default PendingInsidePrOrder;
