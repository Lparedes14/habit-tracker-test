export type AddHabitModalProps = {
  open?: boolean;
};

export default function AddHabitModal({ open = false }: AddHabitModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="add-habit-title"
      className="fixed inset-0 z-10 flex items-end justify-center bg-foreground/40 p-4 sm:items-center"
    >
      <div className="w-full max-w-md rounded-2xl bg-surface p-5 shadow-lg">
        <h2 id="add-habit-title" className="text-lg font-semibold">
          Add habit
        </h2>
        <p className="mt-2 text-sm text-muted">
          Name a daily habit, then save it to your list.
        </p>
      </div>
    </div>
  );
}
