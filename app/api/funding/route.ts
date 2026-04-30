import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('funding_cases')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching funding cases:', error);
    return NextResponse.json(
      { error: 'Failed to fetch funding cases' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { data, error } = await supabase
      .from('funding_cases')
      .insert([body])
      .select();

    if (error) throw error;

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Error creating funding case:', error);
    return NextResponse.json(
      { error: 'Failed to create funding case' },
      { status: 500 }
    );
  }
}
