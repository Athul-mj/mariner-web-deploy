
import { DurationOption } from "../../app/owner/models/dashboard";

export const DURATION_OPTIONS: DurationOption[] = [
  { value: 1, label: '1 Month' },
  { value: 3, label: '3 Months' },
  { value: 6, label: '6 Months' },
  { value: 12, label: '1 Year' }
];

export enum ChartColors {
  VIBRANT_TEAL = '#3CB692',
  SOFT_AZURE = '#5FAADF',
  MUTED_PERIWINKLE = '#7371C0',
  FOREST_GREEN = '#098D19',
  BRIGHT_TEAL = '#2ED9A3',
  TURQUOISE_BLUE = '#47C8E0',
  ROYAL_LAVENDER = '#8A4FBF',
  ELECTRIC_BLUE = '#16B1FF',
  EMERALD_GREEN = '#00C853',
  SOFT_AMETHYST = '#9575CD',
  CYAN = '#26C6DA',
  LEAF_GREEN = '#4CAF50',
}

export enum GenderEnum {
  Male = 0,
  Female = 1,
  Other = 2
}

export enum MaritalStatusEnum {

  Single = 0,
  Married = 1,
  Widowed = 2,
  Divorced = 3,
  Separated = 4
}

// Or with more control:
export const GENDER_LABELS: Record<number, string> = {
  [GenderEnum.Male]: 'Male',
  [GenderEnum.Female]: 'Female',
  [GenderEnum.Other]: 'Other'
};

export function getGenderLabel(value: number): string {
  return GENDER_LABELS[value] || 'N/A';
}
export enum TopUpType {
  CashBox = 0,
  Card = 1

}
