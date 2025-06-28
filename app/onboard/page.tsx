"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSubmissions } from "../context/SubmissionsContext";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  category: yup.array().of(yup.string()).min(1, "Pick at least one category"),
  languages: yup.array().of(yup.string()).min(1, "Pick at least one language"),
  feeRange: yup.string().required("Fee is required"),
  location: yup.string().required("Location is required"),
});

type FormData = {
  name: string;
  bio: string;
  category: string[];
  languages: string[];
  feeRange: string;
  location: string;
};

export default function OnboardPage() {
  const { addSubmission } = useSubmissions();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    // @ts-ignore
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      bio: "",
      category: [],
      languages: [],
      feeRange: "",
      location: "",
    },
  });

  const onSubmit = (data: FormData) => {
    addSubmission({
      ...data,
      id: Date.now(), // unique id
    });
    alert("Artist submitted! Check dashboard.");
  };

  return (
    <main className="max-w-xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold">Artist Onboarding</h1>
      <form onSubmit={(handleSubmit as any)(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label>Name</label>
          <input {...register("name")} className="border w-full p-2" />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
        </div>
        {/* Bio */}
        <div>
          <label>Bio</label>
          <textarea {...register("bio")} className="border w-full p-2" />
          <p className="text-red-500 text-sm">{errors.bio?.message}</p>
        </div>
        {/* Category */}
        <div>
          <label>Category</label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <>
                {["Singer", "Dancer", "DJ", "Speaker"].map((c) => (
                  <label key={c} className="block">
                    <input
                      type="checkbox"
                      value={c}
                      checked={field.value?.includes(c) ?? false}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        const curr = field.value ?? [];
                        if (checked) {
                          field.onChange([...curr, c]);
                        } else {
                          field.onChange(curr.filter((v) => v !== c));
                        }
                      }}
                    />{" "}
                    {c}
                  </label>
                ))}
              </>
            )}
          />
          <p className="text-red-500 text-sm">{errors.category?.message}</p>
        </div>
        {/* Languages */}
        <div>
          <label>Languages</label>
          <Controller
            name="languages"
            control={control}
            render={({ field }) => (
              <>
                {["English", "Hindi", "Bengali", "Tamil"].map((lang) => (
                  <label key={lang} className="block">
                    <input
                      type="checkbox"
                      value={lang}
                      checked={field.value?.includes(lang) ?? false}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        const curr = field.value ?? [];
                        if (checked) {
                          field.onChange([...curr, lang]);
                        } else {
                          field.onChange(curr.filter((v) => v !== lang));
                        }
                      }}
                    />{" "}
                    {lang}
                  </label>
                ))}
              </>
            )}
          />
          <p className="text-red-500 text-sm">{errors.languages?.message}</p>
        </div>
        {/* Fee Range */}
        <div>
          <label>Fee Range</label>
          <select {...register("feeRange")} className="border w-full p-2">
            <option value="">Select</option>
            <option value="$200-$500">$200-$500</option>
            <option value="$500-$1000">$500-$1000</option>
            <option value="$1000-$2000">$1000-$2000</option>
          </select>
          <p className="text-red-500 text-sm">{errors.feeRange?.message}</p>
        </div>
        {/* Location */}
        <div>
          <label>Location</label>
          <input {...register("location")} className="border w-full p-2" />
          <p className="text-red-500 text-sm">{errors.location?.message}</p>
        </div>
        {/* Image Upload */}
        <div>
          <label>Profile Image (optional)</label>
          <input type="file" accept="image/*" className="border w-full p-2" />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
