import InsideOrderListSection from "../../section/order/InsideOrderListSection";
import { useParams } from "react-router-dom";

const CompletedInsideOrder = () => {
  const { addressId } = useParams();
  return <InsideOrderListSection addressId={addressId} status="completed" />;
};

export default CompletedInsideOrder;
