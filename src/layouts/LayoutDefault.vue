<template>
  <div class="LayoutDefault">
    <MainHeader/>
    <MainNavigation/>
      <!-- Pages will render in the slot -->
    <div>
      <slot/>
    </div>

    <Footer />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader/MainHeader";
import MainNavigation from "@/components/MainNavigation/MainNavigation";
import Footer from "@/components/Footer/Footer";
export default {
  name: `LayoutDefault`,
  components: {MainHeader, MainNavigation, Footer},
  data() {
    return {};
  },
  created() {},
};
</script>

<style>
  h3 {
    margin: 40px 0 0;
  }

  header{
    display: none;
    background-color: #002e6c;
    color:#fff;
    padding-top:14px;
    padding-bottom:12px
  }

  .header-wrapper span,
  .navbar-brand span{
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    font-family: Cabin, sans-serif;
    line-height: 18px;
    display: inline-block;
    padding-left: 16px;
    top:12px;
    position: relative;
  }
  nav{
    background-color: #1899d6;
    height: auto;
    padding-top:0;
    padding-bottom: 0;
  }

  nav a{
    color: #fff!important;
    text-transform: uppercase;
    font-size: 14px;
    display: inline-block;
    font-family: Cabin, sans-serif;
    line-height: 44px;
    position: relative;
    margin:0 11px
  }
  nav a.dropdown-item{
    color:#002e6c!important;
    margin: 0;
  }
  nav a:hover{
    color:#1899d6!important;
  }

  nav a.current{
    font-weight: bold;
  }
  nav a.current:after{
    content: "";
    display: inline-block;
    width: 100%;
    height:1px;
    background-color: #1899d6;
    position: absolute;
    left:0;
    right: 0;
    bottom: 6px;
    line-height: 0;
    font-size: 0;
  }

  /** MEDIA QUERIES **/
  @media  (min-width: 991px ) {
    .logo-wrapper{ display: none}
    header{display: block}
    nav{
      max-height: 44px;
      padding-left:28px;
    }

    nav a:hover{
      color:#002e6c!important;
    }

    nav a.current:after{
      height:4px;
      background-color: #fff;
    }

    .bg-dark {
      background-color: #1899d6 !important;
    }

  }

  @media(max-width: 794px){
    .section-row{
      justify-content: space-evenly;
      flex-wrap: wrap;
    }
  }

  @media(max-width:387px){
    .navbar-brand.logo-wrapper a img{
      max-width: 130px;
      height: auto;
    }
    .header-wrapper span, .navbar-brand span{
      padding-left:0;
      font-size: 11px;
      line-height: 12px;
      top:8px
    }
  }

</style>