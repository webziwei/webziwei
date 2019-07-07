<template>
  <div>
    <div class="header">我的</div>
    <div class="login_img">
      <img src="../assets/login.jpg" alt="">
    </div>
    <form class="mui-input-group">
      <div class="mui-input-row">
        <label><van-icon name="user-o" />&nbsp;用户</label>
        <input
          type="text"
          class="mui-input-clear"
          v-model="username"
          @change="changename"
          placeholder="请输入手机号码"
        />
        <div class="tips" v-show="tip_flag">查无此用户</div>
      </div>
      <div class="mui-input-row">
        <label><van-icon name="closed-eye" />&nbsp;密码</label>
        <input
          type="password"
          class="mui-input-password"
          v-model="password"
          @change="changepsw"
          placeholder="请输入密码"
        />
      </div>
      <div class="mui-button-row">
        <button type="button" class="mui-btn mui-btn-primary" @click="login">登陆</button>
        <button type="button" class="mui-btn mui-btn-danger" @click="reg">注册</button>
      </div>
    </form>
  </div>
</template>
<style lang="scss">
.header {
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  background-color: #008cff;
}
.login_img{
  width:100%;
  height:150px;
  text-align: center;
  line-height: 150px;
  background-color: #edf7fc;
  img{
    width:80px;
    height:80px;
    border-radius: 50%;
    vertical-align: middle;
  }
}
.mui-input-row{
  position: relative;
  .tips{
    position: absolute;
    right:10px;
    top:10px;
    color:red;
  }
}
.mui-btn-primary{
  margin-right: 10px;
}
.mui-input-row label{
width:20%;
padding:0;
text-align: center;
line-height: 40px;
}
.mui-input-row label ~ input{
width:80%;
}
</style>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      username: "",
      password: "",
      tip_flag:false
    };
  },
  methods: {
    login() {
      if (!/^1[34578]\d{9}$/.test(this.username)) {
        this.username = "";
        Toast({ message: "请输入正确的手机格式" });
      } else {
        this.$store.state.user.forEach(item => {//遍历数组

          if (this.username == item.name) {//判断有无用户名
            if (!/^[a-zA-Z0-9]{7,18}$/.test(this.password)) {
              this.password = "";
              Toast({ message: "密码不得不少于8位数" });
              return
            } else {
              if (this.password == item.password) {
                this.$store.state.luser = {name:this.username,password:this.password};
                  localStorage.login=true;
                this.$store.state.loginflag = true;

              } else {
                return
                Toast({ message: "请输入正确的密码" });
              }
            }
          } else {
            this.tip_flag=true;
            // this.username="查无该用户";
            setTimeout(() => {
              // this.username="";
              // this.password="";
            // Toast({ message: "无该用户请注册" });
            this.tip_flag=false;

            }, 1000);
            

          }
        });
      }
    },
    reg() {
        if (!/^1[34578]\d{9}$/.test(this.username)) {
        this.username = "";
        Toast({ message: "请输入正确的手机格式" });
      } else {
         
            if (!/^[a-zA-Z0-9]{7,18}$/.test(this.password)) {
              this.password = "";
              Toast({ message: "密码不得不少于8位数" });
            } else {
                this.$store.state.user.push({name:this.username,password:this.password})
                this.username=this.password="";
                Toast({message: "注册成功",iconClass: "mui-icon mui-icon-checkmarkempty"});
            }
      }
    
    
    },
    changename() {
      if (/^1[34578]\d{9}$/.test(this.username)) {
      } else {
        this.username = "";
        Toast({ message: "请输入正确的手机格式" });
      }
    },
    changepsw() {
      if (/^[a-zA-Z0-9]{7,18}$/.test(this.password)) {
        // console.log("正确");
      } else {
        this.password = "";
        Toast({ message: "密码不得不少于8位数" });
      }
    }
  },
  created() {}
};
</script>
