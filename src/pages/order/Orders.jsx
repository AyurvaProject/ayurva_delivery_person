import OrderListSection from "../../section/order/OrderListSection";
import { useParams } from "react-router-dom";

const Orders = () => {
  const { status } = useParams();
  return <OrderListSection status={status} />;
};

export default Orders;
