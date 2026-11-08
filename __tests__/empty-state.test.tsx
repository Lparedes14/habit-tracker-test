import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("empty state", () => {
  it("shows a prominent Add Habit button on first visit", async () => {
    render(<Home />);

    const button = screen.getByRole("button", { name: "Add Habit" });
    expect(button).toBeVisible();
    expect(button.className).toMatch(/w-full/);

    expect(
      screen.getByRole("heading", { level: 1, name: "StudyStreak" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "No habits yet" }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    const today = await screen.findByText(/^\d{4}-\d{2}-\d{2}$/);
    expect(today.tagName).toBe("TIME");
  });
});
