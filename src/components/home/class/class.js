import raw_subjects from "../../../data/raw_subjects";

export class Section {
  constructor(sectionData) {
    this.sectionId = sectionData.sectionId;
    this.subjectCode = sectionData.subjectCode;
    this.flagRegisCon = sectionData.flagRegisCon;
    this.subjectNameTh = sectionData.subjectNameTh;
    this.subjectNameEn = sectionData.subjectNameEn;
    this.maxCredit = sectionData.maxCredit;
    this.sectionCode = sectionData.sectionCode;
    this.sectionType = sectionData.sectionType;
    this.sectionTypeTh = sectionData.sectionTypeTh;
    this.sectionTypeEn = sectionData.sectionTypeEn;
    this.studentStatusCode = sectionData.studentStatusCode;
    this.stdStatusTh = sectionData.stdStatusTh;
    this.stdStatusEn = sectionData.stdStatusEn;
    this.coursedate = sectionData.coursedate;
    this.coursedateth = sectionData.coursedateth;
    this.coursedateen = sectionData.coursedateen;
    this.totalSeat = sectionData.totalSeat;
    this.totalRegistered = sectionData.totalRegistered;
    this.teacherName = sectionData.teacherName;
    this.teacherNameEn = sectionData.teacherNameEn;
    this.roomNameTh = sectionData.roomNameTh;
    this.roomNameEn = sectionData.roomNameEn;
    this.property = sectionData.property;
    this.nonProperty = sectionData.nonProperty;
    this.midternDate = sectionData.midternDate;
    this.finalDate = sectionData.finalDate;
    this.sectionStatus = sectionData.sectionStatus;
    this.relateSubjectCode = sectionData.relateSubjectCode;
  }
}

export class Subject {
  constructor(subjectData) {
    this.subjectCode = subjectData.subjectCode;
    this.subjectNameTh = subjectData.subjectNameTh;
    this.subjectNameEn = subjectData.subjectNameEn;
    this.credit = subjectData.credit;
    this.theoryHour = subjectData.theoryHour;
    this.practiceHour = subjectData.practiceHour;
    this.selfHour = subjectData.selfHour;
    this.subjectType = subjectData.subjectType;
    this.flagCur = subjectData.flagCur;
    this.creditShow = subjectData.creditShow;
    this.relateSubjectCode = subjectData.relateSubjectCode;

    this.sections = subjectData.sections.map(
      (sectionData) => new Section(sectionData)
    );
  }
}

const subjects = raw_subjects.map((subject) => new Subject(subject));

export { subjects };
