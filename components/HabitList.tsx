export default function HabitList() {
  return (
    <section aria-label="Today's habits">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
        Today&apos;s habits
      </h3>
      <ul
        aria-label="Habit list"
        className="mt-2 rounded-xl border border-dashed border-line bg-habit-soft/40 px-4 py-3 text-sm text-muted"
      >
        <li className="list-none">Your habits will show up here.</li>
      </ul>
    </section>
  );
}
