<template>
  <div class="nav-wrapper">
    <nav class="pb-1">
    <div class="d-flex justify-content-between align-items-center">
      <div class="logo cursor-pointer" @click="navigate('/')">
        <img :src="require('@/assets/images/logo.png')" alt="">
        <h5 class="mt-2">itGateway Cloud</h5>
      </div>

      <!-- mobile menu button  -->
      <div class="mobile-menu-btn align-items-center gap-2">
        <div class="cursor-pointer" @click="isMobileSearch = !isMobileSearch">
          <span class="material-symbols-outlined fs-1" :style="{'color': isMobileSearch ? '#EC6316' : ''}">
            search
            </span>
        </div>
        <div>
          <!-- dark icon  -->
          <span class="m-0 p-0 menu-icon material-symbols-outlined cursor-pointer prevent-select light-icon theme-icon" @click="changeTheme('dark')" :class="{'d-none': currentTheme == 'dark'}" >
            light_mode
            <span class="light-icon-info menu-icon-info">change to dark</span>
          </span>
          <span class="m-0 p-0 menu-icon material-symbols-outlined cursor-pointer prevent-select dark-icon theme-icon" @click="changeTheme('light')" :class="{'d-none': currentTheme == 'light'}" >
            dark_mode
            <span class="dark-icon-info menu-icon-info">change to light</span>
          </span>
        </div>
        <div @click="drawer = !drawer" class="cursor-pointer">
          <span class="material-symbols-outlined fs-1">
            menu_open
          </span>
        </div>
      </div>

      <div class="top-menu ">
        <span  class=" search-input-wrapper d-inline-flex" :class="{searching: isSearch}">
            <input type="text" class="search-input" placeholder="search ....." :class="{'searching' : isSearch}">
            <span class="material-symbols-outlined icon cursor-pointer search-bar-icon prevent-select" :class="{'searching' : isSearch}" ref="searchIcon"  @click="handleSearch">
              search
            </span>
        </span>
        <router-link to="" class="menu d-flex align-items-center position-relative">
          <span class="span-menu">{{ $t('help') }}</span>
          <i class="mdi mdi-menu-down"></i>
        </router-link>
        <router-link to="" class="menu d-flex align-items-center position-relative language-wrapper">
          <span v-if="language == 'EN'" class="span-menu">English</span>
          <span v-else class="span-menu">မြန်မာ</span>
          <i class="mdi mdi-menu-down"></i>
          <div class="language">
            <button @click="changeLanguage('EN')">English</button>
            <button @click="changeLanguage('MM')">Myanmar</button>
          </div>
        </router-link>
        <router-link to="" class="menu d-flex align-items-center position-relative">
          <span class="span-menu">{{ $t('my_account') }}</span>
          <i class="mdi mdi-menu-down"></i>
        </router-link>
        <router-link to="" class="menu">{{ $t('signin') }}</router-link>
        <div class="btn-wrapper">
          <a href="#" class=" btn btn-sm menu-btn primary-btn">{{ $t('create_acc') }}</a>
        </div>
        
        <!-- dark icon  -->
        <span class="menu-icon material-symbols-outlined cursor-pointer prevent-select light-icon theme-icon" @click="changeTheme('dark')" :class="{'d-none': currentTheme == 'dark'}" >
          light_mode
          <span class="light-icon-info menu-icon-info">change to dark</span>
        </span>
        <span class="menu-icon material-symbols-outlined cursor-pointer prevent-select dark-icon theme-icon" @click="changeTheme('light')" :class="{'d-none': currentTheme == 'light'}" >
          dark_mode
          <span class="dark-icon-info menu-icon-info">change to light</span>
        </span>
      </div>
    </div>
    </nav>

    <nav class=" main-nav pt-0 position-relative d-flex align-items-center" :class="{active: isScroll}">
      <router-link to="#" class="menu" @mouseenter="menuHover(true)" @mouseleave="menuHover(false)">
        <span class="span-menu">{{ $t('explore') }}</span>
        <i class="mdi mdi-menu-down"></i>
        <Explore />
      </router-link>
      <router-link to="#" class="menu" @mouseenter="menuHover(true)" @mouseleave="menuHover(false)">
        <span class="span-menu">{{ $t('product') }}</span>
        <i class="mdi mdi-menu-down"></i>
        <Product :dropdownContent=dropdownContent />
      </router-link>
      <router-link to="#" class="menu" @mouseenter="menuHover(true)" @mouseleave="menuHover(false)">
        <span class="span-">{{ $t('solutions') }}</span>
        <i class="mdi mdi-menu-down"></i>
      </router-link>
      <router-link to="#" class="menu" @mouseenter="menuHover(true)" @mouseleave="menuHover(false)">
        <span class="span-">{{ $t('pricing') }}</span>
        <i class="mdi mdi-menu-down"></i>
        <Pricing />
      </router-link>
      <router-link to="#" class="menu" @mouseenter="menuHover(true)" @mouseleave="menuHover(false)">{{ $t('market_place') }}</router-link>
      <router-link to="#" class="menu" @mouseenter="menuHover(true)" @mouseleave="menuHover(false)">{{ $t('event') }}</router-link>
      <router-link to="#" class="menu" @mouseenter="menuHover(true)" @mouseleave="menuHover(false)">
        <span class="span-">{{ $t('company') }}</span>
        <i class="mdi mdi-menu-down"></i>
      </router-link>
    </nav>

    <!-- Sidebar (Drawer) for mobile -->
    <v-navigation-drawer
      app
      v-model="drawer"
      style="background: #242142; color: #ededed;"
      id="drawer"
      temporary
    >
      <MobileDrawer :language="language" @switchLanguage="handleSwitchLanguage" @changeRoute="handleChangeRoute" />
    </v-navigation-drawer>

    <!-- Search Ui for mobile  -->
    <div v-if="isMobileSearch" class="w-100 h-100 position-fixed border-top" style="background: #242142;">
      <div class="input-group my-2 px-1">
        <input type="text" class="form-control" placeholder="Search Here ..."  aria-describedby="basic-addon2">
        <span class="input-group-text cursor-pointer" style="background: rgba(173, 173, 173, 0.144);" id="basic-addon2" @click="isMobileSearch = !isMobileSearch">
          <span class="material-symbols-outlined fs-1 text-white">
            close
            </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Pricing from './navDropdown/Pricing'
import Product from './navDropdown/Product'
import Explore from './navDropdown/Explore'
import MobileDrawer from './MobileDrawer'
import "@/assets/css/nav.css";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  components: {
    Pricing,
    Product,
    Explore,
    MobileDrawer
  },
  setup(props, {emit}) {
    const currentTheme = ref('dark');
    const isSearch = ref(false);
    const drawer = ref(false);
    const router = useRouter();
    const dropdownContent = ref('compute');
    const store = useStore();
    const language = ref('EN');
    const isScroll = ref(false);
    const isMobileSearch = ref(false);

    const navigate = (route) => {
      router.push(route);
      drawer.value = false;
    }

    const handleChangeRoute = (route) => {
      router.push(route);
      drawer.value = false;
    }

    const changeTheme = (theme) => { currentTheme.value = theme };
    const menuHover = (value) => emit("menuHoverStatus", value);

    const changeLanguage = (lang) => {
      language.value = lang;
      store.dispatch('getLocale', lang);
    }

    const handleSwitchLanguage = (lang) => {
      language.value = lang;
      store.dispatch('getLocale', lang);
    }

    const handleNavShadow = () => {
      if(window.scrollY > 300) {
        isScroll.value = true;
      } else {
        isScroll.value = false;
      }
    }

    const handleSearch = () => {
      isSearch.value = !isSearch.value;
      const browserWidth = window.innerWidth;
      if(browserWidth < 890 && browserWidth > 768 && isSearch.value) {
        document.querySelector('.logo').classList.add('opacity-0')
      } else {
        setTimeout(() => document.querySelector('.logo').classList.remove('opacity-0'), 500)
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleNavShadow);
    })

      return { currentTheme,changeTheme, isSearch, drawer, navigate,handleChangeRoute, dropdownContent, changeLanguage,handleSwitchLanguage, language, menuHover, isScroll, handleSearch, isMobileSearch}
  }
};
</script>

<style >
</style>
