<template>
  <LayoutDefault>
<!--
  re-create as 2 columns using flex box
  <br/>
  https://www.dropbox.com/s/carbjjo3rdeo5lf/Screenshot%202020-08-25%20at%204.31.04%20PM.png?dl=0
-->
    <section>

      <div class="hello">

        <div class="text-block">
          <h1>Reinventing Men's Basics</h1>
          <p>
            We're reinventing men's basics with premium fabrics,
            smart design, and simple shopping.
          </p>

        </div>

      </div>

      <div class="pix">
        <img src="https://images.freeimages.com/images/large-previews/338/sunset-over-lake-2-1377767.jpg" />
      </div>

    </section>

  </LayoutDefault>
</template>
<script>
import LayoutDefault from "@/layouts/LayoutDefault";
export default {
  name : "ContactUs",
  components: {LayoutDefault}
}
</script>

<style scoped>

section{
  border:1px solid #666;
  border-top:5px solid #fff;
  border-bottom:0;
  height:100%;
  padding:10px 0 10px 10px;
  display:flex;
  flex-direction:row;
  justify-content: center;
  color: #666;
}

section .hello{
  margin-right: -5%;
  width:20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1000;
}
section .hello .text-block{
  background: #ccc;
  padding: 40px;
}
section .hello .text-block p:last-of-type{
  margin-bottom: 0;
}

section .pix{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

section .pix img{
  height: auto;
  width: auto;
  max-width: 500px;
}

section h1{
  text-transform: capitalize;
  padding: 0;
  margin:0;
}


</style>