
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, Plus, Trash2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceContent } from '../types';
import { getServices, saveService } from '../lib/content';

export const Admin: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'services' | 'products' | 'portfolio'>('services');
    const [services, setServices] = useState<ServiceContent[]>([]);
    const [selectedService, setSelectedService] = useState<ServiceContent | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadServices();
    }, []);

    const loadServices = async () => {
        const data = await getServices();
        setServices(data);
        setLoading(false);
    };

    const handleServiceChange = (field: string, value: any) => {
        if (!selectedService) return;
        setSelectedService({ ...selectedService, [field]: value });
    };

    const handleFeatureSectionChange = (index: number, field: string, value: string) => {
        if (!selectedService) return;
        const updated = [...selectedService.featureSections];
        updated[index] = { ...updated[index], [field]: value };
        setSelectedService({ ...selectedService, featureSections: updated });
    };

    const addFeatureSection = () => {
        if (!selectedService) return;
        setSelectedService({
            ...selectedService,
            featureSections: [
                ...selectedService.featureSections,
                { title: '', description: '', image: '' }
            ]
        });
    };

    const removeFeatureSection = (index: number) => {
        if (!selectedService) return;
        const updated = selectedService.featureSections.filter((_, i) => i !== index);
        setSelectedService({ ...selectedService, featureSections: updated });
    };

    const handleUpdate = () => {
        if (!selectedService) return;

        // Save to localStorage for immediate update
        saveService(selectedService);

        // Show success message
        alert('✅ Updated! Changes are live on the website. Refresh the Services page to see them.');

        // Reload services list to show updated data
        loadServices();
    };

    const createNewService = () => {
        // Create empty service template
        const newService: ServiceContent = {
            id: `new-service-${Date.now()}`,
            slug: 'new-service',
            title: 'New Service',
            shortDescription: 'Enter service description here',
            category: 'Home Automation',
            icon: 'Home',
            features: ['Feature 1', 'Feature 2', 'Feature 3'],
            cardImage: '/assets/images/img_4fbf3280f66f.jpg',
            heroImage: '/assets/images/img_8e77d06750fb.jpg',
            subtitle: 'Service Subtitle',
            introTitle: 'Introduction Title',
            introText: 'Enter your introduction text here describing the service in detail.',
            featureSections: [
                {
                    title: 'Feature Section 1',
                    description: 'Description of this feature',
                    image: '/assets/images/img_32e31e6414cb.jpg'
                }
            ]
        };

        setSelectedService(newService);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-gray-600">Loading...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="flex items-center gap-4 mb-2">
                                <Link to="/" className="text-gray-400 hover:text-gray-600">
                                    <ArrowLeft size={20} />
                                </Link>
                                <h1 className="text-3xl font-bold text-gray-900">Content Admin</h1>
                            </div>
                            <p className="text-gray-500">Manage your services, products, and portfolio</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-12 gap-8">
                    {/* Sidebar */}
                    <div className="col-span-3">
                        <div className="bg-white rounded-lg shadow-sm p-4 sticky top-4">
                            <h3 className="font-bold text-gray-900 mb-4">Content Type</h3>
                            <div className="space-y-2">
                                <button
                                    onClick={() => setActiveTab('services')}
                                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${activeTab === 'services'
                                        ? 'bg-blue-50 text-blue-700 font-semibold'
                                        : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    Services ({services.length})
                                </button>
                                <button
                                    onClick={() => setActiveTab('products')}
                                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${activeTab === 'products'
                                        ? 'bg-blue-50 text-blue-700 font-semibold'
                                        : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    Products (0)
                                </button>
                                <button
                                    onClick={() => setActiveTab('portfolio')}
                                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${activeTab === 'portfolio'
                                        ? 'bg-blue-50 text-blue-700 font-semibold'
                                        : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    Portfolio (0)
                                </button>
                            </div>

                            {activeTab === 'services' && (
                                <div className="mt-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="font-bold text-gray-900 text-sm">Services</h4>
                                        <button
                                            onClick={createNewService}
                                            className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 font-medium"
                                        >
                                            <Plus size={14} />
                                            New
                                        </button>
                                    </div>
                                    <div className="space-y-1">
                                        {services.map((service) => (
                                            <button
                                                key={service.id}
                                                onClick={() => setSelectedService(service)}
                                                className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${selectedService?.id === service.id
                                                    ? 'bg-gray-100 text-gray-900 font-medium'
                                                    : 'text-gray-600 hover:bg-gray-50'
                                                    }`}
                                            >
                                                {service.title}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="col-span-9">
                        {selectedService ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white rounded-lg shadow-sm p-8"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900">Edit Service</h2>
                                    <button
                                        onClick={handleUpdate}
                                        className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
                                    >
                                        <Save size={18} />
                                        Update Website
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    {/* Basic Info */}
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-4">Basic Information</h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                                                <input
                                                    type="text"
                                                    value={selectedService.title}
                                                    onChange={(e) => handleServiceChange('title', e.target.value)}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Slug</label>
                                                <input
                                                    type="text"
                                                    value={selectedService.slug}
                                                    onChange={(e) => handleServiceChange('slug', e.target.value)}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>
                                            <div className="col-span-2">
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Short Description</label>
                                                <textarea
                                                    value={selectedService.shortDescription}
                                                    onChange={(e) => handleServiceChange('shortDescription', e.target.value)}
                                                    rows={2}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                                                <input
                                                    type="text"
                                                    value={selectedService.category}
                                                    onChange={(e) => handleServiceChange('category', e.target.value)}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Icon (Lucide name)</label>
                                                <input
                                                    type="text"
                                                    value={selectedService.icon}
                                                    onChange={(e) => handleServiceChange('icon', e.target.value)}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Card Image URL</label>
                                                <input
                                                    type="text"
                                                    value={selectedService.cardImage}
                                                    onChange={(e) => handleServiceChange('cardImage', e.target.value)}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Hero Image URL</label>
                                                <input
                                                    type="text"
                                                    value={selectedService.heroImage}
                                                    onChange={(e) => handleServiceChange('heroImage', e.target.value)}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Detail Page Content */}
                                    <div className="border-t pt-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-4">Detail Page Content</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                                                <input
                                                    type="text"
                                                    value={selectedService.subtitle}
                                                    onChange={(e) => handleServiceChange('subtitle', e.target.value)}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Intro Title</label>
                                                <input
                                                    type="text"
                                                    value={selectedService.introTitle}
                                                    onChange={(e) => handleServiceChange('introTitle', e.target.value)}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Intro Text</label>
                                                <textarea
                                                    value={selectedService.introText}
                                                    onChange={(e) => handleServiceChange('introText', e.target.value)}
                                                    rows={4}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Feature Sections */}
                                    <div className="border-t pt-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-lg font-bold text-gray-900">Feature Sections</h3>
                                            <button
                                                onClick={addFeatureSection}
                                                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                                            >
                                                <Plus size={16} />
                                                Add Feature
                                            </button>
                                        </div>
                                        <div className="space-y-4">
                                            {selectedService.featureSections.map((feature, index) => (
                                                <div key={index} className="border border-gray-200 rounded-lg p-4">
                                                    <div className="flex items-center justify-between mb-3">
                                                        <span className="text-sm font-medium text-gray-500">Feature {index + 1}</span>
                                                        <button
                                                            onClick={() => removeFeatureSection(index)}
                                                            className="text-red-500 hover:text-red-700"
                                                        >
                                                            <Trash2 size={16} />
                                                        </button>
                                                    </div>
                                                    <div className="space-y-3">
                                                        <input
                                                            type="text"
                                                            placeholder="Feature Title"
                                                            value={feature.title}
                                                            onChange={(e) => handleFeatureSectionChange(index, 'title', e.target.value)}
                                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        />
                                                        <textarea
                                                            placeholder="Feature Description"
                                                            value={feature.description}
                                                            onChange={(e) => handleFeatureSectionChange(index, 'description', e.target.value)}
                                                            rows={2}
                                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        />
                                                        <input
                                                            type="text"
                                                            placeholder="Image URL"
                                                            value={feature.image}
                                                            onChange={(e) => handleFeatureSectionChange(index, 'image', e.target.value)}
                                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                                <p className="text-gray-500">Select a service from the sidebar to edit</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
