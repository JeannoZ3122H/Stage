<script>
    export default{
        name: 'header'
    }
</script>
<template>
  <header class="navbar navbar-expand-lg col-12">
        <div class="container-fluid">
            <div class="navbar-brand">
                <div class="d-flex titre">
                    <img src="../assets/Pôle/Logo.png" alt="Logos-Template-Html" class="img-fluid w-50">
                    <h1 class="h2 align-self-center teen mt-1">eeyaa</h1>
                </div>
            </div>
            <button class="navbar-toggler ">
                <span class="navbar-toggler-icon" data-bs-toggle="collapse" data-bs-target="#Col1"></span>
            </button>
            <nav class="collapse navbar-collapse" id="Col1">
                <div class="d-flex justify-content-center">
                    <ul class="navbar-nav">
                        <router-link to="/Concept" class="r-1"><li class="nav-item mx-2 nav-link h-link text-white fw-bold">Notre concept</li></router-link>
                        <router-link to="/Nos_Services" class="r-1"><li class="nav-item mx-2"><a href="" class="nav-link h-link text-white fw-bold">Nos services</a></li></router-link>
                        <router-link to="/Pourquoi" class="r-1"><li class="nav-item mx-2"><a href="" class="nav-link h-link text-white fw-bold">Pourquoi nous rejoindre</a></li></router-link>
                    </ul>
                    <div class="ms-5 float-end">
                        <button class="ms-5 btn btn-outline-white btn-1 text-white fw-bold">Se connecter</button>
                        <div class="container-PopUp px-3 d-none">
                            <div class="img-logo d-flex justify-content-center pt-5"><img src="../assets/Pôle/Logo.png" alt="Logos-Template-Html" class="w-img"></div>
                            <div class="custom-c d-flex justify-content-center mt-5">
                                <span for="inp1" class="text-white fw-bold mx-2">Talent</span>
                                <input type="checkbox" name="" id="inp1" class="custom-control-input">
                                <label for="inp1" class="switch"></label>
                                <span for="inp1" class="text-white fw-bold mx-2">client</span>
                            </div>
                            <div class="container d-flex justify-content-center flex-wrap">
                                <form action="">
                                    <input type="email" name="" id="" class="form-control inpu-bd" placeholder="Email">
                                    <input type="password" name="" id="" class="form-control inpu-bd mt-4 mb-2" placeholder="Mot de passe">
                                    <div class="choose text-center mt-1">
                                        <input type="checkbox" name="" id="coche" class="mt-1">
                                        <span class="ms-1 label-h text-white">Se souvenir de moi</span>
                                    </div>
                                    <a href="#" class="Mdp text-white ms-5">Mot de passe oublier ?</a>
                                    <router-link to="/Profile">
                                        <button type="submit" class="btn btn-outline-w form-control fw-bold mt-4">Se connecter</button>
                                    </router-link>
                                </form>
                            </div>
                        </div>
                    </div> 
                </div>  
            </nav>
        </div>
  </header>
</template>
<style scoped>
/* Teen */
.teen{
  font-family: "teen", sans-serif;
}
/*  btn-submit */
.btn-outline-w{
    border: 2px solid rgba(255, 255, 255, 0.883) !important;
    color: rgba(23, 101, 125, 0.653) !important;
    background: white !important;

}
/*  Mdp */
.Mdp{
    letter-spacing: 1px;
    font-size: 14px;
    text-decoration: none;
}
/*  inpu-border */
.inpu-bd{
    border: 2px solid rgba(255, 255, 255, 0.816) !important;
    background: transparent !important;
}
.inpu-bd::placeholder{
    color: white !important;
    text-align: center
}
/* label-h */
.choose input[type=checkbox]{
    margin-top: 5px !important;
    border: 2px solid rgba(255, 255, 255, 0.816) !important;
    background: transparent !important;
}
.label-h{
    font-size: 13px;
    margin-top: -15px !important;
    letter-spacing: 1px;
    font-weight: lighter !important;
}
.r-1{
    text-decoration: none
}
/* w-img */
.w-img{
    width: 50px;
    height: 41px;
}
/* Custom */
.custom-c{
    height: 80px
}
/* Switch */
#inp1{
    width: 0;
    height: 0; 
    visibility: none;
}
.switch{
    background:transparent;
    border: 2px solid white;
    text-align: -9999px;
    width: 55px;
    height: 25px;
    display: block;
    border-radius: 100px;
    position: relative;
    cursor: pointer;
}
.switch::after{
    content: '';
    position: absolute;
    top: 2px;
    left: 3px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: white;
    transition: .4s;
}
#inp1:checked + .switch{
    background: rgb(25, 25, 128)
}
#inp1:checked + .switch::after{
    left: calc(100% - 2px);
    transform: translateX(-100%)
}
/*popUp*/
.container-PopUp{
    margin-top: 18px;
    margin-left: -30px;
    position: absolute;
    width: 300px;
    height: 470px;
    background: rgba(23, 101, 125, 0.653);
    backdrop-filter: blur(6px);
    border-radius: 5px;
    transition: 0.4s;
    box-shadow: 0 0 10px rgba(128, 128, 128, 0.764);
}
.container-PopUp-trs{
    transition: 0.4s
}
.btn-outline-white{
    border: 2px solid white !important;
}
.h-link,
.btn-outline-white{
    font-size: 14px !important;
}
.btn-outline-white{
    margin-top: -4px;
}
.ps-nav{
    margin-left: 128px !important;
}
#Col1{
    margin-left: 22% !important;
}
@media screen and (max-width: 992px){
    nav ul{
        display: flex !important;
    }
}

</style>