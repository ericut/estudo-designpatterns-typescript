import IPlataform from './plataforms/IPlataform';
import Live from './transmissions/Live';
import AdvancedLive from './transmissions/AdvancedLive';
import YouTube from './plataforms/YouTube';
import Twitch from './plataforms/Twitch';
import FacebookLive from './plataforms/FacebookLive';

function startLive(plataform: IPlataform) {
  console.log('Aguarde...');

  const live = new Live(plataform);
  live.broadcasting();
  live.result();
}

// startLive(new YouTube());
// startLive(new Twitch());
// startLive(new FacebookLive());

function startAdvancedLive(plataform: IPlataform) {
  console.log('Aguarde...');

  const live = new AdvancedLive(plataform);
  live.broadcasting();
  live.result();
  live.comments();
  live.subtitles();
}

startAdvancedLive(new YouTube());
startAdvancedLive(new Twitch());
startAdvancedLive(new FacebookLive());
