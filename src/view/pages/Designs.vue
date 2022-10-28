<template>
  <div class="container">
    <h2 class="mb-5">Designs</h2>
    <div>
      <UploadImages
        uploadMsg="Upload Designs Here"
        @changed="handleProductImages"
        :key="uploadImagesKey"
      />
      <div class="my-5 text-center">
        <div class="btn btn-primary" @click="uploadDesigns()">Upload</div>
      </div>
    </div>
    <div class="uploaded-designs row">
      <div
        v-for="(design, designIndex) in uploadedDesigns"
        :key="designIndex"
        class="bg-light d-flex justify-content-center align-items-center col-12 col-sm-4 col-lg-3"
      >
        <div class="card design-card d-flex justify-content-center align-items-center">
          <img
            class="design-img"
            :src="img_base_url + design"
            alt="design_img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UploadImages from "vue-upload-drop-images";
import ApiService from "@/core/services/api.service";
import Swal from "sweetalert2";
import { mapGetters } from "vuex";
export default {
  components: { UploadImages },
  data() {
    return {
      designs: [],
      imgs: [],
      uploadImagesKey: 0,
      uploadedDesigns: [],
      img_base_url: process.env.VUE_APP_IMAGE_BASE_URL,
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  created() {
    console.log(this.currentUser.id);
    ApiService.get(`/fabricDesigns/getSavedDesign/${this.currentUser.id}`)
      .then(({ data }) => {
        console.log(data);
        data.designsSaved.forEach((design) => {
          design.imgsArr.forEach((img) => {
            this.uploadedDesigns.push(img);
          });
        });
        console.log(this.uploadedDesigns);
      })
      .catch((resp) => {
        console.log(resp);
        Swal.fire({
          title: "Error!",
          text: "Some error occurred while fetching data. Please try again later.",
          icon: "error",
          confirmButtonText: "Close",
        });
      });
  },
  methods: {
    handleProductImages(files) {
      this.designs = files;
      this.imgs = [];
      console.log(files);
      let imgs = this.designs;
      imgs.map((image, i) =>
        new Promise((resolve, reject) => {
          const fileReader = new FileReader();

          fileReader.onload = (file) => {
            resolve(file.target.result);
          };

          fileReader.onerror = (error) => reject(error);

          fileReader.readAsDataURL(image);
        }).then((base64image) => {
          this.$set(
            this.imgs,
            i,
            base64image.replace("data:", "").replace(/^.+,/, "")
          );
        })
      );
      console.log(this.imgs);
    },
    uploadDesigns() {
      let postData = {
        data: {
          productId: "",
          customerId: this.currentUser.id,
          imgsArr: this.imgs,
        },
      };
      ApiService.post(`/fabricDesigns/addSavedDesign`, postData)
        .then(({ data }) => {
          Swal.fire({
            title: "Uploaded!",
            text: "Designs uploaded successfully.",
            icon: "success",
            confirmButtonText: "Close",
          }).then(() => {
            this.designs = [];
            this.imgs = [];
            this.uploadImagesKey++;
          });
        })
        .catch((resp) => {
          console.log(resp);
          Swal.fire({
            title: "Error!",
            text: "Some error occurred while uploading designs. Please try again later.",
            icon: "error",
            confirmButtonText: "Close",
          });
        });
    },
  },
};
</script>

<style scoped>
.design-card {
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 90%;
  height:95%;
}
.design-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>