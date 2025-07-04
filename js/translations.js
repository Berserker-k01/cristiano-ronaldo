const translations = {
    en: {
        title: "CR7 DAO - THE LARGEST #CR7 FANS DAO ON Binance Smart Chain",
        menu: {
            presale: "CR7DAO Airdrop & Sales",
            smartContract: "Smart Contract"
        },
        hero: {
            title: "World No. 1 CR7 Fans Club DAO just embarked a new phase!",
            description: "The CR7 and Binance partnership is based on a new synergy that will help build a bridge to link football to the Metaverse and open more opportunities for football fans to own NFTs of their favorite football players and teams. This is for passionate fans to gain from their passion. The CR7DAO token is here to build a new community filled with excitement and fun, Breaking down boundaries between Football and Web3. This Token is an easier pathway for gaining entry into the Ronaldo-Binance NFT collection as holders will enjoy privileges."
        },
        presale: {
            title: "CR7DAO Token Sale",
            joinPresale: "Join Pre Sale"
        }
    },
    fr: {
        title: "CR7 DAO - LE PLUS GRAND DAO DE FANS #CR7 SUR Binance Smart Chain",
        menu: {
            presale: "Airdrop CR7DAO & Ventes",
            smartContract: "Smart Contract"
        },
        hero: {
            title: "Le DAO des Fans CR7 n°1 au Monde vient de débuter une nouvelle phase!",
            description: "Le partenariat entre CR7 et Binance repose sur une nouvelle synergie qui permettra de construire un pont entre le football et le Metaverse, ouvrant ainsi plus d'opportunités pour les fans de football de posséder des NFTs de leurs joueurs et équipes préférés. C'est pour les fans passionnés de tirer profit de leur passion. Le token CR7DAO est là pour construire une nouvelle communauté pleine d'excitation et de plaisir, en brisant les frontières entre le Football et Web3. Ce Token est un moyen plus facile d'accéder à la collection NFT Ronaldo-Binance, les détenteurs bénéficieront de privilèges."
        },
        presale: {
            title: "Vente de Token CR7DAO",
            joinPresale: "Rejoindre la Prévente"
        }
    }
};

let currentLanguage = 'en';

function setLanguage(lang) {
    currentLanguage = lang;
    updateTranslations();
}

function updateTranslations() {
    const lang = currentLanguage;
    
    // Update title
    document.title = translations[lang].title;
    
    // Update menu
    document.querySelector('[href="#presale"]').textContent = translations[lang].menu.presale;
    document.querySelector('.tbuttonn').textContent = translations[lang].menu.smartContract;
    
    // Update hero section
    document.querySelector('.oe.ok').textContent = translations[lang].hero.title;
    document.querySelector('.oe.us').textContent = translations[lang].hero.description;
    
    // Update presale section
    document.querySelector('.pricing-item-features-title').textContent = translations[lang].presale.joinPresale;
    document.querySelector('.sz').textContent = translations[lang].presale.title;
}

// Add language switcher
const languageSwitcher = document.createElement('div');
languageSwitcher.className = 'language-switcher';
languageSwitcher.innerHTML = `
    <select id="language-select" onchange="setLanguage(this.value)">
        <option value="en">English</option>
        <option value="fr">Français</option>
    </select>
`;
document.querySelector('.n_').appendChild(languageSwitcher);

// Initialize translations
updateTranslations();
