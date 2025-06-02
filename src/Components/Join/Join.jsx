import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Join = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        gender: '',
        phone: '',
        email: '',
        division: '',
        district: '',
        education: '',
        motivation: '',
        experience: 'No',
        experienceDetails: '',
        availability: '',
        facebook: '',
        photo: null
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName) newErrors.fullName = 'Full name is required';
        if (!formData.age) newErrors.age = 'Age is required';
        else if (formData.age < 16 || formData.age > 25) newErrors.age = 'Age must be between 16-25';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
        if (!formData.division) newErrors.division = 'Division is required';
        if (!formData.education) newErrors.education = 'Education is required';
        if (!formData.motivation) newErrors.motivation = 'Motivation is required';
        if (!formData.experience) newErrors.experience = 'Experience is required';
        if (formData.experience === 'Yes' && !formData.experienceDetails) newErrors.experienceDetails = 'Experience details required';
        if (!formData.availability) newErrors.availability = 'Availability is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form before submission
        if (!validateForm()) {
            await Swal.fire({
                title: 'Validation Error',
                text: 'Please fill all required fields correctly',
                icon: 'error',
                confirmButtonColor: '#339634'
            });
            return;
        }

        setIsSubmitting(true);

        try {
            const formDataToSend = new FormData();

            // Append all form data to FormData object
            for (const key in formData) {
                if (formData[key] !== null && formData[key] !== '') {
                    // For file, append it directly
                    if (key === 'photo' && formData[key] instanceof File) {
                        formDataToSend.append(key, formData[key], formData[key].name);
                    } else {
                        formDataToSend.append(key, formData[key]);
                    }
                }
            }

            const response = await fetch('http://localhost:5000/volunteers', {
                method: 'POST',
                body: formDataToSend,
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Server error response:', errorData);
                throw new Error(errorData.message || 'Registration failed');
            }

            const data = await response.json();
            console.log('Success response:', data);

            await Swal.fire({
                title: 'Success!',
                text: 'Your volunteer application has been submitted successfully!',
                icon: 'success',
                confirmButtonColor: '#339634',
                confirmButtonText: 'OK'
            });

            // Reset form after successful submission
            setFormData({
                fullName: '',
                age: '',
                gender: '',
                phone: '',
                email: '',
                division: '',
                district: '',
                education: '',
                motivation: '',
                experience: 'No',
                experienceDetails: '',
                availability: '',
                facebook: '',
                photo: null
            });
            setErrors({});
            setSubmitSuccess(true);

        } catch (error) {
            console.error('Submission error:', error);
            await Swal.fire({
                title: 'Error!',
                text: error.message || 'Something went wrong during registration',
                icon: 'error',
                confirmButtonColor: '#339634',
                confirmButtonText: 'OK'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat bg-fixed"
            style={{ backgroundImage: "url('https://i.ibb.co/93nhHXKj/Lovepik-com-400234979-big-tree.png')" }}
        >
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10 animate-slide-down">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl drop-shadow-lg">
                        <span className="block">Save Tree Foundation</span>
                        <span className="block text-[#339634] mt-2">Volunteer Registration</span>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-white drop-shadow-md">
                        Thank you for your interest in volunteering with us! We are recruiting passionate youth (aged 16–25) from all divisional districts in Bangladesh to join our mission for a greener, healthier environment.
                    </p>
                </div>

                {submitSuccess ? (
                    <div className="bg-white bg-opacity-90 shadow-lg rounded-lg p-8 text-center animate-pop-in">
                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                            <svg className="h-6 w-6 text-[#339634]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="mt-3 text-lg font-medium text-gray-900">Application Submitted!</h3>
                        <div className="mt-2 text-sm text-gray-600">
                            <p>Thank you for your interest in volunteering with Save Tree Foundation.</p>
                            <p className="mt-2">We will contact selected candidates via email or phone.</p>
                        </div>
                        <div className="mt-6">
                            <button
                                onClick={() => setSubmitSuccess(false)}
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#339634] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300"
                            >
                                Submit Another Response
                            </button>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 bg-white bg-opacity-80 backdrop-blur-sm shadow-xl rounded-lg p-8 animate-fade-in-up">
                        <div className="space-y-6">
                            {/* Full Name */}
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        placeholder="e.g., Rahim Uddin"
                                        className={`block w-full px-4 py-3 rounded-md border ${errors.fullName ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-[#339634] focus:border-[#339634]'} shadow-sm focus:outline-none transition duration-300`}
                                        value={formData.fullName}
                                        onChange={handleChange}
                                    />
                                    {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
                                </div>
                            </div>

                            {/* Age */}
                            <div>
                                <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                                    Age <span className="text-red-500">*</span>
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="age"
                                        name="age"
                                        type="number"
                                        min="16"
                                        max="25"
                                        placeholder="Must be between 16 and 25"
                                        className={`block w-full px-4 py-3 rounded-md border ${errors.age ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-[#339634] focus:border-[#339634]'} shadow-sm focus:outline-none transition duration-300`}
                                        value={formData.age}
                                        onChange={handleChange}
                                    />
                                    {errors.age && <p className="mt-1 text-sm text-red-600">{errors.age}</p>}
                                </div>
                            </div>

                            {/* Gender */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Gender <span className="text-red-500">*</span>
                                </label>
                                <div className="mt-1 space-y-2">
                                    <div className="flex items-center">
                                        <input
                                            id="male"
                                            name="gender"
                                            type="radio"
                                            value="Male"
                                            checked={formData.gender === 'Male'}
                                            onChange={handleChange}
                                            className="h-4 w-4 text-[#339634] focus:ring-[#339634] border-gray-300"
                                        />
                                        <label htmlFor="male" className="ml-3 block text-sm font-medium text-gray-700">
                                            Male
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="female"
                                            name="gender"
                                            type="radio"
                                            value="Female"
                                            checked={formData.gender === 'Female'}
                                            onChange={handleChange}
                                            className="h-4 w-4 text-[#339634] focus:ring-[#339634] border-gray-300"
                                        />
                                        <label htmlFor="female" className="ml-3 block text-sm font-medium text-gray-700">
                                            Female
                                        </label>
                                    </div>
                                    {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender}</p>}
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="(WhatsApp preferred)"
                                        className={`block w-full px-4 py-3 rounded-md border ${errors.phone ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-[#339634] focus:border-[#339634]'} shadow-sm focus:outline-none transition duration-300`}
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className={`block w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-[#339634] focus:border-[#339634]'} shadow-sm focus:outline-none transition duration-300`}
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                </div>
                            </div>

                            {/* Division */}
                            <div>
                                <label htmlFor="division" className="block text-sm font-medium text-gray-700">
                                    Division <span className="text-red-500">*</span>
                                </label>
                                <div className="mt-1">
                                    <select
                                        id="division"
                                        name="division"
                                        className={`block w-full px-4 py-3 rounded-md border ${errors.division ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-[#339634] focus:border-[#339634]'} shadow-sm focus:outline-none transition duration-300`}
                                        value={formData.division}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select your division</option>
                                        <option value="Dhaka">Dhaka</option>
                                        <option value="Chattogram">Chattogram</option>
                                        <option value="Rajshahi">Rajshahi</option>
                                        <option value="Khulna">Khulna</option>
                                        <option value="Barisal">Barisal</option>
                                        <option value="Sylhet">Sylhet</option>
                                        <option value="Rangpur">Rangpur</option>
                                        <option value="Mymensingh">Mymensingh</option>
                                    </select>
                                    {errors.division && <p className="mt-1 text-sm text-red-600">{errors.division}</p>}
                                </div>
                            </div>

                            {/* District */}
                            <div>
                                <label htmlFor="district" className="block text-sm font-medium text-gray-700">
                                    District
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="district"
                                        name="district"
                                        type="text"
                                        placeholder="Enter your home district"
                                        className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-[#339634] focus:border-[#339634] transition duration-300"
                                        value={formData.district}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* Educational Background */}
                            <div>
                                <label htmlFor="education" className="block text-sm font-medium text-gray-700">
                                    Educational Background <span className="text-red-500">*</span>
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="education"
                                        name="education"
                                        type="text"
                                        placeholder="e.g., Class 11, Honors 2nd Year, Diploma in Forestry, etc."
                                        className={`block w-full px-4 py-3 rounded-md border ${errors.education ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-[#339634] focus:border-[#339634]'} shadow-sm focus:outline-none transition duration-300`}
                                        value={formData.education}
                                        onChange={handleChange}
                                    />
                                    {errors.education && <p className="mt-1 text-sm text-red-600">{errors.education}</p>}
                                </div>
                            </div>

                            {/* Motivation */}
                            <div>
                                <label htmlFor="motivation" className="block text-sm font-medium text-gray-700">
                                    Why do you want to join Save Tree Foundation as a volunteer? <span className="text-red-500">*</span>
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        id="motivation"
                                        name="motivation"
                                        rows={3}
                                        placeholder="Share briefly what motivates you."
                                        className={`block w-full px-4 py-3 rounded-md border ${errors.motivation ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-[#339634] focus:border-[#339634]'} shadow-sm focus:outline-none transition duration-300`}
                                        value={formData.motivation}
                                        onChange={handleChange}
                                    />
                                    {errors.motivation && <p className="mt-1 text-sm text-red-600">{errors.motivation}</p>}
                                </div>
                            </div>

                            {/* Previous Experience */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Do you have previous volunteering experience? <span className="text-red-500">*</span>
                                </label>
                                <div className="mt-1 space-y-2">
                                    <div className="flex items-center">
                                        <input
                                            id="experience-yes"
                                            name="experience"
                                            type="radio"
                                            value="Yes"
                                            checked={formData.experience === 'Yes'}
                                            onChange={handleChange}
                                            className="h-4 w-4 text-[#339634] focus:ring-[#339634] border-gray-300"
                                        />
                                        <label htmlFor="experience-yes" className="ml-3 block text-sm font-medium text-gray-700">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="experience-no"
                                            name="experience"
                                            type="radio"
                                            value="No"
                                            checked={formData.experience === 'No'}
                                            onChange={handleChange}
                                            className="h-4 w-4 text-[#339634] focus:ring-[#339634] border-gray-300"
                                        />
                                        <label htmlFor="experience-no" className="ml-3 block text-sm font-medium text-gray-700">
                                            No
                                        </label>
                                    </div>
                                    {errors.experience && <p className="mt-1 text-sm text-red-600">{errors.experience}</p>}
                                </div>
                            </div>

                            {/* Experience Details */}
                            {formData.experience === 'Yes' && (
                                <div className="animate-fade-in">
                                    <label htmlFor="experienceDetails" className="block text-sm font-medium text-gray-700">
                                        Briefly describe your past volunteering experience
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            id="experienceDetails"
                                            name="experienceDetails"
                                            rows={3}
                                            className={`block w-full px-4 py-3 rounded-md border ${errors.experienceDetails ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-[#339634] focus:border-[#339634]'} shadow-sm focus:outline-none transition duration-300`}
                                            value={formData.experienceDetails}
                                            onChange={handleChange}
                                        />
                                        {errors.experienceDetails && <p className="mt-1 text-sm text-red-600">{errors.experienceDetails}</p>}
                                    </div>
                                </div>
                            )}

                            {/* Availability */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Are you available to attend on-site activities (plantation, awareness events) in your division? <span className="text-red-500">*</span>
                                </label>
                                <div className="mt-1 space-y-2">
                                    <div className="flex items-center">
                                        <input
                                            id="availability-yes"
                                            name="availability"
                                            type="radio"
                                            value="Yes"
                                            checked={formData.availability === 'Yes'}
                                            onChange={handleChange}
                                            className="h-4 w-4 text-[#339634] focus:ring-[#339634] border-gray-300"
                                        />
                                        <label htmlFor="availability-yes" className="ml-3 block text-sm font-medium text-gray-700">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="availability-no"
                                            name="availability"
                                            type="radio"
                                            value="No"
                                            checked={formData.availability === 'No'}
                                            onChange={handleChange}
                                            className="h-4 w-4 text-[#339634] focus:ring-[#339634] border-gray-300"
                                        />
                                        <label htmlFor="availability-no" className="ml-3 block text-sm font-medium text-gray-700">
                                            No
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="availability-maybe"
                                            name="availability"
                                            type="radio"
                                            value="Maybe"
                                            checked={formData.availability === 'Maybe'}
                                            onChange={handleChange}
                                            className="h-4 w-4 text-[#339634] focus:ring-[#339634] border-gray-300"
                                        />
                                        <label htmlFor="availability-maybe" className="ml-3 block text-sm font-medium text-gray-700">
                                            Maybe (depends on timing)
                                        </label>
                                    </div>
                                    {errors.availability && <p className="mt-1 text-sm text-red-600">{errors.availability}</p>}
                                </div>
                            </div>

                            {/* Facebook Profile */}
                            <div>
                                <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">
                                    Facebook Profile Link (Optional)
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="facebook"
                                        name="facebook"
                                        type="url"
                                        placeholder="https://facebook.com/yourprofile"
                                        className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-[#339634] focus:border-[#339634] transition duration-300"
                                        value={formData.facebook}
                                        onChange={handleChange}
                                    />
                                    <p className="mt-1 text-sm text-gray-500">Helps us connect with you faster</p>
                                </div>
                            </div>

                            {/* Photo Upload */}
                            <div>
                                <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                                    Upload a recent photo
                                </label>
                                <div className="mt-1 flex items-center">
                                    <input
                                        id="photo"
                                        name="photo"
                                        type="file"
                                        accept="image/*,.pdf"
                                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#339634] file:text-white hover:file:bg-green-700 transition duration-300"
                                        onChange={handleChange}
                                    />
                                </div>
                                <p className="mt-1 text-sm text-gray-500">PDF or image. Max 100 MB.</p>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full md:w-auto px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#339634] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 transform hover:scale-105 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </span>
                                ) : 'Submit Application'}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Join;