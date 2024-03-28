import { Component } from '@angular/core';
import { MongoClient } from 'mongodb';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  // formData = {
  //   name: '',
  //   email: '',
  //   message: '',
  // };
  // async onSubmit(): Promise<void> {
  //   try {
  //     const client = new MongoClient(
  //       'mongodb+srv://root:root@cluster0.izu8z1z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  //     );
  //     await client.connect();
  //     const database = client.db('Portfolio');
  //     const collection = database.collection('getMessages');
  //     await collection.insertOne(this.formData);
  //     console.log('Form submission successful');
  //     // Provide feedback to the user
  //   } catch (error) {
  //     console.error('Form submission error:', error);
  //     // Provide feedback to the user
  //   }
  // }
}
