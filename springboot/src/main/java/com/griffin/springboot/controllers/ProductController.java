package com.griffin.springboot.controllers;

import com.griffin.springboot.DTO.ProductRecordDTO;
import com.griffin.springboot.models.ProductModel;
import com.griffin.springboot.repositories.ProductRepository;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;

@RestController
public class ProductController {
  @Autowired
  ProductRepository productRepository;

  @PostMapping("/products")
  public ResponseEntity<ProductModel> saveProduct(@RequestBody @Valid ProductRecordDTO productRecordDTO) {
    var productModel = new ProductModel();
    BeanUtils.copyProperties(productRecordDTO, productModel);
    return ResponseEntity.status(HttpStatus.CREATED).body(productRepository.save(productModel));
  }

  @GetMapping("/products")
  public ResponseEntity<List<ProductModel>> getAllProducts() {
    return ResponseEntity.status(HttpStatus.OK).body(productRepository.findAll());
  }

  @GetMapping("/products/{id}")
  public ResponseEntity<Object> getOneProduct(@PathVariable(value = "id") UUID id) {
    Optional<ProductModel> product0 = productRepository.findById(id);
    return product0.<ResponseEntity<Object>>map(productModel
            -> ResponseEntity.status(HttpStatus.OK).body(productModel)).orElseGet(()
            -> ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product not found"));
  }

  @PutMapping("/products/{id}")
  public ResponseEntity<Object> updateProduct(@PathVariable(value = "id") UUID id, @RequestBody @Valid ProductRecordDTO productRecordDTO) {
    Optional<ProductModel> product0 = productRepository.findById(id);
    if (product0.isEmpty()) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product not found");
    }
    var productModel = product0.get();
    BeanUtils.copyProperties(productRecordDTO, productModel);
    return ResponseEntity.status(HttpStatus.OK).body(productRepository.save(productModel));
  }

}
