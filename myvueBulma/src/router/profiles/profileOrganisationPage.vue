
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
                        <p class="title is-4">Organisation Name</p>
                        <p class="subtitle is-6"></p>
                    </div>
                    </div>
                </div>
            </b-tab-item>

            <b-tab-item label="Founder">
                Lorem <br>
                ipsum <br>
                dolor <br>
                sit <br>
                amet.
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

<style>
.banner {
    width:100%;
    height:400px;
    background-color: #CCCCCC;

}
</style>