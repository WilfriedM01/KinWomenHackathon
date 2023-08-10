/* eslint max-len: ["error", { "ignoreStrings": true }] */
const arrayReviewers = [
  {
    picture: "assets/img/profil/profile_1.jpeg",
    name: "Wifried Muyisa",
    position: "Founder",
    description:
      "JavaScript developer with 5+ years of experience in the field. Proven ability to design, develop, and deploy JavaScript-based web applications.",
  },
  {
    picture: "assets/img/profil/profile_2.jpeg",
    name: "Dieullah Biondi",
    position: "Fullstack Developer at Microsoft",
    description:
      "Full-stack developer with 5+ years of experience in designing, developing, and deploying web applications. Proven ability to work independently and as part of a team.",
  },
  {
    picture: "assets/img/profil/profile_3.jpeg",
    name: "Lysette Mathe",
    position: "Backend Developer at Google",
    description:
      "Skilled Java developer with 5+ years of experience in the software industry. Expertise in a variety of Java frameworks and libraries, including Spring Boot, Hibernate, and JUnit.",
  },
  {
    picture: "assets/img/profil/profile_4.jpeg",
    name: "Yvonne Bukulu",
    position: "Ruby Developer at Facebook",
    description:
      "Experienced Ruby developer with 5+ years of experience in the development of web applications. Strong problem-solving and communication skills.",
  },
  {
    picture: "assets/img/profil/profile_50.jpeg",
    name: "Daniella Kambere",
    position: "React Developer at Meta",
    description:
      "Experienced React developer with 5+ years of experience in the tech industry. Proficient in a variety of JavaScript frameworks and libraries, such as Redux and Axios.",
  },
  {
    picture: "assets/img/profil/profile_6.jpeg",
    name: "Leonie Muyisa",
    position: "Front-end Developer at Microsoft",
    description:
      "Skilled front-end developer with 5+ years of experience in designing web applications. Proven ability to work independently and as part of a team to deliver high-quality web experiences.",
  },
];

function buildReviewerDetails(data, section) {
  data.forEach((element, index) => {
    const divItems = document.createElement("div");

    if (index > 3) {
      divItems.classList.add("reviewer-items", "hide-items");
    } else {
      divItems.classList.add("reviewer-items");
    }

    // this condition helps to clear : both in the desktop css style
    if (index === data.length - 2) {
      divItems.classList.add("reviewer-items-last");
    }

    const divImage = document.createElement("div");
    divImage.className = "reviewer-image";

    const img = document.createElement("img");
    img.src = element.picture;
    img.alt = "profile picture";
    divImage.appendChild(img);

    const divDetails = document.createElement("div");
    divDetails.className = "reviewer-details";

    const h4 = document.createElement("h4");
    h4.className = "reviewer-name";
    h4.innerText = element.name;

    const span = document.createElement("span");
    span.className = "reviewer-position";
    span.innerText = element.position;

    const divLine = document.createElement("div");
    divLine.className = "reviewer-position-line";

    const hr = document.createElement("hr");
    const paragraphDescription = document.createElement("p");
    paragraphDescription.classList.add(
      "reviewer-description",
      "reviewer-description-position"
    );
    paragraphDescription.innerText = element.description;
    divLine.appendChild(hr);
    divDetails.appendChild(h4);
    divDetails.appendChild(span);
    divDetails.appendChild(divLine);
    divDetails.appendChild(paragraphDescription);
    divItems.appendChild(divImage);
    divItems.appendChild(divDetails);
    section.appendChild(divItems);
  });

  // build more button
  const moreReviewersDiv = document.createElement("div");
  moreReviewersDiv.className = "reviewer-items-more-button";

  const linkMore = document.createElement("a");
  linkMore.innerText = "MORE";
  linkMore.addEventListener("click", () => {
    document.querySelectorAll(".hide-items").forEach((element) => {
      element.classList.toggle("hide-items");
    });
  });

  const imgExpand = document.createElement("img");
  imgExpand.src = "assets/icons/expand_arrow.png";
  imgExpand.alt = "expand icon";

  moreReviewersDiv.appendChild(linkMore);
  moreReviewersDiv.appendChild(imgExpand);

  section.appendChild(moreReviewersDiv);

  return section;
}

const reviewerSection = document.getElementById("reviewers-section");
buildReviewerDetails(arrayReviewers, reviewerSection);
