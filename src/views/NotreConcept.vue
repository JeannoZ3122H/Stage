<template>
  <div class="container-fluid">
    <Header/>
    <div class="" id="NotreConcept">
        <div class="bloc-nc container-fuid row">
          <div class="blob-nc-1 col-lg-11 col-12 d-flex justify-content-center">
            <center>
            <div class="contenu container">
              <div class="dec-img">
                <img src="../assets/Pôle/Ia/ia-0.png" alt="Logos-Template-Html" class="w-100">
              </div>
              <div class="fb mt-3 d-flex justify-content-center flex-wrap">
                <div class="">
                  <h1 class="h0 text-white text-center">Notre concept</h1>
                  <div class="bordure my-5"></div>
                </div>
              </div>
            </div>
          </center>
          </div>
          <div class="blob-nc-2 col-lg-1 d-flex justify-content-end align-items-center col-12">
            <ul>
              <li><button class="cercle-slide active"></button></li>
              <li><button class="cercle-slide no-active"></button></li>
            </ul>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header_Nc.vue'
export default {
  components:{
    Header,
  }
}
</script>

<style>
body{
    background: url("../assets/Pôle/concept/IMG-20221215-WA0011.jpg") no-repeat center center ;
    background-size: cover;
    width: 100%;
    height: 100vh;
}
.contenu{
  margin-top: 38% !important ;
  margin-left: 13% !important;
}
.blob-nc-2 ul li{
  list-style: none
}
.dec-img{
  width: 110px !important;
  height: 110px !important;
}
.bordure{
  width: 60px;
  height: 5px;
  background: white
}
@media screen and (max-width: 992px){
  .blob-nc-2 ul{
    display: flex !important;
    position: absolute;
    bottom: 5px;
    right: 40%;
  }
}
.fb{
  font-family: "Berlin Sans FB",sans-serif
}
@media screen and (min-width: 992px){
  .blob-nc-2{
    height: 75vh;
  }
  .blob-nc-2 ul{
    display: block !important
  }
}
.cercle-slide{
  border: none;
  border-radius: 50%;
}
button.active{
  width: 5px;
  height: 12.5px;
  background: white;
}
button.no-active{
  padding: 2px;
  margin-top: -8px;
  margin-left: 3.7px ;
  background: rgba(255, 255, 255, 0.411);
}
#NotreConcept{
  font-family: "century Gothic", sans-serif;
  font-weight: lighter !important
}

.teen{
  font-family: "teen", sans-serif;
}
</style>