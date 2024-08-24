import React from "react";
import { FieldErrors } from "react-hook-form";
type TypesInput = 'text' | 'password' | 'email' | 'number';

interface IPropsInputForms {
  title: string;
  type: TypesInput;
  placeholder: string;
  nameInput: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  errors: FieldErrors<IUserInput | INoticeInput>
}

export default function InputForms(props: IPropsInputForms) {
  const { title, type, placeholder, nameInput, register } = props;
  return (
    <div className="mb-6">
      <label
        htmlFor={`${title}-${type}`}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {title}
      </label>
      <input
        id={`${title}-${type}`}
        type={type}
        placeholder={placeholder}
        name={nameInput}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        required
        step={0.01}
        {...register(nameInput.toString())}
      />


    </div>)
}