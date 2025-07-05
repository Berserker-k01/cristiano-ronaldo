const translations = {
    en: {
        title: "CR7 DAO - THE LARGEST #CR7 FANS DAO ON Binance Smart Chain",
        menu: {
            home: "Home",
            about: "About",
            token: "Token",
            presale: "Presale",
            roadmap: "Roadmap",
            team: "Team",
            smartContract: "Smart Contract"
        },
        hero: {
            title: "World No. 1 CR7 Fans Club DAO just embarked a new phase!",
            description: "The CR7 and Binance partnership is based on a new synergy that will help build a bridge to link football to the Metaverse and open more opportunities for football fans to own NFTs of their favorite football players and teams. This is for passionate fans to gain from their passion. The CR7DAO token is here to build a new community filled with excitement and fun, Breaking down boundaries between Football and Web3. This Token is an easier pathway for gaining entry into the Ronaldo-Binance NFT collection as holders will enjoy privileges.",
            cta: "Get $CR7 →"
        },
        about: {
            title: "About CR7DAO",
            description: "CR7 NFT is the largest football star fan token by market capitalization on BINANCE SMART CHAIN!",
            text: "CR7 DAO was created to be the utility token of CR7 NFT, a liquidity protocol originally based on the binance network. CR7 holders can perform operations within the protocol, such as staking, providing liquidity, and voting on CR7 DAO improvement decisions."
        },
        presale: {
            title: "CR7DAO Token Sale",
            description: "Join the exclusive CR7DAO token sale and be part of the largest CR7 fans community on Binance Smart Chain.",
            buttonText: "Join Pre Sale",
            timer: {
                days: "Days",
                hours: "Hours",
                minutes: "Minutes",
                seconds: "Seconds"
            }
        },
        features: {
            staking: {
                title: "Staking Rewards",
                description: "Earn rewards by staking your CR7 tokens"
            },
            security: {
                title: "Secure Platform",
                description: "Trusted and secure Binance Smart Chain integration"
            },
            community: {
                title: "Community",
                description: "Join the largest CR7 fans community"
            },
            nfts: {
                title: "Exclusive NFTs",
                description: "Access to exclusive CR7 NFT collections"
            }
        },
        footer: {
            title: "CR7DAO",
            description: "Join the largest CR7 fans community on Binance Smart Chain",
            quickLinks: {
                home: "Home",
                about: "About",
                token: "Token",
                presale: "Presale"
            },
            connect: {
                twitter: "Twitter",
                telegram: "Telegram",
                discord: "Discord",
                instagram: "Instagram"
            },
            legal: {
                privacy: "Privacy Policy",
                terms: "Terms of Service",
                contact: "Contact"
            },
            copyright: "Copyright &copy; 2022 CR7DAO - Binance - All rights reserved."
        }
    },
    fr: {
        title: "CR7 DAO - LE PLUS GRAND DAO DE FANS #CR7 SUR Binance Smart Chain",
        menu: {
            home: "Accueil",
            about: "À Propos",
            token: "Token",
            presale: "Prévente",
            roadmap: "Roadmap",
            team: "Équipe",
            smartContract: "Smart Contract"
        },
        hero: {
            title: "Le DAO des Fans CR7 n°1 au Monde vient de débuter une nouvelle phase!",
            description: "Le partenariat entre CR7 et Binance repose sur une nouvelle synergie qui permettra de construire un pont entre le football et le Metaverse, ouvrant ainsi plus d'opportunités pour les fans de football de posséder des NFTs de leurs joueurs et équipes préférés. C'est pour les fans passionnés de tirer profit de leur passion. Le token CR7DAO est là pour construire une nouvelle communauté pleine d'excitation et de plaisir, en brisant les frontières entre le Football et Web3. Ce Token est un moyen plus facile d'accéder à la collection NFT Ronaldo-Binance, les détenteurs bénéficieront de privilèges.",
            cta: "Obtenir $CR7 →"
        },
        about: {
            title: "À Propos de CR7DAO",
            description: "CR7 NFT est le plus grand token de fans de footballeur par capitalisation boursière sur BINANCE SMART CHAIN!",
            text: "CR7 DAO a été créé pour être le token utilitaire de CR7 NFT, un protocole de liquidité basé sur le réseau binance. Les détenteurs de CR7 peuvent effectuer des opérations au sein du protocole, comme le staking, la fourniture de liquidité et le vote sur les décisions d'amélioration de CR7 DAO."
        },
        presale: {
            title: "Vente de Token CR7DAO",
            description: "Rejoignez la vente exclusive du token CR7DAO et faites partie de la plus grande communauté de fans CR7 sur Binance Smart Chain.",
            buttonText: "Rejoindre la Prévente",
            timer: {
                days: "Jours",
                hours: "Heures",
                minutes: "Minutes",
                seconds: "Secondes"
            }
        },
        features: {
            staking: {
                title: "Récompenses de Staking",
                description: "Gagnez des récompenses en staking vos tokens CR7"
            },
            security: {
                title: "Plateforme Sécurisée",
                description: "Intégration sécurisée et fiable sur Binance Smart Chain"
            },
            community: {
                title: "Communauté",
                description: "Rejoignez la plus grande communauté de fans CR7"
            },
            nfts: {
                title: "NFTs Exclusifs",
                description: "Accédez aux collections NFT CR7 exclusives"
            }
        },
        footer: {
            title: "CR7DAO",
            description: "Rejoignez la plus grande communauté de fans CR7 sur Binance Smart Chain",
            quickLinks: {
                home: "Accueil",
                about: "À Propos",
                token: "Token",
                presale: "Prévente"
            },
            connect: {
                twitter: "Twitter",
                telegram: "Telegram",
                discord: "Discord",
                instagram: "Instagram"
            },
            legal: {
                privacy: "Politique de Confidentialité",
                terms: "Conditions d'Utilisation",
                contact: "Contact"
            },
            copyright: "Copyright &copy; 2022 CR7DAO - Binance - Tous droits réservés."
        }
    }
};

let currentLanguage = localStorage.getItem('language') || 'en';

document.addEventListener('DOMContentLoaded', () => {
    updateTranslations();
});

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateTranslations();
}

function updateTranslations() {
    const lang = currentLanguage;
    
    // Update title
    document.title = translations[lang].title;
    
    // Update menu
    document.querySelectorAll('.nav-links a').forEach(link => {
        const section = link.getAttribute('href').substring(1);
        if (translations[lang].menu[section]) {
            link.textContent = translations[lang].menu[section];
        }
    });
    
    // Update hero section
    document.getElementById('hero-title').textContent = translations[lang].hero.title;
    document.getElementById('hero-description').textContent = translations[lang].hero.description;
    document.querySelector('.cta-button[data-section="hero"]').textContent = translations[lang].hero.cta;
    
    // Update about section
    document.querySelector('.section-title[data-section="about"]').textContent = translations[lang].about.title;
    document.querySelector('.about-grid h2').textContent = translations[lang].about.description;
    document.querySelector('.about-grid p').textContent = translations[lang].about.text;
    
    // Update presale section
    document.querySelector('.section-title[data-section="presale"]').textContent = translations[lang].presale.title;
    document.querySelector('.presale-description').textContent = translations[lang].presale.description;
    document.querySelector('.cta-button[data-section="presale"]').textContent = translations[lang].presale.buttonText;
    
    // Update timer labels
    document.querySelector('.timer-item:nth-child(1) .timer-label').textContent = translations[lang].presale.timer.days;
    document.querySelector('.timer-item:nth-child(2) .timer-label').textContent = translations[lang].presale.timer.hours;
    document.querySelector('.timer-item:nth-child(3) .timer-label').textContent = translations[lang].presale.timer.minutes;
    document.querySelector('.timer-item:nth-child(4) .timer-label').textContent = translations[lang].presale.timer.seconds;
    
    // Update features
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        const featureKey = Object.keys(translations[lang].features)[index];
        card.querySelector('h3').textContent = translations[lang].features[featureKey].title;
        card.querySelector('p').textContent = translations[lang].features[featureKey].description;
    });
    
    // Update footer
    document.querySelector('.footer-section:first-child h3').textContent = translations[lang].footer.title;
    document.querySelector('.footer-section:first-child p').textContent = translations[lang].footer.description;
    
    // Update footer links
    const quickLinks = document.querySelectorAll('.footer-section:nth-child(2) ul li a');
    quickLinks.forEach((link, index) => {
        const key = Object.keys(translations[lang].footer.quickLinks)[index];
        link.textContent = translations[lang].footer.quickLinks[key];
    });
    
    // Update social links
    const socialLinks = document.querySelectorAll('.footer-section:nth-child(3) ul li a');
    socialLinks.forEach((link, index) => {
        const key = Object.keys(translations[lang].footer.connect)[index];
        link.textContent = translations[lang].footer.connect[key];
    });
    
    // Update legal links
    const legalLinks = document.querySelectorAll('.footer-section:nth-child(4) ul li a');
    legalLinks.forEach((link, index) => {
        const key = Object.keys(translations[lang].footer.legal)[index];
        link.textContent = translations[lang].footer.legal[key];
    });
    
    // Update copyright
    document.querySelector('.footer-text[data-key="copyright"]').textContent = translations[lang].footer.copyright;
}
    en: {
        title: "CR7 DAO - THE LARGEST #CR7 FANS DAO ON Binance Smart Chain",
        menu: {
            home: "Home",
            about: "About",
            token: "Token",
            presale: "Presale",
            roadmap: "Roadmap",
            team: "Team",
            smartContract: "Smart Contract"
        },
        hero: {
            title: "World No. 1 CR7 Fans Club DAO just embarked a new phase!",
            description: "The CR7 and Binance partnership is based on a new synergy that will help build a bridge to link football to the Metaverse and open more opportunities for football fans to own NFTs of their favorite football players and teams. This is for passionate fans to gain from their passion. The CR7DAO token is here to build a new community filled with excitement and fun, Breaking down boundaries between Football and Web3. This Token is an easier pathway for gaining entry into the Ronaldo-Binance NFT collection as holders will enjoy privileges.",
            cta: "Get $CR7 →"
        },
        about: {
            title: "About CR7DAO",
            description: "CR7 NFT is the largest football star fan token by market capitalization on BINANCE SMART CHAIN!",
            text: "CR7 DAO was created to be the utility token of CR7 NFT, a liquidity protocol originally based on the binance network. CR7 holders can perform operations within the protocol, such as staking, providing liquidity, and voting on CR7 DAO improvement decisions."
        },
        presale: {
            title: "CR7DAO Token Sale",
            description: "Join the exclusive CR7DAO token sale and be part of the largest CR7 fans community on Binance Smart Chain.",
            buttonText: "Join Pre Sale",
            timer: {
                days: "Days",
                hours: "Hours",
                minutes: "Minutes",
                seconds: "Seconds"
            }
        },
        features: {
            staking: {
                title: "Staking Rewards",
                description: "Earn rewards by staking your CR7 tokens"
            },
            security: {
                title: "Secure Platform",
                description: "Trusted and secure Binance Smart Chain integration"
            },
            community: {
                title: "Community",
                description: "Join the largest CR7 fans community"
            },
            nfts: {
                title: "Exclusive NFTs",
                description: "Access to exclusive CR7 NFT collections"
            }
        },
        footer: {
            title: "CR7DAO",
            description: "Join the largest CR7 fans community on Binance Smart Chain",
            quickLinks: {
                home: "Home",
                about: "About",
                token: "Token",
                presale: "Presale"
            },
            connect: {
                twitter: "Twitter",
                telegram: "Telegram",
                discord: "Discord",
                instagram: "Instagram"
            },
            legal: {
                privacy: "Privacy Policy",
                terms: "Terms of Service",
                contact: "Contact"
            },
            copyright: "Copyright &copy; 2022 CR7DAO - Binance - All rights reserved."
        }
    },
    fr: {
        title: "CR7 DAO - LE PLUS GRAND DAO DE FANS #CR7 SUR Binance Smart Chain",
        menu: {
            home: "Accueil",
            about: "À Propos",
            token: "Token",
            presale: "Prévente",
            roadmap: "Roadmap",
            team: "Équipe",
            smartContract: "Smart Contract"
        },
        hero: {
            title: "Le DAO des Fans CR7 n°1 au Monde vient de débuter une nouvelle phase!",
            description: "Le partenariat entre CR7 et Binance repose sur une nouvelle synergie qui permettra de construire un pont entre le football et le Metaverse, ouvrant ainsi plus d'opportunités pour les fans de football de posséder des NFTs de leurs joueurs et équipes préférés. C'est pour les fans passionnés de tirer profit de leur passion. Le token CR7DAO est là pour construire une nouvelle communauté pleine d'excitation et de plaisir, en brisant les frontières entre le Football et Web3. Ce Token est un moyen plus facile d'accéder à la collection NFT Ronaldo-Binance, les détenteurs bénéficieront de privilèges.",
            cta: "Obtenir $CR7 →"
        },
        about: {
            title: "À Propos de CR7DAO",
            description: "CR7 NFT est le plus grand token de fans de footballeur par capitalisation boursière sur BINANCE SMART CHAIN!",
            text: "CR7 DAO a été créé pour être le token utilitaire de CR7 NFT, un protocole de liquidité basé sur le réseau binance. Les détenteurs de CR7 peuvent effectuer des opérations au sein du protocole, comme le staking, la fourniture de liquidité et le vote sur les décisions d'amélioration de CR7 DAO."
        },
        presale: {
            title: "Vente de Token CR7DAO",
            description: "Rejoignez la vente exclusive du token CR7DAO et faites partie de la plus grande communauté de fans CR7 sur Binance Smart Chain.",
            buttonText: "Rejoindre la Prévente",
            timer: {
                days: "Jours",
                hours: "Heures",
                minutes: "Minutes",
                seconds: "Secondes"
            }
        },
        features: {
            staking: {
                title: "Récompenses de Staking",
                description: "Gagnez des récompenses en staking vos tokens CR7"
            },
            security: {
                title: "Plateforme Sécurisée",
                description: "Intégration sécurisée et fiable sur Binance Smart Chain"
            },
            community: {
                title: "Communauté",
                description: "Rejoignez la plus grande communauté de fans CR7"
            },
            nfts: {
                title: "NFTs Exclusifs",
                description: "Accédez aux collections NFT CR7 exclusives"
            }
        },
        footer: {
            title: "CR7DAO",
            description: "Rejoignez la plus grande communauté de fans CR7 sur Binance Smart Chain",
            quickLinks: {
                home: "Accueil",
                about: "À Propos",
                token: "Token",
                presale: "Prévente"
            },
            connect: {
                twitter: "Twitter",
                telegram: "Telegram",
                discord: "Discord",
                instagram: "Instagram"
            },
            legal: {
                privacy: "Politique de Confidentialité",
                terms: "Conditions d'Utilisation",
                contact: "Contact"
            },
            copyright: "Copyright &copy; 2022 CR7DAO - Binance - Tous droits réservés."
        }
    }
};
    en: {
        title: "CR7 DAO - THE LARGEST #CR7 FANS DAO ON Binance Smart Chain",
        menu: {
            presale: "CR7DAO Airdrop & Sales",
            smartContract: "Smart Contract",
            home: "Home",
            about: "About",
            token: "Token",
            roadmap: "Roadmap",
            team: "Team"
        },
        hero: {
            title: "World No. 1 CR7 Fans Club DAO just embarked a new phase!",
            description: "The CR7 and Binance partnership is based on a new synergy that will help build a bridge to link football to the Metaverse and open more opportunities for football fans to own NFTs of their favorite football players and teams. This is for passionate fans to gain from their passion. The CR7DAO token is here to build a new community filled with excitement and fun, Breaking down boundaries between Football and Web3. This Token is an easier pathway for gaining entry into the Ronaldo-Binance NFT collection as holders will enjoy privileges.",
            cta: "Get $CR7"
        },
        about: {
            title: "About CR7DAO",
            description: "CR7DAO is a community-driven organization that aims to bridge the gap between football and blockchain technology. Through our token, we aim to create a platform where fans can participate in the growth of football through NFTs and DeFi opportunities."
        },
        token: {
            title: "CR7DAO Token",
            description: "The CR7DAO token is a utility token that gives holders access to exclusive NFT collections, voting rights, and various benefits within the CR7 ecosystem."
        },
        presale: {
            title: "CR7DAO Token Sale",
            joinPresale: "Join Pre Sale",
            buttonText: "Get $CR7"
        },
        roadmap: {
            title: "Roadmap",
            phase1: "Phase 1 - Launch",
            phase2: "Phase 2 - Expansion",
            phase3: "Phase 3 - Growth"
        },
        team: {
            title: "Team",
            description: "Meet the passionate team behind CR7DAO"
        },
        footer: {
            copyright: "Copyright © 2022 CR7DAO - Binance - All rights reserved.",
            poweredBy: "Powered by",
            contact: "Contact",
            faq: "FAQ",
            social: "Social Media"
        }
    },
    fr: {
        title: "CR7 DAO - LE PLUS GRAND DAO DE FANS #CR7 SUR Binance Smart Chain",
        menu: {
            presale: "Airdrop CR7DAO & Ventes",
            smartContract: "Smart Contract",
            home: "Accueil",
            about: "À Propos",
            token: "Token",
            roadmap: "Roadmap",
            team: "Équipe"
        },
        hero: {
            title: "Le DAO des Fans CR7 n°1 au Monde vient de débuter une nouvelle phase!",
            description: "Le partenariat entre CR7 et Binance repose sur une nouvelle synergie qui permettra de construire un pont entre le football et le Metaverse, ouvrant ainsi plus d'opportunités pour les fans de football de posséder des NFTs de leurs joueurs et équipes préférés. C'est pour les fans passionnés de tirer profit de leur passion. Le token CR7DAO est là pour construire une nouvelle communauté pleine d'excitation et de plaisir, en brisant les frontières entre le Football et Web3. Ce Token est un moyen plus facile d'accéder à la collection NFT Ronaldo-Binance, les détenteurs bénéficieront de privilèges.",
            cta: "Obtenir $CR7"
        },
        about: {
            title: "À Propos de CR7DAO",
            description: "CR7DAO est une organisation communautaire qui vise à créer un pont entre le football et la technologie blockchain. Grâce à notre token, nous visons à créer une plateforme où les fans peuvent participer à la croissance du football via les NFTs et les opportunités DeFi."
        },
        token: {
            title: "Token CR7DAO",
            description: "Le token CR7DAO est un token utilitaire qui donne aux détenteurs l'accès à des collections NFT exclusives, des droits de vote et divers avantages au sein de l'écosystème CR7."
        },
        presale: {
            title: "Vente de Token CR7DAO",
            joinPresale: "Rejoindre la Prévente",
            buttonText: "Obtenir $CR7"
        },
        roadmap: {
            title: "Roadmap",
            phase1: "Phase 1 - Lancement",
            phase2: "Phase 2 - Expansion",
            phase3: "Phase 3 - Croissance"
        },
        team: {
            title: "Équipe",
            description: "Rencontrez l'équipe passionnée derrière CR7DAO"
        },
        footer: {
            copyright: "Copyright © 2022 CR7DAO - Binance - Tous droits réservés.",
            poweredBy: "Propulsé par",
            contact: "Contact",
            faq: "FAQ",
            social: "Réseaux Sociaux"
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
    document.querySelectorAll('.nav-links a').forEach(link => {
        const section = link.getAttribute('href').substring(1);
        if (translations[lang].menu[section]) {
            link.textContent = translations[lang].menu[section];
        }
    });
    
    // Update hero section
    document.getElementById('hero-title').textContent = translations[lang].hero.title;
    document.getElementById('hero-description').textContent = translations[lang].hero.description;
    document.querySelector('.cta-button[data-section="hero"]').textContent = translations[lang].hero.cta;
    
    // Update about section
    document.querySelector('.section-title[data-section="about"]').textContent = translations[lang].about.title;
    document.querySelector('.about-grid h2').textContent = translations[lang].about.description;
    document.querySelector('.about-grid p').textContent = translations[lang].about.text;
    
    // Update presale section
    document.querySelector('.section-title[data-section="presale"]').textContent = translations[lang].presale.title;
    document.querySelector('.presale-description').textContent = translations[lang].presale.description;
    document.querySelector('.cta-button[data-section="presale"]').textContent = translations[lang].presale.buttonText;
    
    // Update timer labels
    document.querySelector('.timer-item:nth-child(1) .timer-label').textContent = translations[lang].presale.timer.days;
    document.querySelector('.timer-item:nth-child(2) .timer-label').textContent = translations[lang].presale.timer.hours;
    document.querySelector('.timer-item:nth-child(3) .timer-label').textContent = translations[lang].presale.timer.minutes;
    document.querySelector('.timer-item:nth-child(4) .timer-label').textContent = translations[lang].presale.timer.seconds;
    
    // Update features
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        const featureKey = Object.keys(translations[lang].features)[index];
        card.querySelector('h3').textContent = translations[lang].features[featureKey].title;
        card.querySelector('p').textContent = translations[lang].features[featureKey].description;
    });
    
    // Update footer
    document.querySelector('.footer-section:first-child h3').textContent = translations[lang].footer.title;
    document.querySelector('.footer-section:first-child p').textContent = translations[lang].footer.description;
    
    // Update footer links
    const quickLinks = document.querySelectorAll('.footer-section:nth-child(2) ul li a');
    quickLinks.forEach((link, index) => {
        const key = Object.keys(translations[lang].footer.quickLinks)[index];
        link.textContent = translations[lang].footer.quickLinks[key];
    });
    
    // Update social links
    const socialLinks = document.querySelectorAll('.footer-section:nth-child(3) ul li a');
    socialLinks.forEach((link, index) => {
        const key = Object.keys(translations[lang].footer.connect)[index];
        link.textContent = translations[lang].footer.connect[key];
    });
    
    // Update legal links
    const legalLinks = document.querySelectorAll('.footer-section:nth-child(4) ul li a');
    legalLinks.forEach((link, index) => {
        const key = Object.keys(translations[lang].footer.legal)[index];
        link.textContent = translations[lang].footer.legal[key];
    });
    
    // Update copyright
    document.querySelector('.footer-text[data-key="copyright"]').textContent = translations[lang].footer.copyright;
}
    const lang = currentLanguage;
    
    // Update title
    document.title = translations[lang].title;
    
    // Update menu
    document.querySelectorAll('.n_ a[href]').forEach(link => {
        const section = link.getAttribute('href').substring(1);
        if (translations[lang].menu[section]) {
            link.textContent = translations[lang].menu[section];
        }
    });
    document.querySelector('.tbuttonn').textContent = translations[lang].menu.smartContract;
    
    // Update hero section
    document.getElementById('page-title').textContent = translations[lang].title;
    document.getElementById('hero-title').textContent = translations[lang].hero.title;
    document.getElementById('hero-description').textContent = translations[lang].hero.description;
    document.querySelector('.tbuttonn.fbuttonl.gbuttony').textContent = translations[lang].hero.cta;
    
    // Update presale section
    document.getElementById('presale-section-title').textContent = translations[lang].presale.title;
    document.getElementById('presale-title').textContent = translations[lang].presale.joinPresale;
    
    // Update other sections
    document.querySelectorAll('.section-title').forEach(title => {
        const section = title.getAttribute('data-section');
        if (translations[lang][section]?.title) {
            title.textContent = translations[lang][section].title;
        }
    });
    
    // Update buttons
    document.querySelectorAll('.tbuttonn').forEach(button => {
        const section = button.getAttribute('data-section');
        if (translations[lang][section]?.buttonText) {
            button.textContent = translations[lang][section].buttonText;
        }
    });
    
    // Update footer
    document.querySelectorAll('.footer-text').forEach(text => {
        const key = text.getAttribute('data-key');
        if (translations[lang].footer[key]) {
            text.textContent = translations[lang].footer[key];
        }
    });
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
