:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dnabarcodecompatibility'
.. highlight: bash

bioconductor-dnabarcodecompatibility
====================================

.. conda:recipe:: bioconductor-dnabarcodecompatibility
   :replaces_section_title:

   The package allows one to obtain optimized combinations of DNA barcodes to be used for multiplex sequencing. In each barcode combination\, barcodes are pooled with respect to Illumina chemistry constraints. Combinations can be filtered to keep those that are robust against substitution and insertion\/deletion errors thereby facilitating the demultiplexing step. In addition\, the package provides an optimizer function to further favor the selection of barcode combinations with least redundancy of DNA barcodes.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/DNABarcodeCompatibility.html
   :license: GPL-2
   :recipe: /`bioconductor-dnabarcodecompatibility <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnabarcodecompatibility>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnabarcodecompatibility/meta.yaml>`_

   


.. conda:package:: bioconductor-dnabarcodecompatibility

   |downloads_bioconductor-dnabarcodecompatibility| |docker_bioconductor-dnabarcodecompatibility|

   :versions: 
   
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