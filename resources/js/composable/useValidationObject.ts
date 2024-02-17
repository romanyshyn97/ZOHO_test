import {useField, useForm} from "vee-validate";
import {reactive} from "vue";
import * as Yup from "yup";

interface FormField {
    key: string,
    rules?: any,
    initialValue?: any,
}


export const useValidationObject = (fields: Array<FormField>) => {
    const validationSchemaShape: any = {}
    const initialValues: any = {}

    for (const {key, rules, initialValue } of fields) {
        if (rules) {
            validationSchemaShape[key] = rules
        }

        if (initialValue) {
            initialValues[key] = initialValue
        }
    }

    const {
        errors,
        handleSubmit,
        setErrors,
        resetForm,
        setValues
    } = useForm({
        initialValues: initialValues,
        validationSchema: Yup.object(validationSchemaShape)
    })

    const dataShape: any = {}
    for (const {key} of fields) {
        dataShape[key] = useField(key).value
    }

    const data = reactive(dataShape)

    const setDefaults = (keyValue: any) => {
        for (const key in keyValue) {
            data[key] = keyValue[key]
        }
    }

    return {
        errors,
        data,
        setErrors,
        handleSubmit,
        setDefaults,
        resetForm,
        setValues
    }
}
