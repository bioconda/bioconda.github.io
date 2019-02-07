.. title:: Package Recipe 'r-vcfr'
.. highlight: bash


r-vcfr
======

.. conda:recipe:: r-vcfr
   :replaces_section_title:

   Facilitates easy manipulation of variant call format \(VCF\) data. Functions are provided to rapidly read from and write to VCF files. Once VCF data is read into R a parser function extracts matrices of data. This information can then be used for quality control or other purposes. Additional functions provide visualization of genomic data. Once processing is complete data may be written to a VCF file \(\*.vcf.gz\). It also may be converted into other popular R objects \(e.g.\, genlight\, DNAbin\). VcfR provides a link between VCF data and familiar R software.

   :homepage: https://github.com/knausb/vcfR, https://knausb.github.io/vcfR_documentation/
   :license: GPL / GPL
   :recipe: /`r-vcfr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-vcfr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-vcfr/meta.yaml>`_

   


.. conda:package:: r-vcfr

   |downloads_r-vcfr| |docker_r-vcfr|

   :versions: 1.8.0, 1.5.0

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`r-ape`  :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-dplyr`  :conda:package:`r-magrittr`  :conda:package:`r-memuse`  :conda:package:`r-pinfsc50`  :conda:package:`r-rcpp`  :conda:package:`r-stringr`  :conda:package:`r-tibble`  :conda:package:`r-vegan`  :conda:package:`r-viridislite`  

   :required~by: |required_by_r-vcfr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-vcfr

   and update with::

      conda update r-vcfr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-vcfr


.. |required_by_r-vcfr| conda:required_by:: r-vcfr
.. |downloads_r-vcfr| image:: https://img.shields.io/conda/dn/bioconda/r-vcfr.svg?style=flat
   :alt:   (downloads)
.. |docker_r-vcfr| image:: https://quay.io/repository/biocontainers/r-vcfr/status
   :target: https://quay.io/repository/biocontainers/r-vcfr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-vcfr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-vcfr/README.html

