import * as React from 'react';
import { useState } from 'react';
import { Separator, Stack } from "@fluentui/react";
import { OfertaList } from './OfertaList';
import { FiltroOferta } from './FiltroOferta';

import useGetOferta from './useGetOferta';

export interface IOfertaProps { }

export const Oferta: React.FunctionComponent<IOfertaProps> = (props: React.PropsWithChildren<IOfertaProps>) => {
    const [vigencia, setVigencia] = useState<boolean>(true);
    const [startDate, setStartDate] = useState<Date | undefined>(undefined);
    const [endDate, setEndDate] = useState<Date | undefined>(undefined);
    const [orderBy, setOrderBy] = useState<any>({ key: 'Desde', data: true, text: 'Más recientes' });
    const [filterText, setFilterText] = useState<string>('');

    const { filteredResults, results, isLoading } = useGetOferta({ vigencia, startDate, endDate, filterText, orderBy });

    const filtrosProps = {vigencia, setVigencia, startDate, setStartDate, endDate, setEndDate, orderBy, setOrderBy, filterText, setFilterText, results}
    
    return (
        <>
            <Stack horizontal tokens={{ childrenGap: 5 }}>
                <Stack style={{ width: 170 }}>
                    <FiltroOferta {...filtrosProps}/>
                </Stack>
                <Separator vertical />
                <Stack>
                    <OfertaList items={filteredResults} />
                </Stack>
            </Stack>

        </>
    );
};