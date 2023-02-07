import { ClientUpdateInput, ClientCreateInput, Client } from "./../../index";
import { defineStore } from "pinia";
import service from "@/service";
import { storeToRefs } from "pinia";
import { useBodyStore } from "@/store/useBodyModule";
import _ from "lodash";

interface IPagination {
  take?: number;
  skip?: number;
}
const { isLoading } = storeToRefs(useBodyStore());
const initialState: Client | ClientCreateInput | ClientUpdateInput = {
  name: "",
  lastName: "",
};
export const useClientStore = defineStore("client-store", {
  state: () => {
    return {
      clientList: [] as Array<Client>,
      error: null as Object | any,
      client: _.cloneDeep(initialState),
      clientExcelFile: "" as string,
      clientPagination: {
        skip: 0,
        take: Number(localStorage.getItem("take")) || 5,
        total: 0,
      },
    };
  },

  getters: {},

  actions: {
    async fetchClients(payload: IPagination) {
      try {
        const { data } = await service.api.clientControllerFindMany({
          skip: payload?.skip ?? undefined,
          take: payload?.take ?? undefined,
        });
        this.clientList = data.paginatedResult;

        this.clientList.forEach((element) => {
          for (const [key, value] of Object.entries(element)) {
            if (typeof value == "object" && value) {
              element[key] = Object.values(value);
            }
          }
        });
        this.clientPagination = {
          total: data.totalCount,
          skip: payload?.skip ?? 0,
          take: payload?.take ?? data.totalCount,
        };
        localStorage.setItem(
          "take",
          payload?.take?.toString() ?? data.totalCount.toString()
        );
        this.error = null;
      } catch (err: any) {
        this.clientList = [];
        console.error("Error loading  ITEMS", err);
        this.error = err.error;
      } finally {
      }
    },
    async fetchDataExcelClients() {
      try {
        const { data } = await service.api.clientControllerFindDataForExcel();
        this.clientExcelFile = data.file;

        this.error = null;
      } catch (err: any) {
        console.error("Error loading  ITEMS", err);
        this.error = err.error;
      } finally {
        isLoading.value = false;
      }
    },
    async softDeleteClient(payload: string) {
      isLoading.value = true;
      try {
        const { data } = await service.api.clientControllerUpdate(payload, {
          deletedAt: new Date(),
        });
        this.error = null;
        this.fetchClients({
          take: this.clientPagination.take,
          skip: this.clientPagination.skip,
        });
      } catch (err: any) {
        console.error("Error loading  ITEMS", err);
        this.error = err.error;
        isLoading.value = false;
      } finally {
        isLoading.value = false;
      }
    },
    async deleteClient(payload: string) {
      isLoading.value = true;
      try {
        const { data } = await service.api.clientControllerDelete(payload);
        this.clientList = this.clientList.filter(
          (client) => client.id !== data.id
        );
        this.clientPagination.total--;
        isLoading.value = false;
        this.error = null;
      } catch (err: any) {
        console.error("Error loading  ITEMS", err);
        this.error = err.error;
        isLoading.value = false;
      } finally {
        isLoading.value = false;
      }
    },
    async editClient(payload: { id: string; data?: ClientUpdateInput }) {
      isLoading.value = true;
      try {
        const { data } = await service.api.clientControllerUpdate(
          payload.id,
          payload.data ?? this.client
        );
        this.clientList = this.clientList.map((item) =>
          item.id === payload.id ? { ...item, ...data } : item
        );
        this.error = null;
      } catch (err: any) {
        console.error("Error Update  ITEMS", err.error);
        this.error = err.error;
      } finally {
        isLoading.value = false;
      }
    } /*
      async editManyClient(payload: { data: ClientUpdateInput; where: any }) {
        isLoading.value  = true;
        try {
          const { data } = await service.api.clientControllerUpdateMany(
            payload.data,
            payload.where
           
          );
          this.clientList = this.clientList.map((item) =>
            item.id === payload.id ? { ...item, ...payload.data } : item
          );
          this.error = null;
        } catch (err:any) {
          console.error("Error Update  ITEMS", err.error);
          this.error = err.error;
        } finally {
          isLoading.value = false;
        }
      },*/,

    async getClientById(payload: string) {
      isLoading.value = true;
      try {
        const { data } = await service.api.clientControllerFindOne(payload);
        this.client = data;
        this.error = null;
      } catch (err: any) {
        this.resetClient();
        console.error("Error Update  ITEMS", err.error);
        this.error = err.error;
      } finally {
        isLoading.value = false;
      }
    },
    async createClient(payload?: { data: ClientCreateInput }) {
      isLoading.value = true;
      try {
        const { data } = await service.api.clientControllerCreate(
          payload?.data ?? (this.client as ClientCreateInput)
        );
        this.clientList = [...this.clientList, data];
        this.error = null;
      } catch (err: any) {
        this.error = err.error;
      } finally {
        isLoading.value = false;
      }
    },
    async createManyClient(payload: any) {
      isLoading.value = true;
      try {
        const { data } = await service.api.clientControllerCreateMany(payload);
        this.error = null;
      } catch (err: any) {
        this.error = err.error;
      } finally {
        isLoading.value = false;
      }
    },

    resetClient() {
      this.client = _.cloneDeep(initialState);
    },
  },
});
