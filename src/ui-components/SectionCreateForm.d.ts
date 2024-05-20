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
export declare type SectionCreateFormInputValues = {
    academicYear?: string;
    semester?: string;
    campusCode?: string;
    sectionId?: string;
    subjectCode?: string;
    flagRegisCon?: string;
    subjectNameTh?: string;
    subjectNameEn?: string;
    maxCredit?: string;
    sectionCode?: string;
    sectionType?: string;
    sectionTypeTh?: string;
    sectionTypeEn?: string;
    studentStatusCode?: string;
    stdStatusTh?: string;
    stdStatusEn?: string;
    coursedate?: string;
    coursedateth?: string;
    coursedateen?: string;
    totalSeat?: string;
    totalRegistered?: string;
    teacherName?: string;
    teacherNameEn?: string;
    roomNameTh?: string;
    roomNameEn?: string;
    property?: string;
    nonProperty?: string;
    midternDate?: string;
    finalDate?: string;
    sectionStatus?: string;
    relateSubjectCode?: string;
};
export declare type SectionCreateFormValidationValues = {
    academicYear?: ValidationFunction<string>;
    semester?: ValidationFunction<string>;
    campusCode?: ValidationFunction<string>;
    sectionId?: ValidationFunction<string>;
    subjectCode?: ValidationFunction<string>;
    flagRegisCon?: ValidationFunction<string>;
    subjectNameTh?: ValidationFunction<string>;
    subjectNameEn?: ValidationFunction<string>;
    maxCredit?: ValidationFunction<string>;
    sectionCode?: ValidationFunction<string>;
    sectionType?: ValidationFunction<string>;
    sectionTypeTh?: ValidationFunction<string>;
    sectionTypeEn?: ValidationFunction<string>;
    studentStatusCode?: ValidationFunction<string>;
    stdStatusTh?: ValidationFunction<string>;
    stdStatusEn?: ValidationFunction<string>;
    coursedate?: ValidationFunction<string>;
    coursedateth?: ValidationFunction<string>;
    coursedateen?: ValidationFunction<string>;
    totalSeat?: ValidationFunction<string>;
    totalRegistered?: ValidationFunction<string>;
    teacherName?: ValidationFunction<string>;
    teacherNameEn?: ValidationFunction<string>;
    roomNameTh?: ValidationFunction<string>;
    roomNameEn?: ValidationFunction<string>;
    property?: ValidationFunction<string>;
    nonProperty?: ValidationFunction<string>;
    midternDate?: ValidationFunction<string>;
    finalDate?: ValidationFunction<string>;
    sectionStatus?: ValidationFunction<string>;
    relateSubjectCode?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SectionCreateFormOverridesProps = {
    SectionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    academicYear?: PrimitiveOverrideProps<TextFieldProps>;
    semester?: PrimitiveOverrideProps<TextFieldProps>;
    campusCode?: PrimitiveOverrideProps<TextFieldProps>;
    sectionId?: PrimitiveOverrideProps<TextFieldProps>;
    subjectCode?: PrimitiveOverrideProps<TextFieldProps>;
    flagRegisCon?: PrimitiveOverrideProps<TextFieldProps>;
    subjectNameTh?: PrimitiveOverrideProps<TextFieldProps>;
    subjectNameEn?: PrimitiveOverrideProps<TextFieldProps>;
    maxCredit?: PrimitiveOverrideProps<TextFieldProps>;
    sectionCode?: PrimitiveOverrideProps<TextFieldProps>;
    sectionType?: PrimitiveOverrideProps<TextFieldProps>;
    sectionTypeTh?: PrimitiveOverrideProps<TextFieldProps>;
    sectionTypeEn?: PrimitiveOverrideProps<TextFieldProps>;
    studentStatusCode?: PrimitiveOverrideProps<TextFieldProps>;
    stdStatusTh?: PrimitiveOverrideProps<TextFieldProps>;
    stdStatusEn?: PrimitiveOverrideProps<TextFieldProps>;
    coursedate?: PrimitiveOverrideProps<TextFieldProps>;
    coursedateth?: PrimitiveOverrideProps<TextFieldProps>;
    coursedateen?: PrimitiveOverrideProps<TextFieldProps>;
    totalSeat?: PrimitiveOverrideProps<TextFieldProps>;
    totalRegistered?: PrimitiveOverrideProps<TextFieldProps>;
    teacherName?: PrimitiveOverrideProps<TextFieldProps>;
    teacherNameEn?: PrimitiveOverrideProps<TextFieldProps>;
    roomNameTh?: PrimitiveOverrideProps<TextFieldProps>;
    roomNameEn?: PrimitiveOverrideProps<TextFieldProps>;
    property?: PrimitiveOverrideProps<TextFieldProps>;
    nonProperty?: PrimitiveOverrideProps<TextFieldProps>;
    midternDate?: PrimitiveOverrideProps<TextFieldProps>;
    finalDate?: PrimitiveOverrideProps<TextFieldProps>;
    sectionStatus?: PrimitiveOverrideProps<TextFieldProps>;
    relateSubjectCode?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SectionCreateFormProps = React.PropsWithChildren<{
    overrides?: SectionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SectionCreateFormInputValues) => SectionCreateFormInputValues;
    onSuccess?: (fields: SectionCreateFormInputValues) => void;
    onError?: (fields: SectionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SectionCreateFormInputValues) => SectionCreateFormInputValues;
    onValidate?: SectionCreateFormValidationValues;
} & React.CSSProperties>;
export default function SectionCreateForm(props: SectionCreateFormProps): React.ReactElement;
