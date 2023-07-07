import axios from 'axios'
import {refreshTokenIfNeeded} from "@/services/RefreshTokenService"

export async function pay(data) {
  refreshTokenIfNeeded()
    const response = await axios.post('/api/payment/vnpay', data, {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }})
    .catch((error) => {
        console.log("Unauthorized day");
        console.log(error)
          // Handle 401 Unauthorized error
        window.location.href = "https://kim-bk.github.io/mentore-fe/login";
      });

    return response;
}

