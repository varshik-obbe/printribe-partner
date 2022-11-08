<template>
  <!--begin::Advance Table Widget 2-->
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Body-->
    <div class="card-body pt-3 pb-0">
      <!--begin::Table-->
      <!-- <div
        v-if="list.length > 0"
        class="table-responsive"
        style="max-height: 70vh; min-height:30vh; overflow-y: scroll"
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
                      color: item.payment_status==='success' ? 'green' : 'red',
                    }"
                  >
                    {{ item.payment_status==='success' ? 'Credited' : 'Debited' }}
                  </span>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div> -->

      <div class="text-right">
        <b-dropdown id="dropdown-filter" text="Filter" class="m-md-2">
          <b-dropdown-item @click="filter = ''">All</b-dropdown-item>
          <b-dropdown-item @click="filter = 'success'">Credited</b-dropdown-item>
          <b-dropdown-item @click="filter = 'debited'">Debited</b-dropdown-item>
        </b-dropdown>
      </div>
      <b-table
        v-if="walletItems.length > 0"
        striped
        :items="walletItems"
        :fields="fields"
        :filter="filter"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        sort-icon-left
        responsive="sm"
        class="text-center"
        style="max-height:70vh; min-height:30vh; overflow-y:scroll;"
      >
        <template v-slot:cell(date)="{ item }">
          <span>{{ getDate(item.date) }}</span>
        </template>
        <template v-slot:cell(amount)="{ item }">
          <span>₹{{ item.amount }}</span>
        </template>
        <template v-slot:cell(payment_status)="{ item }">
          <span
            :style="{
              color: item.payment_status === 'success' ? 'green' : 'red',
            }"
          >
            {{ item.payment_status === "success" ? "Credited" : "Debited" }}
          </span>
        </template>
      </b-table>
      <div v-else class="my-5 text-center">No orders</div>

      <!--end::Table-->
    </div>
    <!--end::Body-->
    <!--end::Advance Table Widget 2-->
  </div>
</template>

<script>
export default {
  name: "widget-2",
  props: ["walletItems"],
  data() {
    return {
      sortBy: "date",
      sortDesc: false,
      filter: "",
      fields: [
        { key: "id", sortable: true },
        { key: "payment_order_id", sortable: true },
        { key: "date", sortable: true },
        { key: "amount", sortable: true },
        { key: "payment_status", sortable: true },
      ],
    };
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
