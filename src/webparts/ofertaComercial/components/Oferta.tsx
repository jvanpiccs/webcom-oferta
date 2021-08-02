import * as React from "react";
import { useState } from "react";
import {
  Stack,
  Label,
  Text,
  SearchBox,
  Toggle,
  Dropdown,
  DatePicker,
  IconButton,
  StackItem,
  NeutralColors,
  Separator,
} from "@fluentui/react";
import { OfertaList } from "./OfertaList";

import useGetOferta from "./useGetOferta";

export interface IOfertaProps {}

export const Oferta: React.FunctionComponent<IOfertaProps> = (
  props: React.PropsWithChildren<IOfertaProps>
) => {
  const [vigencia, setVigencia] = useState<boolean>(true);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [orderBy, setOrderBy] = useState<any>({
    key: "Desde",
    data: true,
    text: "Más recientes",
  });
  const [filterText, setFilterText] = useState<string>("");

  const { filteredResults, results, isLoading } = useGetOferta({
    vigencia,
    startDate,
    endDate,
    filterText,
    orderBy,
  });

  return (
    <>
      <Stack
        tokens={{ childrenGap: 5 }}
        style={{ backgroundColor: NeutralColors.gray10 }}
      >
        <Stack horizontal tokens={{ childrenGap: 5 }}>
          <Stack style={{ padding: 5 }}>
            <Text variant='medium'>Resultados: {results.length} ofertas</Text>
            <Separator/>
            <Text>Filtros</Text>
            <Toggle
              defaultChecked
              label="Vigencia"
              onText="Vigente"
              offText="No vigente"
              onChange={() => setVigencia(!vigencia)}
            />
            <Stack horizontal style={{ alignItems: "end" }}>
              <DatePicker
                label="Desde"
                value={startDate}
                formatDate={onFormatDate}
                onSelectDate={
                  setStartDate as (date: Date | null | undefined) => void
                }
                showMonthPickerAsOverlay
              />
              {startDate !== undefined ? (
                <IconButton
                  iconProps={{ iconName: "cancel" }}
                  style={{ marginBottom: 5 }}
                  onClick={() => setStartDate(undefined)}
                />
              ) : null}{" "}
            </Stack>
            <Stack horizontal style={{ alignItems: "end" }}>
              <DatePicker
                label="Hasta"
                value={endDate}
                formatDate={onFormatDate}
                onSelectDate={
                  setEndDate as (date: Date | null | undefined) => void
                }
                showMonthPickerAsOverlay
              />
              {endDate !== undefined ? (
                <IconButton
                  iconProps={{ iconName: "cancel" }}
                  style={{ marginBottom: 5 }}
                  onClick={() => setEndDate(undefined)}
                />
              ) : null}
            </Stack>
          </Stack>
          <Stack>
            <Stack
              tokens={{ childrenGap: 10 }}
              horizontal
              horizontalAlign="end"
              style={{ padding: 5 }}
            >
              <SearchBox
                placeholder="Filtrar"
                iconProps={{ iconName: "Filter" }}
                onChange={(_, newValue) => setFilterText(newValue)}
              />
              <Dropdown
                style={{ minWidth: 150 }}
                placeholder="Ordenar por"
                options={[
                  { key: "Desde", data: true, text: "Más recientes" },
                  { key: "Desde", data: false, text: "Más antiguos" },
                  { key: "FileLeafRef", data: true, text: "A a Z" },
                  { key: "FileLeafRef", data: false, text: "Z a A" },
                ]}
                selectedKey={orderBy}
                onSelect={(option) => setOrderBy(option)}
              />
            </Stack>
            <OfertaList items={filteredResults} />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

const onFormatDate = (date?: Date): string => {
  return !date
    ? ""
    : date.getDate() +
        "/" +
        (date.getMonth() + 1) +
        "/" +
        (date.getFullYear() % 100);
};
