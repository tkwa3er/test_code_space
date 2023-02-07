<template>
  <el-form :model="client" label-width="120px" :rules="rules" ref="ruleFormRef">
    <el-form-item label="name" prop="name">
      <el-input v-model="client.name" data-test="clientFormname" />
    </el-form-item>
    <el-form-item label="lastName" prop="lastName">
      <el-input v-model="client.lastName" data-test="clientFormlastName" />
    </el-form-item>
    <div class="d-flex justify-content-end">
      <el-button
        data-test="clientFormCancelButton"
        @click="resetForm(ruleFormRef)"
        >Cancel</el-button
      >
      <el-button
        data-test="clientFormSubmitButton"
        type="primary"
        @click="onSubmit(ruleFormRef)"
        >Create</el-button
      >
    </div>
  </el-form>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { reactive, ref } from "vue";
import { storeToRefs } from "pinia";
import { supabase } from "@/core/services/SupabaseClientService";

import { useClientStore } from "@/store/useClientModule";
import { useRoute, useRouter } from "vue-router";
import type { ElForm } from "element-plus";
import { Components } from "@tekab-dev-team/storybook-devfactory";
import { t } from "@/core/i18n/translate";

const props = defineProps({
  isEdit: { type: Boolean, default: false },
});

const { client, error } = storeToRefs(useClientStore());
const {
  getClientById,
  createClient,
  editClient,
  resetClient,
} = useClientStore();

const route = useRoute();
const router = useRouter();
const ruleFormRef = ref<InstanceType<typeof ElForm>>();
const isLoading = ref<boolean>(false);
const rules = reactive({
  name: [
    {
      required: false,
      message: `${t("entityForm.validation.required")}`,
      trigger: "blur",
    },
  ],
  lastName: [
    {
      required: false,
      message: `${t("entityForm.validation.required")}`,
      trigger: "blur",
    },
  ],
});

const handleSubmitForm = async () => {
  isLoading.value = true;
  if (props.isEdit) {
    const id = route?.params?.id as string;
    return await editClient({ id });
  } else await createClient();
};

const onSubmit = (formEl: InstanceType<typeof ElForm> | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      await handleSubmitForm();
      if (!!error.value) {
        Components.ElMessage.error(error.value?.message);
        console.log(error, "error");
      } else {
        router.push({ name: "list-client" });
        resetClient();
      }
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
const resetForm = (formEl: InstanceType<typeof ElForm> | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
  resetClient();
};
const getCurrentClient = async (id: string) => {
  if (props.isEdit) {
    await getClientById(id);
  }
};

onMounted(async () => {
  const id = route.params.id as string;

  await getCurrentClient(id);
});
</script>
