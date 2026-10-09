/* ==========================================
   WELLTECH GUIDE
   RESPONSIVE WEBSITE SEARCH
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    // Prevent duplicate search interfaces
    if (document.querySelector(".site-search")) {
        return;
    }

    // All searchable pages
    const pages = [
        {
            title: "Home",
            url: "index.html",
            keywords: "homepage welltech guide build learn grow online"
        },
        {
            title: "All Beginner Guides",
            url: "guides.html",
            keywords: "guides tutorials learning beginner education"
        },
        {
            title: "What Is a Website?",
            url: "what-is-a-website.html",
            keywords: "website meaning definition internet web page"
        },
        {
            title: "Domain vs Hosting",
            url: "domain-vs-hosting.html",
            keywords: "domain hosting difference website address server"
        },
        {
            title: "How to Create Your First Website",
            url: "how-to-create-your-first-website.html",
            keywords: "create build make first website beginner"
        },
        {
            title: "How to Build a Website from Your Phone",
            url: "how-to-build-a-website-from-your-phone.html",
            keywords: "phone mobile android smartphone website development"
        },
        {
            title: "How Much Does a Website Cost?",
            url: "how-much-does-a-website-cost.html",
            keywords: "website cost price budget development"
        },
        {
            title: "Website Cost in Nigeria",
            url: "website-cost-in-nigeria.html",
            keywords: "Nigeria Nigerian naira website cost price budget"
        },
        {
            title: "Best Web Hosting for Beginners",
            url: "best-web-hosting-for-beginners.html",
            keywords: "best web hosting beginners host website"
        },
        {
            title: "Starting an Online Business",
            url: "starting-an-online-business.html",
            keywords: "start online business entrepreneurship make money"
        },
        {
            title: "Digital Tools",
            url: "tools.html",
            keywords: "tools software applications digital resources"
        },
        {
            title: "AI Tools",
            url: "ai-tools.html",
            keywords: "artificial intelligence AI tools"
        },
        {
            title: "AI Writing Tools",
            url: "ai-writing-tools.html",
            keywords: "AI writing content text generator"
        },
        {
            title: "AI Research Tools",
            url: "ai-research-tools.html",
            keywords: "AI research information study"
        },
        {
            title: "AI Productivity Tools",
            url: "ai-productivity-tools.html",
            keywords: "AI productivity work efficiency"
        },
        {
            title: "AI Creative Tools",
            url: "ai-creative-tools.html",
            keywords: "AI creative design image video"
        },
        {
            title: "Design Tools",
            url: "design-tools.html",
            keywords: "graphic design creative graphics"
        },
        {
            title: "Business Tools",
            url: "business-tools.html",
            keywords: "business management online business"
        },
        {
            title: "Content Creation Tools",
            url: "content-creation-tools.html",
            keywords: "content creation creator blogging"
        },
        {
            title: "Writing Tools",
            url: "writing-tools.html",
            keywords: "writing article writer copywriting"
        },
        {
            title: "Video Tools",
            url: "video-tools.html",
            keywords: "video editing creation"
        },
        {
            title: "Audio Tools",
            url: "audio-tools.html",
            keywords: "audio sound music recording"
        },
        {
            title: "Image Tools",
            url: "image-tools.html",
            keywords: "image photo picture editing"
        },
        {
            title: "Social Media Content Tools",
            url: "social-media-content-tools.html",
            keywords: "social media Facebook Instagram TikTok content"
        },
        {
            title: "Web Hosting Tools",
            url: "web-hosting-tools.html",
            keywords: "web hosting providers domain website server"
        },
        {
            title: "Website Builders",
            url: "website-builders.html",
            keywords: "website builder create website without coding"
        },
        {
            title: "Email Marketing Tools",
            url: "email-marketing-tools.html",
            keywords: "email marketing newsletters subscribers"
        },
        {
            title: "SEO Tools",
            url: "seo-tools.html",
            keywords: "SEO search engine optimization Google traffic"
        },
        {
            title: "Online Business Tools",
            url: "online-business-tools.html",
            keywords: "online business digital entrepreneurship"
        },
        {
            title: "Freelancing Tools",
            url: "freelancing-tools.html",
            keywords: "freelancing freelance tools remote work"
        },
        {
            title: "Freelance Platforms",
            url: "freelance-platforms.html",
            keywords: "Upwork Fiverr Freelancer freelance jobs"
        },
        {
            title: "Digital Skills",
            url: "digital-skills.html",
            keywords: "digital skills learn career development"
        },
        {
            title: "Freelance Profiles",
            url: "freelance-profiles.html",
            keywords: "freelancer profile portfolio clients"
        },
        {
            title: "Online Income Models",
            url: "online-income-models.html",
            keywords: "online income earn money business models"
        },
        {
            title: "Avoiding Online Scams",
            url: "avoiding-online-scams.html",
            keywords: "online scams fraud safety avoid fake offers"
        },
        {
            title: "Reviews",
            url: "reviews.html",
            keywords: "reviews comparisons software products"
        },
        {
            title: "About WellTech Guide",
            url: "about.html",
            keywords: "about us company mission WellTech Guide"
        },
        {
            title: "Contact WellTech Guide",
            url: "contact.html",
            keywords: "contact email phone WhatsApp support"
        },
        {
            title: "Affiliate Disclosure",
            url: "affiliate-disclosure.html",
            keywords: "affiliate disclosure commission links"
        },
        {
            title: "Privacy Policy",
            url: "privacy-policy.html",
            keywords: "privacy policy data cookies information"
        },
        {
            title: "Terms of Use",
            url: "terms.html",
            keywords: "terms conditions website use"
        }
    ];


    // Create search interface
    const searchContainer = document.createElement("section");
    searchContainer.className = "site-search";
    searchContainer.setAttribute("aria-label", "Website search");


    // Search toggle button
    const toggleButton = document.createElement("button");
    toggleButton.type = "button";
    toggleButton.className = "search-toggle";
    toggleButton.setAttribute("aria-label", "Open website search");
    toggleButton.setAttribute("aria-expanded", "false");
    toggleButton.textContent = "🔍";


    // Search box
    const searchBox = document.createElement("div");
    searchBox.className = "search-box";


    // Search input
    const searchInput = document.createElement("input");
    searchInput.type = "search";
    searchInput.className = "search-input";
    searchInput.placeholder = "Search guides, tools and articles...";
    searchInput.setAttribute("aria-label", "Search WellTech Guide");
    searchInput.setAttribute("autocomplete", "off");


    // Results container
    const resultsContainer = document.createElement("div");
    resultsContainer.className = "search-results";
    resultsContainer.setAttribute("role", "list");
    resultsContainer.setAttribute("aria-live", "polite");
    resultsContainer.hidden = true;


    // Assemble search interface
    searchBox.appendChild(searchInput);
    searchBox.appendChild(resultsContainer);

    searchContainer.appendChild(toggleButton);
    searchContainer.appendChild(searchBox);


    // Insert search below the header
    const header = document.querySelector(".header");

    if (header) {
        header.insertAdjacentElement("afterend", searchContainer);
    } else {
        document.body.prepend(searchContainer);
    }


    // Open and close search
    toggleButton.addEventListener("click", function () {

        const isOpen = searchBox.classList.toggle("active");

        toggleButton.setAttribute("aria-expanded", String(isOpen));

        if (isOpen) {
            searchInput.focus();
        } else {
            searchInput.value = "";
            resultsContainer.replaceChildren();
            resultsContainer.hidden = true;
        }
    });


    // Normalize search text
    function normalizeText(text) {
        return text
            .toLowerCase()
            .trim()
            .replace(/\s+/g, " ");
    }


    // Display search results
    function displayResults(query) {

        resultsContainer.replaceChildren();

        const normalizedQuery = normalizeText(query);

        if (!normalizedQuery) {
            resultsContainer.hidden = true;
            return;
        }

        const searchWords = normalizedQuery.split(" ");

        const matchingPages = pages.filter(function (page) {

            const searchableText = normalizeText(
                page.title + " " + page.keywords
            );

            return searchWords.every(function (word) {
                return searchableText.includes(word);
            });

        });


        // No results found
        if (matchingPages.length === 0) {

            const message = document.createElement("div");
            message.className = "no-results";
            message.textContent =
                "No matching pages found. Try another search.";

            resultsContainer.appendChild(message);
            resultsContainer.hidden = false;

            return;
        }


        // Limit results to keep the interface manageable
        matchingPages.slice(0, 10).forEach(function (page) {

            const resultLink = document.createElement("a");

            resultLink.className = "search-result";
            resultLink.setAttribute("role", "listitem");
            resultLink.href = page.url;
            resultLink.textContent = page.title;

            resultsContainer.appendChild(resultLink);

        });

        resultsContainer.hidden = false;
    }


    // Search as the visitor types
    searchInput.addEventListener("input", function () {
        displayResults(searchInput.value);
    });


    // Press Escape to close search
    searchInput.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            searchBox.classList.remove("active");
            toggleButton.setAttribute("aria-expanded", "false");
            searchInput.value = "";
            resultsContainer.replaceChildren();
            resultsContainer.hidden = true;
            toggleButton.focus();
        }

    });


    // Close search results when clicking outside
    document.addEventListener("click", function (event) {

        if (!searchContainer.contains(event.target)) {
            resultsContainer.hidden = true;
        }

    });

});
