import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Home, Building2, MapPin, Tag, Star } from 'lucide-react';
import { projects, testimonials, Project } from '@/data/siteData';

interface SearchResult {
  type: 'project' | 'testimonial';
  id: string;
  title: string;
  description: string;
  link: string;
  image?: string;
  tags?: string[];
  location?: string;
  status?: string;
  statusColor?: string;
}

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) {
      setResults([]);
      setLoading(false);
      return;
    }

    // Simulate search delay for better UX
    setLoading(true);
    const timer = setTimeout(() => {
      const searchResults = performSearch(query);
      setResults(searchResults);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const performSearch = (searchQuery: string): SearchResult[] => {
    const lowerQuery = searchQuery.toLowerCase();
    const results: SearchResult[] = [];

    // Search in projects
    projects.forEach((project: Project) => {
      const searchableText = `
        ${project.name} 
        ${project.location} 
        ${project.road} 
        ${project.type} 
        ${project.status} 
        ${project.description}
        ${project.amenities.join(' ')}
      `.toLowerCase();

      if (searchableText.includes(lowerQuery)) {
        results.push({
          type: 'project',
          id: project.id,
          title: project.name,
          description: project.description,
          link: `/projects/${project.slug}`,
          image: project.image,
          tags: [project.type, project.status, ...project.amenities.slice(0, 3)],
          location: project.location,
          status: project.status,
          statusColor: project.statusColor,
        });
      }
    });

    // Search in testimonials
    testimonials.forEach((testimonial) => {
      const searchableText = `
        ${testimonial.name}
        ${testimonial.location}
        ${testimonial.quote}
      `.toLowerCase();

      if (searchableText.includes(lowerQuery)) {
        results.push({
          type: 'testimonial',
          id: testimonial.id.toString(),
          title: `${testimonial.name} - ${testimonial.location}`,
          description: testimonial.quote,
          link: '/testimonials',
          image: testimonial.image,
          tags: ['Customer Review', testimonial.location],
        });
      }
    });

    return results;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-saffron-50/30 to-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-saffron-500 to-temple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Search className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                Search Results
              </h1>
              {query && (
                <p className="text-gray-600 mt-1">
                  Showing results for: <span className="font-semibold text-saffron-600">"{query}"</span>
                </p>
              )}
            </div>
          </div>

          {!loading && (
            <p className="text-gray-500">
              Found <span className="font-semibold text-gray-900">{results.length}</span> result{results.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 border-4 border-saffron-200 border-t-saffron-600 rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600">Searching...</p>
          </div>
        )}

        {/* No Query */}
        {!loading && !query && (
          <div className="text-center py-20">
            <Search className="w-20 h-20 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">
              Start Your Search
            </h2>
            <p className="text-gray-600 mb-8">
              Enter a search term to find projects, testimonials, and more
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-saffron-500 to-temple-600 text-white rounded-lg hover:shadow-lg transition-shadow"
            >
              <Home className="w-4 h-4" />
              Go to Home
            </Link>
          </div>
        )}

        {/* No Results */}
        {!loading && query && results.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">
              No Results Found
            </h2>
            <p className="text-gray-600 mb-8">
              We couldn't find anything matching "<span className="font-semibold">{query}</span>"
              <br />
              Try different keywords or browse our projects
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-saffron-500 to-temple-600 text-white rounded-lg hover:shadow-lg transition-shadow"
              >
                <Building2 className="w-4 h-4" />
                View All Projects
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-lg border-2 border-gray-200 hover:border-saffron-500 hover:text-saffron-600 transition-all"
              >
                <Home className="w-4 h-4" />
                Go to Home
              </Link>
            </div>
          </div>
        )}

        {/* Results */}
        {!loading && results.length > 0 && (
          <div className="space-y-6">
            {results.map((result) => (
              <Link
                key={`${result.type}-${result.id}`}
                to={result.link}
                className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-saffron-200"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  {result.image && (
                    <div className="md:w-64 h-48 md:h-auto overflow-hidden flex-shrink-0">
                      <img
                        src={result.image}
                        alt={result.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="flex-1">
                        {/* Type Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-3 bg-saffron-100 text-saffron-700">
                          {result.type === 'project' ? (
                            <>
                              <Building2 className="w-3 h-3" />
                              Project
                            </>
                          ) : (
                            <>
                              <Star className="w-3 h-3" />
                              Testimonial
                            </>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-2 group-hover:text-saffron-600 transition-colors">
                          {result.title}
                        </h3>

                        {/* Location & Status */}
                        {result.location && (
                          <div className="flex flex-wrap items-center gap-4 mb-3">
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <MapPin className="w-4 h-4" />
                              <span className="line-clamp-1">{result.location}</span>
                            </div>
                            {result.status && (
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${result.statusColor}`}>
                                {result.status}
                              </span>
                            )}
                          </div>
                        )}

                        {/* Description */}
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {result.description}
                        </p>

                        {/* Tags */}
                        {result.tags && result.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {result.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                              >
                                <Tag className="w-3 h-3" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* View More Link */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="text-saffron-600 font-medium text-sm group-hover:underline">
                        View Details →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Suggestions */}
        {!loading && results.length > 0 && (
          <div className="mt-12 p-6 bg-gradient-to-r from-saffron-50 to-temple-50 rounded-xl border border-saffron-100">
            <h3 className="text-lg font-heading font-bold text-gray-900 mb-3">
              Popular Searches
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Residential', 'Commercial', 'Vrindavan', 'Completed', 'Running', 'Temple', 'Gated Entry'].map((term) => (
                <Link
                  key={term}
                  to={`/search?q=${encodeURIComponent(term)}`}
                  className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-200 hover:border-saffron-500 hover:text-saffron-600 transition-all text-sm font-medium"
                >
                  {term}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
