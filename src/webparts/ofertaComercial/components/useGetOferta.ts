import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { useState, useEffect } from 'react';

export default function useGetOferta(options?: any) {
    const [results, setResults] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            let results: any[] = await sp.web.lists.getById("a3455e80-17b6-4f81-a529-538d6fd49955").items
                .select('Title', 'FileLeafRef', 'Pais', 'Desde', 'Hasta', 'Vigencia')
                .filter(`Vigencia eq '${options.vigencia ? 'Vigente' : 'No vigente'}'`)
                .orderBy(`${options.orderBy.key}`, options.orderBy.data)
                .getAll().then(
                    data => data.map((i) => {i.Desde = new Date(i.Desde)})
                );
            console.log({ results });
            setResults(results);
            setIsLoading(false);
        }

        fetchData();
    }, [options.vigencia, options.startDate, options.endDate, options.orderBy]);

    const filteredResults = results.filter(i => i.Title?.toLowerCase().indexOf(options.filterText.toLowerCase()) !== -1 || i.FileLeafRef?.toLowerCase().indexOf(options.filterText.toLowerCase()) !== -1);

    return {
        isLoading, results, filteredResults
    };
}