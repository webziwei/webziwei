<template>
  <div>
    <mt-header>
      <router-link to="/my" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="myinfo">
        <button @click="eixt">退出登录</button>
    </div>
  </div>
</template>
<style lang="scss">
.myinfo{
    width:100%;
    text-align: center;
}
</style>
<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        eixt(){
            this.$store.state.loginflag=false;
             localStorage.login=false;
            this.$router.push("/my")
        }
    },
    created() {
        
    },
}
</script>
