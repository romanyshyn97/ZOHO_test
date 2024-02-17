<script setup>
import { Form, Field } from 'vee-validate';
import {reactive, ref} from "vue";
import * as yup from "yup";
import {useValidationObject} from "../composable/useValidationObject.ts";

const phoneRegExp = new RegExp(
    "^((\\\\[1-9]{1,4}[ \\\\-]*)|(\\\\([0-9]{2,3}\\\\)[ \\\\-]*)|([0-9]{2,4})[ \\\\-]*)*?[0-9]{3,4}?[ \\\\-]*[0-9]{3,4}?$"
);
const URL = new RegExp(
    "^(http:\\/\\/www.|https:\\/\\/www.|ftp:\\/\\/www.|www.|http:\\/\\/|https:\\/\\/|ftp:\\/\\/|){1}[^\\x00-\\x19\\x22-\\x27\\x2A-\\x2C\\x2E-\\x2F\\x3A-\\x3F\\x5B-\\x5E\\x60\\x7B\\x7D-\\x7F]+(\\.[^\\x00-\\x19\\x22\\x24-\\x2C\\x2E-\\x2F\\x3C\\x3E\\x40\\x5B-\\x5E\\x60\\x7B\\x7D-\\x7F]+)+([\\/\\?].*)*$"
);
const {
    data,
    errors,
    handleSubmit
} = useValidationObject([
    {
        key: 'dealName',
        rules: yup.string().required()
    },
    {
        key: 'stage',
        rules: yup.string().required()
    },
    {
        key: 'accountName',
        rules: yup.string().required()
    },
    {
        key: 'website',
        rules: yup.string().required().matches(URL, 'Enter a valid url')


    },
    {
        key: 'phone',
        rules: yup.string().required().matches(phoneRegExp, 'Phone number is not valid')


    }
])

const submit = handleSubmit((data) => {
    axios.post(
        '/submit',
        data
    ).then(() => {

    }).catch((response) => {

    })
})

</script>

<template>
    <div class="container m-auto w-full flex items-center justify-center min-h-screen">
        <form class="bg-blue-100 rounded-xl p-12 w-1/2" @submit="submit">
            <h2 class="text-center font-bold">Deal</h2>
                <div class="flex flex-col gap-2">
                    <label for="username">Name</label>
                    <InputText id="username" v-model="data.dealName" />
                    <div v-if="errors.dealName" class="text-sm text-red-500">
                        {{errors.dealName}}
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <label for="stage">Stage</label>
                    <InputText id="stage" v-model="data.stage" />
                    <div v-if="errors.stage" class="text-sm text-red-500">
                        {{errors.stage}}
                    </div>
                </div>
            <h2 class="text-center font-bold mt-4">Account</h2>
                <div class="flex flex-col gap-2">
                    <label for="account">Name</label>
                    <InputText id="account" v-model="data.accountName" />
                    <div v-if="errors.accountName" class="text-sm text-red-500">
                        {{errors.accountName}}
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <label for="website">Website</label>
                    <InputText id="website" v-model="data.website" />
                    <div v-if="errors.website" class="text-sm text-red-500">
                        {{errors.website}}
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <label for="phone">Phone</label>
                    <InputText id="phone" v-model="data.phone" />
                    <div v-if="errors.phone" class="text-sm text-red-500">
                        {{errors.phone}}
                    </div>
                </div>
            <button class="btn btn-primary w-full mt-4">Submit</button>
        </form>

    </div>
</template>




