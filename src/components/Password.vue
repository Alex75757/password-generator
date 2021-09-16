<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <div class="container">
    <div class="box">
      <div id="password" class="password" >
        <div>{{password}} &nbsp;</div>
        <a-icon v-on:click="copyPassword()" type="copy" /> &nbsp; 
        <a-icon v-on:click="genPassword()"  type="sync" />
      </div>
      <br>
      <a-progress v-if=" (passLenght > 0) && (passLenght < 8)"
      v-model="passLenght"
      type="line" 
      strokeColor= #8d0cf7
      :percent="passLenght*5"
      :show-info="false"
      />
      <a-progress v-else
      v-model="passLenght"
      type="line" 
      strokeColor= #6adac7
      :percent="passLenght*5"
      :show-info="false"
      />
    </div>
    <div class="box">
       <h2>Random password options</h2>
        <div class="options-wrap">
        <div class="items">
          <h3>Length</h3>
            <div>
                <a-row>
                  <a-col :span="12">
                    <a-slider  v-model="passLenght" v-bind="password" :min="3" :max="20" @change="genPassword()"/>
                  </a-col> 
                </a-row>
                <a-row>
                  <a-col :span="4">
                    <a-input-number   :min="3" :max="20" v-model="passLenght"  />
                  </a-col>
                </a-row>
            </div>
        </div>
       
          <div class="lp-pg-settings__radio-wrap">
                        
                        <div class="lp-radio" @click="genPassword()">
                            <input class="lp-radio__input" id="lp-pg-easy-to-read" name="encryption-style" type="radio" value="easy-to-read">
                            <label class="lp-radio__label" for="lp-pg-easy-to-read">
                                Easy to read <a-icon type="info-circle" @click="openNotification('easy-read'); genPassword()" />
                            </label>
                                <div id="easy-read" class="lp-icon__info">
                                    <span class="lp-pg-tooltip-content" style="display: none;">
                                        Avoid ambiguous characters like l, 1, O, and 0
                                    </span>
                                    <span class="tooltip-content" style="display: none;">
                                      Bla Bla
                                      </span>
                                </div>

                        </div>
                        <div class="lp-radio" @click="genPassword()">
                            <input class="lp-radio__input" id="lp-pg-easy-to-say" name="encryption-style" type="radio" value="easy-to-say">
                            <label class="lp-radio__label" for="lp-pg-easy-to-say">
                                Easy to say &nbsp;<a-icon type="info-circle" @click="openNotification('easy-say')" />
                            </label>
                                <div id="easy-say" class="lp-icon__info">
                                    <span class="lp-pg-tooltip-content" style="display: none;">
                                        Avoid numbers and special characters
                                    </span>
                                </div>
                        </div>
                        <div class="lp-radio" @click="genPassword()">
                            
                            <input class="lp-radio__input" checked="&quot;checked&quot;" id="lp-pg-all-characters" name="encryption-style" type="radio" value="all-characters">
                            
                            <label class="lp-radio__label" for="lp-pg-all-characters">
                                All characters <a-icon type="info-circle" @click="openNotification('all-use')" />
                            </label>
                                <div id="all-use" class="lp-icon__info">
                                    <span class="lp-pg-tooltip-content" style="display: none;">
                                        Any character combinations like !, 7, h, K, and l1
                                    </span>
                                </div>

                        </div>
                    </div>
       </div>
       <div class="buttons">
      <button id="button" class="btn1" v-on:click="genPassword()">
        Generate  &nbsp;  <a-icon type="sync" />     </button>  

        <button  id="button" class="btn2" v-on:click="copyPassword()">
          Copy password  &nbsp; <a-icon type="copy" /> 
        </button>
       </div>
    
    </div>
    </div>
    
  </div>
</template>

<script>

const key = 'updatable';

export default {
  name: 'Password',
  components: {
   
  },
  data() {
    return {
      disabled: false,
    };
  },
  props: {
    msg: String,
    password: String,
    passLenght: null,
  },
  methods: {
    genPassword: function() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var easyRead = document.getElementById('lp-pg-easy-to-read');
    var easySay = document.getElementById('lp-pg-easy-to-say');
    if (easyRead.checked) {
          chars = "23456789abcdefghjklmnpqrstuvwxyz@#$%^&*()ABCDEFGHJKLMNPQRSTUVWXYZ";
        }
    if (easySay.checked) {
          chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }    
    console.log(chars)
      var passwordLength = this.passLenght;
      console.log(passwordLength);
      var pass = "";
   for (var i = 0; i < passwordLength; i++) {
     var randomNumber = Math.floor(Math.random() * chars.length);
     pass += chars.substring(randomNumber, randomNumber +1);
    }
    // this.$store.commit('changePass', pass);
    this.password = pass;
 
   },
  
copyPassword: function() {
  this.$clipboard(this.password);
  console.log("copyText", this.password);
  this.password= "";
},

openNotification(id) {
    var modal = document.getElementById(id);
    console.log("modal", modal.lastChild);
    // modal.lastChild.style.display="inline";
    this.$notification.config({
        placement: 'topRight',
        bottom: '50px',
        duration: 6,
        // getContainer: () => modal.LastChild,
    });
      this.$notification.open({
        key,
        message: id,
        description: modal.firstChild.innerHTML,
        style: {
          width: '350px',
          marginLeft: `${335 - 600}px`,
        },
      });
    },

formatter(value) {
      return `${value}%`;
    },

  },

}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

* {
 margin: 0;
 padding: 0;
 user-select: none;
 box-sizing: border-box;
  }


.container {
  background-color: #8d0cf7;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 45vh;
  margin: 0 auto;
  width: 50%;
  border-radius: 30px;
    }

 .box{
   background-color: white;
   min-height: 10vh;
   padding: 4px 20px;
   width: 90%;
   border-radius: 30px;
   margin-top: 5px;
 }

 .box h2{
   margin-top: 10px;
   /* margin-bottom: 10px; */
   text-align: center;
   font-size: 24px;
   color: #6adac7;
   font-family: sans-serif;
 }

 .box h3{
   
  text-align: left;
   font-size: 18px;
   color: #6adac7;
   font-family: sans-serif;
   margin-bottom: -1px;

 }

 .password {
 margin: 10px auto;
 user-select: none;
 height: 40px;
 width: 100%;
 border-radius: 16px;
 border: none;
 border: 2px solid #8d0cf7;
 outline: none;
 font-size: 150%;
 line-height: 40px;
 text-align: end;

 padding-right: 10px;
 }

input::placeholder{
  font-size: 23px;
 } 

 .buttons{
   margin-top: 10px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: flex-end;
 }

 #button {
  font-family: sans-serif;
  font-size: 15px;
  margin: 10px;
  border: 2px solid #8d0cf7;
  width: 150px;
  height: 40px;
  text-align: center;
  background-color: #8d0cf7;
  display: flex;
  color: rgb(255, 255, 255);
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 35px;  
}

#button:hover {
  color: #6adac7;
  background-color: white;
}

.code-box-demo .ant-slider {
  margin-bottom: 10px;
}

.options-wrap{
  display: flex;
  flex-direction: row;
}

.items{
  width: 90%;
}

.lp-pg-settings__radio-wrap{
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.lp-radio{
  margin-bottom: 10px;
}

.lp-radio input[type=radio]{
  display: none;
}

.lp-radio__label {
	display: inline-block;
	cursor: pointer;
	position: relative;
	padding-left: 25px;
	margin-right: 0;
	line-height: 16px;
	user-select: none;
}
.lp-radio__label:before {
	content: "";
	display: inline-block;
	width: 16px;
	height: 16px;
	position: absolute;
	left: 0;
	bottom: 1px;
	background: url(../assets/radio-1.svg) 0 0 no-repeat;
}

/* Checked */
.lp-radio input[type=radio]:checked + label:before {
	background: url(../assets/radio-2.svg) 0 0 no-repeat;
}
 
/* Hover */
.lp-radio__label:hover:before {
	filter: brightness(120%);
}
.lp-radio__label:hover {
color: #6adac7;
}
 
/* Disabled */
/* .lp-radio input[type=radio]:disabled + label:before {
	filter: grayscale(100%);
} */

.lp-radio__label{
font-size: 16px;
}

@media (max-width: 760px){
  .box h2{
    font-size: 18px;
  }
.box h3{
  
   font-size: 14px;
   color: #6adac7;
 }

  .password {

  height: 30px;
  width: 100%;
  font-size: 100%;
  line-height: 28px;
  }

#button {
 
  font-size: 10px;
  margin: 1px;
  border: 2px solid #8d0cf7;
  width: 120px;
  height: 30px;

}
.lp-pg-settings__radio-wrap{
  width: 140px;
  
}

.lp-radio__label {
	display: inline-block;
	cursor: pointer;
	position: relative;
	padding-left: 10px;
	margin-right: 0;
	line-height: 12px;
	user-select: none;
}
}
@media (max-width: 530px){
.password {

  height: 16px;
  font-size: 80%;
  line-height: 16px;
  }
.options-wrap{
  flex-direction: column;
}

.lp-radio__label {
	display: inline-block;
	cursor: pointer;
	position: relative;
	padding-left: 20px;
}
.container{
  width: 70%;
}
.buttons{
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
}

</style>
