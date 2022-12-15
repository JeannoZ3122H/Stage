<template>
  <header class="navbar navbar-expand-lg col-12">
        <div class="container-fluid d-flex justify-content-between">
            <div class="navbar-brand">
                <div class="d-flex titre">
                    <img src="../assets/Pôle/Logo.png" alt="Logos-Template-Html" class="w-50">
                    <h1 class="h2 align-self-center text-white ms-1 teen mt-1">eeyaa</h1>
                </div>
            </div>
            <ul class="navbar-nav ul-head">
                <router-link to="/" class="r-1">
                    <li class="nav-item nav-link h-link h-0 text-white fw-bold">
                        <img src="../assets/Pôle/Ia/ia-0.png" alt="Logos-Template-Html" class="w-100 img-fluid">
                    </li>
                </router-link>
                <router-link to="/" class="r-1">
                    <li class="nav-item nav-link h-link text-white fw-bold">
                        <img src="../assets/Pôle/Ia/equipement.png" alt="Logos-Template-Html" class="w-100">
                    </li>
                </router-link>
                <router-link to="/" class="r-1">
                    <li class="nav-item nav-link h-link text-white fw-bold">
                        <img src="../assets/Pôle/Ia/question.png" alt="Logos-Template-Html" class="w-100">
                    </li>
                </router-link>
            </ul>                                                       
        </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.r-1{
    margin: 0 -5px !important
}
.h-link{
    width: 45px;
    height: 45px;
    margin: -8px 10px 0 10px;
}
@media screen and (max-width: 992px){
    .h-link{
        width: 35px;
        height: 35px;
        margin-top: 10px
    }
    
}
.h-0{
    border: 1.5px solid white;
    border-radius: 8px;
    box-shadow: 0 0 5px gray 
}
.h-link img{
    color: white
}
</style>