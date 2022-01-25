import { AnimateSharedLayout, motion } from "framer-motion";
import React from "react";

export default function SegmentedControlSort({}) {
  const ListItem = ({ name }) => {
    return (
      <motion.li>
        <button>{name}</button>
      </motion.li>
    );
  };

  return (
    <AnimateSharedLayout>
      <div className="bg-gray-700">
        <ol>
          <ListItem name="Popularity" />
          <ListItem name="Fun" />
          <ListItem name="Latest" />
          <ListItem name="Oldest" />
        </ol>
      </div>
    </AnimateSharedLayout>
  );
}
