<template lang="">
    <div
        class="card"
        style="border: none; border-radius: 30px; box-shadow: 0 5px 10px grey">
        <h4 id="title">
            <!-- <b-button :to="{ name: 'home-screen' }" variant="light">
                <i class="bi bi-arrow-left"></i>
            </b-button> -->
            Detail Data
        </h4>
        <div class="card-body">
            <b-list-group>
                <b-list-group-item>
                    <b>Name:</b> {{ guna.name }}
                </b-list-group-item>
                <b-list-group-item>
                    <b>Created_at:</b> {{ guna.created_at }}
                </b-list-group-item>
                <b-list-group-item class="">
                    <b>Description:</b> {{ guna.description }}
                </b-list-group-item>
            </b-list-group>
        </div>
    </div>
</template>
<script>
import { db } from "@/firebaseDb";
export default {
    name: "detail-data",
    data() {
        return {
            pengguna: [],
            guna: {
                name: "",
                description: "",
                created_at: "",
            },
        };
    },
    created() {
        let dbRef = db.collection("pengguna").doc(this.$route.params.id);
        dbRef
            .get()
            .then((doc) => {
                this.guna = doc.data();
                console.log(this.guna);
            })
            .catch((err) => {
                console.log(err);
            });
    },
};
</script>
