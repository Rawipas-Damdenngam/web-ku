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
export declare type SubjectUpdateFormInputValues = {
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
export declare type SubjectUpdateFormValidationValues = {
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
export declare type SubjectUpdateFormOverridesProps = {
    SubjectUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type SubjectUpdateFormProps = React.PropsWithChildren<{
    overrides?: SubjectUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    subject?: any;
    onSubmit?: (fields: SubjectUpdateFormInputValues) => SubjectUpdateFormInputValues;
    onSuccess?: (fields: SubjectUpdateFormInputValues) => void;
    onError?: (fields: SubjectUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SubjectUpdateFormInputValues) => SubjectUpdateFormInputValues;
    onValidate?: SubjectUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SubjectUpdateForm(props: SubjectUpdateFormProps): React.ReactElement;
