import { API } from '../../backend/index.js';

export const roles = [
    'IT System Administrator', 'Sales', 'Data Scientist', 'Data Engineer', 'ML Engineer', 'Back End Developer', 'Product Manager', 'HR', 'Full Stack Developer', 'Front End Developer', 'Business Operstions', 'Finance', 'Product Designer', 'Legal', 'Devops Engineer', 'Marketing', 'Systems Engineer', 'Consulting', 'IOS Engineer', 'Android Engineer', 'Supply Chain Management', 'Network Engineer', 'Content Strategist', 'Security Engineer', 'Recruiting', 'Accounting', 'Hardware Engineer', 'Graphic Designer', 'Logistics Coordinator', 'Copywriting', 'Not Sure Yet' 
];

export async function getRoles() {
    const promise = await fetch(`${API}/api/roles`)
    const role = await promise.json();
    return role.data;
    // .then(res => res.json())
    // .then(resp => {
    //     return resp;
    // })
    // .catch(err => {
    //     return err;
    // })
}

export const experience = [
    'Business', 'Sales', 'Marketing', 'Networking', 'Systems', 'Backend', 'Security', 'Frontend', 'Data Science', 'Testing', 'Product Management', 'Finance', 'Hardware', 'UI/UX Design', 'Full Stack', 'Mobile', 'Product Design', 'Machine Learning', 'Accounting', 'Trading', 'Art', 'Legal', 'Biotech'
];

export const skills = [
    'Angular.js', 'Apache Spark', 'C', 'C++', 'C#', 'Hadoop', 'Java', 'Javascript', 'Matlab', 'HTML/CSS', 'PHP', 'Node.js', 'Objective-C', 'R', 'Ruby', 'React.js', 'React Native', 'Python', 'Scala', 'SQL', 'OCaml', 'Swift', 'Linux/Unix', 'Verilog', 'Django', 'Go', 'Vue.js', 'Assembly', 'Tensorflow', 'Pytorch', 'AWS', 'Adobe Suite', 'Sketch', 'Android', 'IOS', 'Figma', 'JIRA', 'Waterfall', 'Scrum', 'Agile', 'After Effects', 'Illustrator', 'Photoshop', 'MongoDB', 'TCP/IP', 'Excel', 'Public Speaking', 'Powerpoint', 'Tableau', 'Communication', 'Presentation', 'Leadership', 'Organization', 'PowerBi', 'Google Analytics', 'Research', 'Casing', 'Negotiation', 'Branding', 'Content', 'Market Insights', 'SEO', 'Socila Media', 'Analysis', 'Writing', 'Salesforce', 'Modelling', 'Cold Calling', 'Prospecting', 'Lead Generation', 'CPA', 'Sales Forecasting', 'Risk Management', 'Attention to Detail', 'Quick Books', 'Abstract', 'Adobe XD', 'Zeplin', 'Principle', 'Invision', 'Entrepreneurship', 'Kotlin', 'Product Thinking', 'Itneraction Design', 'Visual Design', 'User research', '3D Animation', '2D Animation', '3D Character Art', 'Technical Art', 'Motion Graphics', 'Character Concept Art', 'Environment Concept Art', '3D Environment Art', '2D Environment Art/Matte Painting', 'User Experience Design', 'UI Illustration', 'World Building Concept Art', 'Weapon Art', '3D Prop Art', 'Storyboard Art', 'Narrative', 'Docker', 'Kubernetes', 'Animation Art', 'Character Rigging', '(Real-Time) VFX', 'Illustration', 'Concept Art', 'Game Design', 'Visual Development Art', 'Maya', 'Blender', 'Biochemistry', 'Bio Informatics', 'Biology', 'Biomedical Engineering', 'Business', 'Chemical Engineering'
];

export const location = [
    'Totally Open', 'Remote', 'Atlanta, GA', 'Austin, TX', 'Boston, MA', 'Chicago, IL', 'Denver, CO', 'Los Angeles, CA', 'Nashville, TN', 'New York, NY', 'Raleigh, NC', 'San Diego, CA', 'San Francisco, CA', 'Seattle, WA', 'Wilmington, DE', 'Houston, TX', 'Dallas, TX', 'Detroit MI'
]

export const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

export const yearsfunc = () => {
    let currentYear = new Date().getFullYear();
    let years = [];
    let startYear = 1995;  
    while ( startYear <= currentYear ) {
        years.push(startYear++);
    }   
    return years;
}