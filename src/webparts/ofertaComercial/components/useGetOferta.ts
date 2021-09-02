import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/fields";
import { useState, useEffect } from 'react';
import { PagedItemCollection } from "@pnp/sp/items";

export default function useGetOferta(options?:any) {
    const [results, setResults] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            console.log(`${options.sortBy.data.field}`, options.sortBy.data.value);
            console.log(`Vigencia eq '${options.vigencia.text}'`);
            let newResults: any[] = await sp.web.lists.getById(options.type.data).items
                .select('Title', 'FileLeafRef', 'Pais', 'Desde', 'Hasta', 'Vigencia')
                .filter(`Vigencia eq '${options.vigencia.text}'`)
                .orderBy(`'${options.sortBy.data.field}'`, options.sortBy.data.value)
                .getAll();
            const filteredResults = newResults.filter(i => i.Title?.toLowerCase().indexOf(options.queryText.toLowerCase()) !== -1 || i.FileLeafRef?.toLowerCase().indexOf(options.queryText.toLowerCase()) !== -1);
            setResults(filteredResults);
            setIsLoading(false);
        }

        fetchData();

    }, [options.type, options.vigencia, options.sortBy, options.queryText]);

    // const filteredResults = results.filter(i => i.Title?.toLowerCase().indexOf(options.queryText.toLowerCase()) !== -1 || i.FileLeafRef?.toLowerCase().indexOf(options.queryText.toLowerCase()) !== -1);
    // console.log({filteredResults});
    // setResults(filteredResults);
    return {
        isLoading, results
    };
}