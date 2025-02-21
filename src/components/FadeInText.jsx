import { motion } from "framer-motion";

export default function FadeInText() {
  return (
    <div>
      <motion.p
        initial={{ opacity: 0, y: -30 }} //This defines the starting state of the element before it enters the viewport. Change it to 30 if wants the text to move up
        whileInView={{ opacity: 1, y: 0 }} // This defines the final state when the element comes into view.
        transition={{ duration: 2 }} // The transition lasts for 2 second.
        viewport={{ once: false }} // change to TRUE, the animation only runs once
      >
        From the moment you step in, you'll be greeted with a cozy ambiance,
        friendly service, and the irresistible aroma of freshly prepared dishes.
        Whether you're here for a casual meal or a special occasion, we promise
        an unforgettable dining experience filled with vibrant flavors, fresh
        ingredients, and a touch of culinary artistry. Sit back, relax, and let
        us take you on a delicious journey that will keep you coming back for
        more!
      </motion.p>
    </div>
  );
}
