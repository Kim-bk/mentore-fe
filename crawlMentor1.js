const axios = require('axios');
const cheerio = require('cheerio');

async function crawlMentorData() {
    const mentorData = [];
    for (var i = 1; i <= 15; i++){
      try {
        const response = await axios.get('https://mentori.vn/search?keyword=&field_id%5B%5D='+i);
        if (response.status === 200){
          const $ = cheerio.load(response.data);
          // Iterate over each mentor 
          const mentorList = $('.mentor_list');
          if (mentorList.length === 0)
          {
            continue;
          }

          mentorList.each((index, element) => {
          const mentor = {};
      
            // Extract mentor details
          mentor.profileUrl  = $(element).find('.mentor_item > a').attr('href');
          mentorData.push(mentor);
           
          });
        }
      }
      catch (error) {
         console.log(mentorData);
      }
    }

    crawlInfo(mentorData);
    console.log(mentorData);

    // Call the function to write mentor data to a file
   // writeMentorDataToFile(mentorData);
}

function crawlInfo(mentorData){
  const result = [];
  const i = 1;
  mentorData.forEach(async (value, index) => 
  {
   const response = await axios.get(mentorData[index].profileUrl);
   const $ = cheerio.load(response.data);
   
   // Iterate over each mentor item
   $('.mentor_profile_page').each((index, element) => {
     // Extract mentor details
     const info = {};
     info.name  = $(element).find('h3.profile-user-name').text();
     info.avatar  = $(element).find('.wrap-profile-avatar a').attr('href');
     info.description  = $(element).find('div.mentor_section > p').text();
     info.job  = $(element).find('.header-job-title').text();

     result.push(info);
   });

   console.log(result);
   //writeMentorDataToFile(result);
  }) 

}

async function writeMentorDataToFile(mentorData) {
  try {
    const fs = require('fs');
    const jsonData = JSON.stringify(mentorData, null, 2);
    fs.writeFileSync('mentor_data.json', jsonData);
    console.log('Mentor data written to file successfully.');
  } catch (error) {
    console.error('Error writing to file:', error);
  }
}

crawlMentorData();