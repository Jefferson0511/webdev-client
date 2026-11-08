"use client";
import { useState } from "react";
import CourseCard from "./CourseCard";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";
import { useAccountContext } from "../account/AccountContext";
import { isEnrolled, useEnrollmentsStore } from "../store/enrollmentsStore";

export default function Dashboard() {
  const courses = useCoursesStore((state) => state.courses);
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const unenroll = useEnrollmentsStore((state) => state.unenroll);
  const { currentUser } = useAccountContext();
  // The Enrollments button flips between "my courses" and "all courses"
  const [showAllCourses, setShowAllCourses] = useState(false);
  // Signed in: enrolled courses (or all, if toggled). Signed out: every course.
  const visibleCourses =
    currentUser && !showAllCourses
      ? courses.filter((c) => isEnrolled(enrollments, currentUser._id, c._id))
      : courses;
  const addCourse = useCoursesStore((state) => state.addCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const [course, setCourse] = useState<Course>(emptyCourse);
  return (
    <div id="wd-dashboard">
      <div className="flex items-center justify-between">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        {currentUser && (
          <button
            type="button"
            id="wd-enrollments-toggle"
            onClick={() => setShowAllCourses(!showAllCourses)}
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          >
            Enrollments {showAllCourses ? "(showing all)" : "(showing mine)"}
          </button>
        )}
      </div>
      <hr />
      <h5 className="flex flex-wrap items-center gap-2">
        New Course
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-add-new-course-click"
          onClick={() => addCourse(course)}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          id="wd-update-course-click"
          onClick={() => updateCourse(course)}
        >
          Update
        </button>
      </h5>
      <input
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        id="wd-course-name"
      />
      <textarea
        className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        rows={3}
        value={course.description}
        onChange={(e) =>
          setCourse({ ...course, description: e.target.value })
        }
        id="wd-course-description"
      />
      <label htmlFor="wd-course-number" className="block text-sm">
        Course number
      </label>
      <input
        className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-course-number"
      />
      <label htmlFor="wd-course-start-date" className="block text-sm">
        Start date
      </label>
      <input
        type="date"
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.startDate}
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        id="wd-course-start-date"
      />
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({visibleCourses.length})
      </h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {visibleCourses.map((c) => {
          const enrolled =
            !!currentUser && isEnrolled(enrollments, currentUser._id, c._id);
          return (
            <CourseCard
              key={c._id}
              course={c}
              onEdit={() => setCourse(c)}
              enrolled={currentUser ? enrolled : undefined}
              onToggleEnroll={
                currentUser
                  ? () =>
                      enrolled
                        ? unenroll(currentUser._id, c._id)
                        : enroll(currentUser._id, c._id)
                  : undefined
              }
            />
          );
        })}
      </div>
    </div>
  );
}
