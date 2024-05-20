/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createSection } from "../graphql/mutations";
const client = generateClient();
export default function SectionCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    academicYear: "",
    semester: "",
    campusCode: "",
    sectionId: "",
    subjectCode: "",
    flagRegisCon: "",
    subjectNameTh: "",
    subjectNameEn: "",
    maxCredit: "",
    sectionCode: "",
    sectionType: "",
    sectionTypeTh: "",
    sectionTypeEn: "",
    studentStatusCode: "",
    stdStatusTh: "",
    stdStatusEn: "",
    coursedate: "",
    coursedateth: "",
    coursedateen: "",
    totalSeat: "",
    totalRegistered: "",
    teacherName: "",
    teacherNameEn: "",
    roomNameTh: "",
    roomNameEn: "",
    property: "",
    nonProperty: "",
    midternDate: "",
    finalDate: "",
    sectionStatus: "",
    relateSubjectCode: "",
  };
  const [academicYear, setAcademicYear] = React.useState(
    initialValues.academicYear
  );
  const [semester, setSemester] = React.useState(initialValues.semester);
  const [campusCode, setCampusCode] = React.useState(initialValues.campusCode);
  const [sectionId, setSectionId] = React.useState(initialValues.sectionId);
  const [subjectCode, setSubjectCode] = React.useState(
    initialValues.subjectCode
  );
  const [flagRegisCon, setFlagRegisCon] = React.useState(
    initialValues.flagRegisCon
  );
  const [subjectNameTh, setSubjectNameTh] = React.useState(
    initialValues.subjectNameTh
  );
  const [subjectNameEn, setSubjectNameEn] = React.useState(
    initialValues.subjectNameEn
  );
  const [maxCredit, setMaxCredit] = React.useState(initialValues.maxCredit);
  const [sectionCode, setSectionCode] = React.useState(
    initialValues.sectionCode
  );
  const [sectionType, setSectionType] = React.useState(
    initialValues.sectionType
  );
  const [sectionTypeTh, setSectionTypeTh] = React.useState(
    initialValues.sectionTypeTh
  );
  const [sectionTypeEn, setSectionTypeEn] = React.useState(
    initialValues.sectionTypeEn
  );
  const [studentStatusCode, setStudentStatusCode] = React.useState(
    initialValues.studentStatusCode
  );
  const [stdStatusTh, setStdStatusTh] = React.useState(
    initialValues.stdStatusTh
  );
  const [stdStatusEn, setStdStatusEn] = React.useState(
    initialValues.stdStatusEn
  );
  const [coursedate, setCoursedate] = React.useState(initialValues.coursedate);
  const [coursedateth, setCoursedateth] = React.useState(
    initialValues.coursedateth
  );
  const [coursedateen, setCoursedateen] = React.useState(
    initialValues.coursedateen
  );
  const [totalSeat, setTotalSeat] = React.useState(initialValues.totalSeat);
  const [totalRegistered, setTotalRegistered] = React.useState(
    initialValues.totalRegistered
  );
  const [teacherName, setTeacherName] = React.useState(
    initialValues.teacherName
  );
  const [teacherNameEn, setTeacherNameEn] = React.useState(
    initialValues.teacherNameEn
  );
  const [roomNameTh, setRoomNameTh] = React.useState(initialValues.roomNameTh);
  const [roomNameEn, setRoomNameEn] = React.useState(initialValues.roomNameEn);
  const [property, setProperty] = React.useState(initialValues.property);
  const [nonProperty, setNonProperty] = React.useState(
    initialValues.nonProperty
  );
  const [midternDate, setMidternDate] = React.useState(
    initialValues.midternDate
  );
  const [finalDate, setFinalDate] = React.useState(initialValues.finalDate);
  const [sectionStatus, setSectionStatus] = React.useState(
    initialValues.sectionStatus
  );
  const [relateSubjectCode, setRelateSubjectCode] = React.useState(
    initialValues.relateSubjectCode
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setAcademicYear(initialValues.academicYear);
    setSemester(initialValues.semester);
    setCampusCode(initialValues.campusCode);
    setSectionId(initialValues.sectionId);
    setSubjectCode(initialValues.subjectCode);
    setFlagRegisCon(initialValues.flagRegisCon);
    setSubjectNameTh(initialValues.subjectNameTh);
    setSubjectNameEn(initialValues.subjectNameEn);
    setMaxCredit(initialValues.maxCredit);
    setSectionCode(initialValues.sectionCode);
    setSectionType(initialValues.sectionType);
    setSectionTypeTh(initialValues.sectionTypeTh);
    setSectionTypeEn(initialValues.sectionTypeEn);
    setStudentStatusCode(initialValues.studentStatusCode);
    setStdStatusTh(initialValues.stdStatusTh);
    setStdStatusEn(initialValues.stdStatusEn);
    setCoursedate(initialValues.coursedate);
    setCoursedateth(initialValues.coursedateth);
    setCoursedateen(initialValues.coursedateen);
    setTotalSeat(initialValues.totalSeat);
    setTotalRegistered(initialValues.totalRegistered);
    setTeacherName(initialValues.teacherName);
    setTeacherNameEn(initialValues.teacherNameEn);
    setRoomNameTh(initialValues.roomNameTh);
    setRoomNameEn(initialValues.roomNameEn);
    setProperty(initialValues.property);
    setNonProperty(initialValues.nonProperty);
    setMidternDate(initialValues.midternDate);
    setFinalDate(initialValues.finalDate);
    setSectionStatus(initialValues.sectionStatus);
    setRelateSubjectCode(initialValues.relateSubjectCode);
    setErrors({});
  };
  const validations = {
    academicYear: [{ type: "Required" }],
    semester: [{ type: "Required" }],
    campusCode: [{ type: "Required" }],
    sectionId: [{ type: "Required" }],
    subjectCode: [{ type: "Required" }],
    flagRegisCon: [{ type: "Required" }],
    subjectNameTh: [{ type: "Required" }],
    subjectNameEn: [{ type: "Required" }],
    maxCredit: [{ type: "Required" }],
    sectionCode: [{ type: "Required" }],
    sectionType: [{ type: "Required" }],
    sectionTypeTh: [{ type: "Required" }],
    sectionTypeEn: [{ type: "Required" }],
    studentStatusCode: [{ type: "Required" }],
    stdStatusTh: [{ type: "Required" }],
    stdStatusEn: [{ type: "Required" }],
    coursedate: [{ type: "Required" }],
    coursedateth: [{ type: "Required" }],
    coursedateen: [{ type: "Required" }],
    totalSeat: [{ type: "Required" }],
    totalRegistered: [{ type: "Required" }],
    teacherName: [{ type: "Required" }],
    teacherNameEn: [{ type: "Required" }],
    roomNameTh: [{ type: "Required" }],
    roomNameEn: [{ type: "Required" }],
    property: [{ type: "Required" }],
    nonProperty: [{ type: "Required" }],
    midternDate: [{ type: "Required" }],
    finalDate: [{ type: "Required" }],
    sectionStatus: [{ type: "Required" }],
    relateSubjectCode: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          academicYear,
          semester,
          campusCode,
          sectionId,
          subjectCode,
          flagRegisCon,
          subjectNameTh,
          subjectNameEn,
          maxCredit,
          sectionCode,
          sectionType,
          sectionTypeTh,
          sectionTypeEn,
          studentStatusCode,
          stdStatusTh,
          stdStatusEn,
          coursedate,
          coursedateth,
          coursedateen,
          totalSeat,
          totalRegistered,
          teacherName,
          teacherNameEn,
          roomNameTh,
          roomNameEn,
          property,
          nonProperty,
          midternDate,
          finalDate,
          sectionStatus,
          relateSubjectCode,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createSection.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "SectionCreateForm")}
      {...rest}
    >
      <TextField
        label="Academic year"
        isRequired={true}
        isReadOnly={false}
        value={academicYear}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear: value,
              semester,
              campusCode,
              sectionId,
              subjectCode,
              flagRegisCon,
              subjectNameTh,
              subjectNameEn,
              maxCredit,
              sectionCode,
              sectionType,
              sectionTypeTh,
              sectionTypeEn,
              studentStatusCode,
              stdStatusTh,
              stdStatusEn,
              coursedate,
              coursedateth,
              coursedateen,
              totalSeat,
              totalRegistered,
              teacherName,
              teacherNameEn,
              roomNameTh,
              roomNameEn,
              property,
              nonProperty,
              midternDate,
              finalDate,
              sectionStatus,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.academicYear ?? value;
          }
          if (errors.academicYear?.hasError) {
            runValidationTasks("academicYear", value);
          }
          setAcademicYear(value);
        }}
        onBlur={() => runValidationTasks("academicYear", academicYear)}
        errorMessage={errors.academicYear?.errorMessage}
        hasError={errors.academicYear?.hasError}
        {...getOverrideProps(overrides, "academicYear")}
      ></TextField>
      <TextField
        label="Semester"
        isRequired={true}
        isReadOnly={false}
        value={semester}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear,
              semester: value,
              campusCode,
              sectionId,
              subjectCode,
              flagRegisCon,
              subjectNameTh,
              subjectNameEn,
              maxCredit,
              sectionCode,
              sectionType,
              sectionTypeTh,
              sectionTypeEn,
              studentStatusCode,
              stdStatusTh,
              stdStatusEn,
              coursedate,
              coursedateth,
              coursedateen,
              totalSeat,
              totalRegistered,
              teacherName,
              teacherNameEn,
              roomNameTh,
              roomNameEn,
              property,
              nonProperty,
              midternDate,
              finalDate,
              sectionStatus,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.semester ?? value;
          }
          if (errors.semester?.hasError) {
            runValidationTasks("semester", value);
          }
          setSemester(value);
        }}
        onBlur={() => runValidationTasks("semester", semester)}
        errorMessage={errors.semester?.errorMessage}
        hasError={errors.semester?.hasError}
        {...getOverrideProps(overrides, "semester")}
      ></TextField>
      <TextField
        label="Campus code"
        isRequired={true}
        isReadOnly={false}
        value={campusCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear,
              semester,
              campusCode: value,
              sectionId,
              subjectCode,
              flagRegisCon,
              subjectNameTh,
              subjectNameEn,
              maxCredit,
              sectionCode,
              sectionType,
              sectionTypeTh,
              sectionTypeEn,
              studentStatusCode,
              stdStatusTh,
              stdStatusEn,
              coursedate,
              coursedateth,
              coursedateen,
              totalSeat,
              totalRegistered,
              teacherName,
              teacherNameEn,
              roomNameTh,
              roomNameEn,
              property,
              nonProperty,
              midternDate,
              finalDate,
              sectionStatus,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.campusCode ?? value;
          }
          if (errors.campusCode?.hasError) {
            runValidationTasks("campusCode", value);
          }
          setCampusCode(value);
        }}
        onBlur={() => runValidationTasks("campusCode", campusCode)}
        errorMessage={errors.campusCode?.errorMessage}
        hasError={errors.campusCode?.hasError}
        {...getOverrideProps(overrides, "campusCode")}
      ></TextField>
      <TextField
        label="Section id"
        isRequired={true}
        isReadOnly={false}
        value={sectionId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear,
              semester,
              campusCode,
              sectionId: value,
              subjectCode,
              flagRegisCon,
              subjectNameTh,
              subjectNameEn,
              maxCredit,
              sectionCode,
              sectionType,
              sectionTypeTh,
              sectionTypeEn,
              studentStatusCode,
              stdStatusTh,
              stdStatusEn,
              coursedate,
              coursedateth,
              coursedateen,
              totalSeat,
              totalRegistered,
              teacherName,
              teacherNameEn,
              roomNameTh,
              roomNameEn,
              property,
              nonProperty,
              midternDate,
              finalDate,
              sectionStatus,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.sectionId ?? value;
          }
          if (errors.sectionId?.hasError) {
            runValidationTasks("sectionId", value);
          }
          setSectionId(value);
        }}
        onBlur={() => runValidationTasks("sectionId", sectionId)}
        errorMessage={errors.sectionId?.errorMessage}
        hasError={errors.sectionId?.hasError}
        {...getOverrideProps(overrides, "sectionId")}
      ></TextField>
      <TextField
        label="Subject code"
        isRequired={true}
        isReadOnly={false}
        value={subjectCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear,
              semester,
              campusCode,
              sectionId,
              subjectCode: value,
              flagRegisCon,
              subjectNameTh,
              subjectNameEn,
              maxCredit,
              sectionCode,
              sectionType,
              sectionTypeTh,
              sectionTypeEn,
              studentStatusCode,
              stdStatusTh,
              stdStatusEn,
              coursedate,
              coursedateth,
              coursedateen,
              totalSeat,
              totalRegistered,
              teacherName,
              teacherNameEn,
              roomNameTh,
              roomNameEn,
              property,
              nonProperty,
              midternDate,
              finalDate,
              sectionStatus,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.subjectCode ?? value;
          }
          if (errors.subjectCode?.hasError) {
            runValidationTasks("subjectCode", value);
          }
          setSubjectCode(value);
        }}
        onBlur={() => runValidationTasks("subjectCode", subjectCode)}
        errorMessage={errors.subjectCode?.errorMessage}
        hasError={errors.subjectCode?.hasError}
        {...getOverrideProps(overrides, "subjectCode")}
      ></TextField>
      <TextField
        label="Flag regis con"
        isRequired={true}
        isReadOnly={false}
        value={flagRegisCon}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear,
              semester,
              campusCode,
              sectionId,
              subjectCode,
              flagRegisCon: value,
              subjectNameTh,
              subjectNameEn,
              maxCredit,
              sectionCode,
              sectionType,
              sectionTypeTh,
              sectionTypeEn,
              studentStatusCode,
              stdStatusTh,
              stdStatusEn,
              coursedate,
              coursedateth,
              coursedateen,
              totalSeat,
              totalRegistered,
              teacherName,
              teacherNameEn,
              roomNameTh,
              roomNameEn,
              property,
              nonProperty,
              midternDate,
              finalDate,
              sectionStatus,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.flagRegisCon ?? value;
          }
          if (errors.flagRegisCon?.hasError) {
            runValidationTasks("flagRegisCon", value);
          }
          setFlagRegisCon(value);
        }}
        onBlur={() => runValidationTasks("flagRegisCon", flagRegisCon)}
        errorMessage={errors.flagRegisCon?.errorMessage}
        hasError={errors.flagRegisCon?.hasError}
        {...getOverrideProps(overrides, "flagRegisCon")}
      ></TextField>
      <TextField
        label="Subject name th"
        isRequired={true}
        isReadOnly={false}
        value={subjectNameTh}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear,
              semester,
              campusCode,
              sectionId,
              subjectCode,
              flagRegisCon,
              subjectNameTh: value,
              subjectNameEn,
              maxCredit,
              sectionCode,
              sectionType,
              sectionTypeTh,
              sectionTypeEn,
              studentStatusCode,
              stdStatusTh,
              stdStatusEn,
              coursedate,
              coursedateth,
              coursedateen,
              totalSeat,
              totalRegistered,
              teacherName,
              teacherNameEn,
              roomNameTh,
              roomNameEn,
              property,
              nonProperty,
              midternDate,
              finalDate,
              sectionStatus,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.subjectNameTh ?? value;
          }
          if (errors.subjectNameTh?.hasError) {
            runValidationTasks("subjectNameTh", value);
          }
          setSubjectNameTh(value);
        }}
        onBlur={() => runValidationTasks("subjectNameTh", subjectNameTh)}
        errorMessage={errors.subjectNameTh?.errorMessage}
        hasError={errors.subjectNameTh?.hasError}
        {...getOverrideProps(overrides, "subjectNameTh")}
      ></TextField>
      <TextField
        label="Subject name en"
        isRequired={true}
        isReadOnly={false}
        value={subjectNameEn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear,
              semester,
              campusCode,
              sectionId,
              subjectCode,
              flagRegisCon,
              subjectNameTh,
              subjectNameEn: value,
              maxCredit,
              sectionCode,
              sectionType,
              sectionTypeTh,
              sectionTypeEn,
              studentStatusCode,
              stdStatusTh,
              stdStatusEn,
              coursedate,
              coursedateth,
              coursedateen,
              totalSeat,
              totalRegistered,
              teacherName,
              teacherNameEn,
              roomNameTh,
              roomNameEn,
              property,
              nonProperty,
              midternDate,
              finalDate,
              sectionStatus,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.subjectNameEn ?? value;
          }
          if (errors.subjectNameEn?.hasError) {
            runValidationTasks("subjectNameEn", value);
          }
          setSubjectNameEn(value);
        }}
        onBlur={() => runValidationTasks("subjectNameEn", subjectNameEn)}
        errorMessage={errors.subjectNameEn?.errorMessage}
        hasError={errors.subjectNameEn?.hasError}
        {...getOverrideProps(overrides, "subjectNameEn")}
      ></TextField>
      <TextField
        label="Max credit"
        isRequired={true}
        isReadOnly={false}
        value={maxCredit}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear,
              semester,
              campusCode,
              sectionId,
              subjectCode,
              flagRegisCon,
              subjectNameTh,
              subjectNameEn,
              maxCredit: value,
              sectionCode,
              sectionType,
              sectionTypeTh,
              sectionTypeEn,
              studentStatusCode,
              stdStatusTh,
              stdStatusEn,
              coursedate,
              coursedateth,
              coursedateen,
              totalSeat,
              totalRegistered,
              teacherName,
              teacherNameEn,
              roomNameTh,
              roomNameEn,
              property,
              nonProperty,
              midternDate,
              finalDate,
              sectionStatus,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.maxCredit ?? value;
          }
          if (errors.maxCredit?.hasError) {
            runValidationTasks("maxCredit", value);
          }
          setMaxCredit(value);
        }}
        onBlur={() => runValidationTasks("maxCredit", maxCredit)}
        errorMessage={errors.maxCredit?.errorMessage}
        hasError={errors.maxCredit?.hasError}
        {...getOverrideProps(overrides, "maxCredit")}
      ></TextField>
      <TextField
        label="Section code"
        isRequired={true}
        isReadOnly={false}
        value={sectionCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear,
              semester,
              campusCode,
              sectionId,
              subjectCode,
              flagRegisCon,
              subjectNameTh,
              subjectNameEn,
              maxCredit,
              sectionCode: value,
              sectionType,
              sectionTypeTh,
              sectionTypeEn,
              studentStatusCode,
              stdStatusTh,
              stdStatusEn,
              coursedate,
              coursedateth,
              coursedateen,
              totalSeat,
              totalRegistered,
              teacherName,
              teacherNameEn,
              roomNameTh,
              roomNameEn,
              property,
              nonProperty,
              midternDate,
              finalDate,
              sectionStatus,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.sectionCode ?? value;
          }
          if (errors.sectionCode?.hasError) {
            runValidationTasks("sectionCode", value);
          }
          setSectionCode(value);
        }}
        onBlur={() => runValidationTasks("sectionCode", sectionCode)}
        errorMessage={errors.sectionCode?.errorMessage}
        hasError={errors.sectionCode?.hasError}
        {...getOverrideProps(overrides, "sectionCode")}
      ></TextField>
      <TextField
        label="Section type"
        isRequired={true}
        isReadOnly={false}
        value={sectionType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear,
              semester,
              campusCode,
              sectionId,
              subjectCode,
              flagRegisCon,
              subjectNameTh,
              subjectNameEn,
              maxCredit,
              sectionCode,
              sectionType: value,
              sectionTypeTh,
              sectionTypeEn,
              studentStatusCode,
              stdStatusTh,
              stdStatusEn,
              coursedate,
              coursedateth,
              coursedateen,
              totalSeat,
              totalRegistered,
              teacherName,
              teacherNameEn,
              roomNameTh,
              roomNameEn,
              property,
              nonProperty,
              midternDate,
              finalDate,
              sectionStatus,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.sectionType ?? value;
          }
          if (errors.sectionType?.hasError) {
            runValidationTasks("sectionType", value);
          }
          setSectionType(value);
        }}
        onBlur={() => runValidationTasks("sectionType", sectionType)}
        errorMessage={errors.sectionType?.errorMessage}
        hasError={errors.sectionType?.hasError}
        {...getOverrideProps(overrides, "sectionType")}
      ></TextField>
      <TextField
        label="Section type th"
        isRequired={true}
        isReadOnly={false}
        value={sectionTypeTh}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear,
              semester,
              campusCode,
              sectionId,
              subjectCode,
              flagRegisCon,
              subjectNameTh,
              subjectNameEn,
              maxCredit,
              sectionCode,
              sectionType,
              sectionTypeTh: value,
              sectionTypeEn,
              studentStatusCode,
              stdStatusTh,
              stdStatusEn,
              coursedate,
              coursedateth,
              coursedateen,
              totalSeat,
              totalRegistered,
              teacherName,
              teacherNameEn,
              roomNameTh,
              roomNameEn,
              property,
              nonProperty,
              midternDate,
              finalDate,
              sectionStatus,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.sectionTypeTh ?? value;
          }
          if (errors.sectionTypeTh?.hasError) {
            runValidationTasks("sectionTypeTh", value);
          }
          setSectionTypeTh(value);
        }}
        onBlur={() => runValidationTasks("sectionTypeTh", sectionTypeTh)}
        errorMessage={errors.sectionTypeTh?.errorMessage}
        hasError={errors.sectionTypeTh?.hasError}
        {...getOverrideProps(overrides, "sectionTypeTh")}
      ></TextField>
      <TextField
        label="Section type en"
        isRequired={true}
        isReadOnly={false}
        value={sectionTypeEn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear,
              semester,
              campusCode,
              sectionId,
              subjectCode,
              flagRegisCon,
              subjectNameTh,
              subjectNameEn,
              maxCredit,
              sectionCode,
              sectionType,
              sectionTypeTh,
              sectionTypeEn: value,
              studentStatusCode,
              stdStatusTh,
              stdStatusEn,
              coursedate,
              coursedateth,
              coursedateen,
              totalSeat,
              totalRegistered,
              teacherName,
              teacherNameEn,
              roomNameTh,
              roomNameEn,
              property,
              nonProperty,
              midternDate,
              finalDate,
              sectionStatus,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.sectionTypeEn ?? value;
          }
          if (errors.sectionTypeEn?.hasError) {
            runValidationTasks("sectionTypeEn", value);
          }
          setSectionTypeEn(value);
        }}
        onBlur={() => runValidationTasks("sectionTypeEn", sectionTypeEn)}
        errorMessage={errors.sectionTypeEn?.errorMessage}
        hasError={errors.sectionTypeEn?.hasError}
        {...getOverrideProps(overrides, "sectionTypeEn")}
      ></TextField>
      <TextField
        label="Student status code"
        isRequired={true}
        isReadOnly={false}
        value={studentStatusCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear,
              semester,
              campusCode,
              sectionId,
              subjectCode,
              flagRegisCon,
              subjectNameTh,
              subjectNameEn,
              maxCredit,
              sectionCode,
              sectionType,
              sectionTypeTh,
              sectionTypeEn,
              studentStatusCode: value,
              stdStatusTh,
              stdStatusEn,
              coursedate,
              coursedateth,
              coursedateen,
              totalSeat,
              totalRegistered,
              teacherName,
              teacherNameEn,
              roomNameTh,
              roomNameEn,
              property,
              nonProperty,
              midternDate,
              finalDate,
              sectionStatus,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.studentStatusCode ?? value;
          }
          if (errors.studentStatusCode?.hasError) {
            runValidationTasks("studentStatusCode", value);
          }
          setStudentStatusCode(value);
        }}
        onBlur={() =>
          runValidationTasks("studentStatusCode", studentStatusCode)
        }
        errorMessage={errors.studentStatusCode?.errorMessage}
        hasError={errors.studentStatusCode?.hasError}
        {...getOverrideProps(overrides, "studentStatusCode")}
      ></TextField>
      <TextField
        label="Std status th"
        isRequired={true}
        isReadOnly={false}
        value={stdStatusTh}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear,
              semester,
              campusCode,
              sectionId,
              subjectCode,
              flagRegisCon,
              subjectNameTh,
              subjectNameEn,
              maxCredit,
              sectionCode,
              sectionType,
              sectionTypeTh,
              sectionTypeEn,
              studentStatusCode,
              stdStatusTh: value,
              stdStatusEn,
              coursedate,
              coursedateth,
              coursedateen,
              totalSeat,
              totalRegistered,
              teacherName,
              teacherNameEn,
              roomNameTh,
              roomNameEn,
              property,
              nonProperty,
              midternDate,
              finalDate,
              sectionStatus,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.stdStatusTh ?? value;
          }
          if (errors.stdStatusTh?.hasError) {
            runValidationTasks("stdStatusTh", value);
          }
          setStdStatusTh(value);
        }}
        onBlur={() => runValidationTasks("stdStatusTh", stdStatusTh)}
        errorMessage={errors.stdStatusTh?.errorMessage}
        hasError={errors.stdStatusTh?.hasError}
        {...getOverrideProps(overrides, "stdStatusTh")}
      ></TextField>
      <TextField
        label="Std status en"
        isRequired={true}
        isReadOnly={false}
        value={stdStatusEn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear,
              semester,
              campusCode,
              sectionId,
              subjectCode,
              flagRegisCon,
              subjectNameTh,
              subjectNameEn,
              maxCredit,
              sectionCode,
              sectionType,
              sectionTypeTh,
              sectionTypeEn,
              studentStatusCode,
              stdStatusTh,
              stdStatusEn: value,
              coursedate,
              coursedateth,
              coursedateen,
              totalSeat,
              totalRegistered,
              teacherName,
              teacherNameEn,
              roomNameTh,
              roomNameEn,
              property,
              nonProperty,
              midternDate,
              finalDate,
              sectionStatus,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.stdStatusEn ?? value;
          }
          if (errors.stdStatusEn?.hasError) {
            runValidationTasks("stdStatusEn", value);
          }
          setStdStatusEn(value);
        }}
        onBlur={() => runValidationTasks("stdStatusEn", stdStatusEn)}
        errorMessage={errors.stdStatusEn?.errorMessage}
        hasError={errors.stdStatusEn?.hasError}
        {...getOverrideProps(overrides, "stdStatusEn")}
      ></TextField>
      <TextField
        label="Coursedate"
        isRequired={true}
        isReadOnly={false}
        value={coursedate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear,
              semester,
              campusCode,
              sectionId,
              subjectCode,
              flagRegisCon,
              subjectNameTh,
              subjectNameEn,
              maxCredit,
              sectionCode,
              sectionType,
              sectionTypeTh,
              sectionTypeEn,
              studentStatusCode,
              stdStatusTh,
              stdStatusEn,
              coursedate: value,
              coursedateth,
              coursedateen,
              totalSeat,
              totalRegistered,
              teacherName,
              teacherNameEn,
              roomNameTh,
              roomNameEn,
              property,
              nonProperty,
              midternDate,
              finalDate,
              sectionStatus,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.coursedate ?? value;
          }
          if (errors.coursedate?.hasError) {
            runValidationTasks("coursedate", value);
          }
          setCoursedate(value);
        }}
        onBlur={() => runValidationTasks("coursedate", coursedate)}
        errorMessage={errors.coursedate?.errorMessage}
        hasError={errors.coursedate?.hasError}
        {...getOverrideProps(overrides, "coursedate")}
      ></TextField>
      <TextField
        label="Coursedateth"
        isRequired={true}
        isReadOnly={false}
        value={coursedateth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear,
              semester,
              campusCode,
              sectionId,
              subjectCode,
              flagRegisCon,
              subjectNameTh,
              subjectNameEn,
              maxCredit,
              sectionCode,
              sectionType,
              sectionTypeTh,
              sectionTypeEn,
              studentStatusCode,
              stdStatusTh,
              stdStatusEn,
              coursedate,
              coursedateth: value,
              coursedateen,
              totalSeat,
              totalRegistered,
              teacherName,
              teacherNameEn,
              roomNameTh,
              roomNameEn,
              property,
              nonProperty,
              midternDate,
              finalDate,
              sectionStatus,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.coursedateth ?? value;
          }
          if (errors.coursedateth?.hasError) {
            runValidationTasks("coursedateth", value);
          }
          setCoursedateth(value);
        }}
        onBlur={() => runValidationTasks("coursedateth", coursedateth)}
        errorMessage={errors.coursedateth?.errorMessage}
        hasError={errors.coursedateth?.hasError}
        {...getOverrideProps(overrides, "coursedateth")}
      ></TextField>
      <TextField
        label="Coursedateen"
        isRequired={true}
        isReadOnly={false}
        value={coursedateen}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear,
              semester,
              campusCode,
              sectionId,
              subjectCode,
              flagRegisCon,
              subjectNameTh,
              subjectNameEn,
              maxCredit,
              sectionCode,
              sectionType,
              sectionTypeTh,
              sectionTypeEn,
              studentStatusCode,
              stdStatusTh,
              stdStatusEn,
              coursedate,
              coursedateth,
              coursedateen: value,
              totalSeat,
              totalRegistered,
              teacherName,
              teacherNameEn,
              roomNameTh,
              roomNameEn,
              property,
              nonProperty,
              midternDate,
              finalDate,
              sectionStatus,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.coursedateen ?? value;
          }
          if (errors.coursedateen?.hasError) {
            runValidationTasks("coursedateen", value);
          }
          setCoursedateen(value);
        }}
        onBlur={() => runValidationTasks("coursedateen", coursedateen)}
        errorMessage={errors.coursedateen?.errorMessage}
        hasError={errors.coursedateen?.hasError}
        {...getOverrideProps(overrides, "coursedateen")}
      ></TextField>
      <TextField
        label="Total seat"
        isRequired={true}
        isReadOnly={false}
        value={totalSeat}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear,
              semester,
              campusCode,
              sectionId,
              subjectCode,
              flagRegisCon,
              subjectNameTh,
              subjectNameEn,
              maxCredit,
              sectionCode,
              sectionType,
              sectionTypeTh,
              sectionTypeEn,
              studentStatusCode,
              stdStatusTh,
              stdStatusEn,
              coursedate,
              coursedateth,
              coursedateen,
              totalSeat: value,
              totalRegistered,
              teacherName,
              teacherNameEn,
              roomNameTh,
              roomNameEn,
              property,
              nonProperty,
              midternDate,
              finalDate,
              sectionStatus,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.totalSeat ?? value;
          }
          if (errors.totalSeat?.hasError) {
            runValidationTasks("totalSeat", value);
          }
          setTotalSeat(value);
        }}
        onBlur={() => runValidationTasks("totalSeat", totalSeat)}
        errorMessage={errors.totalSeat?.errorMessage}
        hasError={errors.totalSeat?.hasError}
        {...getOverrideProps(overrides, "totalSeat")}
      ></TextField>
      <TextField
        label="Total registered"
        isRequired={true}
        isReadOnly={false}
        value={totalRegistered}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear,
              semester,
              campusCode,
              sectionId,
              subjectCode,
              flagRegisCon,
              subjectNameTh,
              subjectNameEn,
              maxCredit,
              sectionCode,
              sectionType,
              sectionTypeTh,
              sectionTypeEn,
              studentStatusCode,
              stdStatusTh,
              stdStatusEn,
              coursedate,
              coursedateth,
              coursedateen,
              totalSeat,
              totalRegistered: value,
              teacherName,
              teacherNameEn,
              roomNameTh,
              roomNameEn,
              property,
              nonProperty,
              midternDate,
              finalDate,
              sectionStatus,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.totalRegistered ?? value;
          }
          if (errors.totalRegistered?.hasError) {
            runValidationTasks("totalRegistered", value);
          }
          setTotalRegistered(value);
        }}
        onBlur={() => runValidationTasks("totalRegistered", totalRegistered)}
        errorMessage={errors.totalRegistered?.errorMessage}
        hasError={errors.totalRegistered?.hasError}
        {...getOverrideProps(overrides, "totalRegistered")}
      ></TextField>
      <TextField
        label="Teacher name"
        isRequired={true}
        isReadOnly={false}
        value={teacherName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear,
              semester,
              campusCode,
              sectionId,
              subjectCode,
              flagRegisCon,
              subjectNameTh,
              subjectNameEn,
              maxCredit,
              sectionCode,
              sectionType,
              sectionTypeTh,
              sectionTypeEn,
              studentStatusCode,
              stdStatusTh,
              stdStatusEn,
              coursedate,
              coursedateth,
              coursedateen,
              totalSeat,
              totalRegistered,
              teacherName: value,
              teacherNameEn,
              roomNameTh,
              roomNameEn,
              property,
              nonProperty,
              midternDate,
              finalDate,
              sectionStatus,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.teacherName ?? value;
          }
          if (errors.teacherName?.hasError) {
            runValidationTasks("teacherName", value);
          }
          setTeacherName(value);
        }}
        onBlur={() => runValidationTasks("teacherName", teacherName)}
        errorMessage={errors.teacherName?.errorMessage}
        hasError={errors.teacherName?.hasError}
        {...getOverrideProps(overrides, "teacherName")}
      ></TextField>
      <TextField
        label="Teacher name en"
        isRequired={true}
        isReadOnly={false}
        value={teacherNameEn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear,
              semester,
              campusCode,
              sectionId,
              subjectCode,
              flagRegisCon,
              subjectNameTh,
              subjectNameEn,
              maxCredit,
              sectionCode,
              sectionType,
              sectionTypeTh,
              sectionTypeEn,
              studentStatusCode,
              stdStatusTh,
              stdStatusEn,
              coursedate,
              coursedateth,
              coursedateen,
              totalSeat,
              totalRegistered,
              teacherName,
              teacherNameEn: value,
              roomNameTh,
              roomNameEn,
              property,
              nonProperty,
              midternDate,
              finalDate,
              sectionStatus,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.teacherNameEn ?? value;
          }
          if (errors.teacherNameEn?.hasError) {
            runValidationTasks("teacherNameEn", value);
          }
          setTeacherNameEn(value);
        }}
        onBlur={() => runValidationTasks("teacherNameEn", teacherNameEn)}
        errorMessage={errors.teacherNameEn?.errorMessage}
        hasError={errors.teacherNameEn?.hasError}
        {...getOverrideProps(overrides, "teacherNameEn")}
      ></TextField>
      <TextField
        label="Room name th"
        isRequired={true}
        isReadOnly={false}
        value={roomNameTh}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear,
              semester,
              campusCode,
              sectionId,
              subjectCode,
              flagRegisCon,
              subjectNameTh,
              subjectNameEn,
              maxCredit,
              sectionCode,
              sectionType,
              sectionTypeTh,
              sectionTypeEn,
              studentStatusCode,
              stdStatusTh,
              stdStatusEn,
              coursedate,
              coursedateth,
              coursedateen,
              totalSeat,
              totalRegistered,
              teacherName,
              teacherNameEn,
              roomNameTh: value,
              roomNameEn,
              property,
              nonProperty,
              midternDate,
              finalDate,
              sectionStatus,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.roomNameTh ?? value;
          }
          if (errors.roomNameTh?.hasError) {
            runValidationTasks("roomNameTh", value);
          }
          setRoomNameTh(value);
        }}
        onBlur={() => runValidationTasks("roomNameTh", roomNameTh)}
        errorMessage={errors.roomNameTh?.errorMessage}
        hasError={errors.roomNameTh?.hasError}
        {...getOverrideProps(overrides, "roomNameTh")}
      ></TextField>
      <TextField
        label="Room name en"
        isRequired={true}
        isReadOnly={false}
        value={roomNameEn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear,
              semester,
              campusCode,
              sectionId,
              subjectCode,
              flagRegisCon,
              subjectNameTh,
              subjectNameEn,
              maxCredit,
              sectionCode,
              sectionType,
              sectionTypeTh,
              sectionTypeEn,
              studentStatusCode,
              stdStatusTh,
              stdStatusEn,
              coursedate,
              coursedateth,
              coursedateen,
              totalSeat,
              totalRegistered,
              teacherName,
              teacherNameEn,
              roomNameTh,
              roomNameEn: value,
              property,
              nonProperty,
              midternDate,
              finalDate,
              sectionStatus,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.roomNameEn ?? value;
          }
          if (errors.roomNameEn?.hasError) {
            runValidationTasks("roomNameEn", value);
          }
          setRoomNameEn(value);
        }}
        onBlur={() => runValidationTasks("roomNameEn", roomNameEn)}
        errorMessage={errors.roomNameEn?.errorMessage}
        hasError={errors.roomNameEn?.hasError}
        {...getOverrideProps(overrides, "roomNameEn")}
      ></TextField>
      <TextField
        label="Property"
        isRequired={true}
        isReadOnly={false}
        value={property}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear,
              semester,
              campusCode,
              sectionId,
              subjectCode,
              flagRegisCon,
              subjectNameTh,
              subjectNameEn,
              maxCredit,
              sectionCode,
              sectionType,
              sectionTypeTh,
              sectionTypeEn,
              studentStatusCode,
              stdStatusTh,
              stdStatusEn,
              coursedate,
              coursedateth,
              coursedateen,
              totalSeat,
              totalRegistered,
              teacherName,
              teacherNameEn,
              roomNameTh,
              roomNameEn,
              property: value,
              nonProperty,
              midternDate,
              finalDate,
              sectionStatus,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.property ?? value;
          }
          if (errors.property?.hasError) {
            runValidationTasks("property", value);
          }
          setProperty(value);
        }}
        onBlur={() => runValidationTasks("property", property)}
        errorMessage={errors.property?.errorMessage}
        hasError={errors.property?.hasError}
        {...getOverrideProps(overrides, "property")}
      ></TextField>
      <TextField
        label="Non property"
        isRequired={true}
        isReadOnly={false}
        value={nonProperty}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear,
              semester,
              campusCode,
              sectionId,
              subjectCode,
              flagRegisCon,
              subjectNameTh,
              subjectNameEn,
              maxCredit,
              sectionCode,
              sectionType,
              sectionTypeTh,
              sectionTypeEn,
              studentStatusCode,
              stdStatusTh,
              stdStatusEn,
              coursedate,
              coursedateth,
              coursedateen,
              totalSeat,
              totalRegistered,
              teacherName,
              teacherNameEn,
              roomNameTh,
              roomNameEn,
              property,
              nonProperty: value,
              midternDate,
              finalDate,
              sectionStatus,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.nonProperty ?? value;
          }
          if (errors.nonProperty?.hasError) {
            runValidationTasks("nonProperty", value);
          }
          setNonProperty(value);
        }}
        onBlur={() => runValidationTasks("nonProperty", nonProperty)}
        errorMessage={errors.nonProperty?.errorMessage}
        hasError={errors.nonProperty?.hasError}
        {...getOverrideProps(overrides, "nonProperty")}
      ></TextField>
      <TextField
        label="Midtern date"
        isRequired={true}
        isReadOnly={false}
        value={midternDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear,
              semester,
              campusCode,
              sectionId,
              subjectCode,
              flagRegisCon,
              subjectNameTh,
              subjectNameEn,
              maxCredit,
              sectionCode,
              sectionType,
              sectionTypeTh,
              sectionTypeEn,
              studentStatusCode,
              stdStatusTh,
              stdStatusEn,
              coursedate,
              coursedateth,
              coursedateen,
              totalSeat,
              totalRegistered,
              teacherName,
              teacherNameEn,
              roomNameTh,
              roomNameEn,
              property,
              nonProperty,
              midternDate: value,
              finalDate,
              sectionStatus,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.midternDate ?? value;
          }
          if (errors.midternDate?.hasError) {
            runValidationTasks("midternDate", value);
          }
          setMidternDate(value);
        }}
        onBlur={() => runValidationTasks("midternDate", midternDate)}
        errorMessage={errors.midternDate?.errorMessage}
        hasError={errors.midternDate?.hasError}
        {...getOverrideProps(overrides, "midternDate")}
      ></TextField>
      <TextField
        label="Final date"
        isRequired={true}
        isReadOnly={false}
        value={finalDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear,
              semester,
              campusCode,
              sectionId,
              subjectCode,
              flagRegisCon,
              subjectNameTh,
              subjectNameEn,
              maxCredit,
              sectionCode,
              sectionType,
              sectionTypeTh,
              sectionTypeEn,
              studentStatusCode,
              stdStatusTh,
              stdStatusEn,
              coursedate,
              coursedateth,
              coursedateen,
              totalSeat,
              totalRegistered,
              teacherName,
              teacherNameEn,
              roomNameTh,
              roomNameEn,
              property,
              nonProperty,
              midternDate,
              finalDate: value,
              sectionStatus,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.finalDate ?? value;
          }
          if (errors.finalDate?.hasError) {
            runValidationTasks("finalDate", value);
          }
          setFinalDate(value);
        }}
        onBlur={() => runValidationTasks("finalDate", finalDate)}
        errorMessage={errors.finalDate?.errorMessage}
        hasError={errors.finalDate?.hasError}
        {...getOverrideProps(overrides, "finalDate")}
      ></TextField>
      <TextField
        label="Section status"
        isRequired={true}
        isReadOnly={false}
        value={sectionStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear,
              semester,
              campusCode,
              sectionId,
              subjectCode,
              flagRegisCon,
              subjectNameTh,
              subjectNameEn,
              maxCredit,
              sectionCode,
              sectionType,
              sectionTypeTh,
              sectionTypeEn,
              studentStatusCode,
              stdStatusTh,
              stdStatusEn,
              coursedate,
              coursedateth,
              coursedateen,
              totalSeat,
              totalRegistered,
              teacherName,
              teacherNameEn,
              roomNameTh,
              roomNameEn,
              property,
              nonProperty,
              midternDate,
              finalDate,
              sectionStatus: value,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.sectionStatus ?? value;
          }
          if (errors.sectionStatus?.hasError) {
            runValidationTasks("sectionStatus", value);
          }
          setSectionStatus(value);
        }}
        onBlur={() => runValidationTasks("sectionStatus", sectionStatus)}
        errorMessage={errors.sectionStatus?.errorMessage}
        hasError={errors.sectionStatus?.hasError}
        {...getOverrideProps(overrides, "sectionStatus")}
      ></TextField>
      <TextField
        label="Relate subject code"
        isRequired={true}
        isReadOnly={false}
        value={relateSubjectCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              academicYear,
              semester,
              campusCode,
              sectionId,
              subjectCode,
              flagRegisCon,
              subjectNameTh,
              subjectNameEn,
              maxCredit,
              sectionCode,
              sectionType,
              sectionTypeTh,
              sectionTypeEn,
              studentStatusCode,
              stdStatusTh,
              stdStatusEn,
              coursedate,
              coursedateth,
              coursedateen,
              totalSeat,
              totalRegistered,
              teacherName,
              teacherNameEn,
              roomNameTh,
              roomNameEn,
              property,
              nonProperty,
              midternDate,
              finalDate,
              sectionStatus,
              relateSubjectCode: value,
            };
            const result = onChange(modelFields);
            value = result?.relateSubjectCode ?? value;
          }
          if (errors.relateSubjectCode?.hasError) {
            runValidationTasks("relateSubjectCode", value);
          }
          setRelateSubjectCode(value);
        }}
        onBlur={() =>
          runValidationTasks("relateSubjectCode", relateSubjectCode)
        }
        errorMessage={errors.relateSubjectCode?.errorMessage}
        hasError={errors.relateSubjectCode?.hasError}
        {...getOverrideProps(overrides, "relateSubjectCode")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
