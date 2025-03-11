export default function Research() {
    return (
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-blue-600">Our Research</h1>
        <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
          GeoD Labs is dedicated to advancing geospatial technology and earth 
          science research. Our work spans areas such as remote sensing, 
          environmental modeling, and spatial data analysis.
        </p>
  
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Example Research Topics */}
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-600">Remote Sensing</h2>
            <p className="text-gray-700 mt-2">Utilizing satellite data to monitor environmental changes.</p>
          </div>
  
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-600">Geospatial Data Science</h2>
            <p className="text-gray-700 mt-2">Analyzing spatial data for meaningful insights.</p>
          </div>
  
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-600">Climate Modeling</h2>
            <p className="text-gray-700 mt-2">Predicting climate patterns through computational models.</p>
          </div>
        </div>
      </section>
    );
  }
  