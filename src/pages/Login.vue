<template>
<div>
    <el-row>
        <el-col :span="12">
            <el-input ref="pass" v-model="value" placeholder="" @focus="test" show-password @input="inp"> </el-input>
        </el-col>
    </el-row>
</div>
</template>

<script>
export default {
    name: "LoginForm",
    data() {
        return {
            value: "",
        };
    },
    methods: {
      inp(){
        console.log(this.value);
      },
        test() {
          // this.$refs['pass'].handleFocus()
          console.log(this.$refs['pass']);
        },
    },
    created() {},
    mounted() {
      this.$refs['pass'].handleFocus = (evt) =>{
        console.log(evt);
        
        console.log('evt -->', evt, this.$refs['pass'])
      }
    },
};
</script>

<style lang="scss" scoped></style>
