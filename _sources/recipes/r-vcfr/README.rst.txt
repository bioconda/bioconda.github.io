:orphan:  .. only available via index, not via toctree

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

   :versions: 1.8.0-3, 1.8.0-2, 1.8.0-1, 1.8.0-0, 1.5.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-ape: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-memuse: 
   :depends r-pinfsc50: 
   :depends r-rcpp: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-vegan: 
   :depends r-viridislite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-vcfr

   and update with::

      conda update r-vcfr

   or use the docker container::

      docker pull quay.io/biocontainers/r-vcfr:<tag>

   (see `r-vcfr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-vcfr| image:: https://img.shields.io/conda/dn/bioconda/r-vcfr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-vcfr
   :alt:   (downloads)
.. |docker_r-vcfr| image:: https://quay.io/repository/biocontainers/r-vcfr/status
   :target: https://quay.io/repository/biocontainers/r-vcfr
.. _`r-vcfr/tags`: https://quay.io/repository/biocontainers/r-vcfr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-vcfr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-vcfr/README.html