<template>
  <div class="searсh">
    <input 
    type="text" 
    v-model="userName" 
    />
    <font-awesome-icon 
    icon="fa-solid fa-magnifying-glass fa-xl" 
    
    class="icon-search"
    />
  </div>
  <div v-for="user in filteredList" :key="user.id" class="hello">
    <a @click="modalOpen(user)" >
      <el-card class="box-card user">
        <div class="user__name">{{user.name}}</div>
        <p class="user__phone">
          <font-awesome-icon 
          color="#b44ccf" 
          icon="fa-solid fa-mobile-screen-button fa-xl"
          />
          {{user.phone}}
        </p>
        <p class="user__email">
          <font-awesome-icon  
          color="#b44ccf" 
          icon="fa-solid fa-envelope fa-xl" 
          />
          {{user.email}}
        </p>
      </el-card>
    </a>
  </div>
  <el-dialog
    id="modal"
    v-model="dialogVisible"
    :title="name"
    width="30%"
    :before-close="handleClose"
  >
  <div class="d-flex">
    <div class="d-40 flex-column">
      <p>Телефон:</p>
      <p>Почта:</p>
      <p>Дата приема:</p>
      <p>Должность:</p>
      <p>Подразделение:</p>
    </div>
    <div class="d-60 flex-column">
      <p class="opacity">{{phone}}</p>
      <p class="opacity">{{email}}</p>
      <p class="opacity">{{hire_date}}</p>
      <p class="opacity">{{position_name}}</p>
      <p class="opacity">{{department}}</p>
    </div>
  </div>
  <div class="footer">
    <p>Дополнительная информация:</p>
    <p class="opacity">Наше дело не так однозначно, как может показаться: существующая теория напрямую зависит от экспериментов, поражающих по своей масштабности и грандиозности. Не следует, однако, забывать, что выбранный нами инновационный путь создаёт предпосылки для прогресса профессионального сообщества. </p>
  </div>
  </el-dialog>
</template>

<script>
import axios from 'axios'
// import {state} from 'vuex'


export default {
  name: 'ListsUser',
  data() {
    return {
      serverError:true,
      userName:'',
      dialogVisible: false,
      info: [],
      name:'',
      phone:'',
      email:'',
      hire_date:'',
      address:'',
      position_name:'',
      department:'',
    }
  },
  methods: {
    handleClose() {
      this.dialogVisible = false
    },
    modalOpen(userInfo){
      this.name = userInfo.name
      this.phone = userInfo.phone
      this.email = userInfo.email
      this.hire_date = userInfo.hire_date
      if(window.innerWidth < 768){
        this.position_name = userInfo.position_name.substr(0, 20)+"..."
        this.department = userInfo.department.substr(0, 20)+"..."
      }else{
        this.position_name = userInfo.position_name.substr(0, 40)+"..."
        this.department = userInfo.department.substr(0, 40)+"..."
      }
      
      this.dialogVisible = true
    },
    filterArrName(arrname){
      let comp = this.userName.toLowerCase();
        Object.entries(arrname)
        return arrname.filter(elem => {
          const nameLowelCase = elem.name.toLowerCase()
            if(comp==='') return true;
            else return nameLowelCase.indexOf(comp) > -1;
        })
    }
  },
  computed:{
    filteredList(){
      if(this.serverError){
        return this.filterArrName(this.info)
      }else{
        this.info = this.$store.state.user
        return this.filterArrName(this.info);
      }
        
    }
  },
  created(){
    axios
      .get('http://127.0.0.1:3000')
      .then(response => (this.info = response.data))
      .catch(error => {
        this.serverError = false
        return console.log('Ошибка соединения с сервером: '+error.message+'. Используем локальное хранилище Vuex')
      });
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.el-overlay {
    background-color: rgb(149 168 186 / 59%);;
  }
#modal{
  display: block;
  border-radius: 20px;
  padding: 30px 10px;
  width: 560px;
  @media screen and (max-width: 600px){
    width: 90%;
  }
  .d-flex{
    display: flex;
    .flex-column{
      display: flex;
      flex-direction: column;
      align-items:flex-start
    }
    .d-40{
      width: 40%;
    }
    .d-60{
      width: 60%;
    }
  }
  .opacity{
    color:rgba(0, 0, 0, 0.4);
  }
  .el-dialog__header {
    padding: var(--el-dialog-padding-primary);
    padding-bottom: 10px;
    margin-right: 16px;
    word-break: break-all;
    text-align: start;
    span{
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
  .el-dialog__headerbtn{
    top: -20px;
    right: calc(50% - 20px);
    width: 40px;
    height: 40px;
    background: #b44ccf;
    border-radius: 50%;
    .el-dialog__close {
      color: #ffffff;
      font-size: 1.2rem;
      top: 2px;
    }
  }
  .footer{
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 20px;
    .opacity{
      text-align: start;
      margin: 0;
    }
  }
}
.searсh{
  width: 98%;
  margin-bottom: 40px;
  position: relative;
  display: block;
  input{
    position: relative;
    max-width: 100%;
    width: 100%;
    font-size: 1rem;
    padding: 15px 10px;
    border-radius: 25px;
    outline: none;
    border: 2px solid #cecece25;
    :active{
      outline: none;
      outline-offset: none;
    }
    :focus{
      outline: none ;
      outline-offset: none;
    }
    :hover{
      outline: none;
      outline-offset: none;
    }
    @media screen and (max-width: 480px) {
      width: 90%;
    }
  }
  .icon-search{
    position: absolute;
    top:15%;
    right: 5px;
    font-size: 2rem;
    color:#d46ceed0;
    @media screen and (max-width: 480px) {
      top:25%;
      right: 4%;
      font-size: 1.5rem;
    }
  }
}
.hello {
  width: 32%;
  text-align: start;
  margin: 1% 0;
  @media screen and (max-width: 991px) {
    width: 48%;
  }
  @media screen and (max-width: 480px) {
    width: 98%;
  }
  .user{
    display: block;
    &__name{
      font-size: 1rem;
      font-weight: 600;
    }
    &__phone{
      font-size: 0.8rem;
      color:rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      svg{
        margin-right: 5px;
        font-size: 1rem;
      }
    }
    &__email{
      font-size: 0.8rem;
      color:rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      text-decoration:underline;
      svg{
        margin-right: 5px;
        font-size: 1rem;
      }
    }
  }
}



</style>
