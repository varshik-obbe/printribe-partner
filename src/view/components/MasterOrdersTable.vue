<template>
  <!--begin::Advance Table Widget 2-->
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Body-->
    <div class="card-body pt-3 pb-0">
      <!--begin::Table-->
      <!-- <div v-if="list.length > 0" class="table-responsive" style="max-height:70vh; min-height:30vh; overflow-y:scroll;">
        <table class="table table-borderless table-vertical-center">
          <thead>
            <tr>
              <th class="p-0 h5" style="min-width: 150px; text-align: center">
                Order Id
              </th>

              <th class="p-0 h5" style="min-width: 200px; text-align: center">
                Customer Email
              </th>

              <th class="p-0 h5" style="min-width: 100px; text-align: center">
                Total Price
              </th>
              <th class="p-0 h5" style="min-width: 100px; text-align: center">
                Shipping Charges
              </th>
              <th class="p-0 h5" style="min-width: 100px; text-align: center">
                Date
              </th>
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
                    {{ item.customer_email }}
                  </span>
                </td>
                <td class="text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    ₹{{ item.total_price }}
                  </span>
                </td>
                <td class="text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    ₹{{ item.shipping_charges }}
                  </span>
                </td>
                <td class="text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    {{
                      getDate(item.createdAt)
                    }}
                  </span>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div> -->
      <b-table
        v-if="orderItems.length > 0"
        striped
        :items="orderItems"
        :fields="fields"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        sort-icon-left
        responsive="sm"
        class="text-center"
        style="max-height:70vh; min-height:30vh; overflow-y:scroll;"
      >
        <template v-slot:cell(total_price)="{ item }">
          <span>₹{{ item.total_price }}</span>
        </template>
        <template v-slot:cell(shipping_charges)="{ item }">
          <span>₹{{ item.shipping_charges }}</span>
        </template>
        <template v-slot:cell(date)="{ item }">
          <span>{{ getDate(item.date) }}</span>
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
  props: ["orderItems"],
  data() {
    return {
      sortBy: "date",
      sortDesc: false,
      fields: [
        { key: "order_id", sortable: true },
        { key: "customer_email", sortable: true },
        { key: "total_price", sortable: true },
        { key: "shipping_charges", sortable: true },
        { key: "date", sortable: true },
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
