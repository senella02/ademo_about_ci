import { renderHook, act } from "@testing-library/react";
import useCounter from "../src/hooks/features/homepage/useCounter";

describe("useCounter", () => {
  it("should initialize counter at 0", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it("should increment counter by default val", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it("should update val and increment by new val", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(5);
    });
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(5);
  });
});
