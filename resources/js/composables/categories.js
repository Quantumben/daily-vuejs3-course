import axios from "axios";
import { ref } from "vue";

export default function useCategories() {
    const categories = ref({});

    const getCategories = async() => {
        axios.get(`api/categories`).then((response) => {
            categories.value = response.data.data; //This is cos we are using eloquentResource
        });
    };

    return { categories, getCategories };
}