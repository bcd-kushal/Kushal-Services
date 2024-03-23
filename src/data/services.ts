export function ServiceNames() {
    return [ 'All', 'Website', 'Software', 'Network', 'Discord', 'Graphics', 'Content' ]
}

export default function MyServices(){
    const vowels = [ 'a', 'e', 'i', 'o', 'u' ]
    function createBody(str:string){
        const commonBody = "Hi Kushal, I want to get myself"
        const addressingVowel = vowels.includes(str[0].toLowerCase()) ? "an" : "a"
        const action = ["created/edited", "done"]
        const tail = "I look forward to working with you"

        return `${commonBody} ${addressingVowel} ${str} ${str.includes("penetration")||str.includes("security") ? action[1] : action[0]}.\n\n${tail}.`
    }

    function createSubject(str:string){
        return `${str} service request`
    }

    return [
        {
            "booking_name": "Full website",
            "tag": "Website",
            "time": "5-20 days",
            "price": "₹ 4999+",
            "description": "Frontend, backend, scaling to deployment and managing, I'm tech-stack flexible to meet all ends",
            "emailBody": createBody("entire website"),
            "emailSubject": createSubject("Website")
        },
        {
            "booking_name": "Server management",
            "tag": "Software",
            "time": "3-7 days",
            "price": "₹ 999+",
            "description": "Already own a server? Get it managed, scaled, monitored or edited as required",
            "emailBody": createBody("server"),
            "emailSubject": createSubject("Software")
        },
        {
            "booking_name": "Discord bot",
            "tag": "Discord",
            "time": "2-5 days",
            "price": "₹ 1499+",
            "description": "Regulate and monitor your tasks, run activites with a discord bot running 24/7",
            "emailBody": createBody("discord bot"),
            "emailSubject": createSubject("Discord")
        },
        {
            "booking_name": "Automation",
            "tag": "Software",
            "time": "5-10 days",
            "price": "₹ 1999+",
            "description": "Automate your repititive software tasks. Build, deploy, testing tasks - all automated",
            "emailBody": createBody("software automated"),
            "emailSubject": createSubject("Software")
        },
        {
            "booking_name": "CI/CD pipelines",
            "tag": "Software",
            "time": "4-7 days",
            "price": "₹ 2499+",
            "description": "Get the development process streamlined with builds and tests automated and served real-time",
            "emailBody": createBody("CI/CD pipelining"),
            "emailSubject": createSubject("Software")
        },
        {
            "booking_name": "Webhooks integration",
            "tag": "Software",
            "time": "2-4 days",
            "price": "₹ 899+",
            "description": "Require a service that constantly responds real-time data? Get it webhooked",
            "emailBody": createBody("webhooks"),
            "emailSubject": createSubject("Software")
        },
        {
            "booking_name": "Network setup",
            "tag": "Network",
            "time": "1-2 days",
            "price": "₹ 1699+",
            "description": "Setup of essential LANs with firewalls and required virtual environments",
            "emailBody": createBody("network setup"),
            "emailSubject": createSubject("Network")
        },
        {
            "booking_name": "Server setup",
            "tag": "Network",
            "time": "1-2 days",
            "price": "₹ 1299+",
            "description": "Get a server deployed for your local network with up-to-date security standards and throughput enabled",
            "emailBody": createBody("server setup"),
            "emailSubject": createSubject("Network")
        },
        {
            "booking_name": "Network testing",
            "tag": "Network",
            "time": "1-2 days",
            "price": "₹ 899+",
            "description": "Have your network tested for backdoors, threat vulnerabilities, latency test, packet loss detection and more",
            "emailBody": createBody("network tested"),
            "emailSubject": createSubject("Network")
        },
        {
            "booking_name": "Frontend",
            "tag": "Website",
            "time": "5-7 days",
            "price": "₹ 2299+",
            "description": "UI/UX focused or/and functionality focused. Business or personal branding, get the cutting edge design for yourself",
            "emailBody": createBody("frontend"),
            "emailSubject": createSubject("Website")
        },
        {
            "booking_name": "Backend",
            "tag": "Website",
            "time": "5-7 days",
            "price": "₹ 1499+",
            "description": "Server logic, API(GraphQL & REST), infrastructure scaling and everything in between",
            "emailBody": createBody("backend"),
            "emailSubject": createSubject("Website")
        },
        {
            "booking_name": "Database or hosting",
            "tag": "Website",
            "time": "5-7 days",
            "price": "₹ 1599+",
            "description": "Deploy or migrate into any database type most suitable. Have it hosted and managed without overhead setting",
            "emailBody": createBody("database and hosting"),
            "emailSubject": createSubject("Website")
        },
        {
            "booking_name": "Discord server setup",
            "tag": "Discord",
            "time": "1-4 days",
            "price": "₹ 799+",
            "description": "Have a server set up with necessary bots and level boosts",
            "emailBody": createBody("discord server"),
            "emailSubject": createSubject("Discord")
        },
        {
            "booking_name": "Anime artwork",
            "tag": "Graphics",
            "time": "3-14 days",
            "price": "₹ 1199+",
            "description": "Get your anime character created the way you love",
            "emailBody": createBody("anime artwork"),
            "emailSubject": createSubject("Artwork")
        },    
        {
            "booking_name": "Linearts",
            "tag": "Graphics",
            "time": "2-5 days",
            "price": "₹ 499+",
            "description": "All kinds are accepted to be linearted",
            "emailBody": createBody("lineart"),
            "emailSubject": createSubject("Artwork")
        },
        {
            "booking_name": "Photoshop edits",
            "tag": "Graphics",
            "time": "1-2 days",
            "price": "₹ 499+",
            "description": "Intermediate edits or creations over PS",
            "emailBody": createBody("photoshop content"),
            "emailSubject": createSubject("Editing")
        },
        {
            "booking_name": "Poster, logo or banner",
            "tag": "Graphics",
            "time": "1 day",
            "price": "₹ 499+",
            "description": "Get your brand the logo it deserves as well as banners to go with them",
            "emailBody": createBody("poster, logo and banner"),
            "emailSubject": createSubject("Editing")
        },
        {
            "booking_name": "Video content",
            "tag": "Content",
            "time": "1 week",
            "price": "₹ 1899+",
            "description": "Get your dream clip shooted, edited and published all together",
            "emailBody": createBody("video"),
            "emailSubject": createSubject("Editing")
        },
        {
            "booking_name": "Vlog",
            "tag": "Content",
            "time": "Variable",
            "price": "₹ 2499+",
            "description": "Have your next adventure recorded and edited",
            "emailBody": createBody("video"),
            "emailSubject": createSubject("Editing")
        },
        {
            "booking_name": "Wordpress site",
            "tag": "Website",
            "time": "1-2 days",
            "price": "₹ 999+",
            "description": "Quickly deploy a Wordpress site with zero overhead maintainence time",
            "emailBody": createBody("wordpress site"),
            "emailSubject": createSubject("Wordpress")
        },
    
    ]
}
