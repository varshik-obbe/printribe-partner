<template>
  <!--begin::Advance Table Widget 2-->
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Body-->
    <div class="card-body pt-3 pb-0">
      <!--begin::Table-->
      <div
        v-if="list.length > 0"
        class="table-responsive"
      >
        <table class="table table-borderless table-vertical-center">
          <thead>
            <tr>
              <th class="p-0 h5" style="min-width: 200px; text-align: center">
                ID
              </th>

              <th class="p-0 h5" style="min-width: 200px; text-align: center">
                Payment Order Id
              </th>

              <th class="p-0 h5" style="min-width: 150px; text-align: center">
                Date
              </th>
              <th class="p-0 h5" style="min-width: 150px; text-align: center">
                Amount
              </th>
              <th
                class="p-0 h5"
                style="min-width: 150px; text-align: center"
              ></th>
            </tr>
          </thead>
          <br /><br />
          <tbody>
            <template v-for="(item, i) in list">
              <tr v-bind:key="i">
                <td class="pl-0 text-center">
                  <span
                    class="
                      font-weight-bolder
                      text-hover-primary
                      mb-1
                      font-size-lg
                    "
                  >
                    {{ item._id }}
                  </span>
                </td>

                <td class="text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    {{ item.payment_order_id }}
                  </span>
                </td>
                <td class="text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    {{ getDate(item.createdAt) }}
                  </span>
                </td>
                <td class="text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    ₹{{ item.amount }}
                  </span>
                </td>
                <td class="text-center">
                  <span
                    class="font-weight-bolder d-block font-size-lg"
                    :style="{
                      color:
                        item.payment_status === 'success' ? 'green' : 'red',
                    }"
                  >
                    {{
                      item.payment_status === "success" ? "Credited" : "Debited"
                    }}
                  </span>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <div v-else class="my-5 text-center">No orders</div>

      <!--end::Table-->
    </div>
    <!--end::Body-->
    <!--end::Advance Table Widget 2-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "widget-2",
  data() {
    return {
      list: [],
    };
  },
  created() {
    axios
      .get(`/customerWallet/getWalletHistory/${this.currentUser.id}`)
      .then(({ data }) => {
        this.list = data.historyData;
      })
      .catch((resp) => {
        console.log(resp);
      });
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  methods: {
    getDate(date) {
      const today = new Date(date);
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1; // Months start at 0!
      let dd = today.getDate();

      if (dd < 10) dd = "0" + dd;
      if (mm < 10) mm = "0" + mm;

      const formattedToday = dd + "/" + mm + "/" + yyyy;
      return formattedToday;
    },
  },
};
</script>
