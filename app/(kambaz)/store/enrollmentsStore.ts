"use client";
import { create } from "zustand";
import enrollmentsJson from "../database/enrollments.json";

export type Enrollment = { _id: string; user: string; course: string };

type EnrollmentsStore = {
  enrollments: Enrollment[];
  enroll: (userId: string, courseId: string) => void;
  unenroll: (userId: string, courseId: string) => void;
};

export const useEnrollmentsStore = create<EnrollmentsStore>((set) => ({
  enrollments: enrollmentsJson as Enrollment[],
  enroll: (userId, courseId) =>
    set((state) => ({
      enrollments: [
        ...state.enrollments,
        { _id: crypto.randomUUID(), user: userId, course: courseId },
      ],
    })),
  unenroll: (userId, courseId) =>
    set((state) => ({
      enrollments: state.enrollments.filter(
        (e) => !(e.user === userId && e.course === courseId),
      ),
    })),
}));

// True when this user has an enrollment row for this course
export function isEnrolled(
  enrollments: Enrollment[],
  userId: string,
  courseId: string,
) {
  return enrollments.some((e) => e.user === userId && e.course === courseId);
}
