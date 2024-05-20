/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StudentCreateFormInputValues = {
    loginName?: string;
    stdId?: string;
    stdCode?: string;
    titleTh?: string;
    titleEn?: string;
    firstNameTh?: string;
    middleNameTh?: string;
    lastNameTh?: string;
    firstNameEn?: string;
    middleNameEn?: string;
    lastNameEn?: string;
    copenId?: string;
    copenNameTh?: string;
    copenNameEn?: string;
    campusCode?: string;
    campusNameTh?: string;
    campusNameEn?: string;
    facultyCode?: string;
    facultyNameTh?: string;
    facultyNameEn?: string;
    departmentCode?: string;
    departmentNameTh?: string;
    departmentNameEn?: string;
    majorCode?: string;
    majorNameTh?: string;
    majorNameEn?: string;
    nationCode?: string;
    nationalityNameTh?: string;
    nationalityNameEn?: string;
    studentStatusCode?: string;
    studentStatusNameTh?: string;
    studentStatusNameEn?: string;
    studentTypeCode?: string;
    studentTypeNameTh?: string;
    studentTypeNameEn?: string;
    edulevelCode?: string;
    edulevelNameTh?: string;
    edulevelNameEn?: string;
    studentYear?: string;
    advisorId?: string;
    advisorNameTh?: string;
    advisorNameEn?: string;
    positionTh?: string;
    email?: string;
    mobileNo?: string;
};
export declare type StudentCreateFormValidationValues = {
    loginName?: ValidationFunction<string>;
    stdId?: ValidationFunction<string>;
    stdCode?: ValidationFunction<string>;
    titleTh?: ValidationFunction<string>;
    titleEn?: ValidationFunction<string>;
    firstNameTh?: ValidationFunction<string>;
    middleNameTh?: ValidationFunction<string>;
    lastNameTh?: ValidationFunction<string>;
    firstNameEn?: ValidationFunction<string>;
    middleNameEn?: ValidationFunction<string>;
    lastNameEn?: ValidationFunction<string>;
    copenId?: ValidationFunction<string>;
    copenNameTh?: ValidationFunction<string>;
    copenNameEn?: ValidationFunction<string>;
    campusCode?: ValidationFunction<string>;
    campusNameTh?: ValidationFunction<string>;
    campusNameEn?: ValidationFunction<string>;
    facultyCode?: ValidationFunction<string>;
    facultyNameTh?: ValidationFunction<string>;
    facultyNameEn?: ValidationFunction<string>;
    departmentCode?: ValidationFunction<string>;
    departmentNameTh?: ValidationFunction<string>;
    departmentNameEn?: ValidationFunction<string>;
    majorCode?: ValidationFunction<string>;
    majorNameTh?: ValidationFunction<string>;
    majorNameEn?: ValidationFunction<string>;
    nationCode?: ValidationFunction<string>;
    nationalityNameTh?: ValidationFunction<string>;
    nationalityNameEn?: ValidationFunction<string>;
    studentStatusCode?: ValidationFunction<string>;
    studentStatusNameTh?: ValidationFunction<string>;
    studentStatusNameEn?: ValidationFunction<string>;
    studentTypeCode?: ValidationFunction<string>;
    studentTypeNameTh?: ValidationFunction<string>;
    studentTypeNameEn?: ValidationFunction<string>;
    edulevelCode?: ValidationFunction<string>;
    edulevelNameTh?: ValidationFunction<string>;
    edulevelNameEn?: ValidationFunction<string>;
    studentYear?: ValidationFunction<string>;
    advisorId?: ValidationFunction<string>;
    advisorNameTh?: ValidationFunction<string>;
    advisorNameEn?: ValidationFunction<string>;
    positionTh?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    mobileNo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StudentCreateFormOverridesProps = {
    StudentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    loginName?: PrimitiveOverrideProps<TextFieldProps>;
    stdId?: PrimitiveOverrideProps<TextFieldProps>;
    stdCode?: PrimitiveOverrideProps<TextFieldProps>;
    titleTh?: PrimitiveOverrideProps<TextFieldProps>;
    titleEn?: PrimitiveOverrideProps<TextFieldProps>;
    firstNameTh?: PrimitiveOverrideProps<TextFieldProps>;
    middleNameTh?: PrimitiveOverrideProps<TextFieldProps>;
    lastNameTh?: PrimitiveOverrideProps<TextFieldProps>;
    firstNameEn?: PrimitiveOverrideProps<TextFieldProps>;
    middleNameEn?: PrimitiveOverrideProps<TextFieldProps>;
    lastNameEn?: PrimitiveOverrideProps<TextFieldProps>;
    copenId?: PrimitiveOverrideProps<TextFieldProps>;
    copenNameTh?: PrimitiveOverrideProps<TextFieldProps>;
    copenNameEn?: PrimitiveOverrideProps<TextFieldProps>;
    campusCode?: PrimitiveOverrideProps<TextFieldProps>;
    campusNameTh?: PrimitiveOverrideProps<TextFieldProps>;
    campusNameEn?: PrimitiveOverrideProps<TextFieldProps>;
    facultyCode?: PrimitiveOverrideProps<TextFieldProps>;
    facultyNameTh?: PrimitiveOverrideProps<TextFieldProps>;
    facultyNameEn?: PrimitiveOverrideProps<TextFieldProps>;
    departmentCode?: PrimitiveOverrideProps<TextFieldProps>;
    departmentNameTh?: PrimitiveOverrideProps<TextFieldProps>;
    departmentNameEn?: PrimitiveOverrideProps<TextFieldProps>;
    majorCode?: PrimitiveOverrideProps<TextFieldProps>;
    majorNameTh?: PrimitiveOverrideProps<TextFieldProps>;
    majorNameEn?: PrimitiveOverrideProps<TextFieldProps>;
    nationCode?: PrimitiveOverrideProps<TextFieldProps>;
    nationalityNameTh?: PrimitiveOverrideProps<TextFieldProps>;
    nationalityNameEn?: PrimitiveOverrideProps<TextFieldProps>;
    studentStatusCode?: PrimitiveOverrideProps<TextFieldProps>;
    studentStatusNameTh?: PrimitiveOverrideProps<TextFieldProps>;
    studentStatusNameEn?: PrimitiveOverrideProps<TextFieldProps>;
    studentTypeCode?: PrimitiveOverrideProps<TextFieldProps>;
    studentTypeNameTh?: PrimitiveOverrideProps<TextFieldProps>;
    studentTypeNameEn?: PrimitiveOverrideProps<TextFieldProps>;
    edulevelCode?: PrimitiveOverrideProps<TextFieldProps>;
    edulevelNameTh?: PrimitiveOverrideProps<TextFieldProps>;
    edulevelNameEn?: PrimitiveOverrideProps<TextFieldProps>;
    studentYear?: PrimitiveOverrideProps<TextFieldProps>;
    advisorId?: PrimitiveOverrideProps<TextFieldProps>;
    advisorNameTh?: PrimitiveOverrideProps<TextFieldProps>;
    advisorNameEn?: PrimitiveOverrideProps<TextFieldProps>;
    positionTh?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    mobileNo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StudentCreateFormProps = React.PropsWithChildren<{
    overrides?: StudentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StudentCreateFormInputValues) => StudentCreateFormInputValues;
    onSuccess?: (fields: StudentCreateFormInputValues) => void;
    onError?: (fields: StudentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StudentCreateFormInputValues) => StudentCreateFormInputValues;
    onValidate?: StudentCreateFormValidationValues;
} & React.CSSProperties>;
export default function StudentCreateForm(props: StudentCreateFormProps): React.ReactElement;
