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
export declare type UserUpdateFormInputValues = {
    loginName?: string;
    userType?: string;
    idCode?: string;
    titleTh?: string;
    titleEn?: string;
    firstNameTh?: string;
    firstNameEn?: string;
    middleNameTh?: string;
    middleNameEn?: string;
    lastNameTh?: string;
    lastNameEn?: string;
    avatar?: string;
    gender?: string;
    loginPassword?: string;
};
export declare type UserUpdateFormValidationValues = {
    loginName?: ValidationFunction<string>;
    userType?: ValidationFunction<string>;
    idCode?: ValidationFunction<string>;
    titleTh?: ValidationFunction<string>;
    titleEn?: ValidationFunction<string>;
    firstNameTh?: ValidationFunction<string>;
    firstNameEn?: ValidationFunction<string>;
    middleNameTh?: ValidationFunction<string>;
    middleNameEn?: ValidationFunction<string>;
    lastNameTh?: ValidationFunction<string>;
    lastNameEn?: ValidationFunction<string>;
    avatar?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    loginPassword?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserUpdateFormOverridesProps = {
    UserUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    loginName?: PrimitiveOverrideProps<TextFieldProps>;
    userType?: PrimitiveOverrideProps<TextFieldProps>;
    idCode?: PrimitiveOverrideProps<TextFieldProps>;
    titleTh?: PrimitiveOverrideProps<TextFieldProps>;
    titleEn?: PrimitiveOverrideProps<TextFieldProps>;
    firstNameTh?: PrimitiveOverrideProps<TextFieldProps>;
    firstNameEn?: PrimitiveOverrideProps<TextFieldProps>;
    middleNameTh?: PrimitiveOverrideProps<TextFieldProps>;
    middleNameEn?: PrimitiveOverrideProps<TextFieldProps>;
    lastNameTh?: PrimitiveOverrideProps<TextFieldProps>;
    lastNameEn?: PrimitiveOverrideProps<TextFieldProps>;
    avatar?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<TextFieldProps>;
    loginPassword?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    user?: any;
    onSubmit?: (fields: UserUpdateFormInputValues) => UserUpdateFormInputValues;
    onSuccess?: (fields: UserUpdateFormInputValues) => void;
    onError?: (fields: UserUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserUpdateFormInputValues) => UserUpdateFormInputValues;
    onValidate?: UserUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserUpdateForm(props: UserUpdateFormProps): React.ReactElement;
