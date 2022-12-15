<template>
  <div class="container">
    <Header />
    <main id="Accueil" class="container-fluid">
      <div class="container-fluid bloc-1">
        <div class="bloc-01 col-lg-7 col-10">
          <h1 class="text-center fw-b">la plateforme professionnelle <br> et participative <br>des jeunes talents.</h1>
        </div>
        <div class="bloc-02 col-lg-7 col-10">
          <ul class="d-flex mt-1">
            <li class="A-link h5 me-">Talent acquisition</li>
            <li class="A-link link h5">Crowdsourcing</li>
            <li class="A-link link h5">Social network</li>
          </ul>
          <div class="input-lst d-flex justify-content-center">
            <input type="radio" name="radio" id="" checked>
            <input type="radio" name="radio" id="">
            <input type="radio" name="radio" id="">
            <input type="radio" name="radio" id="">
            <input type="radio" name="radio" id="">
            <input type="radio" name="radio" id="">
            <input type="radio" name="radio" id="">
            <input type="radio" name="radio" id="">
          </div>
          <div class="d-flex justify-content-center btn-choose mt-3">
            <button class="btn btn-bg-b-1"><a href="" class="">Je suis une entreprise</a></button>
            <button class="btn btn-bg-b-2"><a href="" class="">Je suis un jeune talent</a></button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import Header from '../components/Header.vue'
export default{
  components: {
    Header,
  }
}
</script>

<style>
body{
    background: url("../assets/Pôle/IMG-20221213-WA0003.jpg") no-repeat center center;
    background-size: cover;
    width: 100%;
    height: 100vh;
}
</style>
<style>
/* btn-choose */
.btn-choose button a{
  text-decoration: none;
  font-weight: bolder
}
.btn-choose button{
  padding: 5px 30px;
  margin: 0 5px
}
.btn-bg-b-1 a{
  color: white !important;
}
.btn-bg-b-2 a{
  color: rgb(23, 101, 125) !important;
}
.btn-bg-b-1{
  background: rgb(23, 101, 125) !important;
}
.btn-bg-b-2{
  border: 2px solid rgb(23, 101, 125) !important;
  background: transparent!important
}
.bloc-1{
  margin-left: -9% !important;
  margin-top: 8%
}
.input-lst input[type=radio]{
  margin: 0 10px
}
.A-link{
  padding: 2px 8px !important;
  list-style: none;
  margin: 2px ;
  height: 22px;
  color: #e2b915;
  font-weight: 540 !important;
}
.link{
  border-left: 3px solid #e2b915;
  padding: 2px 8px !important;
}
.fw-b{
  font-weight: 600;
  color: rgb(23, 101, 125);
}
#Accueil{
  font-family: "century Gothic", sans-serif;
  font-weight: lighter !important
}
</style>