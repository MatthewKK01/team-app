import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function AnimatedImage({
  src,
  alt,
  classn,
}: {
  src: any;
  alt: string;
  classn?: string;
}) {
  return (
    <motion.div
      className={`${classn}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: "60%" },
      }}
    >
      <Image objectFit="contain" src={src} alt={alt} />
    </motion.div>
  );
}

export default AnimatedImage;
