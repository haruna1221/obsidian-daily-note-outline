export interface PeriodicConfig {
    enabled: boolean;
    openAtStartup: boolean;
  
    format: string;
    folder: string;
    templatePath?: string;
}
  
export interface CalendarSet {
    id: string;
    ctime: string;
  
    day?: PeriodicConfig;
    week?: PeriodicConfig;
    month?: PeriodicConfig;
    quarter?: PeriodicConfig;
    year?: PeriodicConfig;
    fiscalYear?: PeriodicConfig;
}

export type Granularity =
  | "day"
  | "week"
  | "month"
  | "quarter"
  | "year";