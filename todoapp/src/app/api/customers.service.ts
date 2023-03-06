import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {Customer, Customers} from "../types/customer";

const SUPABASE_URL = "https://tijvxbrpjxzwonlkrepw.supabase.co";
const SUPABASE_API_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpanZ4YnJwanh6d29ubGtyZXB3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3ODA4ODU0NSwiZXhwIjoxOTkzNjY0NTQ1fQ.we95JsRPqHmi48WbwRhE7h9hc-vzzUxLiFOTKiA9s7c";

@Injectable()
export class CustomersService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Customers> {
    return this.http.get<Customers>(SUPABASE_URL, {
      headers: {
        "Content-Type": "application/json",
        apiKey: SUPABASE_API_KEY
      }
    });
  }

  create(text: string): Observable<Customer> {
    return this.http.post<Customer>(SUPABASE_URL, {
      fullName: text,
      email: text
    }, {
      headers: {
        "Content-Type": "application/json",
        apiKey: SUPABASE_API_KEY,
        Prefer: "return=representation"
      }
    });
  }

  findOne(id: number): Observable<Customer> {
    return this.http.get<Customer>(SUPABASE_URL + '?id=eq.' + id, {
      headers: {
        "Content-Type": "application/json",
        apiKey: SUPABASE_API_KEY,
        Prefer: "return=representation"
      }
    });
  }
}

