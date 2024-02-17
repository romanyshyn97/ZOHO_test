import Tailwind from "primevue/passthrough/tailwind";
import {usePassThrough} from "primevue/passthrough";

//https://github.com/primefaces/primevue/blob/master/components/lib/passthrough/tailwind/index.js
export const designSystem = usePassThrough(
    Tailwind,
    {
        inputtext: {
            root: ({ props, context }) => ({
                class: [
                    'm-0',
                    'font-sans text-gray-600 bg-white border border-gray-300 transition-colors duration-200 appearance-none rounded-md',
                    {
                        'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                        'opacity-60 select-none pointer-events-none cursor-default': context.disabled
                    },
                    {
                        'text-lg px-4 py-4': props.size == 'large',
                        'text-xs px-2 py-2': props.size == 'small',
                        'p-2 text-base': props.size == null
                    }
                ]
            })
        },

    },
    {
        mergeSections: true,
        mergeProps: false
    }
)
