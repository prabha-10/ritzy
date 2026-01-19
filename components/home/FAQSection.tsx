import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../ui/Section';
import { FAQ_CATEGORIES } from '../../constants';

/**
 * FAQ section with tabbed categories and accordion-style questions
 * Manages active tab and expanded question state
 */
export const FAQSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState(FAQ_CATEGORIES[0].id);
    const [openQuestion, setOpenQuestion] = useState<string | null>(FAQ_CATEGORIES[0].questions[0].id);

    const activeCategory = FAQ_CATEGORIES.find(c => c.id === activeTab);

    if (!FAQ_CATEGORIES || FAQ_CATEGORIES.length === 0) {
        return null;
    }

    return (
        <Section className="py-24 bg-white relative overflow-hidden">
            {/* Subtle Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-smart-accent/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 -left-24 w-72 h-72 bg-blue-50 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-smart-text mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-500">
                        Everything you need to know about transforming your living space. Can't find the answer you're looking for? Reach out to our team.
                    </p>
                </div>

                <div className="bg-smart-bg/50 rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-sm">
                    <div className="flex flex-col md:flex-row gap-12">

                        {/* Tabs */}
                        <div className="w-full md:w-1/3 flex flex-col gap-3">
                            {FAQ_CATEGORIES.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveTab(cat.id)}
                                    className={`text-left px-6 py-4 rounded-2xl font-bold transition-all duration-300 flex justify-between items-center ${activeTab === cat.id
                                            ? 'bg-white text-smart-text shadow-lg shadow-gray-100 scale-105'
                                            : 'text-gray-400 hover:bg-white/50 hover:text-smart-text'
                                        }`}
                                >
                                    {cat.label}
                                    {activeTab === cat.id && <div className="w-2 h-2 rounded-full bg-smart-accent"></div>}
                                </button>
                            ))}
                        </div>

                        {/* Questions */}
                        <div className="w-full md:w-2/3">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-4"
                                >
                                    {activeCategory?.questions.map((item) => (
                                        <div
                                            key={item.id}
                                            className={`rounded-2xl transition-all duration-300 overflow-hidden ${openQuestion === item.id
                                                    ? 'bg-white shadow-md'
                                                    : 'bg-transparent hover:bg-white/50'
                                                }`}
                                        >
                                            <button
                                                onClick={() => setOpenQuestion(openQuestion === item.id ? null : item.id)}
                                                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4"
                                            >
                                                <span className={`font-bold text-lg ${openQuestion === item.id ? 'text-smart-text' : 'text-gray-600'}`}>
                                                    {item.question}
                                                </span>
                                                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openQuestion === item.id ? 'bg-smart-accent text-white' : 'bg-gray-200 text-gray-500'}`}>
                                                    {openQuestion === item.id ? <X size={16} /> : <Plus size={16} />}
                                                </span>
                                            </button>
                                            <AnimatePresence>
                                                {openQuestion === item.id && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="px-6 pb-6 text-gray-500 leading-relaxed">
                                                            {item.answer}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                    </div>
                </div>
            </div>
        </Section>
    );
};
