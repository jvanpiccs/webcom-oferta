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
