// importing doctor images
import doctor01 from "./Doctor01.jpg";
import doctor02 from "./Doctor02.jpg";
import doctor03 from "./Doctor03.jpeg"

//importing main images
import logo from"./Logo.png"
import profile from "./Profile.jpeg"
import loginImage from "./LoginImage.png"
import registerImage from "./RegistrationImage.png"

export {logo,profile,loginImage,registerImage}

// doctor details

export const doctorDetails = [
    {
        "_id": "doc_001",
        "fullName": "Dr. Sarah Johnson",
        "title": "Senior Cardiologist",
        "gender": "Female",
        "age": 42,
        "image": doctor01,
        "specialization": "Cardiology",
        "education": [
            "MBBS - Harvard Medical School",
            "MD Cardiology - Johns Hopkins University"
        ],
        "experience": 15,
        "hospital": "Green Valley Medical Center",
        "licenseNumber": "SLMC-100001",
        "languages": ["English", "Spanish"],
        "rating": 4.9,
        "reviews": 324,
        "consultationFee": 50,
        "availability": [
            "Monday",
            "Tuesday",
            "Thursday",
            "Friday"
        ],
        "email": "sarah.johnson@medilink.com",
        "phone": "+94 71 123 4567",
        "bio": "Experienced cardiologist specializing in heart disease prevention and treatment.",
        "verified": true
    },
    {
        "_id": "doc_002",
        "fullName": "Dr. Michael Chen",
        "title": "Consultant Neurologist",
        "gender": "Male",
        "age": 48,
        "image": doctor02,
        "specialization": "Neurology",
        "education": [
            "MBBS - University of Melbourne",
            "MD Neurology - Stanford University"
        ],
        "experience": 20,
        "hospital": "Neuro Care Institute",
        "licenseNumber": "SLMC-100002",
        "languages": ["English", "Mandarin"],
        "rating": 4.8,
        "reviews": 281,
        "consultationFee": 60,
        "availability": [
            "Monday",
            "Wednesday",
            "Friday"
        ],
        "email": "michael.chen@medilink.com",
        "phone": "+94 71 234 5678",
        "bio": "Specialist in brain disorders, stroke management, and neurological rehabilitation.",
        "verified": true
    },
    {
        "_id": "doc_003",
        "fullName": "Dr. Emily Rodriguez",
        "title": "Pediatric Specialist",
        "gender": "Female",
        "age": 37,
        "image": doctor03,
        "specialization": "Pediatrics",
        "education": [
            "MBBS - University of Toronto",
            "MD Pediatrics - University of California"
        ],
        "experience": 11,
        "hospital": "Children's Health Center",
        "licenseNumber": "SLMC-100003",
        "languages": ["English", "Spanish"],
        "rating": 4.9,
        "reviews": 412,
        "consultationFee": 40,
        "availability": [
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Saturday"
        ],
        "email": "emily.rodriguez@medilink.com",
        "phone": "+94 71 345 6789",
        "bio": "Dedicated pediatrician providing comprehensive healthcare for infants and children.",
        "verified": true
    },

]