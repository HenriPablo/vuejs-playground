const newAndUpdatedResources = {
    "title": "New & Updated Resources",
    "pixData": [
        {
            "src": "art/thumb-7.jpg",
            "text": "Agent - Broker of Record Change - Acord 36 01-07",
            "showDownload":"false"
        },
        {
            "src": "art/thumb-8.jpg",
            "text": "Handyman Affidavit",
            "showDownload":"false"
        },
        {
            "src": "art/thumb-9.jpg",
            "text": "Appetite Guide - Extended Resource Guide",
            "showDownload":"false"
        },
        {
            "src": "art/thumb-10.jpg",
            "text": "Frank Winston Crum - Florida Dividend Program Eligibility - Construction",
            "showDownload":"false"
        },
        {
            "src": "art/thumb-11.jpg",
            "text": "Frank Winston Crum - Florida Dividend Program Eligibility - Non-Construction",
            "showDownload":"false"
        },
        {
            "src": "art/thumb-12.jpg",
            "text": "Coverage Map - FWCI All Lines",
            "showDownload":"false"
        }
    ]
}


const getNewAndUpdatedResources = () => {

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve( newAndUpdatedResources );
            reject({"error":"Could not reach data"})
        }, 300);
    });

    return myPromise;
}
export default {
    getNewAndUpdatedResources: getNewAndUpdatedResources
}