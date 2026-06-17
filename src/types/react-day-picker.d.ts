import type * as React from "react";

declare module "react-day-picker" {
  export type DayPickerCaptionLayout = "label" | "dropdown" | "dropdown-months" | "dropdown-years";

  export interface DayButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    day: { date: Date };
    modifiers: {
      focused?: boolean;
      selected?: boolean;
      range_start?: boolean;
      range_end?: boolean;
      range_middle?: boolean;
    };
  }

  export interface DayPickerProps {
    showOutsideDays?: boolean;
    className?: string;
    classNames?: Record<string, string>;
    captionLayout?: DayPickerCaptionLayout;
    formatters?: Record<string, unknown>;
    components?: Record<string, React.ComponentType<any> | undefined>;
  }

  export const DayButton: React.ComponentType<DayButtonProps>;
  export const DayPicker: React.ComponentType<DayPickerProps>;

  export function getDefaultClassNames(): Record<string, string>;
}