import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { addPropertyControls, ControlType } from "framer"

// --- CSS Styles (Responsive via Container Queries) ---
const cssStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap');

    /* Reset & Base */
    .mining-wrapper, .mining-wrapper * {
        box-sizing: border-box;
    }
    
    .mining-wrapper {
        /* CRITICAL: Defines this element as a container for query purposes */
        container-type: inline-size;
        container-name: mining-page;
        
        /* FIX: Prevents collapse to 0 width when Framer sets width to 'Fit' */
        min-width: 375px; 

        display: flex;
        flex-direction: column;
        overflow-x: hidden;
        position: relative;
    }
    
    .mining-content-container {
        /* Isolate content flex behavior */
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    /* Layout */
    .mining-section {
        padding: 5rem 8%;
        font-family: 'Montserrat', sans-serif;
        color: #264653;
        width: 100%;
        position: relative;
        max-width: 100%;
    }

    .mining-container-flex {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 4rem;
        max-width: 100%;
    }

    /* Hero */
    .mining-hero {
        background-color: #F4F1DE;
        min-height: 80vh;
        overflow: hidden;
    }
    .mining-heading {
        font-size: 3.5rem;
        line-height: 1.1;
        font-weight: 800;
        margin-bottom: 1.5rem;
        color: #264653;
    }
    .mining-badge {
        display: block;
        font-size: 0.9rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        color: #623f35;
        text-transform: uppercase;
        margin-bottom: 1rem;
    }
    .mining-subheading {
        font-size: 1.1rem;
        line-height: 1.6;
        color: #264653;
        margin-bottom: 2.5rem;
        opacity: 0.9;
        max-width: 500px;
    }
    
    /* Buttons */
    .mining-button {
        padding: 1rem 2rem;
        font-size: 1rem;
        font-weight: 600;
        color: #FFFFFF;
        background-color: #623f35;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        box-shadow: 0 4px 14px rgba(0,0,0,0.15);
        transition: transform 0.2s;
    }

    /* Grids */
    .mining-grid-benefits {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        width: 100%;
    }

    /* Utilities */
    .text-accent { color: #E07A5F; }
    .bg-white { background-color: #FFFFFF; }
    .bg-primary { background-color: #623f35; }
    .text-white { color: #FFFFFF; }
    .text-center { text-align: center; }

    /* --- RESPONSIVE CONTAINER QUERY BREAKPOINTS --- */
    
    /* Tablet & Small Desktop (Max 1024px) relative to CONTAINER */
    @container mining-page (max-width: 1024px) {
        .mining-section { padding: 4rem 5%; }
        .mining-heading { font-size: 2.8rem; }
        .mining-container-flex { gap: 2rem; }
    }

    /* Mobile (Max 768px) relative to CONTAINER */
    @container mining-page (max-width: 768px) {
        .mining-container-flex {
            flex-direction: column-reverse; 
        }
        
        .mining-hero-layout {
            flex-direction: column;
            text-align: center;
        }

        .mining-subheading { margin: 0 auto 2.5rem auto; }
        
        .mining-heading { font-size: 2.2rem; }
        
        .mining-services-layout {
            flex-direction: column;
        }

        .mining-footer-layout {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
        }
    }

    /* Small Mobile (Max 480px) relative to CONTAINER */
    @container mining-page (max-width: 480px) {
        .mining-section { padding: 3rem 1.5rem; }
        .mining-heading { font-size: 1.8rem; }
        .mining-grid-benefits { grid-template-columns: 1fr; }
    }
`

// --- Main Page Component (Wraps Everything) ---
function MiningLandingPage(props: any) {
    // FIX:
    // 1. Separate Framer interaction (Root) from Layout Logic (Wrapper).
    // 2. Use `defaultProps` (below) to tell Framer "I want to be 1200px wide initially", 
    //    preventing the "Fit" mode collapse so we don't fall back to the 375px min-width.
    return (
        <div
            className="framer-root"
            style={{
                ...props.style, // FRAMER WINS: Width/Height from Framer (or defaultProps) applied here.
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden" // Clip content at the root level matching frame bounds
            }}
        >
            {/* 
                Wrapper acts as the Container Query boundary. 
                It fills the Root (100%) so queries measure the Root's size.
            */}
            <div className="mining-wrapper" style={{ width: "100%", flex: 1, display: "flex", flexDirection: "column" }}>
                <style>{cssStyles}</style>
                <div className="mining-content-container">
                    <MiningHero />
                    <MiningMission />
                    <MiningBenefits />
                    <MiningServices />
                    <MiningAbout />
                    <MiningFAQ />
                    <MiningContact />
                    <MiningFooter />
                </div>
            </div>
        </div>
    )
}

// CRITICAL FIX: Explicitly tell Framer the default dimensions.
// This prevents "Fit" mode from collapsing to 0 (or our min-width 375px).
// Now it drops in as a full desktop page (1200px) but is still squashable.
// CRITICAL FIX: Explicitly tell Framer the default dimensions.
// This prevents "Fit" mode from collapsing to 0 (or our min-width 375px).
// Now it drops in as a full desktop page (1200px) but is still squashable.
MiningLandingPage.defaultProps = {
    width: 1200,
    height: 4800
}

export default MiningLandingPage

// --- 1. Hero Section ---
function MiningHero() {
    return (
        <section className="mining-section mining-hero">
            <div className="mining-container-flex mining-hero-layout">
                <div style={{ flex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="mining-badge">DOJO LEGAL MINING</span>
                        <h1 className="mining-heading">
                            Workforce Solutions for <br />
                            <span className="text-accent">Mining Industry Employers</span>
                        </h1>
                        <p className="mining-subheading">
                            Secure reliable, safety-conscious skilled labour. We combine legal compliance,
                            visa sponsorship, and specialized recruitment to keep your site fully operational.
                        </p>
                        <motion.button
                            className="mining-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.location.href = "#contact"}
                        >
                            Book a Strategy Session
                        </motion.button>
                    </motion.div>
                </div>

                <motion.div
                    style={{ flex: 1, width: "100%" }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div style={{ width: "100%", height: "400px", borderRadius: "20px", background: "#ddd", display: "flex", alignItems: "center", justifyContent: "center", color: "#666", fontWeight: "bold" }}>
                        [Hero Image]
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

// --- 2. Mission Section ---
function MiningMission() {
    return (
        <section className="mining-section bg-white text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: "800", color: "#623f35", marginBottom: "1.5rem" }}>
                    Building Safe, Compliant Mining Workforces.<br />Not Just Filling Roles.
                </h2>
                <p style={{ fontSize: "1.125rem", lineHeight: "1.8", maxWidth: "800px", margin: "0 auto", opacity: 0.9 }}>
                    In the high-stakes mining sector, a gap in your workforce means lost production and safety risks.
                    Dojo Legal delivers more than just workers; we deliver a legally compliant,
                    safety-verified workforce strategy that scales with your project lifecycle.
                </p>
            </motion.div>
        </section>
    )
}

// --- 3. Benefits Section ---
function MiningBenefits() {
    const benefits = [
        { title: "Specialised for Multi-Site Ops", desc: "Logistics of FIFO/DIDO and remote site management are in our DNA." },
        { title: "Safety & Risk Focus", desc: "Every candidate vetted for safety certifications/tickets before stepping on site." },
        { title: "Integrated Legal & Support", desc: "End-to-end migration law and recruitment in one partner. Less admin for you." }
    ]

    return (
        <section className="mining-section" style={{ backgroundColor: "#F4F1DE" }}>
            <h2 className="text-center" style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)", fontWeight: "800", marginBottom: "3rem" }}>
                Why Mining Employers Choose <span className="text-accent">Dojo Legal</span>
            </h2>
            <div className="mining-grid-benefits">
                {benefits.map((item, index) => (
                    <motion.div
                        key={index}
                        className="bg-white"
                        style={{ padding: "2rem", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <h3 className="text-primary" style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "1rem", color: "#623f35" }}>{item.title}</h3>
                        <p style={{ lineHeight: "1.6" }}>{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

// --- 4. Services Section ---
function MiningServices() {
    const roles = ["Excavator & Dump Truck Operators", "Diesel Fitters & Heavy Mechanics", "Mining Engineers & Geologists", "Site Safety Officers", "Process Technicians"]

    return (
        <section className="mining-section bg-white text-center">
            <div className="mining-container-flex mining-services-layout">
                <div style={{ flex: 1, minWidth: "300px", textAlign: "left" }}>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: "800", marginBottom: "1.5rem" }}>
                        Integrated Workforce, Visa, and Recruitment Support
                    </h2>
                    <p style={{ marginBottom: "2rem", fontSize: "1.1rem", lineHeight: "1.6" }}>
                        From skilled plant operators to site engineers, we source and sponsor the talent you can't find locally.
                    </p>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {roles.map((role, i) => (
                            <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.8rem", fontSize: "1.1rem" }}>
                                <span className="text-accent" style={{ fontWeight: "bold" }}>✓</span> {role}
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={{ flex: 1, width: "100%", height: "400px", backgroundColor: "#eee", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", color: "#888" }}>
                    [Workforce Image Placeholder]
                </div>
            </div>
        </section>
    )
}

// --- 5. About Us ---
function MiningAbout() {
    return (
        <section className="mining-section bg-primary text-white text-center">
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                <h2 className="text-accent" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", marginBottom: "1.5rem" }}>
                    Migration Lawyers and Workforce Partners
                </h2>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "2rem" }}>
                    Led by experienced immigration lawyers, Dojo Legal bridges the gap between complex Australian migration laws and the practical needs of the mining sector. We don't just find workers; we secure their longevity on your site through proper visa pathways.
                </p>
                <div style={{ width: "100px", height: "100px", backgroundColor: "#FFF", borderRadius: "50%", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", color: "#623f35" }}>
                    [Team]
                </div>
            </div>
        </section>
    )
}

// --- 6. FAQs ---
function MiningFAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const faqs = [
        { q: "Can you handle labour agreements for remote mining sites?", a: "Yes, we specialise in DAMA and company-specific labour agreements for regional and remote mining operations." },
        { q: "Do your candidates have Australian safety tickets?", a: "We ensure all candidates either hold valid Australian tickets or are guided through the recognition of prior learning (RPL) process." },
        { q: "How quickly can you mobilise a team?", a: "Timelines vary by visa type, but our integrated legal team fast-tracks the sponsorship process to get workers on-site ASAP." },
        { q: "Do you handle FIFO logistics?", a: "We assist with the visa and initial relocation aspects, partnering with your logistics team to ensure smooth deployment." }
    ]

    return (
        <section className="mining-section bg-white">
            <h2 className="text-center" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", marginBottom: "3rem" }}>Frequently Asked Questions</h2>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                {faqs.map((item, index) => (
                    <div key={index} style={{ marginBottom: "1rem", borderBottom: `1px solid #f0f0f0` }}>
                        <button
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            style={{ width: "100%", textAlign: "left", padding: "1.5rem", background: "none", border: "none", fontSize: "1.1rem", fontWeight: "600", cursor: "pointer", display: "flex", justifyContent: "space-between", color: "#264653" }}
                        >
                            {item.q}
                            <span className="text-accent">{activeIndex === index ? "−" : "+"}</span>
                        </button>
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    style={{ overflow: "hidden" }}
                                >
                                    <p style={{ padding: "0 1.5rem 1.5rem", lineHeight: "1.6", color: "#555" }}>{item.a}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    )
}

// --- 7. Contact Us ---
function MiningContact() {
    return (
        <section id="contact" className="mining-section text-center" style={{ backgroundColor: "#F4F1DE" }}>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: "800", marginBottom: "1rem" }}>Ready to Secure Your Workforce?</h2>
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>Reach out for a confidential strategy session.</p>

            <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", marginBottom: "3rem" }}>
                <div className="bg-white" style={{ padding: "2rem", borderRadius: "10px", minWidth: "250px" }}>
                    <h4 className="text-primary" style={{ marginBottom: "0.5rem", color: "#623f35" }}>Email</h4>
                    <div style={{ fontWeight: "600" }}>support@dojolegal.com.au</div>
                </div>
                <div className="bg-white" style={{ padding: "2rem", borderRadius: "10px", minWidth: "250px" }}>
                    <h4 className="text-primary" style={{ marginBottom: "0.5rem", color: "#623f35" }}>Phone</h4>
                    <div style={{ fontWeight: "600" }}>0468 836 899</div>
                </div>
            </div>

            <p style={{ opacity: 0.6 }}>Level 1, 233 Canley Vale Road, Canley Heights NSW 2166</p>
        </section>
    )
}

// --- 8. Footer ---
function MiningFooter() {
    return (
        <footer className="mining-section mining-footer-layout bg-primary text-white" style={{ padding: "2rem 5%", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.9rem" }}>
            <div>© {new Date().getFullYear()} Dojo Legal Australia. All rights reserved.</div>
            <div style={{ display: "flex", gap: "2rem" }}>
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
            </div>
        </footer>
    )
}
// Force Sync Update Wed Dec 10 19:40:14 AEDT 2025
