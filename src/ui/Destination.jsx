import React, { useEffect, useRef, useState } from "react";

const TextCloud = ({ texts = [] }) => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [mouseX0, setMouseX0] = useState(0);
  const [mouseY0, setMouseY0] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);

  const isMobile = window.innerWidth < 768; // Check if the screen width is mobile size
  const radius = isMobile ? 100 : 180; // Smaller radius for mobile
  const size = 2.5 * radius; // Keep the size proportional
  const maxSpeedVal = isMobile ? 0.2 : 0.3; // Slower speed to decrease the speed of animation
  const initSpeedVal = 1; // Initial speed remains the same
  const direction = 135;

  useEffect(() => {
    setMouseX0(initSpeedVal * Math.sin(direction * (Math.PI / 180)));
    setMouseY0(-initSpeedVal * Math.cos(direction * (Math.PI / 180)));
    setMouseX(initSpeedVal * Math.sin(direction * (Math.PI / 180)));
    setMouseY(-initSpeedVal * Math.cos(direction * (Math.PI / 180)));
  }, []);

  const computePosition = (index, random = false) => {
    const total = texts.length;
    if (random) {
      index = Math.floor(Math.random() * (total + 1));
    }
    const phi = Math.acos((2 * index + 1) / total - 1);
    const theta = Math.sqrt((total + 1) * Math.PI) * phi;

    return {
      x: (size * Math.cos(theta) * Math.sin(phi)) / 2,
      y: (size * Math.sin(theta) * Math.sin(phi)) / 2,
      z: (size * Math.cos(phi)) / 2,
      scale: 0.8, // Smaller text scale
    };
  };

  useEffect(() => {
    const newItems = texts.map((text, index) => ({
      text,
      ...computePosition(index),
    }));
    setItems(newItems);
    itemsRef.current = newItems;
  }, [texts]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      setMouseX((e.clientX - (rect.left + rect.width / 2)) / 5);
      setMouseY((e.clientY - (rect.top + rect.height / 2)) / 5);

      // Check if mouse is within the radius of the sphere
      const distanceFromCenter = Math.sqrt(
        Math.pow(mouseX, 2) + Math.pow(mouseY, 2)
      );
      if (distanceFromCenter <= radius) {
        setActive(false); // Stop the motion if mouse is inside the sphere area
      } else {
        setActive(true); // Resume motion when mouse is outside
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const animate = () => {
      if (!active) {
        setMouseX((prev) => {
          const diff = Math.abs(prev - mouseX0);
          return diff < 1 ? mouseX0 : (prev + mouseX0) / 2;
        });
        setMouseY((prev) => {
          const diff = Math.abs(prev - mouseY0);
          return diff < 1 ? mouseY0 : (prev + mouseY0) / 2;
        });
      }

      // Limit the maximum speed to ensure it doesn't increase.
      const maxSpeed = maxSpeedVal;
      const a = -(Math.min(Math.max(-mouseY, -size), size) / radius) * maxSpeed;
      const b = (Math.min(Math.max(-mouseX, -size), size) / radius) * maxSpeed;

      // Ensure the motion speed remains consistent.
      if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) return;

      const l = Math.PI / 180;
      const sc = [
        Math.sin(a * l),
        Math.cos(a * l),
        Math.sin(b * l),
        Math.cos(b * l),
      ];

      setItems((prev) =>
        prev.map((item) => {
          const rx1 = item.x;
          const ry1 = item.y * sc[1] + item.z * -sc[0];
          const rz1 = item.y * sc[0] + item.z * sc[1];
          const rx2 = rx1 * sc[3] + rz1 * sc[2];
          const ry2 = ry1;
          const rz2 = rz1 * sc[3] - rx1 * sc[2];
          const scale = (2 * radius) / (2 * radius + rz2);

          return {
            ...item,
            x: rx2,
            y: ry2,
            z: rz2,
            scale,
          };
        })
      );
    };

    const animationFrame = requestAnimationFrame(function loop() {
      animate();
      requestAnimationFrame(loop);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [mouseX, mouseY, mouseX0, mouseY0, active]);

  const countries = [
    "USA",
    "Canada",
    "Brazil",
    "India",
    "Australia",
    "Japan",
    "Germany",
    "South Korea",
    "China",
    "France",
  ];

  return (
    <div
      ref={containerRef}
      className="absolute w-full h-full top-0 left-0 flex justify-center items-center"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {items.map((item, index) => {
        const opacity = Math.max(0, item.scale * item.scale - 0.25).toFixed(3);
        const showFullForm = hoveredItem === index;
        const randomCountry =
          countries[Math.floor(Math.random() * countries.length)];

        return (
          <span
            key={index}
            className="absolute text-sm font-bold text-white cursor-pointer" // Smaller font size
            style={{
              zIndex: index + 1,
              opacity,
              transform: `translate3d(${(item.x - 0).toFixed(2)}px, ${(
                item.y - 0
              ).toFixed(2)}px, 0) scale(${item.scale})`,
              transformOrigin: "50% 50%",
            }}
            onMouseEnter={() => {
              setHoveredItem(index);
              setHoveredCountry(randomCountry); // Set the country when hovered
            }}
            onMouseLeave={() => {
              setHoveredItem(null);
              setHoveredCountry(null); // Reset on mouse leave
            }}
          >
            {showFullForm ? hoveredCountry : item.text}{" "}
            {/* Show the country only when hovered */}
          </span>
        );
      })}
    </div>
  );
};

const Destination = () => {
  const texts = Array(15).fill("M"); // Use "M" instead of "N"

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between p-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-4xl w-full">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4  md:mt-10 mt-6">
            Popular Destinations
          </h1>
        </div>

        {/* Text Cloud Section */}
        <div className="rounded-xl p-8  mt-[18rem]">
          <div className="flex flex-col items-center justify-center">
            <div className="relative md:w-full w-3/4 md:h-full h-3/4">
              <TextCloud texts={texts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
