"use client";

import { LoginAPI } from "@/api/UserAPI";
import { Field, Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";

export default function LoginForm() {
  const getInitialValues = {
    username: "",
    password: "",
  };

  const getValidationSchema = Yup.object().shape({
    username: Yup.string()
      .min(4, "El usuario tiene mínimo 4 caracteres")
      .max(150, "Este usuario es demasiado largo")
      .when({
        is: (value) => value && value.includes("@"),
        then: (schema) =>
          schema
            .email("Este campo debe ser un correo válido")
            .required("Este campo es requerido"),
        otherwise: (schema) => schema.required("Este campo es requerido"),
      }),
    password: Yup.string()
      .min(6, "La contraseña es muy corta")
      .max(128, "La contraseña es muy larga")
      .required("Este campo es requerido"),
  });

  return (
    <div className="w-full max-w-xs">
      <Formik
        initialValues={getInitialValues}
        validationSchema={getValidationSchema}
        onSubmit={async (formData) => {
          try {
            const response = await LoginAPI(formData);
            console.log(response);
          } catch (error) {
            console.log(error);
            console.log("ERROR - Login API");
          }
        }}
      >
        {({ errors, touched, handleSubmit, isSubmitting }) => (
          <form
            className="px-8 pt-6 pb-8 mb-4"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Usuario o Correo
              </label>
              <Field
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-100 ${
                  errors.username && touched.username ? "border-red-500" : ""
                }`}
                id="username"
                name="username"
                type="text"
                placeholder="ejemplo@ejm.com"
              />
              {errors.username && touched.username ? (
                <div>{errors.username}</div>
              ) : null}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Contraseña
              </label>
              <Field
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-100 ${
                  errors.password && touched.password ? "border-red-500" : ""
                }`}
                id="password"
                name="password"
                type="password"
                placeholder="********"
              />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full h-12 bg-transparent hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded-lg"
                disabled={isSubmitting}
              >
                Iniciar sesión
              </button>
            </div>
            <div className="flex">
              <Link
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 p-2"
                href="/"
              >
                Olvidé la contraseña
              </Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
