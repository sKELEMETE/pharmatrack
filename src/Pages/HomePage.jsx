import { useState, useMemo } from "react";
import NavBar from "../Components/NavBar";
import SideNav from "../Components/SideNav";
import Ad from "../Components/Ad";
import Footer from "../Components/Footer";
import "./HomePage.css";

const categories = [
  {
    name: "Pain Relievers",
    price: "₱30-60",
    description: "Medications to reduce pain, like acetaminophen and NSAIDs.",
  },
  {
    name: "Antibiotics",
    price: "₱20-30",
    description: "Used to fight bacterial infections.",
  },
  {
    name: "Allergy",
    price: "₱5-50",
    description: "Drugs for allergy relief like antihistamines.",
  },
  {
    name: "Diarrhea",
    price: "₱20-100",
    description: "Medicines to treat diarrhea and related symptoms.",
  },
  {
    name: "Diabetes",
    price: "₱10-50",
    description: "Includes insulin and other glucose control meds.",
  },
  {
    name: "Vitamins",
    price: "₱50-100",
    description: "Supplements to support overall health.",
  },
];

const brands = [
  {
    name: "Biogesic",
    price: "₱25",
    description: "Popular pain reliever brand.",
  },
  { name: "Bioflu", price: "₱40", description: "Cold and flu remedy." },
  {
    name: "Neozep",
    price: "₱35",
    description: "Decongestant and antihistamine.",
  },
  { name: "Decolgen", price: "₱30", description: "Cold and cough relief." },
  { name: "Solmux", price: "₱45", description: "Cough syrup brand." },
  { name: "Dolfenal", price: "₱50", description: "Pain relief medication." },
];

const generics = [
  {
    name: "Paracetamol",
    price: "₱20",
    description: "Fever reducer and pain relief.",
  },
  { name: "Ibuprofen", price: "₱25", description: "Anti-inflammatory drug." },
  {
    name: "Amoxicillin",
    price: "₱30",
    description: "Antibiotic for infections.",
  },
  { name: "Cetirizine", price: "₱15", description: "Allergy relief." },
  { name: "Loperamide", price: "₱20", description: "Diarrhea control." },
  { name: "Metformin", price: "₱40", description: "Diabetes medication." },
];

const products = [
  {
    name: "Paracetamol 500mg Tablet",
    price: "₱20",
    description: "Pain reliever and fever reducer.",
  },
  {
    name: "Ibuprofen 200mg Capsule",
    price: "₱25",
    description: "Anti-inflammatory.",
  },
  {
    name: "Amoxicillin 250mg Capsule",
    price: "₱30",
    description: "Antibiotic.",
  },
  {
    name: "Cetirizine 10mg Tablet",
    price: "₱15",
    description: "Allergy medication.",
  },
  {
    name: "Loperamide 2mg Capsule",
    price: "₱20",
    description: "Treats diarrhea.",
  },
  {
    name: "Metformin 500mg Tablet",
    price: "₱40",
    description: "For diabetes.",
  },
  {
    name: "Aspirin 81mg Tablet",
    price: "₱22",
    description: "Blood thinner and pain reliever.",
  },
  {
    name: "Clarithromycin 500mg Tablet",
    price: "₱55",
    description: "Antibiotic.",
  },
  {
    name: "Diclofenac 50mg Tablet",
    price: "₱35",
    description: "Pain and inflammation.",
  },
  {
    name: "Ranitidine 150mg Tablet",
    price: "₱28",
    description: "Acid reducer.",
  },
  {
    name: "Omeprazole 20mg Capsule",
    price: "₱30",
    description: "Acid reflux treatment.",
  },
  {
    name: "Simvastatin 10mg Tablet",
    price: "₱45",
    description: "Cholesterol control.",
  },
  {
    name: "Losartan 50mg Tablet",
    price: "₱50",
    description: "Blood pressure control.",
  },
  {
    name: "Fluoxetine 20mg Capsule",
    price: "₱60",
    description: "Antidepressant.",
  },
  {
    name: "Azithromycin 250mg Tablet",
    price: "₱70",
    description: "Antibiotic.",
  },
  {
    name: "Hydrochlorothiazide 25mg Tablet",
    price: "₱40",
    description: "Diuretic.",
  },
  {
    name: "Atenolol 50mg Tablet",
    price: "₱55",
    description: "Blood pressure control.",
  },
  { name: "Warfarin 5mg Tablet", price: "₱65", description: "Blood thinner." },
];

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const allItems = useMemo(
    () => [
      ...categories.map((item) => ({ ...item, type: "Category" })),
      ...brands.map((item) => ({ ...item, type: "Brand" })),
      ...generics.map((item) => ({ ...item, type: "Generic" })),
      ...products.map((item) => ({ ...item, type: "Product" })),
    ],
    []
  );

  const filteredItems = useMemo(() => {
    if (!searchTerm) return allItems;
    const lowerSearch = searchTerm.toLowerCase();
    return allItems.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerSearch) ||
        item.description.toLowerCase().includes(lowerSearch) ||
        item.type.toLowerCase().includes(lowerSearch)
    );
  }, [searchTerm, allItems]);

  const colorClassMap = {
    Category: "primary",
    Brand: "success",
    Generic: "warning",
    Product: "danger",
  };

  return (
    <>
      <Ad />
      <div style={{ display: "flex", height: "100vh" }}>
        <SideNav />
        <div
          style={{
            flexGrow: 1,
            padding: "1rem 0 0 9.5rem",
            overflowY: "scroll",
          }}
        >
          <h1
            className="d-flex align-items-center justify-content-center"
            style={{
              width: "100%",
              height: "20vh",
              color: "#0d6efd",
            }}
          >
            PharmaTrack
          </h1>
          <div
            style={{
              marginLeft: "auto",
              marginRight: "3rem",
              marginTop: "1rem",
              width: "25%",
            }}
          >
            <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>

          {["Category", "Brand", "Generic", "Product"].map((type) => {
            const itemsByType = filteredItems.filter(
              (item) => item.type === type
            );
            if (itemsByType.length === 0) return null;

            return (
              <div key={type} className="container mt-4">
                <h4 className="mb-3 ms-1">{type}</h4>
                <div className="row">
                  {itemsByType.map(({ name, price, description }, idx) => (
                    <div
                      key={idx}
                      className="col-md-4 mb-3 d-flex justify-content-center"
                    >
                      <div
                        className={`category-card border border-${colorClassMap[type]} rounded p-3`}
                      >
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className={`mb-1 text-${colorClassMap[type]}`}>
                            {name}
                          </h5>
                          <span
                            className={`price fw-bold text-${colorClassMap[type]}`}
                          >
                            {price}
                          </span>
                        </div>
                        <div className="description mt-2 mb-0">
                          <p>{description}</p>
                          <p>
                            <strong>Uses:</strong> Relief from symptoms or
                            treatment
                          </p>
                          <p>
                            <strong>Expiry Date:</strong> 12/2026
                          </p>
                          <p>
                            <strong>Caution:</strong> Keep out of reach of
                            children
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HomePage;
