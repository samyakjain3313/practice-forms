'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronRight, BookOpen } from 'lucide-react';
import { examsData, categories } from '@/lib/data';

export default function FormsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredExams = examsData.filter((exam) => {
    const matchesSearch = exam.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          exam.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedCategory === 'All') return matchesSearch;
    if (selectedCategory === 'Available') return matchesSearch && exam.status === 'Available';
    if (selectedCategory === 'Coming Soon') return matchesSearch && exam.status === 'Coming Soon';
    
    return matchesSearch && exam.category === selectedCategory;
  });

  return (
    <div className="p-8 md:p-12 max-w-7xl mx-auto w-full">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-3">Forms</h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Practice replica application forms before filling the official government exam forms.
        </p>
      </div>

      <div className="flex flex-col gap-6 mb-10">
        <div className="relative max-w-xl">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
            placeholder="Search exam..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex overflow-x-auto pb-2 scrollbar-hide -mx-2 px-2 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:bg-blue-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredExams.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
          <p className="text-xl text-slate-500 font-medium">No forms found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredExams.map((exam) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                key={exam.id}
                className="bg-white rounded-[16px] p-6 border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      exam.status === 'Available'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {exam.status}
                  </span>
                </div>
                
                <div className="mb-1">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{exam.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
                  {exam.name}
                </h3>
                
                <p className="text-sm text-slate-500 mb-6 flex-grow line-clamp-2">
                  {exam.description}
                </p>

                {exam.status === 'Available' ? (
                  <a
                    href="/form/index.html"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors"
                  >
                    Continue Practice <ChevronRight className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-full py-3 px-4 bg-slate-100 text-slate-400 rounded-xl font-medium cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
