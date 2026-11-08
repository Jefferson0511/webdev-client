// Asks before removing an assignment; renders nothing until there is a title to confirm
export default function DeleteAssignmentDialog({
  title,
  onCancel,
  onConfirm,
}: {
  title: string | null;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  if (!title) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      id="wd-delete-assignment-dialog"
    >
      <div className="w-full max-w-md rounded-lg bg-white shadow-lg">
        <div className="border-b border-neutral-200 px-4 py-3">
          <h3 className="m-0 text-lg font-semibold">Remove assignment?</h3>
        </div>
        <p className="px-4 py-3">
          Are you sure you want to remove <strong>{title}</strong>?
        </p>
        <div className="flex justify-end gap-2 border-t border-neutral-200 px-4 py-3">
          <button
            type="button"
            onClick={onCancel}
            className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
            id="wd-delete-assignment-cancel"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
            id="wd-delete-assignment-confirm"
          >
            Yes, delete
          </button>
        </div>
      </div>
    </div>
  );
}
