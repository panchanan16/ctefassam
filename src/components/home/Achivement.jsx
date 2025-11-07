import { Users, BookOpen, Award } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Members'
    },
    {
      icon: BookOpen,
      value: '20+',
      label: 'Years Experience'
    },
    {
      icon: Award,
      value: '25+',
      label: 'Districts Covered'
    }
  ];

  return (
    <div className="w-full bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-8 rounded-3xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6">
                  <Icon className="w-14 h-14 text-gray-800" strokeWidth={1.5} />
                </div>

                {/* Value */}
                <h3 className="text-5xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="text-gray-600 text-lg">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;