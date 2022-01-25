import React from "react";
import styles from "../styles/Work.module.css";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import SegmentedControlSort from "../components/SegmentedControlSort";

export default function work() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");

    return () => setTheme("light");
  }, []);
  return (
    <div className={styles.root}>
      <div>
        <h2>Test</h2>
      </div>
      <SegmentedControlSort />
    </div>
  );
}
