<template>
  <div class="home flex flex-col">
    <div class="home_wrapper grid grid-cols-2">
      <div class="home_dark justify-end flex flex-col bg-aquiladark"></div>
      <div class="home_light bg-aquilalight flex flex-col"></div>
    </div>
    <div class="home__wrapper flex flex-col">
      <h1
        class="home_title text-5xl font-display font-bold opacity-60 text-white"
      >
        {{name}}
      </h1>
      <div class="home_imgbox flex justify-center items-end">
        <img src="../assets/mainimg.png" alt="" class="home_mainimg" />
      </div>
      <div class="home_menu_wrapper flex">
        <ul class="home_menus1 w-9/12 flex justify-evenly">
          <li
            v-for="(menu, i) in menus"
            :key="i"
            class="home_menu1 opacity-75 font-display font-light text-white"
          >
            {{ menu }}
          </li>
          <li><img class="home_avatar" src="../assets/avatar.png" alt="" /></li>
        </ul>
        <ul class="home_menus2 w-9/12 flex justify-evenly">
          <li
            v-for="(menu, i) in menus2"
            :key="i"
            class="home_menu2 opacity-75 font-display font-light text-white"
          >
            {{ menu }}
          </li>
        </ul>
      </div>
      <div class="home_socials self-end ">
        <a v-for="link in socials" :key="link.name" :href="`https://${link.name}.com/${socialmedia[link.name]}`" class="home_links">
          <img :src="getUrl(link.icon)" :alt="link.name" class="home_icons">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
 import axios from 'axios';

  export default {
    name: "Home",

    data() {
      return {
        name: ''|| 'loading...',
        menus: ["HOME", "ABOUT"],
        menus2: ["GALLERY", "CONTACT"],
        socials:[
          {name: 'instagram', icon: 'instagram.svg', },
          {name: 'twitter', icon: 'twitter.svg', },
          {name: 'snapchat', icon: 'snapchat.svg',  },
          {name: 'email', icon: 'email.svg',},
        ],
        socialmedia: {
          email: '',
          instagram: '',
          snapchat: '',
          twitter: ''
        } || 'loading',
        arrived: false
      }
    },
  async  mounted () {
    // Making the api request to the endpoint
      let res =  await axios.get('https://hirng-X2021.glitch.me/api', {
        headers:{
          'Access-Control-Allow-Origin' : '*',
        }
      });
      this.name = res.data.name;
      // this.socialmedia = res.data.social_media; setting the social media object to our data property
     

    },

    methods: {
      // This will load the icon files
       getUrl(url) {
        return require("../assets/" + url);
      }

    }
  
  };
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}
.home_dark,
.home_light {
  height: 100%;
}
.home_wrapper {
  height: 100%;
}

.home__wrapper {
  position: absolute;
  height: 100%;
  width: 80%;
  top: 0;
  left: 20%;
}
.home_title {
  margin: 0 auto;
  position: relative;
  right: 11%;
  top: 2rem;
}
.home_menu_wrapper {
  position: relative;
  top: 24%;
  height: 3rem;
}

.home_imgbox {
  position: relative;
  margin: 0 auto;
  right: 13%;
  top: 8%;
  height: 37rem;
  width: 30rem;
  background-image: linear-gradient(
    to right,
    #cb2964,
    #c8235e,
    #c41e58,
    #c11753,
    #bd0f4d
  );
 -webkit-box-shadow: -2px 3px 24px -7px rgba(50, 50, 50, 0.75);
-moz-box-shadow:    -2px 3px 24px -7px rgba(50, 50, 50, 0.75);
box-shadow:         -2px 3px 24px -7px rgba(50, 50, 50, 0.75);
}
.home_menus1 {
  position: relative;
  bottom: 2rem;
  height: fit-content;
}
.home_menus2 {
  position: relative;
  bottom: 2rem;
  right: 12rem;
}
.home_avatar {
  object-fit: contain;
  position: relative;
  bottom: 2rem;
}

.home_mainimg {
  height: 80%;
  width: 80%;
  object-fit: cover;
}
.home_socials{
  position: relative;
  bottom: 40%;
  right: 5%;
}
.home_icons{
  width: 5rem;
  height: 5rem;
  margin-bottom: 2rem;
}


/* Media Queries */
@media (min-width: 768px) and (max-width: 959px) {
 .home_menus2{
   
   right: 8rem;
 }
}
@media (min-width: 700px) and (max-width: 768px) {
 .home_menus2{
   
   right: 6rem;
 }
}
@media  (max-width: 370px) {

  .home__wrapper{
    
    left: 10%;

    
  }
  .home_imgbox{
    width: 13rem;
    height: 16rem;
    top: 16%;
    right: 0%;
    
  }
  .home_icons{
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;

  
  }

  .home_title{
    font-size: 1.3rem;
    right: -5%;
  }
  .home_socials{
    display: flex;
    flex-direction: row;
       top: 30%;
    margin: 0 auto;
  }
  
  .home_menu_wrapper{
    
    top: 26%;
    left: 6%;

  }
  .home_menus1{
    bottom: 0;
    font-size: .7rem;
    
   
  }

  .home_menu1{
    margin-right: .5rem;
  }
  .home_menus2{
    bottom: 0;
    right: 0;
    font-size: .7rem;
   
  }
  .home_avatar{
    bottom: .5rem;
  }
}
@media  (min-width: 375px) and (max-width: 413px) {

  .home__wrapper{
    
    left: 10%;

    
  }
  .home_imgbox{
    width: 13rem;
    height: 16rem;
    top: 16%;
    right: 0%;
    
  }
  .home_icons{
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;

  }
   .home_socials{
    top: 30%;
    margin: 0 auto;
  }

  .home_title{
    font-size: 1.3rem;
    right: -5%;
  }
  .home_socials{
    display: flex;
    flex-direction: row;
  }
  .home_menu_wrapper{
    
    top: 26%;
    left: 6%;

  }
  .home_menus1{
    bottom: 0;
    font-size: .7rem;
    
   
  }

  .home_menu1{
    margin-right: .5rem;
  }
  .home_menus2{
    bottom: 0;
    right: 0;
    font-size: .7rem;
   
  }
  .home_avatar{
    bottom: 1rem;
    left: .5rem;
  }
}
@media  (min-width: 414px) and (max-width: 500px) {

  .home__wrapper{
    
    left: 10%;

    
  }
  .home_imgbox{
    width: 13rem;
    height: 16rem;
    top: 16%;
    right: 0%;
    
  }
  .home_icons{
    width: 2rem;
    height: 2rem;
     margin-right: 1rem;
    }

 .home_socials{
    top: 30%;
    margin: 0 auto;
  }
  .home_title{
    font-size: 1.3rem;
    right: -5%;
  }
  .home_socials{
    display: flex;
    flex-direction: row;
  }
  .home_menu_wrapper{
    
    top: 26%;
    left: 6%;

  }
  .home_menus1{
    bottom: 0;
    font-size: .7rem;
    
   
  }

  .home_menu1{
    margin-right: .5rem;
  }
  .home_menus2{
    bottom: 0;
    right: 0;
    font-size: .7rem;
   
  }
  .home_avatar{
    bottom: 1rem;
    left: .5rem;
  }
}
@media  (min-width: 501px) and (max-width: 800px) {

  .home__wrapper{
    
    left: 10%;

    
  }
  .home_imgbox{
    width: 13rem;
    height: 16rem;
    top: 16%;
    right: 0%;
    
  }
  .home_icons{
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    
   
    margin-right: 1rem;
  }

  .home_socials{
    top: 30%;
    margin: 0 auto;
  }

  .home_title{
    font-size: 1.3rem;
    right: -5%;
  }
  .home_socials{
    display: flex;
    flex-direction: row;
  }
  .home_menu_wrapper{
    
    top: 26%;
    left: 6%;

  }
  .home_menus1{
    bottom: 0;
    font-size: .7rem;
    
   
  }

  .home_menu1{
    margin-right: .5rem;
  }
  .home_menus2{
    bottom: 0;
    right: 0;
    font-size: .7rem;
   
  }
  .home_avatar{
    bottom: 2rem;
    height: 5rem;
    width: 5rem;
    left: 2rem;
  }
}

@media  (min-width: 800px) and (max-width: 959px){
  .home_avatar{
    width: 4.5rem;
    height: 4.5rem;
    left: 2rem;
   
  }
  .home_menu_wrapper{
    height: 2rem;
    top: 12rem;
    width: 80%;
    left: 2rem;
   
  }
   .home_menus2{
    bottom: 0;
    right: 0;
    font-size: .9rem;
   
  }
  .home_menus1{
    bottom: 0;
    right: 0;
    font-size: .9rem;
   
  }
}
</style>