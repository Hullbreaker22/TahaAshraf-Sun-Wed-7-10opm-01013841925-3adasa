import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Navbar } from './Layout/navbar/navbar';
import { Home } from './Pages/home/home';
import { We } from './Pages/we/we';
import { Footer } from './Layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, Navbar , Home , We , Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'

})
export class App implements OnInit {

      ngOnInit(): void {
    initFlowbite();
  }

}
