import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) { return  `Conference ${i}` },
  website: 'meetingWebsite',
  city: 'meetingCity',
  state: 'meetingState',
  country: 'meetingCountry',
  logo: 'Logo?',
  date(i) { return `April ${i}th, 1995`; }
  //Dates need to be added later on

});
