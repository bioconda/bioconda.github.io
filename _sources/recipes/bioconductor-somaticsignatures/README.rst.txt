.. title:: Package Recipe 'bioconductor-somaticsignatures'
.. highlight: bash


bioconductor-somaticsignatures
==============================

.. conda:recipe:: bioconductor-somaticsignatures
   :replaces_section_title:

   The SomaticSignatures package identifies mutational signatures of single nucleotide variants \(SNVs\).  It provides a infrastructure related to the methodology described in Nik\-Zainal \(2012\, Cell\)\, with flexibility in the matrix decomposition algorithms.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SomaticSignatures.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-somaticsignatures <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-somaticsignatures>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-somaticsignatures/meta.yaml>`_
   :links: biotools: :biotools:`somaticsignatures`

   


.. conda:package:: bioconductor-somaticsignatures

   |downloads_bioconductor-somaticsignatures| |docker_bioconductor-somaticsignatures|

   :versions: 2.18.0, 2.16.0, 2.14.0, 2.12.1

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-ggbio` >=1.30.0,<1.31.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-pcamethods` >=1.74.0,<1.75.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-variantannotation` >=1.28.0,<1.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-nmf`  :conda:package:`r-proxy`  :conda:package:`r-reshape2`  

   :required~by: |required_by_bioconductor-somaticsignatures|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-somaticsignatures

   and update with::

      conda update bioconductor-somaticsignatures

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-somaticsignatures


.. |required_by_bioconductor-somaticsignatures| conda:required_by:: bioconductor-somaticsignatures
.. |downloads_bioconductor-somaticsignatures| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-somaticsignatures.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-somaticsignatures| image:: https://quay.io/repository/biocontainers/bioconductor-somaticsignatures/status
   :target: https://quay.io/repository/biocontainers/bioconductor-somaticsignatures







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-somaticsignatures/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-somaticsignatures/README.html

