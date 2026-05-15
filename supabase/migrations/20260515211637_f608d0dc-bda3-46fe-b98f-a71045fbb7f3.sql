CREATE TABLE public.booking_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  event_date text,
  venue text,
  event_type text,
  budget text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new'
);

ALTER TABLE public.booking_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon can insert bookings"
  ON public.booking_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "authenticated can read bookings"
  ON public.booking_inquiries
  FOR SELECT
  TO authenticated
  USING (true);