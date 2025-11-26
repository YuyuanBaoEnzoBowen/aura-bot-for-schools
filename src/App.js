// src/App.js (V4.0 - Added Business Console & Advanced Interactions)

import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import logoImg from './logo.jpg';
import {
    MessageCircle, Settings, Mic, Send, Bot, User, BarChart,
    LayoutGrid, LogOut, Key, Mail, TrendingUp, TrendingDown, Clock, History,
    HeartHandshake, Shield, GraduationCap, Users, Bell, Palette, Languages, Moon,
    Briefcase, DollarSign, PieChart as PieIcon, ArrowRight
} from 'lucide-react';
import {
    PieChart, Pie, Cell, ResponsiveContainer, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line, CartesianGrid
} from 'recharts';

// --- Mock API Call Logic ---
let mockResponseIndex = 0;
const getLLMResponse = async (text) => {
    await new Promise(res => setTimeout(res, 1000));
    const mockResponses = [
        { response: "That's great to hear! What made you feel so positive?", expression: "😄", topic: "Social", emotion_score: 9 },
        { response: "It sounds like you're facing a tough challenge. I'm here to listen if you want to talk more about it.", expression: "😟", topic: "Study", emotion_score: 3 },
        { response: "I see. Thank you for sharing that with me.", expression: "🙂", topic: "Work", emotion_score: 6 }
    ];
    const response = mockResponses[mockResponseIndex];
    mockResponseIndex = (mockResponseIndex + 1) % mockResponses.length;
    return response;
};

// --- NEW: Landing Page & Authentication Screen Component ---
const LandingAndAuthScreen = ({ onLogin }) => {
    const [page, setPage] = useState('landing'); // 'landing', 'login', 'signup'
    const [openFAQ, setOpenFAQ] = useState(null);

    const handleAuthSuccess = (e) => {
        e.preventDefault();
        onLogin();
    };

    const FAQItem = ({ id, q, a }) => (
        <div className="faq-item">
            <button className="faq-question" onClick={() => setOpenFAQ(openFAQ === id ? null : id)}>
                <span>{q}</span>
                <span className={`faq-chevron ${openFAQ === id ? 'open' : ''}`}>▼</span>
            </button>
            <div className={`faq-answer ${openFAQ === id ? 'open' : ''}`}>
                <p>{a}</p>
            </div>
        </div>
    );

    if (page === 'login') {
        return (
            <div className="auth-container">
                <h2 className="auth-title">Welcome Back!</h2>
                <form className="auth-form" onSubmit={handleAuthSuccess}>
                    <div className="input-group">
                        <Mail className="input-icon" size={20} />
                        <input type="email" placeholder="Email Address" className="input-field" required />
                    </div>
                    <div className="input-group">
                        <Key className="input-icon" size={20} />
                        <input type="password" placeholder="Password" className="input-field" required />
                    </div>
                    <a href="#forgot" className="forgot-password">Forgot Password?</a>
                    <button type="submit" className="primary-button">Log In</button>
                    <p className="auth-switch">
                        Don't have an account? <span onClick={() => setPage('signup')}>Sign Up</span>
                    </p>
                    <p className="auth-switch" style={{ marginTop: '1rem' }}>
                        <span onClick={() => setPage('landing')}>&larr; Back to Home</span>
                    </p>
                </form>
            </div>
        );
    }

    if (page === 'signup') {
        return (
            <div className="auth-container">
                <h2 className="auth-title">Create Account</h2>
                <form className="auth-form" onSubmit={handleAuthSuccess}>
                    <div className="input-group">
                        <User className="input-icon" size={20} />
                        <input type="text" placeholder="Your Name" className="input-field" required />
                    </div>
                    <div className="input-group">
                        <Mail className="input-icon" size={20} />
                        <input type="email" placeholder="Email Address" className="input-field" required />
                    </div>
                    <div className="input-group">
                        <Key className="input-icon" size={20} />
                        <input type="password" placeholder="Password" className="input-field" required />
                    </div>
                    <button type="submit" className="primary-button">Sign Up</button>
                    <p className="auth-switch">
                        Already have an account? <span onClick={() => setPage('login')}>Log In</span>
                    </p>
                    <p className="auth-switch" style={{ marginTop: '1rem' }}>
                        <span onClick={() => setPage('landing')}>&larr; Back to Home</span>
                    </p>
                </form>
            </div>
        );
    }

    return (
        <div className="landing-page">
            <nav className="landing-nav">
                <div className="nav-content">
                    <div className="nav-brand">
                        <img src={logoImg} alt="Aura Bot Logo" className="nav-logo-img" />
                        <span className="nav-logo">Aura Bot</span>
                    </div>
                    <div className="nav-links">
                        <a href="#how">How It Works</a>
                        <a href="#features">Features</a>
                        <a href="#pricing">Pricing</a>
                        <button className="nav-login-button" onClick={() => setPage('login')}>Log In</button>
                    </div>
                </div>
            </nav>

            <header className="landing-hero">
                <div className="hero-content">
                    <h1 className="hero-headline">A Data-Driven Approach to Student Wellness</h1>
                    <p className="hero-subheadline">
                        Aura Bot identifies the emotional needs of students through safe, private AI conversations,
                        providing schools with the anonymous insights needed for effective, proactive support.
                    </p>
                    <button className="primary-button cta-button" onClick={() => setPage('signup')}>
                        Request a School Demo
                    </button>
                </div>
            </header>

            <main>
                <section id="how" className="landing-section">
                    <h2 className="section-title">How It Works</h2>
                    <div className="how-it-works-grid">
                        <div className="how-it-works-step">
                            <div className="step-icon"><MessageCircle size={32} /></div>
                            <h3>1. Chat Privately</h3>
                            <p>Students engage in supportive conversations with Aura Bot anytime, anywhere.</p>
                        </div>
                        <div className="how-it-works-step">
                            <div className="step-icon"><LayoutGrid size={32} /></div>
                            <h3>2. Gain Insights</h3>
                            <p>Anonymized data provides schools with macro-level wellness trends, never individual chats.</p>
                        </div>
                        <div className="how-it-works-step">
                            <div className="step-icon"><HeartHandshake size={32} /></div>
                            <h3>3. Foster Support</h3>
                            <p>Early alerts empower educators to provide timely and effective support.</p>
                        </div>
                    </div>
                </section>

                <section id="features" className="landing-section feature-section">
                    <h2 className="section-title">An Ecosystem of Care</h2>
                    <div className="feature-grid">
                        <div className="feature-card">
                            <GraduationCap className="feature-icon" />
                            <h3>For Students</h3>
                            <p>A safe space to explore feelings, with access to curated wellness resources.</p>
                        </div>
                        <div className="feature-card">
                            <HeartHandshake className="feature-icon" />
                            <h3>For Parents</h3>
                            <p>Understand your child's emotional trends and get helpful conversation starters.</p>
                        </div>
                        <div className="feature-card">
                            <Users className="feature-icon" />
                            <h3>For Schools</h3>
                            <p>A powerful dashboard to monitor student wellbeing and implement data-driven initiatives.</p>
                        </div>
                    </div>
                </section>

                <section id="pricing" className="landing-section">
                    <h2 className="section-title">Simple, School-Wide Pricing</h2>
                    <div className="pricing-grid">
                        <div className="pricing-card">
                            <h3>Pilot Program</h3>
                            <p className="price">Free</p>
                            <p className="price-desc">For one classroom for one semester.</p>
                            <ul>
                                <li>✓ Basic Chat Features</li>
                                <li>✓ Weekly Classroom Report</li>
                                <li>✓ Email Support</li>
                            </ul>
                            <button className="secondary-button" onClick={() => setPage('signup')}>Start Free Pilot</button>
                        </div>
                        <div className="pricing-card recommended">
                            <span className="recommended-badge">Recommended</span>
                            <h3>School License</h3>
                            <p className="price">Contact Us</p>
                            <p className="price-desc">Custom pricing per student, per year.</p>
                            <ul>
                                <li>✓ All Pilot Features</li>
                                <li>✓ Full School Dashboard</li>
                                <li>✓ Parent & Student Hubs</li>
                                <li>✓ Early Alert System</li>
                                <li>✓ Dedicated Support</li>
                            </ul>
                            <button className="primary-button" onClick={() => setPage('login')}>Request a Quote</button>
                        </div>
                    </div>
                </section>

                <section id="who" className="landing-section mission-section">
                    <h2 className="section-title">Our Mission</h2>
                    <p className="mission-statement">
                        We believe that every student deserves to be understood and supported. Our mission is to leverage
                        technology not just for academic achievement, but for emotional wellbeing, creating healthier and
                        more empathetic school communities.
                    </p>
                </section>

                <section className="landing-section">
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <div className="faq-container">
                        <FAQItem
                            id={1}
                            q="Is student chat data kept private?"
                            a="Absolutely. Privacy is our highest priority. All conversations are confidential. Schools and parents only see anonymized, aggregated data and trends, never the content of individual chats."
                        />
                        <FAQItem
                            id={2}
                            q="How does the app integrate with school devices?"
                            a="Aura Bot is a lightweight web application that runs on any device with a browser, including school-issued iPads, Chromebooks, and laptops. No installation is required."
                        />
                        <FAQItem
                            id={3}
                            q="Can the wellness resources be customized?"
                            a="Yes! Schools can add their own resources, such as links to schedule appointments with counselors, articles, or contact information for support staff, making the Student Hub truly their own."
                        />
                    </div>
                </section>
            </main>

            <footer className="landing-footer">
                <p>&copy; 2025 Aura Bot for Schools. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

// --- Reusable Main App Components ---
const FaceComponent = ({ expression }) => (
    <div className="face-component">
        <div className="face-circle">
            <span className="face-emoji">{expression}</span>
        </div>
        <p className="face-name">Aura Bot</p>
    </div>
);

const ChatLog = ({ messages }) => {
    const chatEndRef = useRef(null);
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
    return (
        <div className="chat-log-container">
            {messages.map((msg, index) => (
                <div key={index} className={`chat-message-wrapper ${msg.sender}`}>
                    <div className={`chat-bubble ${msg.sender}`}>{msg.text}</div>
                </div>
            ))}
            <div ref={chatEndRef} />
        </div>
    );
};

const ChatInput = ({ onSend, isSpeaking }) => {
    const [input, setInput] = useState('');
    const handleSend = () => {
        if (input.trim()) {
            onSend(input);
            setInput('');
        }
    };
    return (
        <div className="chat-input-container">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="How are you feeling?"
                className="chat-input"
                disabled={isSpeaking}
            />
            <button
                onClick={handleSend}
                className="send-button"
                disabled={!input.trim() || isSpeaking}
            >
                <Send size={20} />
            </button>
        </div>
    );
};

const ChatScreen = ({ messages, expression }) => (
    <div className="page-container chat-screen">
        <FaceComponent expression={expression} />
        <ChatLog messages={messages} />
    </div>
);

// --- Feature Modules ---

const InsightsScreen = ({ sessions }) => {
    const totalSessions = sessions.length;
    const averageScore = totalSessions > 0
        ? (sessions.reduce((sum, s) => sum + s.emotion_score, 0) / totalSessions).toFixed(1)
        : 5.0;

    const topicCounts = sessions.reduce((acc, s) => {
        const topic = s.topic || 'General';
        acc[topic] = (acc[topic] || 0) + 1;
        return acc;
    }, {});
    const topTopics = Object.entries(topicCounts)
        .sort(([, countA], [, countB]) => countB - countA)
        .slice(0, 3);

    return (
        <div className="page-container">
            <h2 className="page-title"><BarChart size={24} /> Emotional Insights</h2>

            {totalSessions === 0 ? (
                <div className="card placeholder">
                    No sessions yet. Chat to build your profile!
                </div>
            ) : (
                <>
                    <div className="insights-grid">
                        <div className="insights-card">
                            <span className="insights-value">{averageScore} / 10</span>
                            <span className="insights-label">Average Mood</span>
                            <div className={`insights-trend ${averageScore >= 6 ? 'positive' : 'negative'}`}>
                                {averageScore >= 6 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                                <span>{averageScore >= 6 ? 'Stable' : 'Needs Attention'}</span>
                            </div>
                        </div>
                        <div className="insights-card">
                            <span className="insights-value">{totalSessions}</span>
                            <span className="insights-label">Total Sessions</span>
                            <div className="insights-trend neutral">
                                <Clock size={14} />
                                <span>Last 7 Days</span>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h3 className="card-title">Top Discussion Topics</h3>
                        <div className="topic-list">
                            {topTopics.map(([topic, count], index) => (
                                <div key={index} className="topic-item">
                                    <span>{['🔥', '💡', '💬'][index]} {topic}</span>
                                    <span className="topic-count">{count} times</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}

            <h2 className="page-title secondary"><History size={24} /> Session History</h2>
            <div className="card list-container">
                {sessions.map((session, index) => (
                    <div key={index} className="list-item">
                        <div>
                            <span className="list-item-title">
                                {session.topic} - {new Date(session.timestamp).toLocaleDateString()}
                            </span>
                            <span className="list-item-subtitle">{session.summary}</span>
                        </div>
                        <div
                            className={`session-score score-${session.emotion_score >= 7
                                ? 'high'
                                : session.emotion_score >= 4
                                    ? 'mid'
                                    : 'low'
                                }`}
                        >
                            {session.emotion_score}/10
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- Student / Parent / School Screens ---

const StudentScreen = () => (
    <div className="page-container">
        <h2 className="page-title"><GraduationCap size={24} /> Student Wellness Hub</h2>

        <div className="card feature-card">
            <h3 className="card-title">Today's Recommendation for You</h3>
            <div className="recommendation-item">
                <div className="recommendation-icon student-icon">🧘</div>
                <div>
                    <p className="recommendation-title">5-Minute Mindful Breathing</p>
                    <p className="recommendation-subtitle">
                        Feeling stressed about exams? Try this quick exercise to calm your mind.
                    </p>
                </div>
            </div>
            <button className="primary-button full-width">Start Exercise</button>
        </div>

        {/* Mood Timeline */}
        <div className="card">
            <h3 className="card-title">My Mood Timeline (Last 7 Days)</h3>
            <div style={{ width: '100%', height: 150 }}>
                <ResponsiveContainer>
                    <LineChart data={[
                        { name: 'Mon', score: 4 }, { name: 'Tue', score: 6 }, { name: 'Wed', score: 3 },
                        { name: 'Thu', score: 7 }, { name: 'Fri', score: 8 }, { name: 'Sat', score: 9 },
                        { name: 'Sun', score: 7 }
                    ]}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" fontSize={12} />
                        <YAxis domain={[0, 10]} fontSize={12} />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="score"
                            stroke="#8884d8"
                            strokeWidth={2}
                            dot={{ r: 4 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>

        <div className="card">
            <h3 className="card-title">Explore Resources</h3>
            <div className="resource-list">
                <div className="resource-item">
                    <span>Article: Handling Peer Pressure</span><span>&gt;</span>
                </div>
                <div className="resource-item">
                    <span>Video: Tips for Better Sleep</span><span>&gt;</span>
                </div>
                <div className="resource-item">
                    <span>Contact: School Counselor</span><span>&gt;</span>
                </div>
            </div>
        </div>
    </div>
);

const ParentScreen = () => (
    <div className="page-container">
        <h2 className="page-title"><HeartHandshake size={24} /> Parent Dashboard</h2>

        <div className="card privacy-notice">
            <Shield size={20} />
            <p>
                This report is anonymized to protect your child's privacy. All chat content remains
                100% confidential.
            </p>
        </div>

        <div className="card feature-card">
            <h3 className="card-title">Your Child's Weekly Emotional Trend</h3>
            <div className="insights-grid">
                <div className="insights-card">
                    <span className="insights-value">
                        7.2 <span className="text-sm">/ 10</span>
                    </span>
                    <span className="insights-label">Avg. Mood This Week</span>
                </div>
                <div className="insights-card">
                    <span className="insights-value trend-positive">+8%</span>
                    <span className="insights-label">vs. Last Week</span>
                </div>
            </div>
        </div>

        {/* Key Topics & Proactive Alert */}
        <div className="card">
            <h3 className="card-title">Key Topics & Concerns</h3>
            <div className="topic-list">
                <div className="topic-item">
                    <span>🔥 Top Topic: <strong>Exams</strong></span>
                    <span className="topic-count">Mentioned 5 times</span>
                </div>
                <div className="topic-item">
                    <span>💡 Rising Concern: <strong>Friendships</strong></span>
                    <span className="topic-count">Sentiment dropped</span>
                </div>
            </div>
        </div>

        <div className="alert-item">
            <div className="alert-icon warning"><Bell size={20} /></div>
            <div>
                <p className="alert-title">Proactive Alert</p>
                <p className="alert-subtitle">
                    We've noticed a lower-than-average mood score for 3 consecutive days. It might be
                    a good time for a supportive check-in.
                </p>
            </div>
        </div>

        <div className="card">
            <h3 className="card-title">Conversation Starters</h3>
            <div className="recommendation-item">
                <div className="recommendation-icon parent-icon">💬</div>
                <div>
                    <p className="recommendation-title">
                        Based on this week's main topic: 'Study'
                    </p>
                    <p className="recommendation-subtitle">
                        Try asking: "What was the most interesting thing you learned in school this week?"
                    </p>
                </div>
            </div>
        </div>
    </div>
);

const SchoolScreen = () => {
    const schoolData = [
        { name: 'Wk 1', 'Grade 7': 6.5, 'Grade 8': 6.8, 'Grade 9': 6.2 },
        { name: 'Wk 2', 'Grade 7': 6.7, 'Grade 8': 6.5, 'Grade 9': 6.4 },
        { name: 'Wk 3', 'Grade 7': 7.1, 'Grade 8': 7.0, 'Grade 9': 6.8 },
        { name: 'Wk 4', 'Grade 7': 6.8, 'Grade 8': 7.2, 'Grade 9': 6.9 },
    ];

    const [activeManagementTab, setActiveManagementTab] = useState('resources');

    return (
        <div className="page-container">
            <h2 className="page-title"><Users size={24} /> School Analytics</h2>

            <div className="card privacy-notice">
                <Shield size={20} />
                <p>
                    All data is fully anonymized and aggregated. Individual student data is never shown.
                </p>
            </div>

            <div className="card feature-card">
                <h3 className="card-title">Overall Student Mood Trend (This Month)</h3>
                <div style={{ width: '100%', height: 200 }}>
                    <ResponsiveContainer>
                        <LineChart data={schoolData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis domain={[5, 10]} />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="Grade 7" stroke="#8884d8" />
                            <Line type="monotone" dataKey="Grade 8" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="Grade 9" stroke="#ffc658" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* System Management with Tabs */}
            <div className="card">
                <h3 className="card-title">System Management</h3>
                <div className="management-tabs">
                    <button
                        className={`management-tab ${activeManagementTab === 'resources' ? 'active' : ''}`}
                        onClick={() => setActiveManagementTab('resources')}
                    >
                        Wellness Resources
                    </button>
                    <button
                        className={`management-tab ${activeManagementTab === 'onboarding' ? 'active' : ''}`}
                        onClick={() => setActiveManagementTab('onboarding')}
                    >
                        Onboarding
                    </button>
                    <button
                        className={`management-tab ${activeManagementTab === 'reports' ? 'active' : ''}`}
                        onClick={() => setActiveManagementTab('reports')}
                    >
                        Reports
                    </button>
                </div>

                {activeManagementTab === 'resources' && (
                    <div className="management-panel">
                        <p className="panel-subtitle">Quickly configure what students see in their hub.</p>
                        <div className="resource-list">
                            <div className="resource-item"><span>+ Add Breathing Exercise</span><span>&gt;</span></div>
                            <div className="resource-item"><span>+ Add School Counselor Link</span><span>&gt;</span></div>
                            <div className="resource-item"><span>View All 24 Resources</span><span>&gt;</span></div>
                        </div>
                    </div>
                )}

                {activeManagementTab === 'onboarding' && (
                    <div className="management-panel">
                        <p className="panel-subtitle">Invite new students and parents via CSV or secure link.</p>
                        <div className="resource-list">
                            <div className="resource-item"><span>Upload Student CSV</span><span>&gt;</span></div>
                            <div className="resource-item"><span>Generate Parent Invite QR</span><span>&gt;</span></div>
                            <div className="resource-item"><span>View Pending Invites (12)</span><span>&gt;</span></div>
                        </div>
                    </div>
                )}

                {activeManagementTab === 'reports' && (
                    <div className="management-panel">
                        <p className="panel-subtitle">Export anonymized data for internal review.</p>
                        <div className="resource-list">
                            <div className="resource-item"><span>Download Monthly Report (PDF)</span><span>&gt;</span></div>
                            <div className="resource-item"><span>Export Raw Anonymized Data (CSV)</span><span>&gt;</span></div>
                            <div className="resource-item"><span>Schedule Weekly Email Report</span><span>&gt;</span></div>
                        </div>
                    </div>
                )}
            </div>

            {/* Break-Glass Protocol Card */}
            <div className="card">
                <h3 className="card-title">Emergency Safety Protocol</h3>
                <div className="alert-item">
                    <div className="alert-icon warning"><Shield size={20} /></div>
                    <div>
                        <p className="alert-title">"Break-Glass" High-Risk Escalation</p>
                        <p className="alert-subtitle">
                            In extreme cases (self-harm or harm to others), Aura Bot will automatically
                            notify your designated safeguarding lead with a minimal, pre-approved alert.
                            This is tightly controlled and never used for everyday monitoring.
                        </p>
                    </div>
                </div>
            </div>

            <div className="card">
                <h3 className="card-title">Early Alerts</h3>
                <div className="alert-item">
                    <div className="alert-icon warning"><Bell size={20} /></div>
                    <div>
                        <p className="alert-title">Grade 9 Anxiety Index increased by 12% this week.</p>
                        <p className="alert-subtitle">Consider organizing a pre-exam wellness workshop.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- NEW: Business Console Screen (商业模块) ---

const BusinessScreen = () => {
    // Mock business metrics
    const [selectedYear, setSelectedYear] = useState('2025');

    const revenueData = [
        { name: 'Q1', pilot: 2, paid: 1 },
        { name: 'Q2', pilot: 3, paid: 2 },
        { name: 'Q3', pilot: 3, paid: 4 },
        { name: 'Q4', pilot: 2, paid: 5 },
    ];

    const funnelData = [
        { name: 'Cold Outreach', value: 120 },
        { name: 'Meetings', value: 40 },
        { name: 'Pilot Schools', value: 15 },
        { name: 'Paid Contracts', value: 6 },
    ];
    const funnelColors = ['#bfdbfe', '#93c5fd', '#60a5fa', '#2563eb'];

    return (
        <div className="page-container">
            <h2 className="page-title"><Briefcase size={24} /> Business Console</h2>

            <div className="card feature-card">
                <h3 className="card-title">SaaS Overview ({selectedYear})</h3>
                <div className="business-overview-grid">
                    <div className="insights-card">
                        <span className="insights-value">6</span>
                        <span className="insights-label">Active Schools</span>
                        <div className="insights-trend positive">
                            <TrendingUp size={14} /><span>+3 vs last year</span>
                        </div>
                    </div>
                    <div className="insights-card">
                        <span className="insights-value">3,240</span>
                        <span className="insights-label">Active Students</span>
                        <div className="insights-trend neutral">
                            <Users size={14} /><span>Avg. 540 per school</span>
                        </div>
                    </div>
                    <div className="insights-card">
                        <span className="insights-value">$18k</span>
                        <span className="insights-label">ARR (Annual Recurring Revenue)</span>
                        <div className="insights-trend positive">
                            <DollarSign size={14} /><span>Tiered per-student pricing</span>
                        </div>
                    </div>
                </div>

                <div className="year-selector">
                    <span>View scenario:</span>
                    <select
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        className="year-select"
                    >
                        <option value="2024">2024 – Pilot Only</option>
                        <option value="2025">2025 – Early Growth</option>
                        <option value="2026">2026 – Scale-Up</option>
                    </select>
                </div>
            </div>

            <div className="card">
                <h3 className="card-title">Pilot → Paid Conversion</h3>
                <div style={{ width: '100%', height: 200 }}>
                    <ResponsiveContainer>
                        <BarChart data={revenueData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pilot" fill="#93c5fd" name="Pilot Schools" />
                            <Bar dataKey="paid" fill="#2563eb" name="Paid Schools" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="card">
                <h3 className="card-title">Sales Funnel (Current Semester)</h3>
                <div className="business-funnel">
                    <div className="business-funnel-chart">
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={funnelData}
                                    innerRadius={40}
                                    outerRadius={70}
                                    paddingAngle={4}
                                    dataKey="value"
                                >
                                    {funnelData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={funnelColors[index]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="business-funnel-legend">
                        {funnelData.map((step, index) => (
                            <div key={index} className="funnel-step">
                                <div
                                    className="funnel-color"
                                    style={{ backgroundColor: funnelColors[index] }}
                                />
                                <span className="funnel-label">{step.name}</span>
                                <span className="funnel-value">{step.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="card">
                <h3 className="card-title">Pricing Tiers</h3>
                <div className="pricing-tier-list">
                    <div className="pricing-tier">
                        <div>
                            <p className="pricing-tier-name">Pilot Program</p>
                            <p className="pricing-tier-desc">Free – one classroom, one semester.</p>
                        </div>
                        <span className="pricing-tier-price">$0</span>
                    </div>
                    <div className="pricing-tier">
                        <div>
                            <p className="pricing-tier-name">Standard School License</p>
                            <p className="pricing-tier-desc">¥20–¥35 per student per year.</p>
                        </div>
                        <span className="pricing-tier-price">Tiered</span>
                    </div>
                    <div className="pricing-tier">
                        <div>
                            <p className="pricing-tier-name">District / Group License</p>
                            <p className="pricing-tier-desc">Custom pricing for large school networks.</p>
                        </div>
                        <span className="pricing-tier-price">Custom</span>
                    </div>
                </div>
                <div className="pricing-note">
                    <ArrowRight size={14} />
                    <span>Demo Day note: This console shows how Aura Bot scales as a real SaaS business.</span>
                </div>
            </div>
        </div>
    );
};

const SettingsScreen = ({ onLogout }) => (
    <div className="page-container">
        <h2 className="page-title">Account</h2>
        <div className="card account-card">
            <div className="account-avatar"><User size={40} /></div>
            <span className="account-name">Demo User</span>
            <span className="account-email">demo@aurabot.ai</span>
        </div>

        <h2 className="page-title">Settings</h2>
        <div className="card list-container">
            <div className="list-item">
                <span className="setting-label"><Languages size={20} /> Language</span>
                <span>English (US) &gt;</span>
            </div>
            <div className="list-item">
                <span className="setting-label"><Palette size={20} /> Appearance</span>
                <span>Aura &gt;</span>
            </div>
            <div className="list-item">
                <span className="setting-label"><Moon size={20} /> Dark Mode</span>
                <button className="toggle-switch">
                    <span className="toggle-knob"></span>
                </button>
            </div>
        </div>

        <button onClick={onLogout} className="logout-button">
            <LogOut size={20} /> Log Out
        </button>
    </div>
);

// --- Main App Frame ---
const MainApp = ({ onLogout }) => {
    const [page, setPage] = useState('chat');
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Hello! I am Aura Bot. How are you feeling today?' }
    ]);
    const [expression, setExpression] = useState('😊');
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [sessions, setSessions] = useState([
        {
            timestamp: Date.now() - 2 * 86400000,
            topic: 'Study',
            emotion_score: 3,
            summary: 'Stressed about project deadlines.'
        },
        {
            timestamp: Date.now() - 1 * 86400000,
            topic: 'Work',
            emotion_score: 8,
            summary: 'Felt motivated after a good meeting.'
        },
        {
            timestamp: Date.now() - 0.5 * 86400000,
            topic: 'Social',
            emotion_score: 9,
            summary: 'Excited for weekend plans.'
        },
    ]);

    // Chat logic (不要改动这里，保留你准备好的三句 demo)
    const handleSend = async (text) => {
        setMessages(prev => [...prev, { sender: 'user', text }]);
        setExpression('🤔');
        setIsSpeaking(true);

        const llmResult = await getLLMResponse(text);
        setMessages(prev => [...prev, { sender: 'bot', text: llmResult.response }]);
        setExpression(llmResult.expression || '🙂');
        setSessions(prev => [
            {
                timestamp: Date.now(),
                topic: llmResult.topic,
                emotion_score: llmResult.emotion_score,
                summary: text.substring(0, 47) + (text.length > 50 ? '...' : '')
            },
            ...prev
        ]);
        setIsSpeaking(false);
    };

    const renderPage = () => {
        switch (page) {
            case 'chat': return <ChatScreen messages={messages} expression={expression} />;
            case 'insights': return <InsightsScreen sessions={sessions} />;
            case 'students': return <StudentScreen />;
            case 'parents': return <ParentScreen />;
            case 'school': return <SchoolScreen />;
            case 'business': return <BusinessScreen />;
            case 'settings': return <SettingsScreen onLogout={onLogout} />;
            default: return <ChatScreen messages={messages} expression={expression} />;
        }
    };

    const navButtonClass = (pageName) => `nav-button ${page === pageName ? 'active' : ''}`;

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Aura Bot for Schools</h1>
            </header>
            <main className="main-content">{renderPage()}</main>
            {page === 'chat' && <ChatInput onSend={handleSend} isSpeaking={isSpeaking} />}
            <nav className="nav-bar">
                <button onClick={() => setPage('chat')} className={navButtonClass('chat')}>
                    <MessageCircle size={22} /><span className="nav-label">Chat</span>
                </button>
                <button onClick={() => setPage('insights')} className={navButtonClass('insights')}>
                    <LayoutGrid size={22} /><span className="nav-label">Insights</span>
                </button>
                <button onClick={() => setPage('students')} className={navButtonClass('students')}>
                    <GraduationCap size={22} /><span className="nav-label">Student</span>
                </button>
                <button onClick={() => setPage('parents')} className={navButtonClass('parents')}>
                    <HeartHandshake size={22} /><span className="nav-label">Parent</span>
                </button>
                <button onClick={() => setPage('school')} className={navButtonClass('school')}>
                    <Users size={22} /><span className="nav-label">School</span>
                </button>
                <button onClick={() => setPage('business')} className={navButtonClass('business')}>
                    <Briefcase size={22} /><span className="nav-label">Business</span>
                </button>
                <button onClick={() => setPage('settings')} className={navButtonClass('settings')}>
                    <Settings size={22} /><span className="nav-label">Settings</span>
                </button>
            </nav>
        </div>
    );
};

// --- Root Component ---
export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <div className={`app-wrapper ${isAuthenticated ? 'mobile-view' : 'web-view'}`}>
            {!isAuthenticated
                ? <LandingAndAuthScreen onLogin={() => setIsAuthenticated(true)} />
                : <MainApp onLogout={() => setIsAuthenticated(false)} />
            }
        </div>
    );
}