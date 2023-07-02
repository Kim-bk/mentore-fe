import axios from 'axios'

// Token expiration check function
export async function refreshTokenIfNeeded() {
    // Get the token expiration time
    if (localStorage.getItem('accessToken') === undefined || localStorage.getItem('accessToken') === null)
    {
        // do nothing
    }
    else{
        const expirationTime = localStorage.getItem('accessToken').expiresAt;
    
        // Calculate the remaining time until expiration
        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
        const expiresIn = expirationTime - currentTime;
      
        // Define the threshold for considering the token as expiring soon
        const threshold = 300; // 300 seconds = 5 minutes
      
        // Return true if the token is expiring soon, false otherwise
        if (expiresIn <= threshold)
        {
            const payload={
                token: localStorage.getItem('refreshToken')
            }
    
            const response = await axios.post('/api/user/refresh-token', payload);
            if (response.status === 200){
                console.log(response.data.accessToken);
                localStorage.setItem("accessToken", response.data.accessToken);
                localStorage.setItem("refreshToken", response.data.refreshToken);
                localStorage.setItem("accountId", response.data.userId)
            }
            if (response.status === 400){
                console.log("failed refresh token");
                this.$alert(res.data);
            }
        };
    }
    
  }