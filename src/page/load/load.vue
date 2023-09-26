<template>
    <div class="bg">
      <h1 class="text">Loading</h1>
      <img src="../../images/elmlogo.png" class="logo">
    </div>
  </template>
  
  <script>
  export default {
    // 组件的逻辑部分
  }
  </script>
  
  <style>
  .text {
    margin-bottom: 15%;
    font-size: 25px;
    color: #ffffff;
    position: absolute;
   
  left: 50%; /* 将元素的左侧边界置于父元素的中间位置 */
  transform: translate(-50%); /* 使用偏移量将元素居中 */
    bottom: 0;
  }
  .logo{
    position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: auto;
  }
  .bg {
    background: linear-gradient(to bottom , rgb(56, 123, 223) 60%, #051c2b); 
    margin: 0;
    height: 100vh; 
    font-family: Arial, sans-serif;
    position: relative;
  }
  </style>
  