import InsideOrderListSection from "../../section/order/InsideOrderListSection";
import { useParams } from "react-router-dom";

const PendingInsideOrder = () => {
  const { addressId } = useParams();
  return <InsideOrderListSection addressId={addressId} status="pending" />;
};

export default PendingInsideOrder;
