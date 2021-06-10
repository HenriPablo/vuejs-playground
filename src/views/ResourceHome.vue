<template>
  <LayoutDefault>
      <div class="container-xl">
        <h1>Resource Home</h1>
        <div class="row">
          <form class="col d-flex search-form" action="#">
            <input class="form-control search-docs" type="search" placeholder="Search Resource Home"/>
            <input class="btn btn-primary" type="submit" value="Search">
          </form>
          <div class="col view-style-wrapper">
            <div class="trigger-view grid current-view">
              <span class="trigger-view-label"> <i class="fas fa-th"></i> Grid View</span>
            </div>
            <div class="trigger-view list">
              <span class="trigger-view-label"><i class="fas fa-list"></i> List</span>
            </div>
          </div>
        </div>
        <div class="filter-wrapper">
          <strong class="filter-wrapper-label">Filter Available Documents</strong>
          <form class="d-flex filter-form" action="#">
            <div class="row filters">
              <div class="col filter-wrapper dropdown">
                <select class="form-select form-select-sm form-select-filter select-down-arrow"><option>Line of Business (0)</option></select>
              </div>
              <div class="col filter-wrapper dropdown">
                <select class="form-select form-select-sm form-select-filter select-down-arrow"><option>Company (0)</option></select>
              </div>
              <div class="col filter-wrapper dropdown">
                <select class="form-select form-select-sm form-select-filter select-down-arrow"><option>States (0)</option></select>
              </div>
              <div class="col filter-wrapper dropdown">
                <select class="form-select form-select-sm form-select-filter select-down-arrow"><option>Type of Document (0)</option></select>
              </div>
              <div class="col filter-wrapper reset-btn"><input class="btn btn-primary" type="button" value="Reset Filters"></div>
            </div>
          </form>
        </div>
        <!-- Main page content in grid view form -->
        <GridView :data=resources.popularResources :viewAs=viewAs />
        <GridView :data=resources.newAndUpdatedResources :viewAs=viewAs />
      </div>
  </LayoutDefault>
</template>

<script>
// @ is an alias to /src
import LayoutDefault from "@/layouts/LayoutDefault";
import GridView from "@/components/GridView/GridView.vue";
import popularResources from "@/api/popularResources";
import newAndUpdateResources from "@/api/newAndUpdateResources";

export default {
  name: 'ResourceHome',
  components: {
    LayoutDefault, GridView
  },
  data() {
    return {
      viewAs: "grid", /* view as GRID by default */
      resources:
          {
            "popularResources" : {},
            "newAndUpdatedResources" : {}
          }
    }
  },
  mounted() {
    this.getData();
    },
  methods : {
    async getData(){
      const gridData = await Promise.allSettled([
          popularResources.getPopularResources(),
          newAndUpdateResources.getNewAndUpdatedResources()
          ]);

    gridData.map( ( item ) => {
      if (item.status === "fulfilled"){
        if (item.value.title === "Popular Resources") {
          item.value.pixData = this.augmentData(item.value.pixData);
          this.resources.popularResources = item.value;
        } else if (item.value.title === "New & Updated Resources") {
          item.value.pixData = this.augmentData(item.value.pixData);
          this.resources.newAndUpdatedResources = item.value;
        }
      } else {
        console.log("Handle unfulfilled promise");
      }
    });
    },

    augmentData( data ){
      return data.map( ( pix ) => {
        pix.showDownload = "false";
        return pix;
      });
    }
  }
}
</script>
<style >
/* view triggers */
.view-style-wrapper{
  color: #002e6c;
  text-transform: uppercase;
  display: flex;
  line-height: 30px;
}
.view-style-wrapper .trigger-view{
  display: flex;
  padding-right: 10px;
}
.trigger-view .material-icons{
  line-height: 30px;
}
.trigger-view .trigger-view-label{
  line-height: 30px;
  padding-left:5px
}
.trigger-view:hover,
.view-style-wrapper div.current-view{
  color: #1899d6;
  cursor: pointer;
}
div.current-view:hover{
  cursor: auto;
}
/* end view triggers */

/* filters */
.filter-wrapper{
  padding-top:20px
}
.filter-wrapper-label{
  text-transform: uppercase;
  color: #999;
  font-size: 14px;
}

.row.filters{}
.row.filters .filter-wrapper.dropdown,
.row.filters .filter-wrapper.reset-btn
{
  padding-top:10px
}
/* end filters */

/* FROM OVERRIDES */
.search-form{
  max-width: 322px;
}
.search-docs{
  border-right: none;
}
.form-control,
.form-select,
input, select{
  height: 30px;
  border-radius: 0;
  border-color: #d9d9d9;
}
.btn,
button{
  border: none;
  border-radius: 0;
  text-transform: uppercase;
  font-weight: bold;
  background-color: #1899d6;
}
.btn:hover,
button:hover{
  background-color: #002e6c;
}
.filter-form{
  display: flex;
}

.select-down-arrow {
  background-image:
      linear-gradient(45deg, transparent 50%, #002e6c 60%), /* change color to red when debugging */
      linear-gradient(135deg, #002e6c 40%, transparent 50%) !important;
  background-position:
      calc(100% - 16px) 10px,/* left 1/2 triangle */
      calc(100% - 6px) 10px,/* right 1/2 triangle */
      100% 0;
  background-size:
      10px 10px,
      10px 10px;
  background-repeat: no-repeat;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.form-select-filter{
  width: 200px;
  max-width: 200px;
  margin-right:5px;
  color:#666;
  font-weight: bold;
}
/* end form overrides */

/** MEDIA QUERIES **/
@media  (min-width: 991px ) {
  .row.filters .filter-wrapper.dropdown {
    max-width: 210px
  }
}


@media(max-width:891px) {
  .row.filters {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .row.filters .filter-wrapper {
    flex-basis: 25%
  }

  .row.filters .filter-wrapper .form-select {
    width: 100%;
  }

  .row.filters .filter-wrapper.reset-btn {
    width: 100%;
    max-width: 100%;
  }
  .row.filters .filter-wrapper.reset-btn .btn{
    width: 100%
  }

}

@media(max-width: 668px){
  .row.filters .filter-wrapper{
    justify-items: center;
    flex-basis: 100%
  }

  .row.filters .filter-wrapper .form-select{
    margin-left:auto;
    margin-right: auto;
    width: 100%;
    max-width: 100%;
  }

  .row.filters .filter-wrapper.reset-btn{
    flex-basis: 100%

  }
  .row.filters .filter-wrapper.reset-btn .btn{
    width: 100%
  }
}

</style>
