document.addEventListener("DOMContentLoaded", function () {

    const pages = [
        {
            title: "What Is a Website?",
            url: "what-is-a-website.html",
            keywords: "website web development beginner"
        },
        {
            title: "Domain vs Hosting",
            url: "domain-vs-hosting.html",
            keywords: "domain hosting website"
        },
        {
            title: "How to Create Your First Website",
            url: "how-to-create-your-first-website.html",
            keywords: "create website beginner web development"
        },
        {
            title: "How to Build a Website from Your Phone",
            url: "how-to-build-a-website-from-your-phone.html",
            keywords: "phone website mobile web development"
        },
        {
            title: "How Much Does a Website Cost?",
            url: "how-much-does-a-website-cost.html",
            keywords: "website cost price website budget"
        },
        {
            title: "How Much Does It Cost to Build a Website in Nigeria?",
            url: "website-cost-in-nigeria.html",
            keywords: "Nigeria website cost price naira"
        },
        {
            title: "Best Web Hosting for Beginners",
            url: "best-web-hosting-for-beginners.html",
            keywords: "hosting web hosting beginner"
        },
        {
            title: "Website Builders",
            url: "website-builders.html",
            keywords: "website builder create website"
        },
        {
            title: "Starting an Online Business",
            url: "starting-an-online-business.html",
            keywords: "online business make money business"
        },
        {
            title: "AI Tools",
            url: "ai-tools.html",
            keywords: "AI artificial intelligence tools"
        },
        {
            title: "Design Tools",
            url: "design-tools.html",
            keywords: "graphic design design tools"
        },
        {
            title: "Business Tools",
            url: "business-tools.html",
            keywords: "business tools productivity"
        },
        {
            title: "Content Creation Tools",
            url: "content-creation-tools.html",
            keywords: "content creation tools"
        },
        {
            title: "Writing Tools",
            url: "writing-tools.html",
            keywords: "writing tools AI writing"
        },
        {
            title: "Video Tools",
            url: "video-tools.html",
            keywords: "video editing video tools"
        },
        {
            title: "Audio Tools",
            url: "audio-tools.html",
            keywords: "audio music tools"
        },
        {
            title: "Image Tools",
            url: "image-tools.html",
            keywords: "image photo editing tools"
        },
        {
            title: "Social Media Content Tools",
            url: "social-media-content-tools.html",
            keywords: "social media content tools"
        },
        {
            title: "Web Hosting Tools",
            url: "web-hosting-tools.html",
            keywords: "hosting domain web tools"
        },
        {
            title: "SEO Tools",
            url: "seo-tools.html",
            keywords: "SEO search engine optimization tools"
        },
        {
            title: "Email Marketing Tools",
            url: "email-marketing-tools.html",
            keywords: "email marketing tools"
        },
        {
            title: "Online Business Tools",
            url: "online-business-tools.html",
            keywords: "online business tools"
        },
        {
            title: "Freelancing Tools",
            url: "freelancing-tools.html",
            keywords: "freelancing freelance tools"
        },
        {
            title: "Freelance Platforms",
            url: "freelance-platforms.html",
            keywords: "freelance Upwork Fiverr freelancer"
        },
        {
            title: "Digital Skills",
            url: "digital-skills.html",
            keywords: "digital skills learn technology"
        },
        {
            title: "Freelance Profiles",
            url: "freelance-profiles.html",
            keywords: "freelance profile freelancer"
        },
        {
            title: "Online Income Models",
            url: "online-income-models.html",
            keywords: "make money online income"
        },
        {
            title: "Avoiding Online Scams",
            url: "avoiding-online-scams.html",
            keywords: "online scams safety"
        }
    ];

    const header = document.querySelector(".header");

    if (!header) return;

    const searchContainer = document.createElement("div");

    searchContainer.className = "site-search";

    searchContainer.innerHTML = `
        <button class="search-toggle" aria-label="Open search">
            🔍
        </button>

        <div class="search-box">
            <input
                type="search"
                class="search-input"
                placeholder="Search WellTech Guide..."
                aria-label="Search WellTech Guide"
            >

            <div class="search-results"></div>
        </div>
    `;

    header.appendChild(searchContainer);

    const toggle = searchContainer.querySelector(".search-toggle");
    const box = searchContainer.querySelector(".search-box");
    const input = searchContainer.querySelector(".search-input");
    const results = searchContainer.querySelector(".search-results");

    toggle.addEventListener("click", function () {
        box.classList.toggle("active");

        if (box.classList.contains("active")) {
            input.focus();
        }
    });

    input.addEventListener("input", function () {

        const query = input.value.trim().toLowerCase();

        results.innerHTML = "";

        if (query.length < 2) {
            return;
        }

        const matches = pages.filter(function (page) {

            return (
                page.title.toLowerCase().includes(query) ||
                page.keywords.toLowerCase().includes(query)
            );

        });

        if (matches.length === 0) {

            results.innerHTML = `
                <div class="no-results">
                    No matching pages found.
                </div>
            `;

            return;
        }

        matches.forEach(function (page) {

            const link = document.createElement("a");

            link.href = page.url;
            link.className = "search-result";

            link.textContent = page.title;

            results.appendChild(link);

        });

    });

});