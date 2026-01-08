
export enum Section {
  DIAGNOSIS = 'DIAGNOSIS',
  HUMAN_RESOURCES = 'HUMAN_RESOURCES',
  STRATEGY = 'STRATEGY',
  INNOVATION = 'INNOVATION',
  CONCLUSION = 'CONCLUSION',
  AI_ANALYST = 'AI_ANALYST'
}

export interface ChartDataPoint {
  name: string;
  value: number;
  category?: string;
}

export interface ActionPlanItem {
  action: string;
  content: string;
  result: string;
}
