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
    await axios.post(`${API_URL}/orders/change-delivery-status/${id}/${status}`, {}, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
}

export const AssignOrderToDeliveryPerson = async (id) => {
    await axios.post(`${API_URL}/orders/assign-delivery-person/${id}/${GetCurrentUser().id}`, {}, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
}

export const GetOrdersGroupByAddress = async () => {
    const response = await axios.get(`${API_URL}/orders/get/group-by-address-for-delivery`,{
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })

    return response.data.data;
}

export const GetPendingOrdersGroupByAddress = async () => {
    const response = await axios.get(`${API_URL}/orders/get/pending-group-by-address-for-delivery/${GetCurrentUser().id}`,{
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })

    return response.data.data;
}

export const GetCompletedOrdersGroupByAddress = async () => {
    const response = await axios.get(`${API_URL}/orders/get/completed-group-by-address-for-delivery/${GetCurrentUser().id}`,{
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })

    return response.data.data;
}

export const GetReqOrdersByAddressId = async (id) => {
    const response = await axios.get(`${API_URL}/orders/get/req-orders-by-address/${id}`,{
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    
    return response.data.data;
}

export const GetPendingOrdersByAddressIdForDelivery = async (addressId, deliveryPersonId) => {
    const response = await axios.get(`${API_URL}/orders/get/pending-orders-by-address/${addressId}/${deliveryPersonId}`,{
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    
    return response.data.data;
}


export const GetCompletedOrdersByAddressIdForDelivery = async (addressId, deliveryPersonId) => {
    const response = await axios.get(`${API_URL}/orders/get/completed-orders-by-address/${addressId}/${deliveryPersonId}`,{
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    
    return response.data.data;
}

export const AssignPrOrderToDeliveryPerson = async (id) => {
    await axios.post(`${API_URL}/prescription-orders/assign-delivery-person/${id}/${GetCurrentUser().id}`, {}, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
}

export const GetPrOrdersGroupByAddress = async () => {
    const response = await axios.get(`${API_URL}/prescription-orders/get/group-by-address-for-delivery`,{
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })

    return response.data.data;
}

export const GetPendingPrOrdersGroupByAddress = async () => {
    const response = await axios.get(`${API_URL}/prescription-orders/get/pending-group-by-address-for-delivery/${GetCurrentUser().id}`,{
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })

    return response.data.data;
}

export const GetCompletedPrOrdersGroupByAddress = async () => {
    const response = await axios.get(`${API_URL}/prescription-orders/get/completed-group-by-address-for-delivery/${GetCurrentUser().id}`,{
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })

    return response.data.data;
}

export const GetReqPrOrdersByAddressId = async (id) => {
    const response = await axios.get(`${API_URL}/prescription-orders/get/req-orders-by-address/${id}`,{
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    
    return response.data.data;
}

export const GetPendingPrOrdersByAddressIdForDelivery = async (addressId, deliveryPersonId) => {
    const response = await axios.get(`${API_URL}/prescription-orders/get/pending-orders-by-address/${addressId}/${deliveryPersonId}`,{
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    
    return response.data.data;
}


export const GetCompletedPrOrdersByAddressIdForDelivery = async (addressId, deliveryPersonId) => {
    const response = await axios.get(`${API_URL}/prescription-orders/get/completed-orders-by-address/${addressId}/${deliveryPersonId}`,{
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    
    return response.data.data;
}

export const ChangePrOrderDeliveryStatus = async (id, status) => {
    await axios.post(`${API_URL}/prescription-orders/change-delivery-status/${id}/${status}`, {}, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
}