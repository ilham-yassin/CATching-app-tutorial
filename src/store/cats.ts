import { defineStore } from "pinia";
import { Cat } from "../types";
import axios from "axios";
import constants from "../constants";

export const useCatsStore = defineStore('cats', {
    state: () => ({
        cats: [] as Cat[]
    }),
    actions: {
        async load() {
            const response = await axios.get<Cat[]>('/cats.json');
            this.cats = response.data;
        },
        async findAndAdd(searchTerms: string | string[]) {

            if (typeof searchTerms === "string") {
                searchTerms = [searchTerms];
            }

            for (let term of searchTerms) {
                const response = await axios.get<Cat[]>(
                    `https://api.api-ninjas.com/v1/cats`,
                    {
                        params: { name: term },
                        headers: {
                            'X-Api-Key': constants.API_KEY_API_NINJAS
                        }
                    }
                );
            

            this.cats.push(...response.data);
        }
    }

    }
})