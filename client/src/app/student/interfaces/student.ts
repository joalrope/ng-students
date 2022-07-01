export interface Student {
  ID: string;
  active: boolean;
  grades: number;
  Name: string;
  Gender: string;
  Class: string;
  Club: string;
  Persona: string;
  Crush: string;
  BreastSize: string;
  Strength: string;
  Hairstyle: string;
  Color: string;
  Stockings: Stockings;
  Accessory: string;
  ScheduleTime: string;
  ScheduleDestination: string;
  ScheduleAction: string;
}

export enum Stockings {
  Loose = 'Loose',
  None = 'None',
  Osana = 'Osana',
}
