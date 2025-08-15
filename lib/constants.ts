export const BRAND_NAME = "CleanSSR";
export const PRIMARY_COLOR = "#6A0DAD"; // Purple
export const SECONDARY_COLOR = "#FFFFFF"; // White

/
 * Configuration settings for the CleanSSR application.
 */
export const CONFIG = {
    appName: BRAND_NAME,
    primaryColor: PRIMARY_COLOR,
    secondaryColor: SECONDARY_COLOR,
    footerText: "© 2023 CleanSSR. All rights reserved.",
    contactEmail: "info@cleanSSR.com",
    phoneNumber: "+1 (800) 555-0199",
};

/
 * Interface representing a customer review for CleanSSR.
 */
export interface Review {
    reviewerName: string;
    reviewText: string;
    rating: number; // 1 to 5 scale
}

/
 * Sample reviews for CleanSSR to enhance credibility and customer trust.
 */
export const REVIEWS: Review[] = [
    {
        reviewerName: "Alice Johnson",
        reviewText: "CleanSSR provided exceptional service! Their team was professional and efficient.",
        rating: 5,
    },
    {
        reviewerName: "Mark Smith",
        reviewText: "I was impressed by the technology they use, making the cleaning process smooth and effective.",
        rating: 4,
    },
    {
        reviewerName: "Emma Brown",
        reviewText: "Fast, reliable, and thorough! Highly recommend CleanSSR for all cleaning needs.",
        rating: 5,
    },
];

/
 * Function to get formatted reviews for display.
 * @returns {string} Formatted string of reviews.
 */
export const getFormattedReviews = (): string => {
    return REVIEWS.map(review => 
        ${review.reviewerName} (Rating: ${review.rating}): "${review.reviewText}"
    ).join("\n");
};