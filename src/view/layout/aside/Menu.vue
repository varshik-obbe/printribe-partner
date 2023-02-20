<template>
  <ul class="menu-nav">
    <router-link
      to="/dashboard"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-architecture-and-city"></i>
          <span class="menu-text">Dashboard</span>
        </a>
      </li>
    </router-link>
    <router-link
      to="/reports"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fas fa-file-alt"></i>
          <span class="menu-text">Reports</span>
        </a>
      </li>
    </router-link>
    <router-link
      to="/orders"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fas fa-shopping-bag"></i>
          <span class="menu-text">Orders</span>
        </a>
      </li>
    </router-link>

    <router-link
      to="/other-orders"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fas fa-luggage-cart"></i>
          <span class="menu-text">Other Orders</span>
        </a>
      </li>
    </router-link>
    <router-link
      to="/third-party-orders"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fas fa-shopping-bag"></i>
          <span class="menu-text">Third Party Orders</span>
        </a>
      </li>
    </router-link>
    <router-link
      to="/invoices"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fas fa-shopping-bag"></i>
          <span class="menu-text">Invoices</span>
        </a>
      </li>
    </router-link>
    <router-link
      to="/master-statement"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fas fa-file-alt"></i>
          <span class="menu-text">Master Statement</span>
        </a>
      </li>
    </router-link>
    <router-link
      to="/recharges"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fas fa-file-alt"></i>
          <span class="menu-text">Recharges</span>
        </a>
      </li>
    </router-link>
    <router-link
      to="/designs"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fas fa-file-alt"></i>
          <span class="menu-text">Designs</span>
        </a>
      </li>
    </router-link>
    <router-link
      to="/products/my-products"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fas fa-tshirt"></i>
          <span class="menu-text">My Products</span>
        </a>
      </li>
    </router-link>
    <router-link
      to="/add-product"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fas fa-plus-square"></i>
          <span class="menu-text">Add Product</span>
        </a>
      </li>
    </router-link>

    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{ 'menu-item-open': hasActiveChildren('/integrations') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon2-digital-marketing"></i>
        <span class="menu-text">Integrations</span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <router-link
            to="/integrations/shopify"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-icon fab fa-shopify"></i>
                <span class="menu-text">Shopify</span>
              </a>
            </li>
          </router-link>

          <li
            v-if="custData.customer_wix"
            aria-haspopup="true"
            data-menu-toggle="hover"
            class="menu-item"
            v-bind:class="{
              'menu-item-open': hasActiveChildren('/integrations/wix'),
            }"
          >
            <div class="menu-link menu-toggle">
              <i class="menu-icon fab fa-wix"></i>
              <span class="menu-text">WIX</span>
              <i class="menu-arrow"></i>
            </div>
            <!-- wix submenu::begin -->
            <div class="menu-submenu">
              <span class="menu-arrow"></span>
              <ul class="menu-subnav">
                <router-link
                  to="/integrations/wix/dashboard"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active',
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-icon fas fa-th-large"></i>
                      <span class="menu-text">Dashboard</span>
                    </a>
                  </li>
                </router-link>
                <router-link
                  to="/integrations/wix/orders"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active',
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-icon fas fa-shopping-bag"></i>
                      <span class="menu-text">Orders</span>
                    </a>
                  </li>
                </router-link>
               
              </ul>
            </div>
            <!-- wix submenu::end -->
          </li>
        </ul>
      </div>
    </li>

    <router-link
      to="/settings"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fas fa-cog"></i>
          <span class="menu-text">Settings</span>
        </a>
      </li>
    </router-link>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
import ApiService from "@/core/services/api.service";
export default {
  name: "KTMenu",
  computed: {
    ...mapGetters(["currentUser"]),
  },
  data() {
    return {
      custData: {},
    };
  },
  created() {
    ApiService.get(`/customers/getCustomerbyid?id=${this.currentUser.id}`).then(
      ({ data }) => {
        // console.log(data);
        this.custData = data.customerRecordData;
      }
    );
  },
  methods: {
    hasActiveChildren(match) {
      return this.$route["path"].indexOf(match) !== -1;
    },
  },
};
</script>
