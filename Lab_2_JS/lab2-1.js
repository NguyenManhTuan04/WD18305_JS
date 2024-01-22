const gameEvents = new Map([
  [10, " Thẻ đỏ"],
  [12, " Thay người"],
  [40, " Ghi bàn"],
  [55, " Thay người"],
  [64, " Nhận thẻ vàng"],
  [66, " Nhận thẻ đỏ"],
  [73, " Thay người"],
  [80, " Thay người"],
  [85, " Nhận thẻ vàng"],
  [97, " Ghi bàn"],
  [90, " Ghi bàn"],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);

console.log(`1 sự kiện xảy ra, trung bình mỗi ${90 / gameEvents.size} phút`);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event}`);
}