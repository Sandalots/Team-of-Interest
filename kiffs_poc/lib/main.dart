import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'KIFSS Proof-of-Concept',
      home: Scaffold(
        appBar: AppBar(title: Text('KIFSS Proof-of-Concept')),
        body: const Center(
          child: Text('KIFFS Proof-of-Concept App by Team of Interest.'),
        ),
      ),
      debugShowCheckedModeBanner: false,
    );
  }
}
