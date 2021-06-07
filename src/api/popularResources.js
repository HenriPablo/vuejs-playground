const popularResources = {
    "title": "Popular Resources",
    "pixData": [
        {
            "src": "art/thumb-1.jpg",
            "text": "Endorsement Request - General Liability",
            "showDownload":"false"
        },
        {
            "src": "art/thumb-2.jpg",
            "text": "Appetite Guide - Extended Resource Guide",
            "showDownload":"false"
        },
        {
            "src": "art/thumb-3.jpg",
            "text": "Frank Winston Crum - Florida WC Target List",
            "showDownload":"false"
        },
        {
            "src": "art/thumb-4.jpg",
            "text": "Frank Winston Crum - Inland Marine Options",
            "showDownload":"false"
        },
        {
            "src": "art/thumb-5.jpg",
            "text": "FWCI Roofing Supplemental Application 11/2020",
            "showDownload":"false"
        },
        {
            "src": "art/thumb-6.jpg",
            "text": "Florida GL Manual - Clear Blue",
            "showDownload":"false"
        }
    ]
}


const getPopularResources = () => {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve( popularResources );
            reject({"error":"Could not reach data"})
        }, 300);
    });

    return myPromise;
}
export default {
    getPopularResources: getPopularResources
}