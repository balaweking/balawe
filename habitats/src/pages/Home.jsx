import React from "react";
import { Header } from "../components/Header";
import { PropertyCard } from "../components/PropertyCard";

export const Home = () => (
  <div>
    <Header />
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Trouvez votre prochain logement
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Des studios aux villas de luxe, partout dans le monde
        </p>
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
          {/* Recherche avec lieu, dates, voyageurs */}
          <form className="space-y-4">
            <input type="text" placeholder="Où voulez-vous aller ?" className="w-full px-4 py-2 border rounded-md" />
            <div className="grid grid-cols-2 gap-4">
              <input type="date" className="px-4 py-2 border rounded-md" />
              <input type="date" className="px-4 py-2 border rounded-md" />
            </div>
            <select className="w-full px-4 py-2 border rounded-md">
              <option>1 voyageur</option>
              <option>2 voyageurs</option>
              <option>3 voyageurs</option>
            </select>
            <button type="submit" className="bg-primary text-white w-full px-6 py-2 rounded-md hover:bg-pink-600">
              Rechercher
            </button>
          </form>
        </div>
      </section>

      {/* Destinations Populaires */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Destinations populaires</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <PropertyCard key={i} isFeatured />
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);