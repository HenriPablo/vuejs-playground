<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-xl nav-wrapper">
      <div class="navbar-brand logo-wrapper">
        <a href="#" title="BunnanTek - Home">
          <img src="art/logo.jpg" alt="BunnanTek logo"/>
        </a>
        <span>Agent<br/>Resources</span>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" title="Resource Home" v-bind:class="markCurrentLink('/')" aria-current="page">Resource Home</router-link>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
               data-bs-toggle="dropdown" aria-expanded="false" title="Policy Servicing &amp; Management Docs">
              Policy Servicing &amp; Management Docs
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" title="Products &amp; Programs">Products &amp; Programs</a>
          </li>
          <li class="nav-item">
            <router-link to="/contact_us" v-bind:class="markCurrentLink('/contact_us')" title="Contact Us">Contact Us</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        name: 'MainNavigation',
        data(){
          return{
            class: "nav-link active current"
          }
        },
        mounted() {
          console.log("ROUTE: ", this.$route);
          },
        methods : {
          markCurrentLink( to ){
            let navClass = "nav-link";
            if( to === this.$route.path ){
              navClass = navClass + " active current"
            }
            return navClass;
          }
        }
    };
</script>
