import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// --- Global Styles & Colors ---
const colors = {
    primary: "#623f35", // Dojo Brown
    accent: "#E07A5F",  // Terra / Safety Orange tone
    text: "#264653",    // Deep Navy
    bg: "#F4F1DE",      // Sand/Beige
    white: "#FFFFFF",
    lightGrey: "#f0f0f0"
}

// Global Section Style
const sectionStyle = {
    padding: "5rem 8%",
    fontFamily: "'Montserrat', sans-serif",
    color: colors.text
}

// --- Main Page Component (Wraps Everything) ---
export function MiningLandingPage() {
    return (
        <div style={{ width: "100%", overflowX: "hidden" }}>
            <MiningHero />
            <MiningMission />
            <MiningBenefits />
            <MiningServices />
            <MiningAbout />
            <MiningFAQ />
            <MiningContact />
            <MiningFooter />
        </div>
    )
}

export default MiningLandingPage


// --- 1. Hero Section ---
function MiningHero() {
    return (
        <section style={styles.container}>
            <div style={styles.content}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span style={styles.badge}>DOJO LEGAL MINING</span>
                    <h1 style={styles.heading}>
                        Workforce Solutions for <br />
                        <span style={{ color: colors.accent }}>Mining Industry Employers</span>
                    </h1>
                    <p style={styles.subheading}>
                        Secure reliable, safety-conscious skilled labour. We combine legal compliance,
                        visa sponsorship, and specialized recruitment to keep your site fully operational.
                    </p>
                    <motion.button
                        style={styles.button}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.location.href = "#contact"}
                    >
                        Book a Strategy Session
                    </motion.button>
                </motion.div>
            </div>

            {/* Placeholder for Hero Image */}
            <motion.div
                style={styles.imageContainer}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div style={styles.imagePlaceholder}>
                    [Insert Mining Hero Image]
                </div>
            </motion.div>
        </section>
    )
}

// Hero-specific styles
const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "4rem 8%",
        backgroundColor: colors.bg,
        minHeight: "80vh",
        fontFamily: "'Montserrat', sans-serif",
        gap: "4rem",
        overflow: "hidden"
    },
    content: { flex: 1, maxWidth: "600px" },
    badge: {
        fontSize: "0.9rem", fontWeight: "700", letterSpacing: "0.1em",
        color: colors.primary, textTransform: "uppercase", marginBottom: "1rem", display: "block"
    },
    heading: {
        fontSize: "3.5rem", lineHeight: "1.1", color: colors.text,
        marginBottom: "1.5rem", fontWeight: "800"
    },
    subheading: {
        fontSize: "1.1rem", lineHeight: "1.6", color: colors.text,
        marginBottom: "2.5rem", opacity: 0.8, maxWidth: "500px"
    },
    button: {
        padding: "1rem 2rem", fontSize: "1rem", fontWeight: "600",
        color: colors.white, backgroundColor: colors.primary, border: "none",
        borderRadius: "8px", cursor: "pointer", boxShadow: "0 4px 14px rgba(0,0,0,0.15)"
    },
    imageContainer: {
        flex: 1, height: "500px", borderRadius: "20px",
        overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
    },
    imagePlaceholder: {
        width: "100%", height: "100%", backgroundColor: "#ccc",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#666", fontWeight: "bold", fontSize: "1.2rem"
    }
}

// --- 2. Mission Section ---
function MiningMission() {
    return (
        <section style={{ ...sectionStyle, backgroundColor: colors.white, textAlign: "center" }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 style={{ fontSize: "2.5rem", fontWeight: "800", color: colors.primary, marginBottom: "1.5rem" }}>
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
        <section style={{ ...sectionStyle, backgroundColor: colors.bg }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "3rem", textAlign: "center" }}>
                Why Mining Employers Choose <span style={{ color: colors.accent }}>Dojo Legal</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                {benefits.map((item, index) => (
                    <motion.div
                        key={index}
                        style={{ backgroundColor: colors.white, padding: "2rem", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <h3 style={{ color: colors.primary, fontSize: "1.25rem", fontWeight: "700", marginBottom: "1rem" }}>{item.title}</h3>
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
        <section style={{ ...sectionStyle, backgroundColor: colors.white, display: "flex", gap: "4rem", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: "300px" }}>
                <h2 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "1.5rem" }}>
                    Integrated Workforce, Visa, and Recruitment Support
                </h2>
                <p style={{ marginBottom: "2rem", fontSize: "1.1rem", lineHeight: "1.6" }}>
                    From skilled plant operators to site engineers, we source and sponsor the talent you can't find locally.
                </p>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {roles.map((role, i) => (
                        <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.8rem", fontSize: "1.1rem" }}>
                            <span style={{ color: colors.accent, fontWeight: "bold" }}>✓</span> {role}
                        </li>
                    ))}
                </ul>
            </div>
            <div style={{ flex: 1, height: "400px", backgroundColor: "#eee", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", color: "#888" }}>
                [Workforce Image Placeholder]
            </div>
        </section>
    )
}

// --- 5. About Us ---
function MiningAbout() {
    return (
        <section style={{ ...sectionStyle, backgroundColor: colors.primary, color: colors.white, textAlign: "center" }}>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                <h2 style={{ fontSize: "2.5rem", color: colors.accent, marginBottom: "1.5rem" }}>
                    Migration Lawyers and Workforce Partners
                </h2>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "2rem" }}>
                    Led by experienced immigration lawyers, Dojo Legal bridges the gap between complex Australian migration laws and the practical needs of the mining sector. We don't just find workers; we secure their longevity on your site through proper visa pathways.
                </p>
                <div style={{ width: "100px", height: "100px", backgroundColor: colors.white, borderRadius: "50%", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", color: colors.primary }}>
                    [Team]
                </div>
            </div>
        </section>
    )
}

// --- 6. FAQs ---
function MiningFAQ() {
    const [activeIndex, setActiveIndex] = useState(null)
    const faqs = [
        { q: "Can you handle labour agreements for remote mining sites?", a: "Yes, we specialise in DAMA and company-specific labour agreements for regional and remote mining operations." },
        { q: "Do your candidates have Australian safety tickets?", a: "We ensure all candidates either hold valid Australian tickets or are guided through the recognition of prior learning (RPL) process." },
        { q: "How quickly can you mobilise a team?", a: "Timelines vary by visa type, but our integrated legal team fast-tracks the sponsorship process to get workers on-site ASAP." },
        { q: "Do you handle FIFO logistics?", a: "We assist with the visa and initial relocation aspects, partnering with your logistics team to ensure smooth deployment." }
    ]

    return (
        <section style={{ ...sectionStyle, backgroundColor: colors.white }}>
            <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "3rem" }}>Frequently Asked Questions</h2>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                {faqs.map((item, index) => (
                    <div key={index} style={{ marginBottom: "1rem", borderBottom: `1px solid ${colors.lightGrey}` }}>
                        <button
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            style={{ width: "100%", textAlign: "left", padding: "1.5rem", background: "none", border: "none", fontSize: "1.1rem", fontWeight: "600", cursor: "pointer", display: "flex", justifyContent: "space-between", color: colors.text }}
                        >
                            {item.q}
                            <span style={{ color: colors.accent }}>{activeIndex === index ? "−" : "+"}</span>
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
        <section id="contact" style={{ ...sectionStyle, backgroundColor: colors.bg, textAlign: "center" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "1rem" }}>Ready to Secure Your Workforce?</h2>
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>Reach out for a confidential strategy session.</p>

            <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", marginBottom: "3rem" }}>
                <div style={{ background: colors.white, padding: "2rem", borderRadius: "10px", minWidth: "250px" }}>
                    <h4 style={{ color: colors.primary, marginBottom: "0.5rem" }}>Email</h4>
                    <div style={{ fontWeight: "600" }}>support@dojolegal.com.au</div>
                </div>
                <div style={{ background: colors.white, padding: "2rem", borderRadius: "10px", minWidth: "250px" }}>
                    <h4 style={{ color: colors.primary, marginBottom: "0.5rem" }}>Phone</h4>
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
        <footer style={{ padding: "2rem 5%", backgroundColor: colors.primary, color: colors.white, display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.9rem" }}>
            <div>© {new Date().getFullYear()} Dojo Legal Australia. All rights reserved.</div>
            <div style={{ display: "flex", gap: "2rem" }}>
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
            </div>
        </footer>
    )
}
