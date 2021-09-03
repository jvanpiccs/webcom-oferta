import { sp } from '@pnp/sp';
import '@pnp/sp/webs';
import '@pnp/sp/lists';
import '@pnp/sp/items';
import '@pnp/sp/fields';
import { useState, useEffect } from 'react';
import { PagedItemCollection } from '@pnp/sp/items';

export default function useGetOferta(options?: any) {
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      let newResults: any[] = await sp.web.lists
        .getById(options.type.data)
        .items.select(
          'Title',
          'FileLeafRef',
          'Pais',
          'Desde',
          'Hasta',
          'Vigencia',
          'FileRef'
        )
        .filter(`Vigencia eq '${options.vigencia.text}'`)
        .getAll()
        .then((response) =>
          response.filter(
            (i) =>
              i.Title?.toLowerCase().indexOf(
                options.queryText.toLowerCase()
              ) !== -1 ||
              i.FileLeafRef?.toLowerCase().indexOf(
                options.queryText.toLowerCase()
              ) !== -1
          )
        )
        .then((response) => {
          console.log(options.sortBy.data.field, options.sortBy.data.value);
          response.map((i) => {
            i.Desde = i?.Desde == null ? null : new Date(i?.Desde);
            i.Hasta = i?.Hasta == null ? null : new Date(i?.Hasta);
          });
          if (options.sortBy.data.value === true) {
            response.sort(
              (a, b) =>
                a[options.sortBy.data.field] - b[options.sortBy.data.field]
            );
          } else {
            response.sort(
              (a, b) =>
                b[options.sortBy.data.field] - a[options.sortBy.data.field]
            );
          }
          console.log({ response });
          return response;
        });
      setResults(await newResults);
      setIsLoading(false);
    }

    fetchData();
  }, [options.type, options.vigencia, options.sortBy, options.queryText]);

  return {
    isLoading,
    results,
  };
}
