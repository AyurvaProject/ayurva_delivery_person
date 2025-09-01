import axios from "axios";
import { API_URL } from "../../constants/keys";
import { GetCurrentUser } from "../auth/Auth";

export const GetPendingOrders = async () => {
    const response = await axios.get(`${API_URL}/orders/pending-for-delivery`,{
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })

    return response.data.data;
}

export const GetPendingOrdersByDeliveryPersonId = async () => {
    const response = await axios.get(`${API_URL}/orders/delivery-pending/${GetCurrentUser().id}`,{
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })

    return response.data.data;
}

export const GetCompletedOrdersByDeliveryPersonId = async () => {
    const response = await axios.get(`${API_URL}/orders/delivery-completed/${GetCurrentUser().id}`,{
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    
    return response.data.data;
}

export const ChangeOrderDeliveryStatus = async (id, status) => {
    await axios.patch(`${API_URL}/orders/change-delivery-status/${id}/${status}`, {}, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
}

export const AssignOrderToDeliveryPerson = async (id) => {
    await axios.patch(`${API_URL}/orders/assign-delivery-person/${id}/${GetCurrentUser().id}`, {}, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
}