function insertionSort(cards) {
  
  // Look at each card one by one (starting with the 2nd card, index 1)
  for (let i = 1; i < cards.length; i++) {
    
    let pickedCard = cards[i]; // The card you just picked up (e.g., 5)
    let leftSpot = i - 1;      // The spot right to the left of it

    // While there is a card to the left AND it is BIGGER than your pickedCard...
    while (leftSpot >= 0 && cards[leftSpot] > pickedCard) {
      
      // ...scoot that bigger card one step to the right!
      cards[leftSpot + 1] = cards[leftSpot];
      
      // Move your eyes one spot further left to check the next card
      leftSpot = leftSpot - 1;
    }

    // You found the gap! Drop your pickedCard into the empty spot.
    cards[leftSpot + 1] = pickedCard;
  }

  return cards;
}
