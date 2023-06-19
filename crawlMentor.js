const axios = require('axios');
const cheerio = require('cheerio');

async function crawlMentorData() {
  try {
    

    const mentorData = [];
    for (var i = 1; i <= 1; i++){
        const response = await axios.get('https://mentori.vn/mentor?page=' + i);
        const $ = cheerio.load(response.data);
        // Iterate over each mentor item
        $('.mentor_list').each((index, element) => {
          const mentor = {};
    
          // Extract mentor details
          mentor.name = $(element).find('.name').text();
          mentor.jobTitle = $(element).find('.jobs').text();
          mentor.company = $(element).find('.field').text(); 
          mentor.avatar = $(element).find('.mentor_avatar img').attr('src');
          mentor.user = $(element).find('.row .col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-3 mt-3 .mentor_item mentor_item_custom wow fadeInUp a').attr('href');

          mentorData.push(mentor);
        });
    }

     console.log(mentorData);

    // Call the function to write mentor data to a file
   // writeMentorDataToFile(mentorData);
  } catch (error) {
    console.error('Error:', error);
  }
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
