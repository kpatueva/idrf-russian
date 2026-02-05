/*
  # Create registrations table

  1. New Tables
    - `registrations`
      - `id` (uuid, primary key) - Unique identifier for each registration
      - `first_name` (text) - Registrant's first name
      - `last_name` (text) - Registrant's last name
      - `company` (text) - Company name
      - `position` (text) - Job position
      - `email` (text) - Email address
      - `phone` (text) - Phone number
      - `status` (text) - Registration status (pending, approved, rejected)
      - `email_sent` (boolean) - Whether confirmation email was sent
      - `created_at` (timestamptz) - Registration timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `registrations` table
    - Only authenticated admins can read/update registrations
    - Public users can only insert their own registration

  3. Indexes
    - Index on email for quick lookups
    - Index on created_at for sorting
*/

CREATE TABLE IF NOT EXISTS registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  company text NOT NULL,
  position text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  email_sent boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert registrations (public form submission)
CREATE POLICY "Anyone can submit registration"
  ON registrations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users can view registrations (for admin purposes)
CREATE POLICY "Authenticated users can view registrations"
  ON registrations
  FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users can update registrations
CREATE POLICY "Authenticated users can update registrations"
  ON registrations
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_registrations_email ON registrations(email);
CREATE INDEX IF NOT EXISTS idx_registrations_created_at ON registrations(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_registrations_status ON registrations(status);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Add trigger to auto-update updated_at
DROP TRIGGER IF EXISTS update_registrations_updated_at ON registrations;
CREATE TRIGGER update_registrations_updated_at
  BEFORE UPDATE ON registrations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
