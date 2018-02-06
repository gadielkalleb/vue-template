<template>
     
    <!-- MENU E BANNER -->
    <div class="parallax-container">
        <!-- Dropdown Structure -->
        <ul id="dropdown1" class="dropdown-content">
            <li>
                <a href="#!">one</a>
            </li>
            <li>
                <a href="#!">two</a>
            </li>
            <li class="divider"></li>
            <li>
                <a href="#!">three</a>
            </li>
        </ul>
        <nav id="menu">
            <div class="nav-wrapper">
                <div class="container">
                    <a href="#!" id="logo" class="brand-logo">Logo</a>
                    <a href="#" data-activates="mobile-demo" class="button-collapse"></a>
                    <ul class="right hide-on-med-and-down">
                        <li>
                            <a href="sass.html">Sass</a>
                        </li>
                        <li>
                            <a href="badges.html">Components</a>
                        </li>
                        <li>
                            <a href="collapsible.html">Javascript</a>
                        </li>
                        <!-- Dropdown Trigger -->
                        <li>
                            <a class="dropdown-button" href="#!" data-activates="dropdown1">Dropdown
                                <i class="material-icons right">arrow_drop_down</i>
                            </a>
                        </li>
                        <!-- <li>
                            <a class="trocaTema" href="#">
                                <i class="material-icons">brightness_medium</i>
                            </a>
                        </li> -->
                    </ul>
                </div>
            </div>
        </nav>

        <div class="parallax">
            <img class="img-parallax" src="/src/adicional/img/banner1.jpg">
        </div>
        <div id="box-titulo-legenda" class="row container">
            <div class="col s12 m12 white-text center-align">
                <br>
                <br>
                <br>
                <h1 class="titulo">Lorem Ipson</h1>
                <h4 class="legenda container">Lorem ipsom gasdgs GSDGSGd ojoijoijij</h4>
            </div>
        </div>
    </div>
    <!--/ MENU E BANNER -->
</template>

<script>
export default {

};
</script>