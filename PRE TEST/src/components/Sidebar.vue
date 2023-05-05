<!-- eslint-disable vue/multi-word-component-names -->
<script>
</script>

<template>
    <div class="container">
        <div class="sidebar">
            <nav class="col-md-3 col-lg-2 d-md-block bg-light sidebar">
                <div class="position-sticky pt-3">
                  <ul class="nav flex-column">
                    <li>
                      <img src="../assets/BNILOGO.png" alt="LOGO" width="175" height="50">
                    </li><br>
                    <li class="nav-item">
                      <RouterLink class="nav-link active" aria-current="page" href="#" :to="'/'"><b style="color: #006699;">&#9865; Home</b></RouterLink>
                    </li>
                    <li class="nav-item">
                      <RouterLink class="nav-link" href="#" :to="'/addUser'"><b style="color: #006699;">&#9865; Add New User</b></RouterLink>
                    </li>
                  </ul>
                </div>
            </nav>    
        </div>
    </div>
</template>