export type EVENT = {
  title: string;
  description: string;
  exactTime: number;
};

export type MARKED_EVENT = {
  marked: boolean;
  dotColor: string;
};

export type EVENTS_DATA_TYPE = {
  [key: string]: EVENT[];
};

export type MARKED_EVENTS_TYPE = {
  [key: string]: MARKED_EVENT;
};
