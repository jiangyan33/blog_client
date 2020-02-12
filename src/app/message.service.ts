import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private baseUrl = 'http://127.0.0.1:8080/api/';
  private currentRouteUrl: string;
  constructor() { }

  get(key) {
    return this[key];
  }
  set(key, value) {
    this[key] = value;
  }
}
