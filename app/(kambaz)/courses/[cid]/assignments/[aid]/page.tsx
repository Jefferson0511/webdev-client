"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  emptyAssignment,
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";
import { useAccountContext } from "../../../../account/AccountContext";

// Shared Tailwind classes for every text box and dropdown on the form
const field = "w-full rounded border border-neutral-300 px-3 py-2";
const label = "font-medium md:pt-2 md:text-right";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const courseId = String(cid);
  const assignmentId = String(aid);
  const router = useRouter();
  const assignments = useAssignmentsStore((state) => state.assignments);
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);
  const { currentUser } = useAccountContext();
  const canEdit = !currentUser || currentUser.role !== "STUDENT";
  // "new" means create; any other id loads that assignment into the draft
  const isNew = assignmentId === "new";
  const existing = assignments.find((a) => a._id === assignmentId);
  const [draft, setDraft] = useState<Assignment>(
    existing ?? { ...emptyAssignment, course: courseId },
  );
  const save = () => {
    if (isNew) {
      addAssignment({ ...draft, course: courseId });
    } else {
      updateAssignment(draft);
    }
    router.push(`/courses/${courseId}/assignments`);
  };
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <label htmlFor="wd-name" className="mb-1 block font-medium">
        Assignment Name
      </label>
      <input
        id="wd-name"
        value={draft.title}
        onChange={(e) => setDraft({ ...draft, title: e.target.value })}
        className={`${field} mb-1`}
      />
      <p id="wd-ai-assignment-id" className="mb-4 text-sm text-neutral-500">
        Assignment id: {assignmentId}
      </p>
      <textarea
        id="wd-description"
        value={draft.description}
        onChange={(e) => setDraft({ ...draft, description: e.target.value })}
        className={`${field} mb-6 h-40`}
      />
      <div className="grid grid-cols-1 items-start gap-x-4 gap-y-4 md:grid-cols-[180px_1fr]">
        <label htmlFor="wd-points" className={label}>
          Points
        </label>
        <input
          id="wd-points"
          type="number"
          value={draft.points}
          onChange={(e) =>
            setDraft({ ...draft, points: parseInt(e.target.value) || 0 })
          }
          className={field}
        />

        <label htmlFor="wd-group" className={label}>
          Assignment Group
        </label>
        <select id="wd-group" className={field}>
          <option>ASSIGNMENTS</option>
          <option>QUIZZES</option>
          <option>EXAMS</option>
          <option>PROJECT</option>
        </select>

        <label htmlFor="wd-display-grade-as" className={label}>
          Display Grade as
        </label>
        <select id="wd-display-grade-as" className={field}>
          <option>Points</option>
          <option>Percentage</option>
        </select>

        <label htmlFor="wd-submission-type" className={label}>
          Submission Type
        </label>
        <div className="rounded border border-neutral-300 p-4">
          <select id="wd-submission-type" className={`${field} mb-4`}>
            <option>Online</option>
            <option>Offline</option>
          </select>
          <span className="mb-2 block font-medium">Online Entry Options</span>
          <div className="flex flex-col gap-2">
            <label htmlFor="wd-text-entry" className="flex items-center gap-2">
              <input type="checkbox" id="wd-text-entry" /> Text Entry
            </label>
            <label htmlFor="wd-website-url" className="flex items-center gap-2">
              <input type="checkbox" id="wd-website-url" /> Website URL
            </label>
            <label htmlFor="wd-media-recordings" className="flex items-center gap-2">
              <input type="checkbox" id="wd-media-recordings" /> Media Recordings
            </label>
            <label htmlFor="wd-student-annotation" className="flex items-center gap-2">
              <input type="checkbox" id="wd-student-annotation" /> Student
              Annotation
            </label>
            <label htmlFor="wd-file-upload" className="flex items-center gap-2">
              <input type="checkbox" id="wd-file-upload" /> File Upload
            </label>
          </div>
        </div>

        <span className={label}>Assign</span>
        <div className="rounded border border-neutral-300 p-4">
          <label htmlFor="wd-assign-to" className="mb-1 block font-medium">
            Assign to
          </label>
          <input id="wd-assign-to" defaultValue="Everyone" className={`${field} mb-4`} />
          <label htmlFor="wd-due-date" className="mb-1 block font-medium">
            Due
          </label>
          <input
            type="date"
            id="wd-due-date"
            value={draft.due}
            onChange={(e) => setDraft({ ...draft, due: e.target.value })}
            className={`${field} mb-4`}
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="wd-available-from" className="mb-1 block font-medium">
                Available from
              </label>
              <input
                type="date"
                id="wd-available-from"
                value={draft.available}
                onChange={(e) => setDraft({ ...draft, available: e.target.value })}
                className={field}
              />
            </div>
            <div>
              <label htmlFor="wd-available-until" className="mb-1 block font-medium">
                Until
              </label>
              <input
                type="date"
                id="wd-available-until"
                value={draft.until ?? ""}
                onChange={(e) => setDraft({ ...draft, until: e.target.value })}
                className={field}
              />
            </div>
          </div>
        </div>

        <label htmlFor="wd-ai-editor-notes" className={label}>
          Sample notes
        </label>
        <textarea id="wd-ai-editor-notes" className={`${field} h-24`} />
      </div>
      <hr className="my-6 border-neutral-300" />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${courseId}/assignments`}
          id="wd-cancel"
          className="rounded bg-neutral-200 px-4 py-2 text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        {canEdit && (
          <button
            type="button"
            onClick={save}
            id="wd-save"
            className="rounded bg-red-600 px-4 py-2 text-white"
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
}
