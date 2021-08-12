import * as React from "react";
import { useState } from "react";
import { DatePicker, IconButton, Label, Stack, Toggle } from "@fluentui/react";

const onFormatDate = (date?: Date): string => {
  return !date
    ? ""
    : date.getDate() +
        "/" +
        (date.getMonth() + 1) +
        "/" +
        (date.getFullYear() % 100);
};

export interface IFiltersProps {}

export const Filters: React.FunctionComponent<IFiltersProps> = (
  props: React.PropsWithChildren<IFiltersProps>
) => {
  const [vigencia, setVigencia] = useState<boolean>(true);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  return (
    <>
      <Toggle
        defaultChecked
        label="Vigencia"
        onText="Vigente"
        offText="No vigente"
        onChange={() => setVigencia(!vigencia)}
      />
      <DatePicker
        label="Desde"
        value={startDate}
        formatDate={onFormatDate}
        onSelectDate={setStartDate as (date: Date | null | undefined) => void}
        showMonthPickerAsOverlay
      />
      <DatePicker
        label="Hasta"
        value={endDate}
        formatDate={onFormatDate}
        onSelectDate={setEndDate as (date: Date | null | undefined) => void}
        showMonthPickerAsOverlay
        lang='es'
      />
    </>
  );
};
