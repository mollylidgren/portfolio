// src/data/projectsData.js
import projectImg6 from "../assets/images/hero_sky.png";

import projectWebAHome from "../assets/images/projectWebA/home.png";
import projectWebATranser from "../assets/images/projectWebA/airportTransfer.png";
import projectWebAAboutHotel from "../assets/images/projectWebA/aboutTheHotel.png";
import projectWebAContact from "../assets/images/projectWebA/contact.png";
import projectWebAAboutUs from "../assets/images/projectWebA/aboutUs.png";
import projectWebASelected from "../assets/images/projectWebA/selectionOverview.png";

import projectUppslagG from "../assets/images/projectGreen/uppslagG.jpg";
import projectMoodBoardG from "../assets/images/projectGreen/MoodBoardG.png";
import projectGrafiskProfilG from "../assets/images/projectGreen/GrafiskProfilG.png";

import strawberry from "../assets/images/projectPosters/strawberry.jpg";
import nail from "../assets/images/projectPosters/nail.jpg";

import cows from "../assets/images/projectPhotos/cows.jpg";
import sky from "../assets/images/projectPhotos/sky.jpg";
import ebbs from "../assets/images/projectPhotos/ebbs.jpg";

import projectTwigims from "../assets/video/projectTwigims/TheTwigims.mp4";
import projectTwigimsImg from "../assets/images/projectTwigims/twigims.png";

import bikeMovie from "../assets/video/projectBike/cykelframjandet.mp4";
import bikeImg from "../assets/images/projectBike/cykelfrämjandetBild.png";

export const projects_en = [
  {
    id: "1",
    title: "Website – Accommodation Delux",
    role: "Front-end Developer & Visual Design Contributor",
    type: "University Concept Project",
    description: `A concept-driven university project developed in a group setting, where we created a complete website for a fictional travel company. The goal was to design an inspiring and intuitive booking experience for users exploring and reserving trips online. Prototypes and interface flows were developed in Figma, and the website was built from scratch using React. My primary focus was front-end development, while also contributing to the project’s visual identity and overall design direction.`,
    responsibilities: [
      "Design wireframes and interactive prototypes in Figma to define user flows and interface structure",
      "Develop responsive web interfaces from scratch using React and modern front-end practices",
      "Contribute to the creation of a cohesive visual identity, including color palette, typography and graphic elements",
      "Design user-friendly interfaces and interactive components such as booking flows and navigation structures",
      "Collaborate closely with team members to ensure a consistent and unified design solution",
    ],
    result:
      "The final outcome was a visually coherent and user-centered website concept that balances functionality with engaging design. The project strengthened my experience in combining front-end development with interface design, as well as working collaboratively toward a holistic digital solution. Selected screens and design elements are shown above to highlight key parts of the project.",
    img: projectWebAHome,
    shortDescription:
      "A university concept project for a fictional travel booking website, designed in Figma and developed in React.",
    media: [
      { type: "image", src: projectWebAHome },
      { type: "image", src: projectWebAAboutHotel },
      { type: "image", src: projectWebASelected },
      { type: "image", src: projectWebAContact },
      { type: "image", src: projectWebAAboutUs },
      { type: "image", src: projectWebATranser },
      { type: "image", src: projectWebAContact },
    ],
  },
  {
    id: "2",
    title: "Photography & Post-Production",
    role: "Photographer & Post-Production Editor",
    type: "Independent Concept Project",
    description:
      "An independent photography and post-production project exploring the transformation of raw imagery through editing workflows. I captured the original photographs and developed the final visual expression through structured color grading and retouching. The project highlights the impact of post-production in shaping mood, tone and visual clarity.",
    responsibilities: [
      "Plan and capture original photographic material with attention to composition and lighting",
      "Perform color correction and tonal adjustments in Adobe Lightroom",
      "Refine details and enhance imagery using Adobe Photoshop",
      "Develop a consistent visual mood through color grading",
      "Present before-and-after comparisons to demonstrate the editing process and visual transformation",
    ],
    result:
      "The final outcome is a series of transformed images that demonstrate how professional editing enhances atmosphere, depth and visual storytelling. The project strengthened my understanding of light, color theory and post-production workflows, as well as my ability to elevate raw material into polished visual content.",
    img: cows,
    shortDescription:
      "A photography and editing project showcasing before-and-after transformations through Lightroom and Photoshop.",
    media: [
      { type: "image", src: cows },
      { type: "image", src: sky },
      { type: "image", src: ebbs },
    ],
  },
  {
    id: "3",
    title: "Advertising Posters",
    role: "Visual Designer & Creative Concept Developer",
    type: "Independent Concept Project",
    description:
      "An independent advertising concept project where I developed two product-focused promotional posters for fictional cosmetic brands. Each poster was designed with a distinct visual identity and emotional tone, one centered around a deep red nail polish concept, and the other built around a lip gloss with soft pink aesthetics. The project explores color psychology, composition, and product-centered visual storytelling within a commercial context.",
    responsibilities: [
      "Develop individual visual concepts and brand directions for two fictional cosmetic products",
      "Create cohesive color palettes to reinforce product identity and emotional tone",
      "Source and integrate royalty-free imagery and AI-generated visuals (Adobe Firefly)",
      "Design and compose all visual elements, typography and layout in Adobe Photoshop",
      "Focus on product emphasis, hierarchy and clear commercial messaging",
    ],
    result:
      "The final outcome consists of two visually distinct advertising posters that effectively highlight the products through strategic color use, composition and typography. The project strengthened my ability to translate product identity into clear visual communication and create commercially focused design concepts from scratch.",
    img: nail,
    shortDescription:
      "A conceptual editorial spread exploring sustainable living through visual identity, illustration and layout design.",
    media: [
      { type: "image", src: nail },
      { type: "image", src: strawberry },
    ],
  },
  {
    id: "4",
    title: "Magazine spread concept – ‘Handla Grönt’",
    role: "Visual Designer & Editorial Layout Designer",
    type: "University Concept Project",
    description:
      "A sustainability-focused editorial concept developed within a university course. The project explores visual communication for a fictional publication centered on conscious consumption and environmental awareness.",
    responsibilities: [
      "Develop a visual concept and moodboard based on sustainability as a core theme",
      "Create a cohesive graphic identity including color palette, typography and illustrative elements",
      "Design original illustrations to support the editorial narrative",
      "Produce a full magazine spread layout adapted for both print and digital formats",
      "Execute the design using Adobe Illustrator, Photoshop and InDesign",
    ],
    result:
      "A visually consistent and concept-driven magazine spread that communicates sustainability through refined typography, illustration and layout, tailored for both web and print presentation.",
    img: projectUppslagG,
    shortDescription:
      "A conceptual editorial spread exploring sustainable living through visual identity, illustration and layout design.",
    media: [
      { type: "image", src: projectUppslagG },
      { type: "image", src: projectMoodBoardG },
      { type: "image", src: projectGrafiskProfilG },
    ],
  },
  {
    id: "5",
    title: "Illustrated Motion Film – The Twigims",
    role: "Illustrator, Motion Designer & Concept Creator",
    type: "University Concept Project",
    description:
      "A concept-driven motion design project developed within a university course, where I created an original animated film from scratch. Each frame of the film was individually illustrated in Adobe Illustrator and later assembled and animated in After Effects. The project explores creative visual storytelling through dynamic transitions and flowing compositions designed to maintain viewer engagement.",
    responsibilities: [
      "Develop the creative concept and visual narrative for the film",
      "Illustrate all visual assets frame-by-frame in Adobe Illustrator",
      "Animate and compose the film in After Effects with a focus on smooth and engaging transitions",
      "Design motion sequences where elements merge and flow into each other to guide the viewer’s attention",
      "Source and implement sound effects and audio to enhance the overall viewing experience",
    ],
    result:
      "The final outcome is a visually expressive and rhythmically animated short film that combines illustration, motion design and sound to create an engaging viewing experience. The project strengthened my skills in visual storytelling, animation workflow and creative concept development.",
    img: projectTwigimsImg,
    shortDescription:
      "An illustrated motion design film created in Illustrator and After Effects, exploring creative transitions and visual storytelling.",
    media: [{ type: "video", src: projectTwigims }],
  },
  {
    id: "6",
    title: "Cycling Promotion Film – ‘Cykelfrämjandet’",
    role: "Concept Developer & Post-Production Designer",
    type: "University Concept Project",
    description:
      "A concept-driven film project developed within a university course, created for Cykelfrämjandet as a fictional client. The aim was to produce an engaging promotional film encouraging everyday cycling through creative storytelling and visual expression. I contributed to the development of the core concept and narrative, participated in the filming process, and played a key role in post-production with a focus on visual effects and editing.",
    responsibilities: [
      "Co-develop the creative concept and narrative for the promotional film",
      "Participate in filming and on-set production",
      "Design and implement visual effects and motion elements in post-production",
      "Contribute to editing and visual pacing to strengthen storytelling",
      "Collaborate closely with the team to ensure a cohesive final production",
    ],
    result:
      "The final outcome is a dynamic and visually engaging promotional film that combines concept development, live-action footage and post-production effects to communicate an inspiring message. The project strengthened my experience in collaborative filmmaking, visual effects and narrative-driven content creation.",
    note: "Note: This video has been optimized for web viewing. The original is available in higher resolution and quality.",
    img: bikeImg,
    shortDescription:
      "A university group film project for a fictional client, combining concept development, filming and post-production with visual effects.",
    media: [{ type: "video", src: bikeMovie }],
  },
];
