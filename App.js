import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

/**
 *
 * -- Header
 *      Logo
 *      Nav Items
 *
 * -- Body
 *      Search
 *      Restaurant Container
 *      Restaurant Card
 *          Img, name of res, star rating, cuisine, time of delivery,
 *
 * -- Footer
 *      Copyright
 *      Links
 *      Address
 *      Contact
 *
 */

// const resList = [
//   {
//     info: {
//       id: "441312",
//       name: "Bakingo",
//       cloudinaryImageId: "lunwqazhxpifhlgxiawh",
//       locality: "Crossing Republic",
//       areaName: "Gaur City",
//       costForTwo: "₹300 for two",
//       cuisines: ["Bakery"],
//       avgRating: 4.3,
//       feeDetails: {
//         restaurantId: "441312",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 5400,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 5400,
//       },
//       parentId: "3818",
//       avgRatingString: "4.3",
//       totalRatingsString: "1K+",
//       sla: {
//         deliveryTime: 28,
//         lastMileTravel: 5.7,
//         serviceability: "SERVICEABLE",
//         slaString: "28 mins",
//         lastMileTravelString: "5.7 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-29 00:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "60% OFF",
//         subHeader: "UPTO ₹120",
//         discountCalloutInfo: {
//           message: "Free Delivery",
//           logoCtx: {
//             logo: "v1655895371/free_delivery_logo_hqipbo.png",
//           },
//         },
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {
//       context: "seo-data-17cca057-9476-4d1e-a23e-bedbbea17810",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/bakingo-crossing-republic-gaur-city-noida-441312",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     info: {
//       id: "700584",
//       name: "Cheesecake & Co.",
//       cloudinaryImageId: "40b0a201eadbec469c2f9a06d5e7c722",
//       locality: "Gautam Buddha Nagar",
//       areaName: "Crossing Republic",
//       costForTwo: "₹300 for two",
//       cuisines: ["Desserts", "Bakery"],
//       avgRating: 4.5,
//       feeDetails: {
//         restaurantId: "700584",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 5900,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 5900,
//       },
//       parentId: "387417",
//       avgRatingString: "4.5",
//       totalRatingsString: "100+",
//       sla: {
//         deliveryTime: 28,
//         lastMileTravel: 5.7,
//         serviceability: "SERVICEABLE",
//         slaString: "28 mins",
//         lastMileTravelString: "5.7 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-28 23:59:00",
//         opened: true,
//       },
//       badges: {
//         imageBadges: [
//           {
//             imageId: "newg.png",
//             description: "Gourmet",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "Gourmet",
//                   imageId: "newg.png",
//                 },
//               },
//             ],
//           },
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "₹125 OFF",
//         subHeader: "ABOVE ₹249",
//         discountTag: "FLAT DEAL",
//         discountCalloutInfo: {
//           message: "Free Delivery",
//           logoCtx: {
//             logo: "v1655895371/free_delivery_logo_hqipbo.png",
//           },
//         },
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       isNewlyOnboarded: true,
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {
//       context: "seo-data-17cca057-9476-4d1e-a23e-bedbbea17810",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/cheesecake-and-co-gautam-buddha-nagar-crossing-republic-noida-700584",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     info: {
//       id: "348936",
//       name: "Hira Sweets",
//       cloudinaryImageId: "wtwhar7auvi9tqisguh9",
//       locality: "sapphire mall",
//       areaName: "Sector 4",
//       costForTwo: "₹500 for two",
//       cuisines: [
//         "North Indian",
//         "South Indian",
//         "Chinese",
//         "Continental",
//         "Bakery",
//         "Street Food",
//         "Sweets",
//         "Desserts",
//         "Beverages",
//       ],
//       avgRating: 3.8,
//       veg: true,
//       feeDetails: {
//         restaurantId: "348936",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 5400,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 5400,
//       },
//       parentId: "5155",
//       avgRatingString: "3.8",
//       totalRatingsString: "10K+",
//       sla: {
//         deliveryTime: 34,
//         lastMileTravel: 5.9,
//         serviceability: "SERVICEABLE",
//         slaString: "34 mins",
//         lastMileTravelString: "5.9 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-29 00:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         discountCalloutInfo: {
//           message: "Free Delivery",
//           logoCtx: {
//             logo: "v1655895371/free_delivery_logo_hqipbo.png",
//           },
//         },
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {
//       context: "seo-data-17cca057-9476-4d1e-a23e-bedbbea17810",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/hira-sweets-sapphire-mall-sector-4-noida-348936",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     info: {
//       id: "623617",
//       name: "Great Indian Khichdi by EatFit",
//       cloudinaryImageId: "0da26e86f4490626665f0b1d8810906e",
//       locality: "C R Marg",
//       areaName: "Shahberi",
//       costForTwo: "₹200 for two",
//       cuisines: ["Indian", "Home Food", "Healthy Food", "Snacks"],
//       avgRating: 4.3,
//       veg: true,
//       feeDetails: {
//         restaurantId: "623617",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 6200,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 6200,
//       },
//       parentId: "319582",
//       avgRatingString: "4.3",
//       totalRatingsString: "500+",
//       sla: {
//         deliveryTime: 30,
//         lastMileTravel: 6.5,
//         serviceability: "SERVICEABLE",
//         slaString: "30 mins",
//         lastMileTravelString: "6.5 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-28 23:59:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "50% OFF",
//         subHeader: "UPTO ₹100",
//         discountCalloutInfo: {
//           message: "Free Delivery",
//           logoCtx: {
//             logo: "v1655895371/free_delivery_logo_hqipbo.png",
//           },
//         },
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {
//       context: "seo-data-17cca057-9476-4d1e-a23e-bedbbea17810",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-c-r-marg-shahberi-noida-623617",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     info: {
//       id: "338192",
//       name: "Doon's Vaishno",
//       cloudinaryImageId: "couhjilurdxfs0qgsk3v",
//       locality: "Gautam Buddha Nagar",
//       areaName: "Amrapali Leisure Valley",
//       costForTwo: "₹300 for two",
//       cuisines: ["North Indian"],
//       avgRating: 4.3,
//       feeDetails: {
//         restaurantId: "338192",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 3800,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 3800,
//       },
//       parentId: "74103",
//       avgRatingString: "4.3",
//       totalRatingsString: "1K+",
//       sla: {
//         deliveryTime: 21,
//         lastMileTravel: 1.7,
//         serviceability: "SERVICEABLE",
//         slaString: "21 mins",
//         lastMileTravelString: "1.7 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-28 23:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         discountCalloutInfo: {
//           message: "Free Delivery",
//           logoCtx: {
//             logo: "v1655895371/free_delivery_logo_hqipbo.png",
//           },
//         },
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {
//       context: "seo-data-17cca057-9476-4d1e-a23e-bedbbea17810",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/doons-vaishno-gautam-buddha-nagar-amrapali-leisure-valley-noida-338192",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     info: {
//       id: "328051",
//       name: "SashMicks Bakery (Cake)",
//       cloudinaryImageId: "0cb9293ff7ec5559f898add049b547a7",
//       locality: "Sundar Shopping Complex",
//       areaName: "Sector 72",
//       costForTwo: "₹300 for two",
//       cuisines: ["Bakery", "Desserts"],
//       avgRating: 4.3,
//       feeDetails: {
//         restaurantId: "328051",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 8500,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 8500,
//       },
//       parentId: "11784",
//       avgRatingString: "4.3",
//       totalRatingsString: "1K+",
//       sla: {
//         deliveryTime: 34,
//         lastMileTravel: 8.7,
//         serviceability: "SERVICEABLE",
//         slaString: "34 mins",
//         lastMileTravelString: "8.7 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-28 23:59:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "30% OFF",
//         subHeader: "UPTO ₹75",
//         discountCalloutInfo: {
//           message: "Free Delivery",
//           logoCtx: {
//             logo: "v1655895371/free_delivery_logo_hqipbo.png",
//           },
//         },
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {
//       context: "seo-data-17cca057-9476-4d1e-a23e-bedbbea17810",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/sashmicks-bakery-cake-sundar-shopping-complex-sector-72-noida-328051",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     info: {
//       id: "201715",
//       name: "CHAWLA'S 2 (Leisure Valley)",
//       cloudinaryImageId: "xloljk2b8hmbjo6npv7h",
//       locality: "Amrapali Leisure Valley",
//       areaName: "Leisure Valley",
//       costForTwo: "₹300 for two",
//       cuisines: ["North Indian", "Mughlai", "Chinese", "Biryani"],
//       avgRating: 3.9,
//       feeDetails: {
//         restaurantId: "201715",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 4600,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 4600,
//       },
//       parentId: "392165",
//       avgRatingString: "3.9",
//       totalRatingsString: "5K+",
//       sla: {
//         deliveryTime: 29,
//         lastMileTravel: 3,
//         serviceability: "SERVICEABLE",
//         slaString: "29 mins",
//         lastMileTravelString: "3.0 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-29 02:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "₹125 OFF",
//         subHeader: "ABOVE ₹249",
//         discountTag: "FLAT DEAL",
//         discountCalloutInfo: {
//           message: "Free Delivery",
//           logoCtx: {
//             logo: "v1655895371/free_delivery_logo_hqipbo.png",
//           },
//         },
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {
//       context: "seo-data-17cca057-9476-4d1e-a23e-bedbbea17810",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/chawlas-2-leisure-valley-amrapali-leisure-valley-noida-201715",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     info: {
//       id: "694790",
//       name: "KFC",
//       cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
//       locality: "Sector Techzone-4",
//       areaName: "Golden Mall",
//       costForTwo: "₹400 for two",
//       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//       avgRating: 3.8,
//       feeDetails: {
//         restaurantId: "694790",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 5100,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 5100,
//       },
//       parentId: "547",
//       avgRatingString: "3.8",
//       totalRatingsString: "100+",
//       sla: {
//         deliveryTime: 29,
//         lastMileTravel: 3,
//         serviceability: "SERVICEABLE",
//         slaString: "29 mins",
//         lastMileTravelString: "3.0 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-28 23:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "20% OFF",
//         subHeader: "UPTO ₹50",
//         discountCalloutInfo: {
//           message: "Free Delivery",
//           logoCtx: {
//             logo: "v1655895371/free_delivery_logo_hqipbo.png",
//           },
//         },
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       isNewlyOnboarded: true,
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {
//       context: "seo-data-17cca057-9476-4d1e-a23e-bedbbea17810",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/kfc-sector-techzone-4-golden-mall-noida-694790",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     info: {
//       id: "189174",
//       name: "Burger King",
//       cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
//       locality: "Sector 4",
//       areaName: "Sector 4",
//       costForTwo: "₹350 for two",
//       cuisines: ["Burgers", "American"],
//       avgRating: 4,
//       feeDetails: {
//         restaurantId: "189174",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 5400,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 5400,
//       },
//       parentId: "166",
//       avgRatingString: "4.0",
//       totalRatingsString: "10K+",
//       sla: {
//         deliveryTime: 40,
//         lastMileTravel: 5.5,
//         serviceability: "SERVICEABLE",
//         slaString: "40 mins",
//         lastMileTravelString: "5.5 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-29 03:45:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "EVERY ITEM",
//         subHeader: "@ ₹129",
//         discountCalloutInfo: {
//           message: "Free Delivery",
//           logoCtx: {
//             logo: "v1655895371/free_delivery_logo_hqipbo.png",
//           },
//         },
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {
//       context: "seo-data-17cca057-9476-4d1e-a23e-bedbbea17810",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/burger-king-sector-4-noida-189174",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
// ];

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="logo-container">
//         <img
//           className="logo"
//           src="data:image/png;base64,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"
//         />
//       </div>
//       <div className="nav-items">
//         <ul>
//           <li>Home</li>
//           <li>About Us</li>
//           <li>Contact Us</li>
//           <li>Cart</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// const ResCard = ( {resData} ) => {
//   const { cloudinaryImageId, name, costForTwo, cuisines, avgRating } =
//   resData?.info;
//   return (
//     <div className="resCard ellipsis" style={{ backgroundColor: "#f0f0f0" }}>
//       <img
//         className="resImage"
//         alt="res-logo"
//         src="https://meghanafoods.co.in/assets/img/banner/banner-4.jpg"
//       />
//       <h3>{name}</h3>
//       <h4 className="ellipsis">{cuisines.join(", ")}</h4>
//       <h4>{avgRating} stars</h4>
//       <h4>{costForTwo} for TWO</h4>
//       <h4>{resData?.info?.sla?.deliveryTime} mins</h4>
//     </div>
//   );
// };

// const Body = () => {
//   const [ restaurantList, setRestaurantList ] = useState(resList);
//   const [ searchText, setSearchText ] = useState("");
//   return (
//     <div className="body">
//       <div className="filter">
//         <button
//           className="filter-btn"
//           onClick={() => {
//             const filteredList = restaurantList.filter(
//               (rl) => rl.info.avgRating > 4
//             );
//             setRestaurantList(filteredList);
//           }}
//         >
//           Top Rated Restaurants
//         </button>
//         <button
//           className="filter-btn"
//           onClick={() => {            
//             setRestaurantList(resList);
//           }}
//         >
//           Reset
//         </button>
//         <input
//           type=""
//           className="search-box"
//           value={searchText}
//           onChange={(e) => {
//             setSearchText(e.target.value);
//           }}
//         />
//         <button
//           className="filter-btn"
//           onClick={() => {
//             {
//               console.log(searchText);
//             }
//           }}
//         >
//           Search
//         </button>
//       </div>
//       <div className="resContainer">
//         {restaurantList.map((res, index) => 
//           <ResCard key={res.info.id} resData={res} />
//         )}
//       </div>
//     </div>
//   );
// };

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ],
    errorElement: <Error />
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
