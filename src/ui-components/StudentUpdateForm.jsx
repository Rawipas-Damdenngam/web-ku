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
import { getStudent } from "../graphql/queries";
import { updateStudent } from "../graphql/mutations";
const client = generateClient();
export default function StudentUpdateForm(props) {
  const {
    id: idProp,
    student: studentModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    loginName: "",
    stdId: "",
    stdCode: "",
    titleTh: "",
    titleEn: "",
    firstNameTh: "",
    middleNameTh: "",
    lastNameTh: "",
    firstNameEn: "",
    middleNameEn: "",
    lastNameEn: "",
    copenId: "",
    copenNameTh: "",
    copenNameEn: "",
    campusCode: "",
    campusNameTh: "",
    campusNameEn: "",
    facultyCode: "",
    facultyNameTh: "",
    facultyNameEn: "",
    departmentCode: "",
    departmentNameTh: "",
    departmentNameEn: "",
    majorCode: "",
    majorNameTh: "",
    majorNameEn: "",
    nationCode: "",
    nationalityNameTh: "",
    nationalityNameEn: "",
    studentStatusCode: "",
    studentStatusNameTh: "",
    studentStatusNameEn: "",
    studentTypeCode: "",
    studentTypeNameTh: "",
    studentTypeNameEn: "",
    edulevelCode: "",
    edulevelNameTh: "",
    edulevelNameEn: "",
    studentYear: "",
    advisorId: "",
    advisorNameTh: "",
    advisorNameEn: "",
    positionTh: "",
    email: "",
    mobileNo: "",
  };
  const [loginName, setLoginName] = React.useState(initialValues.loginName);
  const [stdId, setStdId] = React.useState(initialValues.stdId);
  const [stdCode, setStdCode] = React.useState(initialValues.stdCode);
  const [titleTh, setTitleTh] = React.useState(initialValues.titleTh);
  const [titleEn, setTitleEn] = React.useState(initialValues.titleEn);
  const [firstNameTh, setFirstNameTh] = React.useState(
    initialValues.firstNameTh
  );
  const [middleNameTh, setMiddleNameTh] = React.useState(
    initialValues.middleNameTh
  );
  const [lastNameTh, setLastNameTh] = React.useState(initialValues.lastNameTh);
  const [firstNameEn, setFirstNameEn] = React.useState(
    initialValues.firstNameEn
  );
  const [middleNameEn, setMiddleNameEn] = React.useState(
    initialValues.middleNameEn
  );
  const [lastNameEn, setLastNameEn] = React.useState(initialValues.lastNameEn);
  const [copenId, setCopenId] = React.useState(initialValues.copenId);
  const [copenNameTh, setCopenNameTh] = React.useState(
    initialValues.copenNameTh
  );
  const [copenNameEn, setCopenNameEn] = React.useState(
    initialValues.copenNameEn
  );
  const [campusCode, setCampusCode] = React.useState(initialValues.campusCode);
  const [campusNameTh, setCampusNameTh] = React.useState(
    initialValues.campusNameTh
  );
  const [campusNameEn, setCampusNameEn] = React.useState(
    initialValues.campusNameEn
  );
  const [facultyCode, setFacultyCode] = React.useState(
    initialValues.facultyCode
  );
  const [facultyNameTh, setFacultyNameTh] = React.useState(
    initialValues.facultyNameTh
  );
  const [facultyNameEn, setFacultyNameEn] = React.useState(
    initialValues.facultyNameEn
  );
  const [departmentCode, setDepartmentCode] = React.useState(
    initialValues.departmentCode
  );
  const [departmentNameTh, setDepartmentNameTh] = React.useState(
    initialValues.departmentNameTh
  );
  const [departmentNameEn, setDepartmentNameEn] = React.useState(
    initialValues.departmentNameEn
  );
  const [majorCode, setMajorCode] = React.useState(initialValues.majorCode);
  const [majorNameTh, setMajorNameTh] = React.useState(
    initialValues.majorNameTh
  );
  const [majorNameEn, setMajorNameEn] = React.useState(
    initialValues.majorNameEn
  );
  const [nationCode, setNationCode] = React.useState(initialValues.nationCode);
  const [nationalityNameTh, setNationalityNameTh] = React.useState(
    initialValues.nationalityNameTh
  );
  const [nationalityNameEn, setNationalityNameEn] = React.useState(
    initialValues.nationalityNameEn
  );
  const [studentStatusCode, setStudentStatusCode] = React.useState(
    initialValues.studentStatusCode
  );
  const [studentStatusNameTh, setStudentStatusNameTh] = React.useState(
    initialValues.studentStatusNameTh
  );
  const [studentStatusNameEn, setStudentStatusNameEn] = React.useState(
    initialValues.studentStatusNameEn
  );
  const [studentTypeCode, setStudentTypeCode] = React.useState(
    initialValues.studentTypeCode
  );
  const [studentTypeNameTh, setStudentTypeNameTh] = React.useState(
    initialValues.studentTypeNameTh
  );
  const [studentTypeNameEn, setStudentTypeNameEn] = React.useState(
    initialValues.studentTypeNameEn
  );
  const [edulevelCode, setEdulevelCode] = React.useState(
    initialValues.edulevelCode
  );
  const [edulevelNameTh, setEdulevelNameTh] = React.useState(
    initialValues.edulevelNameTh
  );
  const [edulevelNameEn, setEdulevelNameEn] = React.useState(
    initialValues.edulevelNameEn
  );
  const [studentYear, setStudentYear] = React.useState(
    initialValues.studentYear
  );
  const [advisorId, setAdvisorId] = React.useState(initialValues.advisorId);
  const [advisorNameTh, setAdvisorNameTh] = React.useState(
    initialValues.advisorNameTh
  );
  const [advisorNameEn, setAdvisorNameEn] = React.useState(
    initialValues.advisorNameEn
  );
  const [positionTh, setPositionTh] = React.useState(initialValues.positionTh);
  const [email, setEmail] = React.useState(initialValues.email);
  const [mobileNo, setMobileNo] = React.useState(initialValues.mobileNo);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = studentRecord
      ? { ...initialValues, ...studentRecord }
      : initialValues;
    setLoginName(cleanValues.loginName);
    setStdId(cleanValues.stdId);
    setStdCode(cleanValues.stdCode);
    setTitleTh(cleanValues.titleTh);
    setTitleEn(cleanValues.titleEn);
    setFirstNameTh(cleanValues.firstNameTh);
    setMiddleNameTh(cleanValues.middleNameTh);
    setLastNameTh(cleanValues.lastNameTh);
    setFirstNameEn(cleanValues.firstNameEn);
    setMiddleNameEn(cleanValues.middleNameEn);
    setLastNameEn(cleanValues.lastNameEn);
    setCopenId(cleanValues.copenId);
    setCopenNameTh(cleanValues.copenNameTh);
    setCopenNameEn(cleanValues.copenNameEn);
    setCampusCode(cleanValues.campusCode);
    setCampusNameTh(cleanValues.campusNameTh);
    setCampusNameEn(cleanValues.campusNameEn);
    setFacultyCode(cleanValues.facultyCode);
    setFacultyNameTh(cleanValues.facultyNameTh);
    setFacultyNameEn(cleanValues.facultyNameEn);
    setDepartmentCode(cleanValues.departmentCode);
    setDepartmentNameTh(cleanValues.departmentNameTh);
    setDepartmentNameEn(cleanValues.departmentNameEn);
    setMajorCode(cleanValues.majorCode);
    setMajorNameTh(cleanValues.majorNameTh);
    setMajorNameEn(cleanValues.majorNameEn);
    setNationCode(cleanValues.nationCode);
    setNationalityNameTh(cleanValues.nationalityNameTh);
    setNationalityNameEn(cleanValues.nationalityNameEn);
    setStudentStatusCode(cleanValues.studentStatusCode);
    setStudentStatusNameTh(cleanValues.studentStatusNameTh);
    setStudentStatusNameEn(cleanValues.studentStatusNameEn);
    setStudentTypeCode(cleanValues.studentTypeCode);
    setStudentTypeNameTh(cleanValues.studentTypeNameTh);
    setStudentTypeNameEn(cleanValues.studentTypeNameEn);
    setEdulevelCode(cleanValues.edulevelCode);
    setEdulevelNameTh(cleanValues.edulevelNameTh);
    setEdulevelNameEn(cleanValues.edulevelNameEn);
    setStudentYear(cleanValues.studentYear);
    setAdvisorId(cleanValues.advisorId);
    setAdvisorNameTh(cleanValues.advisorNameTh);
    setAdvisorNameEn(cleanValues.advisorNameEn);
    setPositionTh(cleanValues.positionTh);
    setEmail(cleanValues.email);
    setMobileNo(cleanValues.mobileNo);
    setErrors({});
  };
  const [studentRecord, setStudentRecord] = React.useState(studentModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getStudent.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getStudent
        : studentModelProp;
      setStudentRecord(record);
    };
    queryData();
  }, [idProp, studentModelProp]);
  React.useEffect(resetStateValues, [studentRecord]);
  const validations = {
    loginName: [{ type: "Required" }],
    stdId: [{ type: "Required" }],
    stdCode: [{ type: "Required" }],
    titleTh: [{ type: "Required" }],
    titleEn: [{ type: "Required" }],
    firstNameTh: [{ type: "Required" }],
    middleNameTh: [],
    lastNameTh: [{ type: "Required" }],
    firstNameEn: [{ type: "Required" }],
    middleNameEn: [],
    lastNameEn: [{ type: "Required" }],
    copenId: [{ type: "Required" }],
    copenNameTh: [{ type: "Required" }],
    copenNameEn: [{ type: "Required" }],
    campusCode: [{ type: "Required" }],
    campusNameTh: [{ type: "Required" }],
    campusNameEn: [{ type: "Required" }],
    facultyCode: [{ type: "Required" }],
    facultyNameTh: [{ type: "Required" }],
    facultyNameEn: [{ type: "Required" }],
    departmentCode: [{ type: "Required" }],
    departmentNameTh: [{ type: "Required" }],
    departmentNameEn: [{ type: "Required" }],
    majorCode: [{ type: "Required" }],
    majorNameTh: [{ type: "Required" }],
    majorNameEn: [{ type: "Required" }],
    nationCode: [{ type: "Required" }],
    nationalityNameTh: [{ type: "Required" }],
    nationalityNameEn: [{ type: "Required" }],
    studentStatusCode: [{ type: "Required" }],
    studentStatusNameTh: [{ type: "Required" }],
    studentStatusNameEn: [{ type: "Required" }],
    studentTypeCode: [{ type: "Required" }],
    studentTypeNameTh: [{ type: "Required" }],
    studentTypeNameEn: [{ type: "Required" }],
    edulevelCode: [{ type: "Required" }],
    edulevelNameTh: [{ type: "Required" }],
    edulevelNameEn: [{ type: "Required" }],
    studentYear: [{ type: "Required" }],
    advisorId: [{ type: "Required" }],
    advisorNameTh: [{ type: "Required" }],
    advisorNameEn: [{ type: "Required" }],
    positionTh: [{ type: "Required" }],
    email: [{ type: "Required" }],
    mobileNo: [{ type: "Required" }],
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
          loginName,
          stdId,
          stdCode,
          titleTh,
          titleEn,
          firstNameTh,
          middleNameTh: middleNameTh ?? null,
          lastNameTh,
          firstNameEn,
          middleNameEn: middleNameEn ?? null,
          lastNameEn,
          copenId,
          copenNameTh,
          copenNameEn,
          campusCode,
          campusNameTh,
          campusNameEn,
          facultyCode,
          facultyNameTh,
          facultyNameEn,
          departmentCode,
          departmentNameTh,
          departmentNameEn,
          majorCode,
          majorNameTh,
          majorNameEn,
          nationCode,
          nationalityNameTh,
          nationalityNameEn,
          studentStatusCode,
          studentStatusNameTh,
          studentStatusNameEn,
          studentTypeCode,
          studentTypeNameTh,
          studentTypeNameEn,
          edulevelCode,
          edulevelNameTh,
          edulevelNameEn,
          studentYear,
          advisorId,
          advisorNameTh,
          advisorNameEn,
          positionTh,
          email,
          mobileNo,
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
            query: updateStudent.replaceAll("__typename", ""),
            variables: {
              input: {
                id: studentRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "StudentUpdateForm")}
      {...rest}
    >
      <TextField
        label="Login name"
        isRequired={true}
        isReadOnly={false}
        value={loginName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName: value,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.loginName ?? value;
          }
          if (errors.loginName?.hasError) {
            runValidationTasks("loginName", value);
          }
          setLoginName(value);
        }}
        onBlur={() => runValidationTasks("loginName", loginName)}
        errorMessage={errors.loginName?.errorMessage}
        hasError={errors.loginName?.hasError}
        {...getOverrideProps(overrides, "loginName")}
      ></TextField>
      <TextField
        label="Std id"
        isRequired={true}
        isReadOnly={false}
        value={stdId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId: value,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.stdId ?? value;
          }
          if (errors.stdId?.hasError) {
            runValidationTasks("stdId", value);
          }
          setStdId(value);
        }}
        onBlur={() => runValidationTasks("stdId", stdId)}
        errorMessage={errors.stdId?.errorMessage}
        hasError={errors.stdId?.hasError}
        {...getOverrideProps(overrides, "stdId")}
      ></TextField>
      <TextField
        label="Std code"
        isRequired={true}
        isReadOnly={false}
        value={stdCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode: value,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.stdCode ?? value;
          }
          if (errors.stdCode?.hasError) {
            runValidationTasks("stdCode", value);
          }
          setStdCode(value);
        }}
        onBlur={() => runValidationTasks("stdCode", stdCode)}
        errorMessage={errors.stdCode?.errorMessage}
        hasError={errors.stdCode?.hasError}
        {...getOverrideProps(overrides, "stdCode")}
      ></TextField>
      <TextField
        label="Title th"
        isRequired={true}
        isReadOnly={false}
        value={titleTh}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh: value,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.titleTh ?? value;
          }
          if (errors.titleTh?.hasError) {
            runValidationTasks("titleTh", value);
          }
          setTitleTh(value);
        }}
        onBlur={() => runValidationTasks("titleTh", titleTh)}
        errorMessage={errors.titleTh?.errorMessage}
        hasError={errors.titleTh?.hasError}
        {...getOverrideProps(overrides, "titleTh")}
      ></TextField>
      <TextField
        label="Title en"
        isRequired={true}
        isReadOnly={false}
        value={titleEn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn: value,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.titleEn ?? value;
          }
          if (errors.titleEn?.hasError) {
            runValidationTasks("titleEn", value);
          }
          setTitleEn(value);
        }}
        onBlur={() => runValidationTasks("titleEn", titleEn)}
        errorMessage={errors.titleEn?.errorMessage}
        hasError={errors.titleEn?.hasError}
        {...getOverrideProps(overrides, "titleEn")}
      ></TextField>
      <TextField
        label="First name th"
        isRequired={true}
        isReadOnly={false}
        value={firstNameTh}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh: value,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.firstNameTh ?? value;
          }
          if (errors.firstNameTh?.hasError) {
            runValidationTasks("firstNameTh", value);
          }
          setFirstNameTh(value);
        }}
        onBlur={() => runValidationTasks("firstNameTh", firstNameTh)}
        errorMessage={errors.firstNameTh?.errorMessage}
        hasError={errors.firstNameTh?.hasError}
        {...getOverrideProps(overrides, "firstNameTh")}
      ></TextField>
      <TextField
        label="Middle name th"
        isRequired={false}
        isReadOnly={false}
        value={middleNameTh}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh: value,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.middleNameTh ?? value;
          }
          if (errors.middleNameTh?.hasError) {
            runValidationTasks("middleNameTh", value);
          }
          setMiddleNameTh(value);
        }}
        onBlur={() => runValidationTasks("middleNameTh", middleNameTh)}
        errorMessage={errors.middleNameTh?.errorMessage}
        hasError={errors.middleNameTh?.hasError}
        {...getOverrideProps(overrides, "middleNameTh")}
      ></TextField>
      <TextField
        label="Last name th"
        isRequired={true}
        isReadOnly={false}
        value={lastNameTh}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh: value,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.lastNameTh ?? value;
          }
          if (errors.lastNameTh?.hasError) {
            runValidationTasks("lastNameTh", value);
          }
          setLastNameTh(value);
        }}
        onBlur={() => runValidationTasks("lastNameTh", lastNameTh)}
        errorMessage={errors.lastNameTh?.errorMessage}
        hasError={errors.lastNameTh?.hasError}
        {...getOverrideProps(overrides, "lastNameTh")}
      ></TextField>
      <TextField
        label="First name en"
        isRequired={true}
        isReadOnly={false}
        value={firstNameEn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn: value,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.firstNameEn ?? value;
          }
          if (errors.firstNameEn?.hasError) {
            runValidationTasks("firstNameEn", value);
          }
          setFirstNameEn(value);
        }}
        onBlur={() => runValidationTasks("firstNameEn", firstNameEn)}
        errorMessage={errors.firstNameEn?.errorMessage}
        hasError={errors.firstNameEn?.hasError}
        {...getOverrideProps(overrides, "firstNameEn")}
      ></TextField>
      <TextField
        label="Middle name en"
        isRequired={false}
        isReadOnly={false}
        value={middleNameEn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn: value,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.middleNameEn ?? value;
          }
          if (errors.middleNameEn?.hasError) {
            runValidationTasks("middleNameEn", value);
          }
          setMiddleNameEn(value);
        }}
        onBlur={() => runValidationTasks("middleNameEn", middleNameEn)}
        errorMessage={errors.middleNameEn?.errorMessage}
        hasError={errors.middleNameEn?.hasError}
        {...getOverrideProps(overrides, "middleNameEn")}
      ></TextField>
      <TextField
        label="Last name en"
        isRequired={true}
        isReadOnly={false}
        value={lastNameEn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn: value,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.lastNameEn ?? value;
          }
          if (errors.lastNameEn?.hasError) {
            runValidationTasks("lastNameEn", value);
          }
          setLastNameEn(value);
        }}
        onBlur={() => runValidationTasks("lastNameEn", lastNameEn)}
        errorMessage={errors.lastNameEn?.errorMessage}
        hasError={errors.lastNameEn?.hasError}
        {...getOverrideProps(overrides, "lastNameEn")}
      ></TextField>
      <TextField
        label="Copen id"
        isRequired={true}
        isReadOnly={false}
        value={copenId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId: value,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.copenId ?? value;
          }
          if (errors.copenId?.hasError) {
            runValidationTasks("copenId", value);
          }
          setCopenId(value);
        }}
        onBlur={() => runValidationTasks("copenId", copenId)}
        errorMessage={errors.copenId?.errorMessage}
        hasError={errors.copenId?.hasError}
        {...getOverrideProps(overrides, "copenId")}
      ></TextField>
      <TextField
        label="Copen name th"
        isRequired={true}
        isReadOnly={false}
        value={copenNameTh}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh: value,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.copenNameTh ?? value;
          }
          if (errors.copenNameTh?.hasError) {
            runValidationTasks("copenNameTh", value);
          }
          setCopenNameTh(value);
        }}
        onBlur={() => runValidationTasks("copenNameTh", copenNameTh)}
        errorMessage={errors.copenNameTh?.errorMessage}
        hasError={errors.copenNameTh?.hasError}
        {...getOverrideProps(overrides, "copenNameTh")}
      ></TextField>
      <TextField
        label="Copen name en"
        isRequired={true}
        isReadOnly={false}
        value={copenNameEn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn: value,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.copenNameEn ?? value;
          }
          if (errors.copenNameEn?.hasError) {
            runValidationTasks("copenNameEn", value);
          }
          setCopenNameEn(value);
        }}
        onBlur={() => runValidationTasks("copenNameEn", copenNameEn)}
        errorMessage={errors.copenNameEn?.errorMessage}
        hasError={errors.copenNameEn?.hasError}
        {...getOverrideProps(overrides, "copenNameEn")}
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
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode: value,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
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
        label="Campus name th"
        isRequired={true}
        isReadOnly={false}
        value={campusNameTh}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh: value,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.campusNameTh ?? value;
          }
          if (errors.campusNameTh?.hasError) {
            runValidationTasks("campusNameTh", value);
          }
          setCampusNameTh(value);
        }}
        onBlur={() => runValidationTasks("campusNameTh", campusNameTh)}
        errorMessage={errors.campusNameTh?.errorMessage}
        hasError={errors.campusNameTh?.hasError}
        {...getOverrideProps(overrides, "campusNameTh")}
      ></TextField>
      <TextField
        label="Campus name en"
        isRequired={true}
        isReadOnly={false}
        value={campusNameEn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn: value,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.campusNameEn ?? value;
          }
          if (errors.campusNameEn?.hasError) {
            runValidationTasks("campusNameEn", value);
          }
          setCampusNameEn(value);
        }}
        onBlur={() => runValidationTasks("campusNameEn", campusNameEn)}
        errorMessage={errors.campusNameEn?.errorMessage}
        hasError={errors.campusNameEn?.hasError}
        {...getOverrideProps(overrides, "campusNameEn")}
      ></TextField>
      <TextField
        label="Faculty code"
        isRequired={true}
        isReadOnly={false}
        value={facultyCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode: value,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.facultyCode ?? value;
          }
          if (errors.facultyCode?.hasError) {
            runValidationTasks("facultyCode", value);
          }
          setFacultyCode(value);
        }}
        onBlur={() => runValidationTasks("facultyCode", facultyCode)}
        errorMessage={errors.facultyCode?.errorMessage}
        hasError={errors.facultyCode?.hasError}
        {...getOverrideProps(overrides, "facultyCode")}
      ></TextField>
      <TextField
        label="Faculty name th"
        isRequired={true}
        isReadOnly={false}
        value={facultyNameTh}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh: value,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.facultyNameTh ?? value;
          }
          if (errors.facultyNameTh?.hasError) {
            runValidationTasks("facultyNameTh", value);
          }
          setFacultyNameTh(value);
        }}
        onBlur={() => runValidationTasks("facultyNameTh", facultyNameTh)}
        errorMessage={errors.facultyNameTh?.errorMessage}
        hasError={errors.facultyNameTh?.hasError}
        {...getOverrideProps(overrides, "facultyNameTh")}
      ></TextField>
      <TextField
        label="Faculty name en"
        isRequired={true}
        isReadOnly={false}
        value={facultyNameEn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn: value,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.facultyNameEn ?? value;
          }
          if (errors.facultyNameEn?.hasError) {
            runValidationTasks("facultyNameEn", value);
          }
          setFacultyNameEn(value);
        }}
        onBlur={() => runValidationTasks("facultyNameEn", facultyNameEn)}
        errorMessage={errors.facultyNameEn?.errorMessage}
        hasError={errors.facultyNameEn?.hasError}
        {...getOverrideProps(overrides, "facultyNameEn")}
      ></TextField>
      <TextField
        label="Department code"
        isRequired={true}
        isReadOnly={false}
        value={departmentCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode: value,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.departmentCode ?? value;
          }
          if (errors.departmentCode?.hasError) {
            runValidationTasks("departmentCode", value);
          }
          setDepartmentCode(value);
        }}
        onBlur={() => runValidationTasks("departmentCode", departmentCode)}
        errorMessage={errors.departmentCode?.errorMessage}
        hasError={errors.departmentCode?.hasError}
        {...getOverrideProps(overrides, "departmentCode")}
      ></TextField>
      <TextField
        label="Department name th"
        isRequired={true}
        isReadOnly={false}
        value={departmentNameTh}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh: value,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.departmentNameTh ?? value;
          }
          if (errors.departmentNameTh?.hasError) {
            runValidationTasks("departmentNameTh", value);
          }
          setDepartmentNameTh(value);
        }}
        onBlur={() => runValidationTasks("departmentNameTh", departmentNameTh)}
        errorMessage={errors.departmentNameTh?.errorMessage}
        hasError={errors.departmentNameTh?.hasError}
        {...getOverrideProps(overrides, "departmentNameTh")}
      ></TextField>
      <TextField
        label="Department name en"
        isRequired={true}
        isReadOnly={false}
        value={departmentNameEn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn: value,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.departmentNameEn ?? value;
          }
          if (errors.departmentNameEn?.hasError) {
            runValidationTasks("departmentNameEn", value);
          }
          setDepartmentNameEn(value);
        }}
        onBlur={() => runValidationTasks("departmentNameEn", departmentNameEn)}
        errorMessage={errors.departmentNameEn?.errorMessage}
        hasError={errors.departmentNameEn?.hasError}
        {...getOverrideProps(overrides, "departmentNameEn")}
      ></TextField>
      <TextField
        label="Major code"
        isRequired={true}
        isReadOnly={false}
        value={majorCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode: value,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.majorCode ?? value;
          }
          if (errors.majorCode?.hasError) {
            runValidationTasks("majorCode", value);
          }
          setMajorCode(value);
        }}
        onBlur={() => runValidationTasks("majorCode", majorCode)}
        errorMessage={errors.majorCode?.errorMessage}
        hasError={errors.majorCode?.hasError}
        {...getOverrideProps(overrides, "majorCode")}
      ></TextField>
      <TextField
        label="Major name th"
        isRequired={true}
        isReadOnly={false}
        value={majorNameTh}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh: value,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.majorNameTh ?? value;
          }
          if (errors.majorNameTh?.hasError) {
            runValidationTasks("majorNameTh", value);
          }
          setMajorNameTh(value);
        }}
        onBlur={() => runValidationTasks("majorNameTh", majorNameTh)}
        errorMessage={errors.majorNameTh?.errorMessage}
        hasError={errors.majorNameTh?.hasError}
        {...getOverrideProps(overrides, "majorNameTh")}
      ></TextField>
      <TextField
        label="Major name en"
        isRequired={true}
        isReadOnly={false}
        value={majorNameEn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn: value,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.majorNameEn ?? value;
          }
          if (errors.majorNameEn?.hasError) {
            runValidationTasks("majorNameEn", value);
          }
          setMajorNameEn(value);
        }}
        onBlur={() => runValidationTasks("majorNameEn", majorNameEn)}
        errorMessage={errors.majorNameEn?.errorMessage}
        hasError={errors.majorNameEn?.hasError}
        {...getOverrideProps(overrides, "majorNameEn")}
      ></TextField>
      <TextField
        label="Nation code"
        isRequired={true}
        isReadOnly={false}
        value={nationCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode: value,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.nationCode ?? value;
          }
          if (errors.nationCode?.hasError) {
            runValidationTasks("nationCode", value);
          }
          setNationCode(value);
        }}
        onBlur={() => runValidationTasks("nationCode", nationCode)}
        errorMessage={errors.nationCode?.errorMessage}
        hasError={errors.nationCode?.hasError}
        {...getOverrideProps(overrides, "nationCode")}
      ></TextField>
      <TextField
        label="Nationality name th"
        isRequired={true}
        isReadOnly={false}
        value={nationalityNameTh}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh: value,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.nationalityNameTh ?? value;
          }
          if (errors.nationalityNameTh?.hasError) {
            runValidationTasks("nationalityNameTh", value);
          }
          setNationalityNameTh(value);
        }}
        onBlur={() =>
          runValidationTasks("nationalityNameTh", nationalityNameTh)
        }
        errorMessage={errors.nationalityNameTh?.errorMessage}
        hasError={errors.nationalityNameTh?.hasError}
        {...getOverrideProps(overrides, "nationalityNameTh")}
      ></TextField>
      <TextField
        label="Nationality name en"
        isRequired={true}
        isReadOnly={false}
        value={nationalityNameEn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn: value,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.nationalityNameEn ?? value;
          }
          if (errors.nationalityNameEn?.hasError) {
            runValidationTasks("nationalityNameEn", value);
          }
          setNationalityNameEn(value);
        }}
        onBlur={() =>
          runValidationTasks("nationalityNameEn", nationalityNameEn)
        }
        errorMessage={errors.nationalityNameEn?.errorMessage}
        hasError={errors.nationalityNameEn?.hasError}
        {...getOverrideProps(overrides, "nationalityNameEn")}
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
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode: value,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
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
        label="Student status name th"
        isRequired={true}
        isReadOnly={false}
        value={studentStatusNameTh}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh: value,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.studentStatusNameTh ?? value;
          }
          if (errors.studentStatusNameTh?.hasError) {
            runValidationTasks("studentStatusNameTh", value);
          }
          setStudentStatusNameTh(value);
        }}
        onBlur={() =>
          runValidationTasks("studentStatusNameTh", studentStatusNameTh)
        }
        errorMessage={errors.studentStatusNameTh?.errorMessage}
        hasError={errors.studentStatusNameTh?.hasError}
        {...getOverrideProps(overrides, "studentStatusNameTh")}
      ></TextField>
      <TextField
        label="Student status name en"
        isRequired={true}
        isReadOnly={false}
        value={studentStatusNameEn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn: value,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.studentStatusNameEn ?? value;
          }
          if (errors.studentStatusNameEn?.hasError) {
            runValidationTasks("studentStatusNameEn", value);
          }
          setStudentStatusNameEn(value);
        }}
        onBlur={() =>
          runValidationTasks("studentStatusNameEn", studentStatusNameEn)
        }
        errorMessage={errors.studentStatusNameEn?.errorMessage}
        hasError={errors.studentStatusNameEn?.hasError}
        {...getOverrideProps(overrides, "studentStatusNameEn")}
      ></TextField>
      <TextField
        label="Student type code"
        isRequired={true}
        isReadOnly={false}
        value={studentTypeCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode: value,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.studentTypeCode ?? value;
          }
          if (errors.studentTypeCode?.hasError) {
            runValidationTasks("studentTypeCode", value);
          }
          setStudentTypeCode(value);
        }}
        onBlur={() => runValidationTasks("studentTypeCode", studentTypeCode)}
        errorMessage={errors.studentTypeCode?.errorMessage}
        hasError={errors.studentTypeCode?.hasError}
        {...getOverrideProps(overrides, "studentTypeCode")}
      ></TextField>
      <TextField
        label="Student type name th"
        isRequired={true}
        isReadOnly={false}
        value={studentTypeNameTh}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh: value,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.studentTypeNameTh ?? value;
          }
          if (errors.studentTypeNameTh?.hasError) {
            runValidationTasks("studentTypeNameTh", value);
          }
          setStudentTypeNameTh(value);
        }}
        onBlur={() =>
          runValidationTasks("studentTypeNameTh", studentTypeNameTh)
        }
        errorMessage={errors.studentTypeNameTh?.errorMessage}
        hasError={errors.studentTypeNameTh?.hasError}
        {...getOverrideProps(overrides, "studentTypeNameTh")}
      ></TextField>
      <TextField
        label="Student type name en"
        isRequired={true}
        isReadOnly={false}
        value={studentTypeNameEn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn: value,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.studentTypeNameEn ?? value;
          }
          if (errors.studentTypeNameEn?.hasError) {
            runValidationTasks("studentTypeNameEn", value);
          }
          setStudentTypeNameEn(value);
        }}
        onBlur={() =>
          runValidationTasks("studentTypeNameEn", studentTypeNameEn)
        }
        errorMessage={errors.studentTypeNameEn?.errorMessage}
        hasError={errors.studentTypeNameEn?.hasError}
        {...getOverrideProps(overrides, "studentTypeNameEn")}
      ></TextField>
      <TextField
        label="Edulevel code"
        isRequired={true}
        isReadOnly={false}
        value={edulevelCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode: value,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.edulevelCode ?? value;
          }
          if (errors.edulevelCode?.hasError) {
            runValidationTasks("edulevelCode", value);
          }
          setEdulevelCode(value);
        }}
        onBlur={() => runValidationTasks("edulevelCode", edulevelCode)}
        errorMessage={errors.edulevelCode?.errorMessage}
        hasError={errors.edulevelCode?.hasError}
        {...getOverrideProps(overrides, "edulevelCode")}
      ></TextField>
      <TextField
        label="Edulevel name th"
        isRequired={true}
        isReadOnly={false}
        value={edulevelNameTh}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh: value,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.edulevelNameTh ?? value;
          }
          if (errors.edulevelNameTh?.hasError) {
            runValidationTasks("edulevelNameTh", value);
          }
          setEdulevelNameTh(value);
        }}
        onBlur={() => runValidationTasks("edulevelNameTh", edulevelNameTh)}
        errorMessage={errors.edulevelNameTh?.errorMessage}
        hasError={errors.edulevelNameTh?.hasError}
        {...getOverrideProps(overrides, "edulevelNameTh")}
      ></TextField>
      <TextField
        label="Edulevel name en"
        isRequired={true}
        isReadOnly={false}
        value={edulevelNameEn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn: value,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.edulevelNameEn ?? value;
          }
          if (errors.edulevelNameEn?.hasError) {
            runValidationTasks("edulevelNameEn", value);
          }
          setEdulevelNameEn(value);
        }}
        onBlur={() => runValidationTasks("edulevelNameEn", edulevelNameEn)}
        errorMessage={errors.edulevelNameEn?.errorMessage}
        hasError={errors.edulevelNameEn?.hasError}
        {...getOverrideProps(overrides, "edulevelNameEn")}
      ></TextField>
      <TextField
        label="Student year"
        isRequired={true}
        isReadOnly={false}
        value={studentYear}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear: value,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.studentYear ?? value;
          }
          if (errors.studentYear?.hasError) {
            runValidationTasks("studentYear", value);
          }
          setStudentYear(value);
        }}
        onBlur={() => runValidationTasks("studentYear", studentYear)}
        errorMessage={errors.studentYear?.errorMessage}
        hasError={errors.studentYear?.hasError}
        {...getOverrideProps(overrides, "studentYear")}
      ></TextField>
      <TextField
        label="Advisor id"
        isRequired={true}
        isReadOnly={false}
        value={advisorId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId: value,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.advisorId ?? value;
          }
          if (errors.advisorId?.hasError) {
            runValidationTasks("advisorId", value);
          }
          setAdvisorId(value);
        }}
        onBlur={() => runValidationTasks("advisorId", advisorId)}
        errorMessage={errors.advisorId?.errorMessage}
        hasError={errors.advisorId?.hasError}
        {...getOverrideProps(overrides, "advisorId")}
      ></TextField>
      <TextField
        label="Advisor name th"
        isRequired={true}
        isReadOnly={false}
        value={advisorNameTh}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh: value,
              advisorNameEn,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.advisorNameTh ?? value;
          }
          if (errors.advisorNameTh?.hasError) {
            runValidationTasks("advisorNameTh", value);
          }
          setAdvisorNameTh(value);
        }}
        onBlur={() => runValidationTasks("advisorNameTh", advisorNameTh)}
        errorMessage={errors.advisorNameTh?.errorMessage}
        hasError={errors.advisorNameTh?.hasError}
        {...getOverrideProps(overrides, "advisorNameTh")}
      ></TextField>
      <TextField
        label="Advisor name en"
        isRequired={true}
        isReadOnly={false}
        value={advisorNameEn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn: value,
              positionTh,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.advisorNameEn ?? value;
          }
          if (errors.advisorNameEn?.hasError) {
            runValidationTasks("advisorNameEn", value);
          }
          setAdvisorNameEn(value);
        }}
        onBlur={() => runValidationTasks("advisorNameEn", advisorNameEn)}
        errorMessage={errors.advisorNameEn?.errorMessage}
        hasError={errors.advisorNameEn?.hasError}
        {...getOverrideProps(overrides, "advisorNameEn")}
      ></TextField>
      <TextField
        label="Position th"
        isRequired={true}
        isReadOnly={false}
        value={positionTh}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh: value,
              email,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.positionTh ?? value;
          }
          if (errors.positionTh?.hasError) {
            runValidationTasks("positionTh", value);
          }
          setPositionTh(value);
        }}
        onBlur={() => runValidationTasks("positionTh", positionTh)}
        errorMessage={errors.positionTh?.errorMessage}
        hasError={errors.positionTh?.hasError}
        {...getOverrideProps(overrides, "positionTh")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email: value,
              mobileNo,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Mobile no"
        isRequired={true}
        isReadOnly={false}
        value={mobileNo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              stdId,
              stdCode,
              titleTh,
              titleEn,
              firstNameTh,
              middleNameTh,
              lastNameTh,
              firstNameEn,
              middleNameEn,
              lastNameEn,
              copenId,
              copenNameTh,
              copenNameEn,
              campusCode,
              campusNameTh,
              campusNameEn,
              facultyCode,
              facultyNameTh,
              facultyNameEn,
              departmentCode,
              departmentNameTh,
              departmentNameEn,
              majorCode,
              majorNameTh,
              majorNameEn,
              nationCode,
              nationalityNameTh,
              nationalityNameEn,
              studentStatusCode,
              studentStatusNameTh,
              studentStatusNameEn,
              studentTypeCode,
              studentTypeNameTh,
              studentTypeNameEn,
              edulevelCode,
              edulevelNameTh,
              edulevelNameEn,
              studentYear,
              advisorId,
              advisorNameTh,
              advisorNameEn,
              positionTh,
              email,
              mobileNo: value,
            };
            const result = onChange(modelFields);
            value = result?.mobileNo ?? value;
          }
          if (errors.mobileNo?.hasError) {
            runValidationTasks("mobileNo", value);
          }
          setMobileNo(value);
        }}
        onBlur={() => runValidationTasks("mobileNo", mobileNo)}
        errorMessage={errors.mobileNo?.errorMessage}
        hasError={errors.mobileNo?.hasError}
        {...getOverrideProps(overrides, "mobileNo")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || studentModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || studentModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
