import { motion } from "framer-motion";

export default function InfiniteLine(props) {
  return (
    <div className="w-full overflow-hidden  py-4">
      <motion.div
        className="flex whitespace-nowrap bold text-black text-2xl md:text-4xl  gap-10"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      >
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
        <span>{props.text}</span>
      </motion.div>
    </div>
  );
}
