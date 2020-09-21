const Config = {
    name: "user",
    scale: 1,
    Links: [
        [
            "cp",
            [
                ["dmoj", "https://www.dmoj.ca"],
                ["codeforces", "https://www.codeforces.com"],
                ["atcoder", "https://atcoder.jp"]
            ]
        ],
        [
            "math",
            [
                ["aops", "https://www.artofproblemsolving.com"],
                ["cemc", "https://cemc.uwaterloo.ca/contests/past_contests.html"]
            ]
        ],
        [
            "stuff",
            [
                ["discord.py", "https://discordpy.readthedocs.io/en/latest/api.html"],
                ["permissions", "https://discordapi.com/permissions.html"],
                ["mail", "https://www.gmail.com"]
            ]
        ]
    ]
}

const Main = (() => {
    const list = document.getElementById("list");
    const names = document.querySelectorAll("[data-Name]");
    const search = document.getElementById("search");
    const form = document.forms[0];

    const init = () => {
        list.innerHTML = Config.Links.map(([gName, Links]) => `
            <li>
                <h1 onclick="this.parentNode.classList.toggle('hideChildren')">${gName}</h1>
                <ul>
                    ${Links.map(([lName, url]) => `
                        <li>
                            <a href="${url}">${lName}</a>
                        </li>`
                    ).join("")}
                </ul>
            </li>` 
        ).join("")
        
        names.forEach(el => {
            el.innerText = Config.name;
        });

        document.addEventListener("keydown", e => e.key.length === 1 && search.focus());
        search.addEventListener("keydown", () => (window.event ? event.keyCode : e.which) == 13 && form.submit());
    };

    return {
        init,
    };
})();

Main.init()
