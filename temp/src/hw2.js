"use strict";

/*
  You are working at an optometrist's office, designing a file system that can
  properly store all files for all patients.
*/

class File {
  constructor(patientName, patientAge, patientEyeColor, patientSerialNumber) {
    this.patientName = patientName;
    this.patientAge = patientAge;
    this.patientEyeColor = patientEyeColor;
    this.patientSerialNumber = patientSerialNumber;
  }

  get patientName() {
    return this.patientName;
  }

  get patientAge() {
    return this.patientAge;
  }

  get patientEyeColor() {
    return this.patientEyeColor;
  }

  get patientSerialNumber() {
    return this.patientSerialNumber;
  }
}

class FileSystem {
  constructor() {
    this.files = [];
  }

  getPatientsByName(name) {
    //
  }

  getPatientsByAge(age) {
    //
  }

  getPatientsByEyeColor(eyeColor) {
    //
  }

  getPatientBySerialNumber(serialNumber) {
    //
  }
}
