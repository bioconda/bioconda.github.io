.. _`r-vcfr`:

r-vcfr
======

|downloads|

Facilitates easy manipulation of variant call format (VCF) data. Functions are provided to rapidly read from and write to VCF files. Once VCF data is read into R a parser function extracts matrices of data. This information can then be used for quality control or other purposes. Additional functions provide visualization of genomic data. Once processing is complete data may be written to a VCF file (*.vcf.gz). It also may be converted into other popular R objects (e.g., genlight, DNAbin). VcfR provides a link between VCF data and familiar R software.

======== ===========
Home     https://github.com/knausb/vcfR, https://knausb.github.io/ vcfR_documentation/
Versions 1.5.0
License  GPL
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-vcfr
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-vcfr

and update with::

   conda update r-vcfr



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-vcfr.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-vcfr/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-vcfr/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-vcfr/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-vcfr
.. |docker| image:: https://quay.io/repository/biocontainers/r-vcfr/status
                :target: https://quay.io/repository/biocontainers/r-vcfr


