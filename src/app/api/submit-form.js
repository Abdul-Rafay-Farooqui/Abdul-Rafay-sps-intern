import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const client = await clientPromise;
    const db = client.db("formSubmissions"); // Your database name
    const collection = db.collection('formSubmissions'); // Your collection name

    if (!collection) {
      return res.status(500).json({ message: 'Collection not found' });
    }
    // Insert the form data
    const result = await collection.insertOne(req.body);
    
    res.status(200).json({ 
      message: 'Form submitted successfully', 
      id: result.insertedId 
    });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}