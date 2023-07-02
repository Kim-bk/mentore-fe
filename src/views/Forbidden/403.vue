<template>
    <div class="error-page">
      <h1>403 - Access Denied</h1>
      <p>Oops! It seems you don't have permission to access this page.</p>
      <p>Please contact the administrator for further assistance.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "Error403",
  };
  </script>
  
  <style scoped>
  .error-page {
    text-align: center;
    margin-top: 100px;
  }
  
  h1 {
    font-size: 36px;
  }
  
  p {
    font-size: 18px;
    margin-top: 20px;
  }
  </style>