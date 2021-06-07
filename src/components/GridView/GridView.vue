<template>
  <section>
    <h2 v-text="data.title" />
    <div class="row section-row">
            <div v-for="pix in data.pixData" :key="pix.url" class="content-wrapper col-6 col-md-4">
        <div class="item">
          <div class="pix-wrapper" @click="toggleOverlay(pix)">
            <img :src=pix.src alt="Endorsement Request - General Liability"/>
            <div  class="download-overlay"  v-bind:style='{"display" : (pix.showDownload==="true"? "flex!important" : "none!important" )}'>
              <a href="#"><i class="fas fa-search-plus"></i> Preview</a>
              <a href="#"><i class="fas fa-download"></i> Direct Download</a>
            </div>
          </div>
          <span>{{ pix.text }}</span>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
    export default {
      name: 'GridView',
      props: [ 'data', 'viewAs'],
      data(){
          return {}
      },
      beforeCreate() {},
      methods:{
          toggleOverlay(pix){
            if( pix.showDownload === "false"){
              pix.showDownload = "true";
            } else {
              pix.showDownload = "false";
            }
          }
      }
    };
</script>
<style scoped>
.hide{
  display: none;
}
.show{
  display: flex;
}

/* grid */
section.content-section{
  padding-top:10px;
  padding-bottom:10px
}
.section-row{
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top:16px;
}
.content-wrapper{
  max-width: 159px;
}
.item{
  display: flex;
  flex-direction: column;
  color:#002e6c;
  cursor: pointer;
  position: relative;
  width: 150px;
}
.item:hover .download-overlay{
  display: flex!important;
}
.pix-wrapper{
  position: relative;
}
.download-overlay{
  text-align: center;
  display: none!important;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top:0;
  right:0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,46,108, 0.5);
}
.download-overlay a{
  display: block;
  color:#fff;
  background-color: #1899d6;
  font-size: 10px;
  width: 80%;
  margin:5px auto;
  padding:8px 0;
  border-radius: 50px;
}
/* end grid */
</style>
