import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa6";
import testimonialStyles from "./Testimonial.module.css";

const testimonialData = [
  {
    userName: "James Smith",
    testimonial:
      "Jowbs is the ultimate website for finding remote work. I have been working as a graphic designer for various clients around the world, thanks to Jowbs. I can set my own schedule, rates, and preferences, and Jowbs takes care of the rest. Jowbs has given me the freedom and flexibility to work from anywhere.",
    imageUrl: "./users/user-4.jpg",
  },
  {
    userName: "Aaron Murphy",
    testimonial:
      "I was looking for a career change and Jowbs helped me find the perfect opportunity. I applied for a senior software engineer position at a leading tech company and got hired within a week. Jowbs made the whole process easy and stress-free.",
    imageUrl: "./users/user-2.jpg",
  },
  {
    userName: "Jaime Santiago",
    testimonial:
      "Jowbs is the best website for finding freelance work. I have been using it for over a year and I have completed many projects with satisfied clients. Jowbs has a wide range of categories and skills to choose from, and the payment system is secure and reliable.",
    imageUrl: "./users/user-1.jpg",
  },
];

function Testimonial() {
  const [activeSlide, setActiveSlide] = useState(0);

  function nextSlide() {
    if (activeSlide === testimonialData.length - 1) setActiveSlide(0);
    else setActiveSlide(activeSlide + 1);
  }
  function prevSlide() {
    if (activeSlide === 0) setActiveSlide(testimonialData.length - 1);
    else setActiveSlide(activeSlide - 1);
  }

  return (
    <section className={testimonialStyles.sectionTestimonials}>
      <h1 className={testimonialStyles.title}>Testimonials</h1>
      <div
        style={{ transform: `translateX(-${(activeSlide / 3) * 100}%)` }}
        className={testimonialStyles.container}
      >
        {testimonialData.map((testimonial) => (
          <Comment testimonial={testimonial} key={testimonial.userName} />
        ))}
      </div>
      <div className={testimonialStyles.buttons}>
        <button onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

function Comment({ testimonial }) {
  return (
    <div className={testimonialStyles.testimonialsContainer}>
      <div className={testimonialStyles.imageContainer}>
        <img src={testimonial.imageUrl} alt={testimonial.userName} />
      </div>
      <div className={testimonialStyles.textContainer}>
        <div className={testimonialStyles.rating}>
          {Array.from({ length: 5 }).map((n, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <p className={testimonialStyles.comment}>{testimonial.testimonial}</p>
        <p className={testimonialStyles.username}>{testimonial.userName}</p>
      </div>
    </div>
  );
}

export default Testimonial;
