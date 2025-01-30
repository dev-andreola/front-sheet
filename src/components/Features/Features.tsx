import FeatureCard from "./components/FeatureCard";

import features from "./features.json";

export default function Features() {
  return (
    <div className="px-3 py-8 space-y-6">
      {features.map((feature) => (
        <FeatureCard key={feature.title} feature={feature} />
      ))}
    </div>
  );
}
