document.write(`
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
    <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
             <a href="index.html" class="navbar-brand p-0">
              <h1 class="m-0">Market Shooter</h1>
             <h6 class="m-0" style = "float: right; margin-right: 100px;">Consistency Matters</h6>
            <!-- <img src="img/logo.png" alt="Logo"> -->
         </a>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
             <span class="fa fa-bars"></span>
        </button>
         <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0" id = "nav">

                <a href="index.html" class="nav-item nav-link">Home</a>
                <a href="about.html" class="nav-item nav-link">About</a>
                <a href="courses.html" class="nav-item nav-link">Courses</a>
                 
                    <a href="contact.html" class="nav-item nav-link" id="sup">Support</a>
                </div>
           </div>
        </nav>
        
        <script type="text/javascript">
            const currentLocation = location.href;
            const menuItem = document.querySelectorAll('a');
            const menuLength = menuItem.length
            for(let i = 0; i < menuLength; i++){
                if(menuItem[i].href === currentLocation){
                    menuItem[i].className += " active"
                }
            }
        
        </script>

`);