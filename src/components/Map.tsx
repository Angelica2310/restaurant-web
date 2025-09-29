import React from "react";

// https://dash.elfsight.com/apps/google-reviews

export default function Map() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 w-full -z-10">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          title="map"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2359.225100455157!2d-0.3961967232084937!3d53.749874772409136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4878bfa8246adea3%3A0xb6e323f914fa75b7!2zUGjhu58gTGFu!5e0!3m2!1sen!2suk!4v1739887767357!5m2!1sen!2suk"
        ></iframe>
      </div>
    </div>
  );
}
