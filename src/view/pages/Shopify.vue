<template>
    <!-- <div class="my-5 text-center">
        <div class="btn btn-primary" @click="openModal">Add Store</div>
        
    </div> -->
    <div class="container">
        <div v-if="showButton" class="btn btn-primary my-5 text-center" v-b-modal.add-storeLink-modal>
            Add Store
            <b-modal id="add-storeLink-modal" centered hide-footer title="Add Storelink">
                <b-input-group class="mt-5 ">
                    <b-form-input type="tel" v-model="storeLink"></b-form-input>
                </b-input-group>
                <div class="w-100 mt-5 text-center">
                    <div class="btn btn-primary" @click="addStore">Add</div>
                </div>
            </b-modal>
        </div>
        <div v-if="!showButton">
            <div class="btn btn-primary" @click="addStore">Open Store</div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "Shopify",
    data() {
        return {
            storeLink: '',
            showButton: false,
            storeId: ''
        }
    },
    computed: {
        ...mapGetters(["currentUser"]),
    },
    mounted() {
        this.storeId = localStorage.getItem('shopify_store');
        if (this.storeId === null || this.storeId === ''){
            this.showButton = true
        }
    },
    methods: {
        addStore() {
            if(this.storeId) {
                window.open(`https://${this.storeId}`, '_blank');
                window.location.reload()
            } else if (this.storeLink.length !== 0) {
                window.open(`https://api.theprintribe.com/auth?customer_id=${this.currentUser.id}&shop=${this.storeLink}`, '_blank');
                window.location.reload()
            }
        }
    }
}
</script>

<style>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>