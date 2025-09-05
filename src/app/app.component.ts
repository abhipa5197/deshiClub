import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'deshiClub';

  playMusic() {
  let audio = new Audio();
  audio.src = "assets/happy-birthday.mp3"; // put mp3 in assets folder
  audio.load();
  audio.play();
}

}
