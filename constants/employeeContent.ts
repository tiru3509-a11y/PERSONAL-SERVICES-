
import React from 'react';
import { Icons } from './icons';

export const employeeContent = {
  en: {
    tagline: 'Find your next job, just around the corner.',
    screens: {
      home: 'Home',
      browse: 'Browse Jobs',
      schedule: 'Schedule',
      profile: 'Profile',
    },
    homeScreen: {
      title: 'Welcome, Priya!',
      earnings: {
        title: 'Today\'s Earnings',
        amount: '₹450',
      },
      upcomingJob: {
        title: 'Upcoming Job',
        job: 'House Cleaning @ 4 PM',
        location: 'Jubilee Hills, Hyderabad',
        viewDetails: 'View Details',
      },
      invites: {
        title: 'New Job Invites',
        invite1: 'Urgent Delivery Task - Madhapur',
        invite2: 'Cooking Help for Party - Gachibowli',
        accept: 'Accept',
        decline: 'Decline',
      }
    },
    browseScreen: {
      title: 'Available Jobs Nearby',
      filters: {
        all: 'All',
        cleaning: 'Cleaning',
        delivery: 'Delivery',
        recommended: 'Recommended',
      },
      mapView: 'Map View',
      jobs: [
        { title: 'Garden Maintenance', location: 'Banjara Hills', pay: '₹300', distance: '1.2 km away' },
        { title: 'Packing for Relocation', location: 'Kondapur', pay: '₹800 (Fixed)', distance: '3.5 km away' },
        { title: 'Event Staff Needed', location: 'Hi-Tech City', pay: '₹250/hr', distance: '4.0 km away' },
      ],
      apply: 'Apply Now',
    },
    scheduleScreen: {
        title: 'My Schedule',
        today: 'Today, 24 Oct',
        upcoming: 'Upcoming',
        jobs: [
            { time: '10:00 AM', duration: '2h', title: 'Data Entry Project', status: 'Completed', color: 'green' },
            { time: '04:00 PM', duration: '1h', title: 'House Cleaning', status: 'Confirmed', color: 'cyan' },
            { time: '07:00 PM', duration: '3h', title: 'Restaurant Help', status: 'Confirmed', color: 'cyan' },
        ],
        tomorrow: 'Tomorrow, 25 Oct',
        tomorrowJobs: [
             { time: '11:00 AM', duration: '4h', title: 'Warehouse Packing', status: 'Confirmed', color: 'cyan' },
        ]
    }
  },
  te: {
    tagline: 'మీ తదుపరి ఉద్యోగాన్ని, మీ సమీపంలోనే కనుగొనండి.',
    screens: {
      home: 'హోమ్',
      browse: 'ఉద్యోగాలు',
      schedule: 'షెడ్యూల్',
      profile: 'ప్రొఫైల్',
    },
    homeScreen: {
      title: 'స్వాగతం, ప్రియ!',
      earnings: {
        title: 'ఈ రోజు సంపాదన',
        amount: '₹450',
      },
      upcomingJob: {
        title: 'రాబోయే ఉద్యోగం',
        job: 'ఇంటి శుభ్రపరచడం @ 4 PM',
        location: 'జూబ్లీ హిల్స్, హైదరాబాద్',
        viewDetails: 'వివరాలు చూడండి',
      },
      invites: {
        title: 'కొత్త ఉద్యోగ ఆహ్వానాలు',
        invite1: 'అత్యవసర డెలివరీ టాస్క్ - మాదాపూర్',
        invite2: 'పార్టీ కోసం వంట సహాయం - గచ్చిబౌలి',
        accept: 'అంగీకరించు',
        decline: 'తిరస్కరించు',
      }
    },
    browseScreen: {
      title: 'సమీపంలో అందుబాటులో ఉన్న ఉద్యోగాలు',
      filters: {
        all: 'అన్నీ',
        cleaning: 'శుభ్రపరచడం',
        delivery: 'డెలివరీ',
        recommended: 'సిఫార్సు చేయబడినవి',
      },
      mapView: 'మ్యాప్ వీక్షణ',
      jobs: [
        { title: 'తోట నిర్వహణ', location: 'బంజారా హిల్స్', pay: '₹300', distance: '1.2 కిమీ దూరంలో' },
        { title: 'స్థాన మార్పు కోసం ప్యాకింగ్', location: 'కొండాపూర్', pay: '₹800 (స్థిర)', distance: '3.5 కిమీ దూరంలో' },
        { title: 'ఈవెంట్ సిబ్బంది అవసరం', location: 'హై-టెక్ సిటీ', pay: '₹250/గం', distance: '4.0 కిమీ దూరంలో' },
      ],
      apply: 'ఇప్పుడే దరఖాస్తు చేసుకోండి',
    },
    scheduleScreen: {
        title: 'నా షెడ్యూల్',
        today: 'ఈ రోజు, 24 అక్టోబర్',
        upcoming: 'రాబోయే',
        jobs: [
            { time: '10:00 AM', duration: '2గం', title: 'డేటా ఎంట్రీ ప్రాజెక్ట్', status: 'పూర్తయింది', color: 'green' },
            { time: '04:00 PM', duration: '1గం', title: 'ఇంటి శుభ్రపరచడం', status: 'ధృవీకరించబడింది', color: 'cyan' },
            { time: '07:00 PM', duration: '3గం', title: 'రెస్టారెంట్ సహాయం', status: 'ధృవీకరించబడింది', color: 'cyan' },
        ],
        tomorrow: 'రేపు, 25 అక్టోబర్',
        tomorrowJobs: [
             { time: '11:00 AM', duration: '4గం', title: 'గిడ్డంగి ప్యాకింగ్', status: 'ధృవీకరించబడింది', color: 'cyan' },
        ]
    }
  }
};
