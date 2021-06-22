import * as React from 'react';
import { Label, Text, Stack, SearchBox, Toggle, Dropdown, DatePicker, IconButton } from "@fluentui/react";
import { useState } from 'react';

export interface IFiltroOfertaProps {
    /* vigencia:boolean;
    setVigencia:()=>void;
    startDate:Date|undefined;
    setStartDate:()=>void;
    endDate:Date|undefined;
    setEndDate:()=>void;
    orderBy?:any;
    setOrderBy:()=>void;
    filterText:string;
    setFilterText:()=>any; */
    results?: any[];
}

export const FiltroOferta: React.FunctionComponent<IFiltroOfertaProps> = (props: React.PropsWithChildren<IFiltroOfertaProps>) => {
    const [vigencia, setVigencia] = useState<boolean>(true);
    const [startDate, setStartDate] = useState<Date | undefined>(undefined);
    const [endDate, setEndDate] = useState<Date | undefined>(undefined);
    const [orderBy, setOrderBy] = useState<any>({ key: 'Desde', data: true, text: 'Más recientes' });
    const [filterText, setFilterText] = useState<string>('');


    const onFormatDate = (date?: Date): string => {
        return !date ? '' : date.getDate() + '/' + (date.getMonth() + 1) + '/' + (date.getFullYear() % 100);
    };

    return (
        <>
            <Stack tokens={{ childrenGap: 5}}>
                <Stack>
                    <Label>Ofertas</Label>
                    <Text>{props.results.length} resultados</Text>
                </Stack>
                <Stack>
                    <Label>Buscar</Label>
                    <SearchBox
                        placeholder='Filtrar resultados'
                        iconProps={{ iconName: 'Filter' }}
                        onChange={(_, newValue) => setFilterText(newValue)}
                    />
                </Stack>
                <Toggle
                    defaultChecked
                    label='Vigencia'
                    onText='Vigente'
                    offText='No vigente'
                    onChange={() => setVigencia(!vigencia)}
                />
                <Dropdown
                    label='Ordenar'
                    style={{ minWidth: 150 }}
                    placeholder='Ordenar por'
                    options={[
                        { key: 'Desde', data: true, text: 'Más recientes', },
                        { key: 'Desde', data: false, text: 'Más antiguos' },
                        { key: 'FileLeafRef', data: true, text: 'A a Z' },
                        { key: 'FileLeafRef', data: false, text: 'Z a A' }
                    ]}
                    selectedKey={orderBy}
                    onSelect={(option) => setOrderBy(option)}
                />
                <Stack horizontal style={{ alignItems: 'end' }}>
                    <DatePicker
                        label='Desde'
                        value={startDate}
                        formatDate={onFormatDate}
                        onSelectDate={setStartDate as (date: Date | null | undefined) => void}
                        showMonthPickerAsOverlay
                    />
                    {
                        startDate !== undefined ?
                            <IconButton
                                iconProps={{ iconName: 'cancel' }}
                                style={{ marginBottom: 5 }}
                                onClick={() => setStartDate(undefined)}
                            /> : null
                    }          </Stack>

                <Stack horizontal style={{ alignItems: 'end' }}>
                    <DatePicker
                        label='Hasta'
                        value={endDate}
                        formatDate={onFormatDate}
                        onSelectDate={setEndDate as (date: Date | null | undefined) => void}
                        showMonthPickerAsOverlay
                    />
                    {
                        endDate !== undefined ?
                            <IconButton
                                iconProps={{ iconName: 'cancel' }}
                                style={{ marginBottom: 5 }}
                                onClick={() => setEndDate(undefined)}
                            /> : null
                    }
                </Stack>
            </Stack>
        </>
    );
};