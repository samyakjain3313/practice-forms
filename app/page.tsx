import { FileText, FileSignature, HelpCircle, CheckCircle, Clock, CalendarDays, ArrowRight, BookOpen, Train, Settings } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto w-full relative">
      <div className="mb-8">
        <h1 className="text-[28px] font-bold text-slate-900 tracking-tight flex items-center gap-2">
          Good Morning, Rahul <span className="text-3xl">👋</span>
        </h1>
        <p className="text-[15px] text-slate-500 mt-1">
          Continue your exam preparation. Let's make today count.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN (Overview, Priority, Modules) */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          {/* Overview Section */}
          <section>
            <h2 className="text-[18px] font-bold text-slate-800 mb-4">Overview</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Card 1 */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden">
                <div className="text-slate-500 text-sm font-medium mb-1">Forms Completed</div>
                <div className="text-4xl font-bold text-slate-900">12</div>
                <FileText className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 text-red-50 opacity-50" strokeWidth={1.5} />
              </div>
              {/* Card 2 */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden">
                <div className="text-slate-500 text-sm font-medium mb-1">Active Forms</div>
                <div className="text-4xl font-bold text-slate-900">3</div>
                <FileSignature className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 text-blue-50 opacity-50" strokeWidth={1.5} />
              </div>
              {/* Card 3 */}
              <div className="bg-red-50 p-5 rounded-2xl border border-red-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden">
                <div className="text-red-400 text-sm font-medium mb-1">Questions Practiced</div>
                <div className="text-4xl font-bold text-red-950">1.2k</div>
                <div className="absolute right-4 bottom-4 text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">+12%</div>
                <HelpCircle className="absolute right-4 top-4 w-12 h-12 text-red-100 opacity-60" strokeWidth={1.5} />
              </div>
              {/* Card 4 */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="text-slate-500 text-sm font-medium mb-1">Accuracy</div>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900 mb-3">88%</div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5">
                    <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
              </div>
              {/* Card 5 */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="text-slate-500 text-sm font-medium mb-1">Study Time</div>
                  <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-blue-500" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900 mt-2">42<span className="text-lg text-slate-500 font-medium">h</span></div>
              </div>
              {/* Card 6 */}
              <div className="bg-red-50 p-5 rounded-2xl border border-red-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="text-red-400 text-sm font-medium mb-1">Daily Streak</div>
                  <div className="flex items-end gap-1 h-6">
                    <div className="w-1.5 h-3 bg-red-300 rounded-full"></div>
                    <div className="w-1.5 h-5 bg-red-400 rounded-full"></div>
                    <div className="w-1.5 h-6 bg-red-500 rounded-full"></div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-red-600 mt-2">15 <span className="text-sm font-medium text-red-400">days</span></div>
              </div>
            </div>
          </section>

          {/* Priority Section */}
          <section>
            <div className="bg-red-50 rounded-[20px] p-7 border border-red-100 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-bold text-red-600 bg-red-100 px-3 py-1 rounded-full">Priority</span>
                <span className="text-xs text-slate-500 flex items-center gap-1.5 font-medium"><CalendarDays className="w-3.5 h-3.5" /> Deadline: Nov 15</span>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10">
                <div className="max-w-md">
                  <h3 className="text-[26px] font-bold text-slate-900 leading-tight mb-2">IBPS Banking<br/>Mastery</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Module 4: Quantitative Aptitude - Data Interpretation. You're almost there, keep pushing!
                  </p>
                  
                  <div className="w-full">
                    <div className="flex justify-between items-center text-xs font-bold mb-2">
                      <span className="text-slate-700">Overall Progress</span>
                      <span className="text-red-600">72%</span>
                    </div>
                    <div className="w-64 bg-red-200 rounded-full h-1.5">
                      <div className="bg-gradient-to-r from-red-500 to-red-600 h-1.5 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                  </div>
                </div>
                
                <button className="flex items-center gap-2 px-6 py-3 bg-red-700 hover:bg-red-800 text-white rounded-xl font-semibold shadow-md transition-colors whitespace-nowrap">
                  Resume Learning <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              
              {/* Background Decoration */}
              <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-red-100 to-transparent opacity-50 pointer-events-none"></div>
            </div>
          </section>

          {/* Your Modules Section */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[18px] font-bold text-slate-800">Your Modules</h2>
              <Link href="#" className="text-sm font-medium text-blue-600 flex items-center gap-1">View All <ChevronRightIcon className="w-4 h-4" /></Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Module 1 */}
              <div className="bg-white p-5 rounded-[18px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-red-50 text-red-500 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md uppercase tracking-wide">Medium</span>
                </div>
                <h4 className="text-[17px] font-bold text-slate-900 mb-1.5">IBPS Preparation</h4>
                <p className="text-sm text-slate-500 mb-6">Complete syllabus coverage for IBPS PO & Clerk exams.</p>
                <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                  <span className="text-xs text-slate-400 font-medium flex items-center gap-1.5"><UserIcon className="w-3.5 h-3.5"/> 12.4k students</span>
                  <button className="text-sm font-bold text-red-600">Continue</button>
                </div>
              </div>
              {/* Module 2 */}
              <div className="bg-white p-5 rounded-[18px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center">
                    <Settings className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-md uppercase tracking-wide">Hard</span>
                </div>
                <h4 className="text-[17px] font-bold text-slate-900 mb-1.5">SSC CGL</h4>
                <p className="text-sm text-slate-500 mb-6">Advanced tier-2 preparation materials and mock series.</p>
                <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                  <span className="text-xs text-slate-400 font-medium flex items-center gap-1.5"><UserIcon className="w-3.5 h-3.5"/> 8.2k students</span>
                  <button className="text-sm font-bold text-red-600">Continue</button>
                </div>
              </div>
              {/* Module 3 */}
              <div className="bg-white p-5 rounded-[18px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
                    <Train className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2.5 py-1 rounded-md uppercase tracking-wide">Easy</span>
                </div>
                <h4 className="text-[17px] font-bold text-slate-900 mb-1.5">Railway Recruitment</h4>
                <p className="text-sm text-slate-500 mb-6">Foundational course for RRB NTPC and Group D.</p>
                <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                  <span className="text-xs text-slate-400 font-medium flex items-center gap-1.5"><UserIcon className="w-3.5 h-3.5"/> 15k+ students</span>
                  <button className="text-sm font-bold text-red-600">Continue</button>
                </div>
              </div>
              {/* Module 4 */}
              <div className="bg-slate-50 p-5 rounded-[18px] border border-slate-100 relative overflow-hidden">
                <div className="opacity-40 filter blur-[1px]">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 bg-slate-200 text-slate-500 rounded-xl flex items-center justify-center">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-200 px-2.5 py-1 rounded-md uppercase tracking-wide">Hard</span>
                  </div>
                  <h4 className="text-[17px] font-bold text-slate-900 mb-1.5">UPSC Prelims</h4>
                  <p className="text-sm text-slate-500 mb-6">Comprehensive tier-1 coverage.</p>
                  <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                    <span className="text-xs text-slate-400 font-medium flex items-center gap-1.5"><UserIcon className="w-3.5 h-3.5"/> 0 students</span>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-600 text-xs font-bold px-4 py-2 rounded-full shadow-sm">Coming Soon</span>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* RIGHT COLUMN (Upcoming, Activity) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Upcoming Exams */}
          <section className="bg-white rounded-[24px] border border-blue-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            <div className="p-6 border-b border-slate-50 flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-blue-500" />
              <h2 className="text-[16px] font-bold text-slate-800">Upcoming Exams</h2>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Event 1 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center justify-center w-12 h-12 bg-red-50 text-red-600 rounded-xl shrink-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider mb-0.5">Nov</span>
                  <span className="text-[18px] font-bold leading-none">20</span>
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-slate-900 mb-1">IBPS Clerk Mains</h4>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Clock className="w-3.5 h-3.5" /> 10:00 AM
                  </div>
                </div>
              </div>
              
              {/* Event 2 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center justify-center w-12 h-12 bg-slate-50 text-slate-600 rounded-xl shrink-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider mb-0.5">Dec</span>
                  <span className="text-[18px] font-bold leading-none">05</span>
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-slate-900 mb-1">SSC CGL Tier 1</h4>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    Test Center A
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t border-slate-50">
              <button className="w-full py-2.5 text-sm font-bold text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">
                View Full Calendar
              </button>
            </div>
          </section>

          {/* Recent Activity */}
          <section className="bg-white rounded-[24px] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            <div className="p-6 pb-2">
              <h2 className="text-[16px] font-bold text-slate-800">Recent Activity</h2>
            </div>
            
            <div className="p-6 pt-4 relative">
              {/* Timeline line */}
              <div className="absolute left-[34px] top-6 bottom-10 w-px bg-slate-100"></div>
              
              {/* Activity 1 */}
              <div className="flex gap-4 mb-6 relative z-10">
                <div className="w-5 h-5 rounded-full bg-green-500 border-4 border-white shadow-sm shrink-0 mt-0.5"></div>
                <div>
                  <h4 className="text-[14px] font-bold text-slate-900">Completed Mock Test 3</h4>
                  <p className="text-[12px] text-slate-500 mt-1 leading-relaxed">
                    Scored 85/100 • 2 hours ago
                  </p>
                </div>
              </div>
              
              {/* Activity 2 */}
              <div className="flex gap-4 mb-6 relative z-10">
                <div className="w-5 h-5 rounded-full bg-orange-400 border-4 border-white shadow-sm shrink-0 mt-0.5"></div>
                <div>
                  <h4 className="text-[14px] font-bold text-slate-900">Achievement Unlocked: Quick Learner</h4>
                  <p className="text-[12px] text-slate-500 mt-1 leading-relaxed">
                    Completed 5 modules in a week • Yesterday
                  </p>
                </div>
              </div>
              
              {/* Activity 3 */}
              <div className="flex gap-4 relative z-10">
                <div className="w-5 h-5 rounded-full bg-slate-500 border-4 border-white shadow-sm shrink-0 mt-0.5"></div>
                <div>
                  <h4 className="text-[14px] font-bold text-slate-900">Started Quantitative Aptitude</h4>
                  <p className="text-[12px] text-slate-500 mt-1 leading-relaxed">
                    Module 4 • 2 days ago
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
      
      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 w-14 h-14 bg-red-700 rounded-full flex items-center justify-center shadow-lg shadow-red-900/20 cursor-pointer hover:bg-red-800 transition-colors z-50 text-white">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="m9 10 2 2 4-4"></path></svg>
      </div>
      
    </div>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );
}
