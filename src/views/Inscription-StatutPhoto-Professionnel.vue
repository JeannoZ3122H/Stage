<template>
  <div class="container-fluid">
    <div class="container d-flex justify-content-center flex-wrap century pt-4">
        <h1 class="gb-title h3 text-center text-white">Créer un nouveau compte</h1>
        <div class="col-lg-10 col-11 bg-white rond mt-4 pb-3">
            <div class="d-flex ul-link justify-content-between">
                <li class="pr-Link lien-1">
                    <span class="badge rounded-circle">1</span>
                    <span class="bdg-t align-self-center mt-5 ms-2">Profile</span>
                </li>
                <li class="pr-Link lien-2">
                    <span class="badge rounded-circle">2</span>
                    <span class="bdg-t align-self-center ms-2">Statut et photo</span>
                </li>
                <li class="pr-Link lien-3 active">
                    <span class="badge rounded-circle">3</span>
                    <span class="bdg-t align-self-center ms-2">Infos confidentielles</span>
                </li>
            </div>
            <div class="profile-2 d-flex justify-content-center flex-wrap">
                <div class="Head text-center mt-3">
                    <img src="../assets/Pôle/Logo.png" class="mb-2" alt="">
                    <p>Vous venez de franchir une étape, encore un petit effort<br>sur le choix de votre statut</p>
                </div>
                <form action="" class="row col-11 d-flex justify-content-center">
                    <div class="form-div-1 col-md-11 col-12">
                        <h1 class="text-center niveau h6 disabled">Niveau<sup>*</sup></h1>
                        <div class="col-12 d-flex justify-content-center flex-wrap">
                            <div class="">
                                <router-link to="/Statuts" class="r-link">
                                    <input type="radio" class="" name="name" id="name">
                                    <label for="name" class="text-center ms-2 me-4">Etudiant-Jeune diplômé</label>
                                </router-link>
                                <router-link to="/Professionel" class="r-link link-active">
                                    <input type="radio" class=" me-2 ms-4" name="name" id="name" checked>
                                    <label for="name" class="text-center">Professionnel</label>
                                </router-link>
                            </div>
                            <div class="col-12 row">
                                <div class="col-lg-6 col-12">
                                    <label for="Date">Profession<sup class="">*</sup></label>
                                    <input type="text" class="form-control" name="Date" id="Date" placeholder="Entrez votre date de naissance">
                                </div> 
                                <div class="col-lg-6 col-12">
                                    <label for="Password">Lieu de travail<sup class="">*</sup></label>
                                    <input type="text" class="form-control" name="Password" id="Password" placeholder="Créer un mot de passe">
                                </div>
                                <div class="col-lg-12 col-12">
                                    <label for="Password">Competences<sup class="">*</sup></label>
                                    <input type="text" class="form-control" name="Password" id="Password" placeholder="Créer un mot de passe">
                                </div>
                            </div>
                        </div>
                        <div class="form-div-2 mt-2 d-flex justify-content-center col-12">
                            <div class="form-div-2 col-md-5 col-12">
                                <h1 class="text-center Photo h6 disabled">Photo<sup class="">*</sup></h1>
                                <input type="image" class="form-control text-center" src="../assets/logo.svg" value="Ajouter une image">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="page col-lg-10 col-11 mt-4">
            <button class="float-start btn-start d-flex">
                <section class="back-btn me-1 mt-2"></section>Retour à la connexion
            </button>
            <router-link to="/Confidentialité" class="r-link">
                <button class="float-end btn-end d-flex">
                    Etape suivante<section class="next-btn ms-1 mt-2"></section>
                </button>
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style>
body{
    background: url("../assets/Pôle/IMG-20221213-WA0005.jpg") no-repeat center center;
    background-size: 100%;
    width: 100%;
    height: 100vh;
}
</style>

<style>
/* btn-next */
.btn-start{
    background: none;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    color: var(--color)
}
.link-active label{
    color: var(--color) !important;
    font-weight: 800 !important
}
.niveau{
    margin-bottom: -10px !important; 
    margin-top: -10px 
}
.Photo{
    margin-top: 0px 
}
.back-btn{
    width: 10px;
    height: 10px;
    border-top: 2px solid var(--color);
    border-left: 2px solid var(--color);
    transform: rotate(-45deg);
}
.btn-end{
    background: var(--color);
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    color: white
}
.next-btn{
    width: 10px;
    height: 10px;
    border-top: 2px solid white;
    border-right: 2px solid white;
    transform: rotate(45deg);
}
/* form */
.form-div-1 input:focus,
.form-div-2 input:focus{
    border: 2px solid var(--color);
    box-shadow: none !important
}
.form-div-1 label,
.form-div-2 label{
    margin: 10px 0 2px 0;
    color: gray;
}
.bloc-profile{
    margin: 0 !important
}
.rond{
    border-radius: 20.5px;
    box-shadow: 0 0 15px gray !important
}
.century{
    font-family: var(--century);
}
.lien-1{
    height: 100%;
    border-top-right-radius: 30px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 30px;
    padding-left: 12%;
}
.lien-2{
    height: 100%;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    padding-left: 8%;
}
.lien-3{
    height: 100%;
    border-top-right-radius: 20px;
    padding-left: 3%;
}
.ul-link{
    background: rgba(196, 222, 222, 0.5) !important;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
}
.badge{
    background: white !important;
    color: gray!important;
    font-weight: bolder !important;
}
/* bloc profile */
.div-container{
    padding:0 !important;
    border: 2px solid gray;
    border-radius: 20.5px;
}
.pr-Link{
    list-style: none;
    width: 100%;
    height: 55px;
    justify-content: center;
    align-self: center;
    padding-top: 15px;
    cursor: pointer;
    color: gray
}
li.active{
    background: linear-gradient(to left, #048b9a, #318ce7);
    color: white;
}
.bdg-t{
    font-weight: bolder;
    bottom: -5px;
    letter-spacing: .4px
}

</style>