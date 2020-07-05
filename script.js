

const mainAdress = `https://github-jobs-proxy.appspot.com/positions?description=&location=united+states`;


window.onload = () => {getJobs(mainAdress)}
numID = 1;
async function getJobs(adress){
    const response = await fetch(adress);
    const data = await response.json();
    document.getElementById(`allJobs`).innerHTML = ``;
    data.forEach(dataEle => {
        const jobDiv = document.createElement(`div`);
        jobDiv.className = `divStyle`;

        const jobCompany = document.createElement(`h4`);
        jobCompany.textContent = dataEle.company;

        const jobTitle = document.createElement(`h5`);
        jobTitle.textContent = dataEle.title;
        jobTitle.className = `titleStyle`;

        const jobLocation = document.createElement(`span`);
        jobLocation.textContent = dataEle.location;
        jobLocation.className = `locationStyle`;

        const jobCreated = document.createElement(`span`);
        jobCreated.textContent = `Post created on: ${dataEle.created_at}`;
        jobCreated.className = `createdStyle`;

        const jobAdditional = document.createElement(`div`);
        jobAdditional.id = `additional${numID++}`;
        jobAdditional.textContent = dataEle.description;
        jobAdditional.className = `additionalStyle`;
        const jobType = document.createElement(`p`);
        jobType.textContent = dataEle.type
        jobAdditional.appendChild(jobType);

        const moreInfo = document.createElement(`p`);
        moreInfo.textContent = `More Information...`
        moreInfo.className = `moreStyle`;
        

        jobDiv.appendChild(jobCompany);
        jobDiv.appendChild(jobTitle);
        jobDiv.appendChild(jobLocation);
        jobDiv.appendChild(jobCreated);
        jobDiv.appendChild(jobAdditional);
        jobDiv.appendChild(moreInfo);
        


        document.getElementById(`allJobs`).appendChild(jobDiv);
        
        moreInfo.addEventListener(`click`, () => {
            if(jobAdditional.style.display === `none`){
                jobAdditional.style.display = `block`;
                moreInfo.textContent = `Less Information...`;
            }
            else(jobAdditional.style.display = `none`,
                moreInfo.textContent = `More Information...`
            )

        })
    });

    
}

function searchJobs(jobExpertise, jobCountry, jobFull){
    const newAdress = `https://github-jobs-proxy.appspot.com/positions?description=${jobExpertise}&location=${jobCountry}&full_time=${jobFull}` ;
    getJobs(newAdress);
};


function addEventTo(lang){
const shortCutAdress = `https://github-jobs-proxy.appspot.com/positions?description=${lang}&location=` ;
getJobs(shortCutAdress)
};

function openSearch(searchItem){

    const searchAdress = `https://github-jobs-proxy.appspot.com/positions?description=${searchItem}&location=` ;
    getJobs(searchAdress);
    
}