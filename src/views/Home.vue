<template>
  <div class="home">
    <div class="home_wrapper grid grid-cols-2">
      <div class="home_dark justify-end flex flex-col bg-aquiladark">
        <ul class="home_menus1 w-9/12 flex justify-evenly">
          <li v-for="(menu, i) in menus" :key="i" class="home_menu text-white">
            {{ menu }}
          </li>
          <li><img class="home_avatar" src="../assets/avatar.png" alt=""></li>
        </ul>
        
      </div>
      <div class="home_light bg-aquilalight flex flex-col">
        <h1 class="home_title text-5xl font-display font-bold opacity-60 text-white " >AQUILA AVEION</h1>
        <div class="home_imgbox flex justify-center items-end  ">
          <img src="../assets/mainimg.png" alt="" class="home_mainimg">
        </div>
        <ul class="home_menus2 w-9/12 flex justify-evenly">
          <li v-for="(menu, i) in menus2" :key="i" class="home_menu text-white">
            {{ menu }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: "Home",

    data() {
      return {
        menus: ["HOME", "ABOUT"],
        menus2: ["GALLERY", "CONTACT"],
      };
    },
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

.home_imgbox {
  position: relative;
  right: 10rem;
  top: 24%;
  height: 20rem;
  width: 20rem;
  background-image: linear-gradient(
    to right,
    #cb2964,
    #c8235e,
    #c41e58,
    #c11753,
    #bd0f4d
  );
}
.home_menus1 {
  position: relative;
  bottom: 2rem;
  left: 22rem;
}
.home_menus2 {
  position: relative;
  top: 19.3rem;
}
.home_avatar{
  object-fit: contain;
  position: relative;
  bottom: 2rem;
  
}

.home_mainimg{
  height: 80%;
  width: 80%;
  object-fit: cover;
  
}
</style>