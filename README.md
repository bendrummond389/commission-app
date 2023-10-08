# Commission Calculator Overview

The Commission Calculator is an application developed with Next.js. It is designed to calculate commissions based on a Lagrange polynomial, which is pre-computed using a separate Python script included in the repository.

## Working Mechanism

1. **Data Input**:
   - The user enters four data points through the web interface. These points represent sales amounts and the corresponding commissions. 

2. **Lagrange Polynomial Calculation**:
   - A Python script (included in the repository but not integrated into the app) is used to calculate the coefficients of the Lagrange polynomial based on the provided data points. This polynomial is used to estimate commissions for sales amounts up to $10,000.

3. **Piecewise Function Application**:
   - The application employs a piecewise function to calculate commissions. For sales amounts up to $10,000, the commission is estimated using the Lagrange polynomial. For amounts exceeding $10,000, a flat commission rate of 1% is applied to the excess, and this is added to the commission calculated at $10,000.

4. **Commission Display**:
   - The calculated commission is displayed to the user on the web interface.

The Python script is a standalone utility for generating the Lagrange polynomial, and the coefficients obtained from this script are then hardcoded into the Next.js application for use in commission calculations.
