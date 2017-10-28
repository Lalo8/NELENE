
<template>
    <section>
    <div class="banner"></div>  
        <b-tabs position="is-centered" class="block"v-model="activeTab">
            <b-tab-item label="Description">
               <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-128x128">
                                <img src="https://bulma.io/images/placeholders/256x256.png" alt="Placeholder image">
                                </figure>
                            </div>
                        </div>
                        <div class="media-content">
                        <div class="content">
                        <p class="title">Organisation Name</p>
                        <br>
                        <p class="subtitle">Enim culpa veniam aliqua do adipisicing incididunt eu. Lorem sunt voluptate ea ad ea ea nisi. 
                            Ea pariatur laborum laboris irure velit elit ex irure. 
                            Nostrud nisi minim cupidatat nostrud dolore enim veniam aute ut veniam minim est cillum eu. 
                            Excepteur quis fugiat irure mollit sint aliqua nostrud nisi id ex incididunt laborum sint.
                            <br>
                            Enim culpa veniam aliqua do adipisicing incididunt eu. Lorem sunt voluptate ea ad ea ea nisi. 
                            Ea pariatur laborum laboris irure velit elit ex irure. 
                            Nostrud nisi minim cupidatat nostrud dolore enim veniam aute ut veniam minim est cillum eu. 
                            Excepteur quis fugiat irure mollit sint aliqua nostrud nisi id ex incididunt laborum sint.</p>
                            <a class="button is-primary is-focus is-medium"> I want to help ! </a>
                        </div>
                    </div>
                    </div>
                </div>
            </b-tab-item>

            <b-tab-item label="Team">
          <div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p class="title">
          <strong>John Smith</strong> </p>
          <br>
          <p class="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item">
            <span class="icon is-small"><i class="fa fa-reply"></i></span>
          </a>
          <a class="level-item">
            <span class="icon is-small"><i class="fa fa-facebook"></i></span>
          </a>
          <a class="level-item">
            <span class="icon is-small"><i class="fa fa-whatsapp"></i></span>
          </a>
        </div>
      </nav>
    </div>
  </article>
            <article class="media">
                <div class="media-left">
                <figure class="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                </figure>
                </div>
                <div class="media-content">
                <div class="content">
                    <p class="title">
                    <strong>John Smith</strong> </p>
                    <br>
                    <p class="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                    </p>
                </div>
                <nav class="level is-mobile">
                    <div class="level-left">
                    <a class="level-item">
                        <span class="icon is-small"><i class="fa fa-linkedin"></i></span>
                    </a>
                    <a class="level-item">
                        <span class="icon is-small"><i class="fa fa-facebook"></i></span>
                    </a>
                    <a class="level-item">
                        <span class="icon is-small"><i class="fa fa-whatsapp"></i></span>
                    </a>
                    </div>
                </nav>
                </div>
            </article>
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p class= title>
          <strong>John Smith</strong>
          </p>
          <br>
          <p class="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item">
            <span class="icon is-small"><i class="fa fa-reply"></i></span>
          </a>
          <a class="level-item">
            <span class="icon is-small"><i class="fa fa-facebook"></i></span>
          </a>
          <a class="level-item">
            <span class="icon is-small"><i class="fa fa-whatsapp"></i></span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</div>    
            </b-tab-item>

            <b-tab-item label="Current Needs">
                Nunc nec velit nec libero vestibulum eleifend.
                Curabitur pulvinar congue luctus.
                Nullam hendrerit iaculis augue vitae ornare.
                Maecenas vehicula pulvinar tellus, id sodales felis lobortis eget.
            </b-tab-item>
        </b-tabs>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                activeTab: 0
            }
        }
    }
</script>

<style scoped>
.banner {
    width:100%;
    height:400px;
    background-color: #CCCCCC;

}
.subtitle {
    font-size: 20px;
}
.card-content{
    display: flex;
    padding: 30px;
}
p {
margin-left: 10px;
margin-bottom: 0px;
}
.title {
        margin-top: 5px;
        font-size: 30px;
}

.card, article {
    width: 80%;
    margin: 30px auto;
    border: none;
}


</style>