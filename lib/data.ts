export type ExamStatus = 'Available' | 'Coming Soon';

export interface Exam {
  id: string;
  name: string;
  category: string;
  description: string;
  status: ExamStatus;
}

export const categories = [
  'All',
  'Available',
  'Coming Soon',
  'Banking',
  'SSC',
  'Railways',
  'UPSC',
  'Defence',
  'Insurance',
  'Engineering',
  'Medical',
  'Management',
  'Law',
  'Teaching',
  'State Exams',
];

export const examsData: Exam[] = [
  { id: 'ibps-po', name: 'IBPS', category: 'Banking', description: 'Practice replica for IBPS PO, Clerk and RRB examinations.', status: 'Available' },
  
  { id: 'ssc-cgl', name: 'SSC CGL', category: 'SSC', description: 'Combined Graduate Level Examination mock form.', status: 'Coming Soon' },
  { id: 'ssc-chsl', name: 'SSC CHSL', category: 'SSC', description: 'Combined Higher Secondary Level Examination.', status: 'Coming Soon' },
  { id: 'ssc-mts', name: 'SSC MTS', category: 'SSC', description: 'Multi Tasking Staff non-technical recruitment.', status: 'Coming Soon' },
  { id: 'ssc-gd', name: 'SSC GD', category: 'SSC', description: 'Constable General Duty in CAPFs, NIA, SSF.', status: 'Coming Soon' },
  { id: 'ssc-cpo', name: 'SSC CPO', category: 'SSC', description: 'Central Police Organization for SI posts.', status: 'Coming Soon' },
  
  { id: 'upsc-cse', name: 'UPSC Civil Services', category: 'UPSC', description: 'Civil Services Examination for IAS, IPS, etc.', status: 'Coming Soon' },
  { id: 'upsc-cds', name: 'UPSC CDS', category: 'UPSC', description: 'Combined Defence Services Examination.', status: 'Coming Soon' },
  { id: 'upsc-nda', name: 'UPSC NDA', category: 'UPSC', description: 'National Defence Academy & Naval Academy.', status: 'Coming Soon' },
  { id: 'upsc-capf', name: 'UPSC CAPF', category: 'UPSC', description: 'Central Armed Police Forces (Assistant Commandant).', status: 'Coming Soon' },
  
  { id: 'rrb-ntpc', name: 'Railway RRB NTPC', category: 'Railways', description: 'Non-Technical Popular Categories.', status: 'Coming Soon' },
  { id: 'rrb-groupd', name: 'Railway Group D', category: 'Railways', description: 'Track maintainer, helper, and other level 1 posts.', status: 'Coming Soon' },
  { id: 'rrb-alp', name: 'Railway ALP', category: 'Railways', description: 'Assistant Loco Pilot & Technicians.', status: 'Coming Soon' },
  { id: 'rrb-je', name: 'Railway JE', category: 'Railways', description: 'Junior Engineer recruitment across zones.', status: 'Coming Soon' },
  
  { id: 'ibps-clerk', name: 'IBPS Clerk', category: 'Banking', description: 'Clerical cadre recruitment in participating banks.', status: 'Coming Soon' },
  { id: 'ibps-rrb-po', name: 'IBPS RRB PO', category: 'Banking', description: 'Officer Scale I in Regional Rural Banks.', status: 'Coming Soon' },
  { id: 'ibps-rrb-clerk', name: 'IBPS RRB Clerk', category: 'Banking', description: 'Office Assistant in Regional Rural Banks.', status: 'Coming Soon' },
  { id: 'sbi-po', name: 'SBI PO', category: 'Banking', description: 'Probationary Officers in State Bank of India.', status: 'Coming Soon' },
  { id: 'sbi-clerk', name: 'SBI Clerk', category: 'Banking', description: 'Junior Associates in State Bank of India.', status: 'Coming Soon' },
  { id: 'rbi-gradeb', name: 'RBI Grade B', category: 'Banking', description: 'Officers in Grade B (General) - DR.', status: 'Coming Soon' },
  
  { id: 'lic-aao', name: 'LIC AAO', category: 'Insurance', description: 'Assistant Administrative Officer in LIC.', status: 'Coming Soon' },
  { id: 'lic-ado', name: 'LIC ADO', category: 'Insurance', description: 'Apprentice Development Officer in LIC.', status: 'Coming Soon' },
  
  { id: 'epfo', name: 'EPFO EO/AO', category: 'UPSC', description: 'Enforcement Officer/Accounts Officer.', status: 'Coming Soon' },
  { id: 'esic', name: 'ESIC UDC', category: 'State Exams', description: 'Upper Division Clerk in ESIC.', status: 'Coming Soon' },
  { id: 'fci', name: 'FCI', category: 'State Exams', description: 'Food Corporation of India recruitment.', status: 'Coming Soon' },
  { id: 'nabard-a', name: 'NABARD Grade A', category: 'Banking', description: 'Assistant Manager in Grade A.', status: 'Coming Soon' },
  { id: 'nabard-b', name: 'NABARD Grade B', category: 'Banking', description: 'Manager in Grade B.', status: 'Coming Soon' },
  
  { id: 'delhi-police', name: 'Delhi Police', category: 'Defence', description: 'Constable/Head Constable in Delhi Police.', status: 'Coming Soon' },
  { id: 'crpf', name: 'CRPF', category: 'Defence', description: 'Central Reserve Police Force recruitment.', status: 'Coming Soon' },
  { id: 'bsf', name: 'BSF', category: 'Defence', description: 'Border Security Force recruitment.', status: 'Coming Soon' },
  { id: 'cisf', name: 'CISF', category: 'Defence', description: 'Central Industrial Security Force recruitment.', status: 'Coming Soon' },
  { id: 'itbp', name: 'ITBP', category: 'Defence', description: 'Indo-Tibetan Border Police recruitment.', status: 'Coming Soon' },
  { id: 'ssb', name: 'SSB', category: 'Defence', description: 'Sashastra Seema Bal recruitment.', status: 'Coming Soon' },
  { id: 'afcat', name: 'AFCAT', category: 'Defence', description: 'Air Force Common Admission Test.', status: 'Coming Soon' },
  { id: 'coast-guard', name: 'Indian Coast Guard', category: 'Defence', description: 'Navik & Yantrik recruitment.', status: 'Coming Soon' },
  
  { id: 'neet', name: 'NEET UG', category: 'Medical', description: 'National Eligibility cum Entrance Test.', status: 'Coming Soon' },
  
  { id: 'jee-main', name: 'JEE Main', category: 'Engineering', description: 'Joint Entrance Examination Main.', status: 'Coming Soon' },
  { id: 'jee-adv', name: 'JEE Advanced', category: 'Engineering', description: 'Joint Entrance Examination Advanced.', status: 'Coming Soon' },
  { id: 'gate', name: 'GATE', category: 'Engineering', description: 'Graduate Aptitude Test in Engineering.', status: 'Coming Soon' },
  
  { id: 'cuet-ug', name: 'CUET UG', category: 'State Exams', description: 'Common University Entrance Test UG.', status: 'Coming Soon' },
  { id: 'cuet-pg', name: 'CUET PG', category: 'State Exams', description: 'Common University Entrance Test PG.', status: 'Coming Soon' },
  
  { id: 'cat', name: 'CAT', category: 'Management', description: 'Common Admission Test for IIMs.', status: 'Coming Soon' },
  { id: 'xat', name: 'XAT', category: 'Management', description: 'Xavier Aptitude Test.', status: 'Coming Soon' },
  { id: 'mat', name: 'MAT', category: 'Management', description: 'Management Aptitude Test.', status: 'Coming Soon' },
  { id: 'cmat', name: 'CMAT', category: 'Management', description: 'Common Management Admission Test.', status: 'Coming Soon' },
  
  { id: 'clat', name: 'CLAT', category: 'Law', description: 'Common Law Admission Test.', status: 'Coming Soon' },
  { id: 'ailet', name: 'AILET', category: 'Law', description: 'All India Law Entrance Test.', status: 'Coming Soon' },
  
  { id: 'nift', name: 'NIFT', category: 'State Exams', description: 'National Institute of Fashion Technology.', status: 'Coming Soon' },
  { id: 'nid', name: 'NID DAT', category: 'State Exams', description: 'National Institute of Design Design Aptitude Test.', status: 'Coming Soon' },
  
  { id: 'ugc-net', name: 'UGC NET', category: 'Teaching', description: 'University Grants Commission National Eligibility Test.', status: 'Coming Soon' },
  { id: 'csir-net', name: 'CSIR NET', category: 'Teaching', description: 'Council of Scientific & Industrial Research NET.', status: 'Coming Soon' },
  
  { id: 'ca-found', name: 'CA Foundation', category: 'State Exams', description: 'Chartered Accountancy Foundation.', status: 'Coming Soon' },
  { id: 'ca-inter', name: 'CA Intermediate', category: 'State Exams', description: 'Chartered Accountancy Intermediate.', status: 'Coming Soon' },
  { id: 'cs-exec', name: 'CS Executive', category: 'State Exams', description: 'Company Secretary Executive.', status: 'Coming Soon' },
  { id: 'cma-found', name: 'CMA Foundation', category: 'State Exams', description: 'Cost and Management Accountancy Foundation.', status: 'Coming Soon' },
  
  { id: 'state-psc', name: 'State PSC', category: 'State Exams', description: 'State Public Service Commission exams.', status: 'Coming Soon' },
  { id: 'state-police', name: 'State Police Exams', category: 'State Exams', description: 'Various state police recruitment exams.', status: 'Coming Soon' },
  { id: 'tet', name: 'State Teacher Eligibility Tests', category: 'Teaching', description: 'TET exams for various states.', status: 'Coming Soon' },
  { id: 'judiciary', name: 'State Judiciary Exams', category: 'Law', description: 'Judicial services examinations.', status: 'Coming Soon' },
];
