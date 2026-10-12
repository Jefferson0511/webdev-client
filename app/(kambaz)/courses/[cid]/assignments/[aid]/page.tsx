import Link from "next/link";

// Shared Tailwind classes for every text box and dropdown on the form
const field = "w-full rounded border border-neutral-300 px-3 py-2";
const label = "font-medium md:pt-2 md:text-right";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <label htmlFor="wd-name" className="mb-1 block font-medium">
        Assignment Name
      </label>
      <input id="wd-name" defaultValue="A1 HTML" className={`${field} mb-4`} />
      <textarea
        id="wd-description"
        defaultValue="The assignment is available online Submit a link to the landing page of"
        className={`${field} mb-6 h-40`}
      />
      <div className="grid grid-cols-1 items-start gap-x-4 gap-y-4 md:grid-cols-[180px_1fr]">
        <label htmlFor="wd-points" className={label}>
          Points
        </label>
        <input id="wd-points" defaultValue={100} className={field} />

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
          <input type="date" id="wd-due-date" className={`${field} mb-4`} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="wd-available-from" className="mb-1 block font-medium">
                Available from
              </label>
              <input type="date" id="wd-available-from" className={field} />
            </div>
            <div>
              <label htmlFor="wd-available-until" className="mb-1 block font-medium">
                Until
              </label>
              <input type="date" id="wd-available-until" className={field} />
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
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded bg-neutral-200 px-4 py-2 text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
