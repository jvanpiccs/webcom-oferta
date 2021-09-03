import * as React from 'react';
import { Stack } from '@fluentui/react';
import { IReadonlyTheme } from '@microsoft/sp-component-base';
import { Selectors } from './Selectors';
import useGetResults from './useGetOferta';
import { Results } from './Results';
import { useState } from 'react';
import { optionsType, optionsSortBy, optionsVigencia } from './Selectors';

export interface IOfertaComercialProps {
  themeVariant: IReadonlyTheme | undefined;
}

export const OfertaComercial: React.FunctionComponent<IOfertaComercialProps> = (
  props: React.PropsWithChildren<IOfertaComercialProps>
) => {
  //Customizer
  const { semanticColors }: IReadonlyTheme = props.themeVariant;

  //State
  const [queryText, setQueryText] = useState<string>('');
  const [type, setType] = useState<any>(optionsType[0]);
  const [vigencia, setVigencia] = useState<any>(optionsVigencia[0]);
  const [sortBy, setSortBy] = useState<any>(optionsSortBy[1]);

  const selectors = {
    queryText,
    setQueryText,
    type,
    setType,
    vigencia,
    setVigencia,
    sortBy,
    setSortBy,
  };
  console.log(selectors);

  const { results, isLoading } = useGetResults({
    type,
    vigencia,
    sortBy,
    queryText,
  });
  // console.log(results);

  return (
    <Stack style={{ backgroundColor: semanticColors.bodyBackground }}>
      <Selectors {...selectors} />
      <Results
        results={results}
        isLoading={isLoading}
        type={type}
        vigencia={vigencia}
        sortBy={sortBy}
      />
    </Stack>
  );
};
