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
import { getSubject } from "../graphql/queries";
import { updateSubject } from "../graphql/mutations";
const client = generateClient();
export default function SubjectUpdateForm(props) {
  const {
    id: idProp,
    subject: subjectModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    subjectCode: "",
    subjectNameTh: "",
    subjectNameEn: "",
    credit: "",
    theoryHour: "",
    practiceHour: "",
    selfHour: "",
    subjectType: "",
    flagCur: "",
    creditShow: "",
    relateSubjectCode: "",
  };
  const [subjectCode, setSubjectCode] = React.useState(
    initialValues.subjectCode
  );
  const [subjectNameTh, setSubjectNameTh] = React.useState(
    initialValues.subjectNameTh
  );
  const [subjectNameEn, setSubjectNameEn] = React.useState(
    initialValues.subjectNameEn
  );
  const [credit, setCredit] = React.useState(initialValues.credit);
  const [theoryHour, setTheoryHour] = React.useState(initialValues.theoryHour);
  const [practiceHour, setPracticeHour] = React.useState(
    initialValues.practiceHour
  );
  const [selfHour, setSelfHour] = React.useState(initialValues.selfHour);
  const [subjectType, setSubjectType] = React.useState(
    initialValues.subjectType
  );
  const [flagCur, setFlagCur] = React.useState(initialValues.flagCur);
  const [creditShow, setCreditShow] = React.useState(initialValues.creditShow);
  const [relateSubjectCode, setRelateSubjectCode] = React.useState(
    initialValues.relateSubjectCode
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = subjectRecord
      ? { ...initialValues, ...subjectRecord }
      : initialValues;
    setSubjectCode(cleanValues.subjectCode);
    setSubjectNameTh(cleanValues.subjectNameTh);
    setSubjectNameEn(cleanValues.subjectNameEn);
    setCredit(cleanValues.credit);
    setTheoryHour(cleanValues.theoryHour);
    setPracticeHour(cleanValues.practiceHour);
    setSelfHour(cleanValues.selfHour);
    setSubjectType(cleanValues.subjectType);
    setFlagCur(cleanValues.flagCur);
    setCreditShow(cleanValues.creditShow);
    setRelateSubjectCode(cleanValues.relateSubjectCode);
    setErrors({});
  };
  const [subjectRecord, setSubjectRecord] = React.useState(subjectModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getSubject.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getSubject
        : subjectModelProp;
      setSubjectRecord(record);
    };
    queryData();
  }, [idProp, subjectModelProp]);
  React.useEffect(resetStateValues, [subjectRecord]);
  const validations = {
    subjectCode: [{ type: "Required" }],
    subjectNameTh: [{ type: "Required" }],
    subjectNameEn: [{ type: "Required" }],
    credit: [{ type: "Required" }],
    theoryHour: [{ type: "Required" }],
    practiceHour: [{ type: "Required" }],
    selfHour: [{ type: "Required" }],
    subjectType: [{ type: "Required" }],
    flagCur: [{ type: "Required" }],
    creditShow: [{ type: "Required" }],
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
          subjectCode,
          subjectNameTh,
          subjectNameEn,
          credit,
          theoryHour,
          practiceHour,
          selfHour,
          subjectType,
          flagCur,
          creditShow,
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
            query: updateSubject.replaceAll("__typename", ""),
            variables: {
              input: {
                id: subjectRecord.id,
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
      {...getOverrideProps(overrides, "SubjectUpdateForm")}
      {...rest}
    >
      <TextField
        label="Subject code"
        isRequired={true}
        isReadOnly={false}
        value={subjectCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              subjectCode: value,
              subjectNameTh,
              subjectNameEn,
              credit,
              theoryHour,
              practiceHour,
              selfHour,
              subjectType,
              flagCur,
              creditShow,
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
        label="Subject name th"
        isRequired={true}
        isReadOnly={false}
        value={subjectNameTh}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              subjectCode,
              subjectNameTh: value,
              subjectNameEn,
              credit,
              theoryHour,
              practiceHour,
              selfHour,
              subjectType,
              flagCur,
              creditShow,
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
              subjectCode,
              subjectNameTh,
              subjectNameEn: value,
              credit,
              theoryHour,
              practiceHour,
              selfHour,
              subjectType,
              flagCur,
              creditShow,
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
        label="Credit"
        isRequired={true}
        isReadOnly={false}
        value={credit}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              subjectCode,
              subjectNameTh,
              subjectNameEn,
              credit: value,
              theoryHour,
              practiceHour,
              selfHour,
              subjectType,
              flagCur,
              creditShow,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.credit ?? value;
          }
          if (errors.credit?.hasError) {
            runValidationTasks("credit", value);
          }
          setCredit(value);
        }}
        onBlur={() => runValidationTasks("credit", credit)}
        errorMessage={errors.credit?.errorMessage}
        hasError={errors.credit?.hasError}
        {...getOverrideProps(overrides, "credit")}
      ></TextField>
      <TextField
        label="Theory hour"
        isRequired={true}
        isReadOnly={false}
        value={theoryHour}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              subjectCode,
              subjectNameTh,
              subjectNameEn,
              credit,
              theoryHour: value,
              practiceHour,
              selfHour,
              subjectType,
              flagCur,
              creditShow,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.theoryHour ?? value;
          }
          if (errors.theoryHour?.hasError) {
            runValidationTasks("theoryHour", value);
          }
          setTheoryHour(value);
        }}
        onBlur={() => runValidationTasks("theoryHour", theoryHour)}
        errorMessage={errors.theoryHour?.errorMessage}
        hasError={errors.theoryHour?.hasError}
        {...getOverrideProps(overrides, "theoryHour")}
      ></TextField>
      <TextField
        label="Practice hour"
        isRequired={true}
        isReadOnly={false}
        value={practiceHour}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              subjectCode,
              subjectNameTh,
              subjectNameEn,
              credit,
              theoryHour,
              practiceHour: value,
              selfHour,
              subjectType,
              flagCur,
              creditShow,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.practiceHour ?? value;
          }
          if (errors.practiceHour?.hasError) {
            runValidationTasks("practiceHour", value);
          }
          setPracticeHour(value);
        }}
        onBlur={() => runValidationTasks("practiceHour", practiceHour)}
        errorMessage={errors.practiceHour?.errorMessage}
        hasError={errors.practiceHour?.hasError}
        {...getOverrideProps(overrides, "practiceHour")}
      ></TextField>
      <TextField
        label="Self hour"
        isRequired={true}
        isReadOnly={false}
        value={selfHour}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              subjectCode,
              subjectNameTh,
              subjectNameEn,
              credit,
              theoryHour,
              practiceHour,
              selfHour: value,
              subjectType,
              flagCur,
              creditShow,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.selfHour ?? value;
          }
          if (errors.selfHour?.hasError) {
            runValidationTasks("selfHour", value);
          }
          setSelfHour(value);
        }}
        onBlur={() => runValidationTasks("selfHour", selfHour)}
        errorMessage={errors.selfHour?.errorMessage}
        hasError={errors.selfHour?.hasError}
        {...getOverrideProps(overrides, "selfHour")}
      ></TextField>
      <TextField
        label="Subject type"
        isRequired={true}
        isReadOnly={false}
        value={subjectType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              subjectCode,
              subjectNameTh,
              subjectNameEn,
              credit,
              theoryHour,
              practiceHour,
              selfHour,
              subjectType: value,
              flagCur,
              creditShow,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.subjectType ?? value;
          }
          if (errors.subjectType?.hasError) {
            runValidationTasks("subjectType", value);
          }
          setSubjectType(value);
        }}
        onBlur={() => runValidationTasks("subjectType", subjectType)}
        errorMessage={errors.subjectType?.errorMessage}
        hasError={errors.subjectType?.hasError}
        {...getOverrideProps(overrides, "subjectType")}
      ></TextField>
      <TextField
        label="Flag cur"
        isRequired={true}
        isReadOnly={false}
        value={flagCur}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              subjectCode,
              subjectNameTh,
              subjectNameEn,
              credit,
              theoryHour,
              practiceHour,
              selfHour,
              subjectType,
              flagCur: value,
              creditShow,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.flagCur ?? value;
          }
          if (errors.flagCur?.hasError) {
            runValidationTasks("flagCur", value);
          }
          setFlagCur(value);
        }}
        onBlur={() => runValidationTasks("flagCur", flagCur)}
        errorMessage={errors.flagCur?.errorMessage}
        hasError={errors.flagCur?.hasError}
        {...getOverrideProps(overrides, "flagCur")}
      ></TextField>
      <TextField
        label="Credit show"
        isRequired={true}
        isReadOnly={false}
        value={creditShow}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              subjectCode,
              subjectNameTh,
              subjectNameEn,
              credit,
              theoryHour,
              practiceHour,
              selfHour,
              subjectType,
              flagCur,
              creditShow: value,
              relateSubjectCode,
            };
            const result = onChange(modelFields);
            value = result?.creditShow ?? value;
          }
          if (errors.creditShow?.hasError) {
            runValidationTasks("creditShow", value);
          }
          setCreditShow(value);
        }}
        onBlur={() => runValidationTasks("creditShow", creditShow)}
        errorMessage={errors.creditShow?.errorMessage}
        hasError={errors.creditShow?.hasError}
        {...getOverrideProps(overrides, "creditShow")}
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
              subjectCode,
              subjectNameTh,
              subjectNameEn,
              credit,
              theoryHour,
              practiceHour,
              selfHour,
              subjectType,
              flagCur,
              creditShow,
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || subjectModelProp)}
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
              !(idProp || subjectModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
