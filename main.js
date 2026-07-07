// ------------------------
// Why Choose Section
// ------------------------
const whyFeatures = [
  { image: "assets/image/chooseIcon/pickup.svg", text: "Doorstep Pickup Across Kerala" },
  { image: "assets/image/chooseIcon/fastAir.svg", text: "Fast Air & Sea Freight Shipping" },
  { image: "assets/image/chooseIcon/secure.svg", text: "Secure Packaging & Delivery" },
  { image: "assets/image/chooseIcon/deliveryCoverage.svg", text: "UK-Wide Delivery Coverage" },
  { image: "assets/image/chooseIcon/support.svg", text: "Malayalam & English Support" },
];

const whyContainer = document.getElementById("why-choose");

let whyHTML = `
  <div class=" bg-white rounded-3xl shadow px-6 py-6 md:px-10 md:py-10 flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto">
    <div class="w-full md:w-1/2">
      <img src="assets/image/chooseRegalJohnsUK.svg" alt="Container Yard" class="rounded-xl w-full object-cover shadow" />
    </div>
    <div class="w-full md:w-1/2">
      <h2 class="text-3xl md:text-4xl font-semibold mb-6">
        Why Choose <span class="text-red-600">Regal Johns </span>?
      </h2>
      <ul class="space-y-4">
`;

whyFeatures.forEach((item) => {
  whyHTML += `
    <li class="flex items-center gap-4">
      <div class="bg-red-500 w-[55px] h-[55px] rounded-full flex items-center justify-center">
        <img src="${item.image}" alt="icon"  />
      </div>
      <span class="text-gray-800 text-base md:text-lg font-medium">${item.text}</span>
    </li>
  `;
});

whyHTML += `</ul></div></div>`;
whyContainer.innerHTML = whyHTML;

// ------------------------
// We Specialize in Sending Section
// ------------------------
const sendingItems = [
  { image: "assets/image/specializIcon/mattresses.svg", text: "Premium Mattresses" },
  { image: "assets/image/specializIcon/utensils.svg", text: "Heavy Kitchen Utensils" },
  { image: "assets/image/specializIcon/poojaItems.svg", text: "Idols & Pooja Items" },
  { image: "assets/image/specializIcon/snack.svg", text: "Kerala Snacks & Sweets" },
  { image: "assets/image/specializIcon/studyMaterials.svg", text: "Books & Study Materials" },
  { image: "assets/image/specializIcon/gift.svg", text: "Gift Items" },
  { image: "assets/image/specializIcon/luggage.svg", text: "Excess Baggage & Luggage" },
  { image: "assets/image/specializIcon/machinery.svg", text: "Machinery" },
  { image: "assets/image/specializIcon/electrical.svg", text: "Electrical Equipment" },
  { image: "assets/image/specializIcon/frames.svg", text: "Heavy Photo Frames" },
  { image: "assets/image/specializIcon/curtains.svg", text: "Blinds & Curtains" },
];
const specializeImages = [
  "assets/image/specialize.svg",
  "assets/image/specialize1.svg",
  "assets/image/specialize2.svg",
  "assets/image/specialize3.svg",
  "assets/image/specialize4.svg",
  "assets/image/specialize5.svg",
  "assets/image/specialize6.svg",
  "assets/image/specialize7.svg",
  "assets/image/specialize8.svg",
  "assets/image/specialize9.svg",
  "assets/image/specialize10.svg",
 
];

const specializeContainer = document.getElementById("specialize-sending");

let specializeHTML = `
<div class="max-w-7xl mx-auto">
    <div class="grid lg:grid-cols-2 gap-10 items-center">

        <!-- Left -->
        <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-8">
                We Specialize in
                <span class="text-red-600">Sending</span>
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
`;

sendingItems.forEach((item) => {
    specializeHTML += `
        <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shrink-0">
                <img src="${item.image}" alt="" class="w-6 h-6 object-contain">
            </div>

            <p class="text-gray-700 font-medium">
                ${item.text}
            </p>
        </div>
    `;
});

specializeHTML += `
            </div>
        </div>

        <!-- Right -->
        <div class="flex items-center justify-center h-full">
        <div class="image-box">
         <img
                id="specialize-loop-image"
                src="${specializeImages[0]}"
                class="w-full h-full object-cover rounded-lg shadow-lg"
                alt=""
            >
        </div>
           
        </div>

    </div>
</div>
`;

specializeContainer.innerHTML = specializeHTML;
const loopImageElement = document.getElementById("specialize-loop-image");
let currentImageIndex = 0;

// Preload all images
const preloadedImages = specializeImages.map((src) => {
    const img = new Image();
    img.src = src;
    return img;
});

setInterval(() => {

    loopImageElement.classList.remove("slide-in-right");
    loopImageElement.classList.add("slide-out-left");

    setTimeout(() => {

        currentImageIndex = (currentImageIndex + 1) % specializeImages.length;

        loopImageElement.src = preloadedImages[currentImageIndex].src;

        loopImageElement.classList.remove("slide-out-left");
        loopImageElement.classList.add("slide-in-right");

    }, 600); // match CSS animation duration

}, 3000);

const services = [
  {
    icon: "assets/image/serviceIcons/courierServices.svg",
    title: "Courier Services – Kerala to Worldwide Service",
    description: "Door-to-door courier services with secure packaging and real-time tracking. We handle everything from pickup to delivery.",
  },
  {
    icon: "assets/image/serviceIcons/buySell.svg",
    title: "Buy & Send From Kerala",
    description: "Want something specific from Kerala? Let us buy it on your behalf and deliver it to your home in the UK.",
  },
  {
    icon: "assets/image/serviceIcons/luggages.svg",
    title: "Excess Baggage & Luggage Courier",
    description: "Avoid high airline charges! Send your baggage affordably with us.",
  },
  {
    icon: "assets/image/serviceIcons/mattress.svg",
    title: "Mattress & Bulky Items Delivery",
    description: "We specialize in sending premium latex mattresses and heavy items with proper packaging and damage protection.",
  },
  {
    icon: "assets/image/serviceIcons/pooja.svg",
    title: "Specialty Items",
    description: "Pooja items, brass utensils, handmade idols, and traditional gifts — we deliver them safely with cultural sensitivity.",
  },
];

const servicesContainer = document.getElementById("our-services");

let html = `
  <div class=" bg-white rounded-3xl shadow p-8 md:p-10  max-w-7xl mx-auto text-center">
    <h2 class="text-3xl md:text-4xl font-semibold mb-12">
      Our <span class="text-red-600">Services</span>
    </h2>
`;

// Flex-wrap + justify-center auto-centers any incomplete last row
// mobile: 1 per row | tablet (sm): 2 per row -> 2,2,1 centered | desktop (lg): 3 per row -> 3,2 centered
html += `<div class="flex flex-wrap justify-center gap-6 mb-10">`;

services.forEach((service) => {
  html += `
    <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-xl Why Choose Regal Johns ? hover:text-red-600 transition-all duration-300
                w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
      <img src="${service.icon}" alt="${service.title}" class="h-12 mx-auto mb-4" />
      <h3 class="text-[20px] font-semibold mb-2 text-gray-800 text-center">${service.title}</h3>
      <p class="text-sm text-gray-600 text-center">${service.description}</p>
    </div>
  `;
});

html += `</div>`;

// Buttons
html += `
    <div class="mt-10 flex flex-wrap gap-4 justify-center">
    <a href="https://wa.me/+916282063679?text=Hello" class="inline-block" target="_blank" rel="noopener noreferrer">
    <button class="bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition">
        Start Now →
      </button>
    </a>
    <a href="https://wa.me/+916282063679?text=Hello" class="inline-block" target="_blank" rel="noopener noreferrer">  
      <button class="bg-white text-red-600 border border-red-600 px-6 py-3 rounded-full font-medium hover:bg-red-50 transition">
        Request a Callback →
      </button>
    </a>
    </div>
  </div>
`;

servicesContainer.innerHTML = html;


const testimonials = [
  {
    image: "assets/image/testimonial/testimonial1.svg",
    name: "Afeeha Hashim",
    quote: "This courier service is excellent! Delivery is fast, arriving within 5 days. The packaging is extremely secure so much so that it’s a bit hard to unpack, but that just shows how well they protect the items. Overall, one of the best services I’ve used for safe and reliable delivery.",
    rating: 5,
    bg: "bg-white",
    text: "text-gray-700",
    quoteBg: "bg-red-100",
    quoteText: "text-red-600",
    images:"assets/image/testimonial/dotRed.svg"
  },
  {
    image: "assets/image/testimonial/testimonial2.svg",
    name: "Kichu Varghese",
    quote: "Excellent service from REGAL JOHNS INTERNATIONAL. My package was delivered safely and on time, and the box arrived in perfect condition. The staff was professional, responsive, and kept me updated throughout the process. I’m very satisfied with the overall experience and would definitely recommend their service to others. Thank you for the smooth delivery.",
    rating: 5,
    bg: "bg-red-600",
    text: "text-white",
    quoteBg: "bg-white",
    quoteText: "text-black",
    images:"assets/image/testimonial/dotBlack.svg"
  },
];

const testimonialContainer = document.getElementById("testimonial-container");

let testimonialHTML = `
  <h2 class="text-3xl md:text-4xl font-semibold text-center mb-12">
    Customer <span class="text-red-600">Testimonials</span>
  </h2>
  <div class="grid md:grid-cols-2  max-w-7xl mx-auto">
`;

testimonials.forEach((t) => {
  testimonialHTML += `
    <div class="p-8  shadow-md ${t.bg} ${t.text} flex flex-col justify-between transition hover:scale-[1.02] duration-300">
      <div class="flex items-center gap-4 mb-4">
        <img src="${t.image}" class="w-14 h-14 rounded-full object-cover" />
        <div class="font-semibold text-[18px]">${t.name}</div>
        <div class="ml-auto  flex items-center justify-center">
          <span class="${t.quoteText} text-[14px] font-bold"> <img src="${t.images}" class="w-14 h-14 rounded-full object-cover" /></span>
        </div>
      </div>
      <p class="italic text-sm mb-4">${t.quote}</p>
      <div class="flex gap-1 ">
        ${"★".repeat(t.rating)
          .split("")
          .map((s) => `<span class="text-yellow-400 text-[30px]">${s}</span>`)
          .join("")}
      </div>
    </div>
  `;
});

testimonialHTML += "</div>";
testimonialContainer.innerHTML = testimonialHTML;

const faqs = [
  {
    question: "1. How long does delivery take ?",
    answer: "5–10 business days (air), 25–35 days (sea), depending on the item..",
  },
  {
    question: "2. What items are allowed?",
    answer: "Most non-perishable, personal, and household goods. Contact us for item-specific queries.",
  },
  {
    question: "3. Can I order something from Kerala through you?",
    answer: "Yes! We can purchase and ship on your behalf.",
  },
  {
    question: "4. Is there support in Malayalam?",
    answer: "Absolutely. We support both Malayalam and English for your comfort.",
  },
];

const faqContainer = document.getElementById("faq-container");

let faqHTML = `
  
 
  <div class="bg-white rounded-3xl shadow p-6 md:p-10 max-w-7xl mx-auto text-center">
    <h2 class="text-3xl md:text-4xl font-semibold text-center mb-12">
    Frequently asked <span class="text-red-600">questions</span>
  </h2>
     <div class="max-w-3xl mx-auto space-y-4">
`;

faqs.forEach((faq, index) => {
  faqHTML += `
    <div class="faq-item border rounded overflow-hidden transition-all">
      <button class="w-full text-left px-6 py-4 font-medium flex justify-between items-center bg-white text-black border border-[#E4686D] faq-toggle transition-all duration-300 text-[20px] md:text-[24px]" data-index="${index}">
        ${faq.question}
        <span class="text-xl">+</span>
      </button>
      <div class="faq-answer text-white bg-red-600 px-6 text-start  text-[18px] md:text-[20px]">${faq.answer}</div>
    </div>
  `;
});

faqHTML += "</div>";
faqContainer.innerHTML = faqHTML;

// JavaScript logic
document.querySelectorAll(".faq-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const faqItem = btn.closest(".faq-item");
    const answer = faqItem.querySelector(".faq-answer");
    const isOpen = answer.classList.contains("open");

    // Close all
    document.querySelectorAll(".faq-answer").forEach((ans) => ans.classList.remove("open"));
    document.querySelectorAll(".faq-toggle").forEach((t) => {
      t.classList.remove("bg-red-600", "text-white");
      t.classList.add("bg-white", "text-black");
      t.querySelector("span").textContent = "+";
    });

    // Toggle the clicked one
    if (!isOpen) {
      answer.classList.add("open");
      btn.classList.remove("bg-white", "text-black");
      btn.classList.add("bg-red-600", "text-white");
      btn.querySelector("span").textContent = "×";
    }
  });
});


