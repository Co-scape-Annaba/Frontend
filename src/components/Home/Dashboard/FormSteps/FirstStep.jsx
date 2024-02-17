import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

const FirstStep = ({ formData, onNext }) => {
  const DomaineList = [
    "music",
    "enterprise",
    "web",
    "software",
    "games_video",
    "network_hosting",
    "finance",
    "mobile",
    "education",
    "public_relations",
    "security",
    "other",
    "photo_video",
    "hardware",
    "ecommerce",
    "advertising",
    "travel",
    "fashion",
    "analytics",
    "consulting",
    "biotech",
    "cleantech",
    "search",
    "semiconductor",
    "social",
    "medical",
    "automotive",
    "messaging",
    "manufacturing",
    "hospitality",
    "news",
    "transportation",
    "sports",
    "real_estate",
    "health",
  ];

  const formik = useFormik({
    initialValues: {
      Title: formData.Title || "",
      Domaine: formData.Domaine || "",
      NombreRelations: formData.NombreRelations || "",
      TeamSize: formData.TeamSize || "",
      TeamExpertise: formData.TeamExpertise || "",
    },

    validationSchema: Yup.object({
      Title: Yup.string().required("Title est obligatoire"),
      Domaine: Yup.string().required("Domaine est obligatoire"),
      NombreRelations: Yup.number().required("NombreRelations est obligatoire"),
      TeamSize: Yup.string()
        .required("TeamSize est obligatoire")
        .matches(/^[0-9]+$/, "TeamSize doit être un nombre"),
      TeamExpertise: Yup.string().required("TeamExpertise est obligatoire"),
    }),
    onSubmit: (values) => {
      onNext(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-6 p-10 px-20 w-4/5 m-auto relative justify-start"
    >
      <div className="flex flex-col gap-6 items-center justify-start">
        <h1 className="text-4xl font-semibold absolute top-[-2.5rem] text-primary">
          Informations fondamentales
        </h1>
        <img src="icons/step1.svg" alt="step1 form image" className="w-2/5 " />
      </div>

      <div className="flex gap-10 items-center justify-start">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="Title"
            className={`${
              formik.touched.Title && formik.errors.Title ? "text-red-500" : ""
            }`}
          >
            {formik.touched.Title && formik.errors.Title
              ? formik.errors.Title
              : "Title"}
          </label>
          <input
            type="text"
            name="Title"
            placeholder="Title"
            value={formik.values.Title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`border-[1.5px] border-neutral-300 w-[24.5rem] rounded-md p-6 h-9 outline-none focus:outline-none focus:ring-2 focus:ring-primary`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="Domaine"
            className={`${
              formik.touched.Domaine && formik.errors.Domaine
                ? "text-red-500"
                : ""
            }`}
          >
            {formik.touched.Domaine && formik.errors.Domaine
              ? formik.errors.Domaine
              : "Domaine"}
          </label>
          <select
            name="Domaine"
            value={formik.values.Domaine}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border-[1.5px] border-neutral-300 w-[24.5rem] rounded-md outline-none focus:outline-none focus:ring-2 focus:ring-primary h-12 p-3"
          >
            <option value="" label="Domaine" hidden />
            {DomaineList.map((domaine) => (
              <option key={domaine} value={domaine} label={domaine} />
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="NombreRelations"
          className={`${
            formik.touched.NombreRelations && formik.errors.NombreRelations
              ? "text-red-500"
              : ""
          }`}
        >
          {formik.touched.NombreRelations && formik.errors.NombreRelations
            ? formik.errors.NombreRelations
            : "Nombre de Relations"}
        </label>
        <input
          type="text"
          name="NombreRelations"
          placeholder="NombreRelations"
          value={formik.values.NombreRelations}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className=" border-[1.5px] border-neutral-300 w-full rounded-md p-6 h-9 outline-none focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div className="flex gap-10 items-center justify-start">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="TeamSize"
            className={`${
              formik.touched.TeamSize && formik.errors.TeamSize
                ? "text-red-500"
                : ""
            }`}
          >
            {formik.touched.TeamSize && formik.errors.TeamSize
              ? formik.errors.TeamSize
              : "Nombre de participants"}
          </label>
          <input
            type="text"
            name="TeamSize"
            placeholder="TeamSize"
            value={formik.values.TeamSize}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className=" border-[1.5px] border-neutral-300 w-[24.5rem] rounded-md p-6 h-9 outline-none focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="TeamExpertise"
            className={`${
              formik.touched.TeamExpertise && formik.errors.TeamExpertise
                ? "text-red-500"
                : ""
            }`}
          >
            {formik.touched.TeamExpertise && formik.errors.TeamExpertise
              ? formik.errors.TeamExpertise 
              : "Compétences  de la team "}
          </label>
          <select
            name="TeamExpertise"
            value={formik.values.TeamExpertise}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border-[1.5px] border-neutral-300 w-[24.5rem] rounded-md outline-none focus:outline-none focus:ring-2 focus:ring-primary h-12 p-3"
          >
            <option value="" label="TeamExpertise" hidden />
            <option value="Juniors" label="Juniors" />
            <option value="Seniors" label="Seniors" />
          </select>
        </div>
      </div>

      <div className="flex gap-10 items-center justify-end">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-primary px-10 py-2 text-white w-fit rounded-xl font-semibold text-lg"
          type="submit"
        >
          Suivant
        </motion.button>
      </div>
    </form>
  );
};

export default FirstStep;
