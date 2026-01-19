import React, { useState, useRef } from 'react';
import { X, Plus, Camera, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

interface AddReviewModalProps {
    onClose: () => void;
}

/**
 * Modal component for submitting customer reviews
 * Includes profile picture upload, rating selection, and review text
 */
export const AddReviewModal: React.FC<AddReviewModalProps> = ({ onClose }) => {
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreviewImage(url);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Review submitted successfully! It will be visible after moderation.");
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden relative z-10"
            >
                <div className="p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold text-smart-text">Share Experience</h3>
                        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <X size={20} />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Profile Picture Upload */}
                        <div className="flex justify-center">
                            <div
                                className="relative group cursor-pointer"
                                onClick={() => fileInputRef.current?.click()}
                            >
                                <div className="w-24 h-24 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden hover:border-smart-accent transition-colors">
                                    {previewImage ? (
                                        <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
                                    ) : (
                                        <Camera className="text-gray-400 group-hover:text-smart-accent" size={32} />
                                    )}
                                </div>
                                <div className="absolute bottom-0 right-0 bg-smart-accent text-white p-1.5 rounded-full shadow-md">
                                    <Plus size={14} />
                                </div>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    accept="image/*"
                                    className="hidden"
                                />
                            </div>
                        </div>
                        <p className="text-center text-xs text-gray-400 -mt-2">Upload Profile Picture</p>

                        {/* Inputs */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Name</label>
                                <input type="text" required placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-smart-accent" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Designation</label>
                                <input type="text" required placeholder="Homeowner" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-smart-accent" />
                            </div>
                        </div>

                        {/* Rating */}
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Rating</label>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setRating(star)}
                                        onMouseEnter={() => setHoveredRating(star)}
                                        onMouseLeave={() => setHoveredRating(0)}
                                        className="focus:outline-none transition-transform hover:scale-110"
                                    >
                                        <Star
                                            size={28}
                                            className={`${(hoveredRating || rating) >= star ? 'fill-smart-accent text-smart-accent' : 'text-gray-300'}`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Comments */}
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Comments</label>
                            <textarea
                                required
                                rows={3}
                                placeholder="How was your experience with Ritzy?"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-smart-accent"
                            />
                        </div>

                        <Button type="submit" className="w-full">Submit Review</Button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};
