:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dnabarcodecompatibility'
.. highlight: bash

bioconductor-dnabarcodecompatibility
====================================

.. conda:recipe:: bioconductor-dnabarcodecompatibility
   :replaces_section_title:
   :noindex:

   A Tool for Optimizing Combinations of DNA Barcodes Used in Multiplexed Experiments on Next Generation Sequencing Platforms

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/DNABarcodeCompatibility.html
   :license: file LICENSE
   :recipe: /`bioconductor-dnabarcodecompatibility <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnabarcodecompatibility>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnabarcodecompatibility/meta.yaml>`_

   The package allows one to obtain optimised combinations of DNA barcodes to be used for multiplex sequencing. In each barcode combination\, barcodes are pooled with respect to Illumina chemistry constraints. Combinations can be filtered to keep those that are robust against substitution and insertion\/deletion errors thereby facilitating the demultiplexing step. In addition\, the package provides an optimiser function to further favor the selection of barcode combinations with least heterogeneity in barcode usage.


.. conda:package:: bioconductor-dnabarcodecompatibility

   |downloads_bioconductor-dnabarcodecompatibility| |docker_bioconductor-dnabarcodecompatibility|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.2-0``

      

   
   :depends bioconductor-dnabarcodes: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dplyr: 
   :depends r-numbers: 
   :depends r-purrr: 
   :depends r-stringr: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dnabarcodecompatibility

   and update with::

      conda update bioconductor-dnabarcodecompatibility

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dnabarcodecompatibility:<tag>

   (see `bioconductor-dnabarcodecompatibility/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dnabarcodecompatibility| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dnabarcodecompatibility.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dnabarcodecompatibility
   :alt:   (downloads)
.. |docker_bioconductor-dnabarcodecompatibility| image:: https://quay.io/repository/biocontainers/bioconductor-dnabarcodecompatibility/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dnabarcodecompatibility
.. _`bioconductor-dnabarcodecompatibility/tags`: https://quay.io/repository/biocontainers/bioconductor-dnabarcodecompatibility?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dnabarcodecompatibility/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dnabarcodecompatibility/README.html