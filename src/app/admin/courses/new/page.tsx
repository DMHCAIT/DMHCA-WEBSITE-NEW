import CourseForm from '../CourseForm';

export const metadata = { title: 'New course – DMHCA Admin' };

export default function NewCoursePage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-semibold text-slate-900 mb-6">New course</h1>
      <CourseForm mode="create" />
    </div>
  );
}
