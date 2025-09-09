import axios from "axios";
import { API_URL } from "../../constants/keys";
import { GetCurrentUser } from "../auth/Auth";

export const GetPharmacyByPharmacistId = async (id) => {
    const response = await axios.get(`${API_URL}/pharmacies/pharmacy-by-pharmacist-id/${id}`,{
        headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
    })

    return response.data.data;
}