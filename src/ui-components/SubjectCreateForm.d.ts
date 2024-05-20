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
export declare type SubjectCreateFormInputValues = {
    subjectCode?: string;
    subjectNameTh?: string;
    subjectNameEn?: string;
    credit?: string;
    theoryHour?: string;
    practiceHour?: string;
    selfHour?: string;
    subjectType?: string;
    flagCur?: string;
    creditShow?: string;
    relateSubjectCode?: string;
};
export declare type SubjectCreateFormValidationValues = {
    subjectCode?: ValidationFunction<string>;
    subjectNameTh?: ValidationFunction<string>;
    subjectNameEn?: ValidationFunction<string>;
    credit?: ValidationFunction<string>;
    theoryHour?: ValidationFunction<string>;
    practiceHour?: ValidationFunction<string>;
    selfHour?: ValidationFunction<string>;
    subjectType?: ValidationFunction<string>;
    flagCur?: ValidationFunction<string>;
    creditShow?: ValidationFunction<string>;
    relateSubjectCode?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SubjectCreateFormOverridesProps = {
    SubjectCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    subjectCode?: PrimitiveOverrideProps<TextFieldProps>;
    subjectNameTh?: PrimitiveOverrideProps<TextFieldProps>;
    subjectNameEn?: PrimitiveOverrideProps<TextFieldProps>;
    credit?: PrimitiveOverrideProps<TextFieldProps>;
    theoryHour?: PrimitiveOverrideProps<TextFieldProps>;
    practiceHour?: PrimitiveOverrideProps<TextFieldProps>;
    selfHour?: PrimitiveOverrideProps<TextFieldProps>;
    subjectType?: PrimitiveOverrideProps<TextFieldProps>;
    flagCur?: PrimitiveOverrideProps<TextFieldProps>;
    creditShow?: PrimitiveOverrideProps<TextFieldProps>;
    relateSubjectCode?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SubjectCreateFormProps = React.PropsWithChildren<{
    overrides?: SubjectCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SubjectCreateFormInputValues) => SubjectCreateFormInputValues;
    onSuccess?: (fields: SubjectCreateFormInputValues) => void;
    onError?: (fields: SubjectCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SubjectCreateFormInputValues) => SubjectCreateFormInputValues;
    onValidate?: SubjectCreateFormValidationValues;
} & React.CSSProperties>;
export default function SubjectCreateForm(props: SubjectCreateFormProps): React.ReactElement;
