
<template>
    <section v-if="organisation">
    <div class="banner">
        {{organisation.name}}
    </div>
        <b-tabs position="is-centered" class="block" v-model="activeTab">
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
                                <p class="title">
                                    {{organisation.name}}
                                </p>
                                <p class="subtitle">{{organisation.description}} 
                                </p>
                                <button class="button is-primary is-medium" @click="isCardModalActive = true"> I want to help ! 
                                </button>
                                <b-modal :active.sync="isCardModalActive" :width="640">
                                    <div class="card">
                                        <div class="card-content">
                                            <div class="content centered">
                                                <p class="title">GREAT ! </p>
                                                <p class="subtitle" style="margin-top:3px">For that, you just need to send a message to <a href="mailto:"></a>{{organisation.contact}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </b-modal>
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
                            <p class="subtitle" >
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
                <div class="card">
                    <div class="card-content centered">
                        <div class="need" v-for="need in organisation.needs" :key="need">
                            <figure class="image is-150x150" v-if="need === 'recruitment'" >
                                <img src="../../assets/rn.png">
                            </figure>
                            <figure class="image is-150x150" v-if="need === 'location'">
                                <img src="../../assets/ln.png">
                            </figure>
                            <figure class="image is-150x150" v-if="need === 'seed funding'">
                                <img src="../../assets/sn.png">
                            </figure>
                            <b-tag class="subtitle" rounded type="is-warning is-medium">
                                {{need}}
                            </b-tag>
                        </div>
                    </div>
                </div>
            </b-tab-item>
        </b-tabs>
    </section>
</template>

<script>
import { getOrganisation } from "@/api/organisations";
export default {
  data() {
    return {
      activeTab: 0,
      isCardModalActive: false,
      organisation: null
    };
  },
  created() {
    getOrganisation(this.$route.params.id).then(organisation => {
      this.organisation = organisation;
    });
  }
};
</script>

<style scoped>
.banner {
  width: 100%;
  height: 300px;
  margin-top:0px;
  background-color: #cccccc;
  background-image: url("../../assets/dakar2.jpg");
  text-align: center;
  padding-top: 13%;
  color: white;
  font-size: 40px;
  font-weight: bold;
}
.subtitle {
  font-size: 18px;
}
.card {
    margin-top: 20px;
   background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &:hover {
    .card__image {
      filter: contrast(100%);
    }
  }
}
.card-content {
  display: flex;
  padding: 50px 30px;
  justify-content: center;
}
p {
  margin-left: 10px;
  margin-bottom: 0px;
}
.title {
  margin-top: 5px;
  font-size: 25px;
}

.card,article {
  width: 80%;
  margin: 30px auto;
  border: none;
}
.centered {
  text-align: center;
}
.need {
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  width: 200px;
}

span.tag.subtitle.is-warning.is-medium.is-rounded {
  margin: 10px;
}
</style>