const testimonials = [
    {
        text: "OurSmile was beautifully designed and incredibly intuitive. The UX felt natural and thoughtful.",
        name: "Kishan Thobani",
        role: "Design Head - Afkae Studio"
    },
    {
        text: "The attention to detail in the UI was exceptional. Everything felt polished and purposeful.",
        name: "Aarav Mehta",
        role: "Product Manager"
    },
    {
        text: "A clean, modern design with a strong user-first approach. Very impressive work.",
        name: "Sneha Kulkarni",
        role: "UX Researcher"
    },
    {
        text: "From wireframes to final UI, the execution was smooth and professional.",
        name: "Rahul Deshmukh",
        role: "Startup Founder"
    },
    {
        text: "Simple, elegant, and effective design choices that elevated the product experience.",
        name: "Neha Sharma",
        role: "Creative Director"
    }
];

let currentIndex = 0;
let isAnimating = false;

const card = document.querySelector(".testimonial_card");
const quoteText = document.getElementById("quoteText");
const quoteName = document.getElementById("quoteName");
const quoteRole = document.getElementById("quoteRole");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateTestimonial(index) {
    if (isAnimating) return;
    isAnimating = true;

    card.classList.remove("fade-in");
    card.classList.add("fade-out");

    card.addEventListener(
        "transitionend",
        () => {
            quoteText.textContent = testimonials[index].text;
            quoteName.textContent = testimonials[index].name;
            quoteRole.textContent = testimonials[index].role;

            card.classList.remove("fade-out");
            card.classList.add("fade-in");

            isAnimating = false;
        },
        { once: true }
    );
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
});
