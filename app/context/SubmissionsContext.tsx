"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Submission = {
  id: number;
  name: string;
  bio: string;
  category: string[];
  languages: string[];
  feeRange: string;
  location: string;
  image?: string;
};

type SubmissionsContextType = {
  submissions: Submission[];
  addSubmission: (submission: Submission) => void;
};

const SubmissionsContext = createContext<SubmissionsContextType | undefined>(undefined);

export function SubmissionsProvider({ children }: { children: React.ReactNode }) {
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  // load from localStorage on first mount
  useEffect(() => {
    const stored = localStorage.getItem("submissions");
    if (stored) {
      setSubmissions(JSON.parse(stored));
    }
  }, []);

  // persist to localStorage
  useEffect(() => {
    localStorage.setItem("submissions", JSON.stringify(submissions));
  }, [submissions]);

  const addSubmission = (submission: Submission) => {
    setSubmissions((prev) => [...prev, submission]);
  };

  return (
    <SubmissionsContext.Provider value={{ submissions, addSubmission }}>
      {children}
    </SubmissionsContext.Provider>
  );
}

export function useSubmissions() {
  const ctx = useContext(SubmissionsContext);
  if (!ctx) throw new Error("useSubmissions must be inside SubmissionsProvider");
  return ctx;
}
