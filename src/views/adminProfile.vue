<script>
import { collapsed, toggleSidebar} from '../components/Sidebar/state'

export default {
    setup() {
        return {collapsed, toggleSidebar}
    }
}
</script>
<template>
    <div class="sidenav">
      <div class="profile">
        <img src="C:\Users\Ferdinand\Documents\codes\pediacareee\source\gian.png" alt="" width="100" height="100">
        <div class="name">
          Ferdinand Espiritu
        </div>
        <div class="job">
          Patient, 20
        </div>  
      </div>

      <div class="sidenav-url">
        <div class="url">
          <a href="/resources/html/profile.html" class="active">Profile</a>
          <hr align="center">
        </div>
        <div class="url">
          <a href="/resources/html/editProfile.html">Edit Profile</a>
          <hr align="center">
        </div>
        <div class="url">
          <a href="/">Logout</a>
          <hr align="center">
        </div>
      </div>
    </div>

    <div class="main">
      <h2>Admin's Profile</h2>
      <div class="card">
        <div class="card-body">
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>:</td>
                <td>Ferdinand Espiritu</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>:</td>
                <td>sample@gmail.com</td>
              </tr>
              <tr>
                <td>Age</td>
                <td>:</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>:</td>
                <td>Olongapo City</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>:</td>
                <td>Male</td>
              </tr>
              <tr>
                <td>Phone Number</td>
                <td>:</td>
                <td>09668109204</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>

<style scoped>
body {
    margin: 0;
    padding: 0;
    color: #2e323c;
    background: #f5f6fa;
    position: relative;
        height: 100%
}

.topnav {
    background-color: #F9CBAA;
    overflow: hidden;
    margin: 0;
    padding: 0;
}

.topnav a {
    float: left;
    color: #494948;
    text-align: center;
    padding: 18px 25px;
    text-decoration: none;
    font-size: 17px;
    font-family: sans-serif;
}

.topnav a:hover {
    background-color: #e5b99a;
    color: #323232;
}

.topnav a.active {
    background-color: #dca075;
    color: #323232;
}

.logo {
    height: 55px;
    margin-left: 0%;
    padding: 1px;
}

.main {
    margin-top: 2%;
    margin-left: 29%;
    font-size: 28px;
    padding: 0 10px;
    width: 58%;
}

.main h2 {
    color: #333;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 24px;
    margin-bottom: 10px;
}

.main .card {
    background-color: #fff;
    border-radius: 18px;
    box-shadow: 1px 1px 8px 0 grey;
    height: auto;
    margin-bottom: 20px;
    padding: 20px 0 20px 50px;
}

.main .card table {
    border: none;
    font-size: 20px;
    height: 270px;
    width: 80%;
}

.sidenav {
    color: #333;
    border-bottom-right-radius: 25px;
    height: 86%;
    left: 0;
    overflow-x: hidden;
    padding-top: 20px;
    position: absolute;
    top: 30px;
    width: 250px;
    margin-left: 180px;
}

.profile {
    margin-bottom: 20px;
    margin-top: -12px;
    text-align: center;
}

.profile img {
    border-radius: 50%;
    box-shadow: 0px 0px 5px 1px grey;
}

.name {
    font-size: 20px;
    font-weight: bold;
    padding-top: 20px;
}

.job {
    font-size: 16px;
    font-weight: bold;
    padding-top: 10px;
}

.url,
hr {
    text-align: center;
}

.url hr {
    margin-left: 20%;
    width: 60%;
}

.url a {
    color: #818181;
    display: block;
    font-size: 20px;
    margin: 10px 0;
    padding: 6px 8px;
    text-decoration: none;
}

.url a:hover,
.url .active {
    background-color: #e8f5ff;
    border-radius: 28px;
    color: #000;
    margin-left: 14%;
    width: 65%;
}

</style>