"use strict";

/*
  Implement an algorithm that determines when everyone in your company is available for a meeting. Each meeting is represented as a tuple with a start and end time, with the numerical value being the number of 30-minute blocks starting at 0900h:

  {
    startTime: 2, // 1000h
    endTime: 3 // 1030h
  }
  
  {
    startTime: 6, // 1200h
    endTime: 9 // 1330h
  }

  The function should be able to merge multiple meeting time ranges into a list of condensed ranges. You also cannot assume the meetings are in order, as they are coming from multiple different teams.
  
  α.

  Input: [{0, 1}, {3, 5}, {4, 8}, {10, 12}, {9, 10}], where each element is an object in { startTime, endTime } form, e.g. the first meeting is 0900h - 0930h.
  Output: [{0, 1}, {3, 8}, {9, 12}]
*/
export function mergeMeetingRanges(meetings) {}
