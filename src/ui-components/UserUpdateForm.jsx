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
import { getUser } from "../graphql/queries";
import { updateUser } from "../graphql/mutations";
const client = generateClient();
export default function UserUpdateForm(props) {
  const {
    id: idProp,
    user: userModelProp,
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
    userType: "",
    idCode: "",
    titleTh: "",
    titleEn: "",
    firstNameTh: "",
    firstNameEn: "",
    middleNameTh: "",
    middleNameEn: "",
    lastNameTh: "",
    lastNameEn: "",
    avatar: "",
    gender: "",
    loginPassword: "",
  };
  const [loginName, setLoginName] = React.useState(initialValues.loginName);
  const [userType, setUserType] = React.useState(initialValues.userType);
  const [idCode, setIdCode] = React.useState(initialValues.idCode);
  const [titleTh, setTitleTh] = React.useState(initialValues.titleTh);
  const [titleEn, setTitleEn] = React.useState(initialValues.titleEn);
  const [firstNameTh, setFirstNameTh] = React.useState(
    initialValues.firstNameTh
  );
  const [firstNameEn, setFirstNameEn] = React.useState(
    initialValues.firstNameEn
  );
  const [middleNameTh, setMiddleNameTh] = React.useState(
    initialValues.middleNameTh
  );
  const [middleNameEn, setMiddleNameEn] = React.useState(
    initialValues.middleNameEn
  );
  const [lastNameTh, setLastNameTh] = React.useState(initialValues.lastNameTh);
  const [lastNameEn, setLastNameEn] = React.useState(initialValues.lastNameEn);
  const [avatar, setAvatar] = React.useState(initialValues.avatar);
  const [gender, setGender] = React.useState(initialValues.gender);
  const [loginPassword, setLoginPassword] = React.useState(
    initialValues.loginPassword
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userRecord
      ? { ...initialValues, ...userRecord }
      : initialValues;
    setLoginName(cleanValues.loginName);
    setUserType(cleanValues.userType);
    setIdCode(cleanValues.idCode);
    setTitleTh(cleanValues.titleTh);
    setTitleEn(cleanValues.titleEn);
    setFirstNameTh(cleanValues.firstNameTh);
    setFirstNameEn(cleanValues.firstNameEn);
    setMiddleNameTh(cleanValues.middleNameTh);
    setMiddleNameEn(cleanValues.middleNameEn);
    setLastNameTh(cleanValues.lastNameTh);
    setLastNameEn(cleanValues.lastNameEn);
    setAvatar(cleanValues.avatar);
    setGender(cleanValues.gender);
    setLoginPassword(cleanValues.loginPassword);
    setErrors({});
  };
  const [userRecord, setUserRecord] = React.useState(userModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getUser.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUser
        : userModelProp;
      setUserRecord(record);
    };
    queryData();
  }, [idProp, userModelProp]);
  React.useEffect(resetStateValues, [userRecord]);
  const validations = {
    loginName: [{ type: "Required" }],
    userType: [{ type: "Required" }],
    idCode: [{ type: "Required" }],
    titleTh: [{ type: "Required" }],
    titleEn: [{ type: "Required" }],
    firstNameTh: [{ type: "Required" }],
    firstNameEn: [{ type: "Required" }],
    middleNameTh: [],
    middleNameEn: [],
    lastNameTh: [{ type: "Required" }],
    lastNameEn: [{ type: "Required" }],
    avatar: [],
    gender: [{ type: "Required" }],
    loginPassword: [{ type: "Required" }],
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
          userType,
          idCode,
          titleTh,
          titleEn,
          firstNameTh,
          firstNameEn,
          middleNameTh: middleNameTh ?? null,
          middleNameEn: middleNameEn ?? null,
          lastNameTh,
          lastNameEn,
          avatar: avatar ?? null,
          gender,
          loginPassword,
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
            query: updateUser.replaceAll("__typename", ""),
            variables: {
              input: {
                id: userRecord.id,
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
      {...getOverrideProps(overrides, "UserUpdateForm")}
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
              userType,
              idCode,
              titleTh,
              titleEn,
              firstNameTh,
              firstNameEn,
              middleNameTh,
              middleNameEn,
              lastNameTh,
              lastNameEn,
              avatar,
              gender,
              loginPassword,
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
        label="User type"
        isRequired={true}
        isReadOnly={false}
        value={userType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              userType: value,
              idCode,
              titleTh,
              titleEn,
              firstNameTh,
              firstNameEn,
              middleNameTh,
              middleNameEn,
              lastNameTh,
              lastNameEn,
              avatar,
              gender,
              loginPassword,
            };
            const result = onChange(modelFields);
            value = result?.userType ?? value;
          }
          if (errors.userType?.hasError) {
            runValidationTasks("userType", value);
          }
          setUserType(value);
        }}
        onBlur={() => runValidationTasks("userType", userType)}
        errorMessage={errors.userType?.errorMessage}
        hasError={errors.userType?.hasError}
        {...getOverrideProps(overrides, "userType")}
      ></TextField>
      <TextField
        label="Id code"
        isRequired={true}
        isReadOnly={false}
        value={idCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              userType,
              idCode: value,
              titleTh,
              titleEn,
              firstNameTh,
              firstNameEn,
              middleNameTh,
              middleNameEn,
              lastNameTh,
              lastNameEn,
              avatar,
              gender,
              loginPassword,
            };
            const result = onChange(modelFields);
            value = result?.idCode ?? value;
          }
          if (errors.idCode?.hasError) {
            runValidationTasks("idCode", value);
          }
          setIdCode(value);
        }}
        onBlur={() => runValidationTasks("idCode", idCode)}
        errorMessage={errors.idCode?.errorMessage}
        hasError={errors.idCode?.hasError}
        {...getOverrideProps(overrides, "idCode")}
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
              userType,
              idCode,
              titleTh: value,
              titleEn,
              firstNameTh,
              firstNameEn,
              middleNameTh,
              middleNameEn,
              lastNameTh,
              lastNameEn,
              avatar,
              gender,
              loginPassword,
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
              userType,
              idCode,
              titleTh,
              titleEn: value,
              firstNameTh,
              firstNameEn,
              middleNameTh,
              middleNameEn,
              lastNameTh,
              lastNameEn,
              avatar,
              gender,
              loginPassword,
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
              userType,
              idCode,
              titleTh,
              titleEn,
              firstNameTh: value,
              firstNameEn,
              middleNameTh,
              middleNameEn,
              lastNameTh,
              lastNameEn,
              avatar,
              gender,
              loginPassword,
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
        label="First name en"
        isRequired={true}
        isReadOnly={false}
        value={firstNameEn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              userType,
              idCode,
              titleTh,
              titleEn,
              firstNameTh,
              firstNameEn: value,
              middleNameTh,
              middleNameEn,
              lastNameTh,
              lastNameEn,
              avatar,
              gender,
              loginPassword,
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
        label="Middle name th"
        isRequired={false}
        isReadOnly={false}
        value={middleNameTh}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              userType,
              idCode,
              titleTh,
              titleEn,
              firstNameTh,
              firstNameEn,
              middleNameTh: value,
              middleNameEn,
              lastNameTh,
              lastNameEn,
              avatar,
              gender,
              loginPassword,
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
        label="Middle name en"
        isRequired={false}
        isReadOnly={false}
        value={middleNameEn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              userType,
              idCode,
              titleTh,
              titleEn,
              firstNameTh,
              firstNameEn,
              middleNameTh,
              middleNameEn: value,
              lastNameTh,
              lastNameEn,
              avatar,
              gender,
              loginPassword,
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
        label="Last name th"
        isRequired={true}
        isReadOnly={false}
        value={lastNameTh}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              userType,
              idCode,
              titleTh,
              titleEn,
              firstNameTh,
              firstNameEn,
              middleNameTh,
              middleNameEn,
              lastNameTh: value,
              lastNameEn,
              avatar,
              gender,
              loginPassword,
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
        label="Last name en"
        isRequired={true}
        isReadOnly={false}
        value={lastNameEn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              userType,
              idCode,
              titleTh,
              titleEn,
              firstNameTh,
              firstNameEn,
              middleNameTh,
              middleNameEn,
              lastNameTh,
              lastNameEn: value,
              avatar,
              gender,
              loginPassword,
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
        label="Avatar"
        isRequired={false}
        isReadOnly={false}
        value={avatar}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              userType,
              idCode,
              titleTh,
              titleEn,
              firstNameTh,
              firstNameEn,
              middleNameTh,
              middleNameEn,
              lastNameTh,
              lastNameEn,
              avatar: value,
              gender,
              loginPassword,
            };
            const result = onChange(modelFields);
            value = result?.avatar ?? value;
          }
          if (errors.avatar?.hasError) {
            runValidationTasks("avatar", value);
          }
          setAvatar(value);
        }}
        onBlur={() => runValidationTasks("avatar", avatar)}
        errorMessage={errors.avatar?.errorMessage}
        hasError={errors.avatar?.hasError}
        {...getOverrideProps(overrides, "avatar")}
      ></TextField>
      <TextField
        label="Gender"
        isRequired={true}
        isReadOnly={false}
        value={gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              userType,
              idCode,
              titleTh,
              titleEn,
              firstNameTh,
              firstNameEn,
              middleNameTh,
              middleNameEn,
              lastNameTh,
              lastNameEn,
              avatar,
              gender: value,
              loginPassword,
            };
            const result = onChange(modelFields);
            value = result?.gender ?? value;
          }
          if (errors.gender?.hasError) {
            runValidationTasks("gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("gender", gender)}
        errorMessage={errors.gender?.errorMessage}
        hasError={errors.gender?.hasError}
        {...getOverrideProps(overrides, "gender")}
      ></TextField>
      <TextField
        label="Login password"
        isRequired={true}
        isReadOnly={false}
        value={loginPassword}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginName,
              userType,
              idCode,
              titleTh,
              titleEn,
              firstNameTh,
              firstNameEn,
              middleNameTh,
              middleNameEn,
              lastNameTh,
              lastNameEn,
              avatar,
              gender,
              loginPassword: value,
            };
            const result = onChange(modelFields);
            value = result?.loginPassword ?? value;
          }
          if (errors.loginPassword?.hasError) {
            runValidationTasks("loginPassword", value);
          }
          setLoginPassword(value);
        }}
        onBlur={() => runValidationTasks("loginPassword", loginPassword)}
        errorMessage={errors.loginPassword?.errorMessage}
        hasError={errors.loginPassword?.hasError}
        {...getOverrideProps(overrides, "loginPassword")}
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
          isDisabled={!(idProp || userModelProp)}
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
              !(idProp || userModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
