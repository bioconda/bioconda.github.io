:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dnabarcodes'
.. highlight: bash

bioconductor-dnabarcodes
========================

.. conda:recipe:: bioconductor-dnabarcodes
   :replaces_section_title:

   The package offers a function to create DNA barcode sets capable of correcting insertion\, deletion\, and substitution errors. Existing barcodes can be analysed regarding their minimal\, maximal and average distances between barcodes. Finally\, reads that start with a \(possibly mutated\) barcode can be demultiplexed\, i.e.\, assigned to their original reference barcode.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/DNABarcodes.html
   :license: GPL-2
   :recipe: /`bioconductor-dnabarcodes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnabarcodes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnabarcodes/meta.yaml>`_
   :links: biotools: :biotools:`dnabarcodes`

   


.. conda:package:: bioconductor-dnabarcodes

   |downloads_bioconductor-dnabarcodes| |docker_bioconductor-dnabarcodes|

   :versions: 1.14.0-1, 1.14.0-0, 1.12.0-0, 1.10.0-0, 1.8.0-0
   
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-bh: 
   :depends r-matrix: 
   :depends r-rcpp: >=0.11.2
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dnabarcodes

   and update with::

      conda update bioconductor-dnabarcodes

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dnabarcodes:<tag>

   (see `bioconductor-dnabarcodes/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dnabarcodes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dnabarcodes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dnabarcodes
   :alt:   (downloads)
.. |docker_bioconductor-dnabarcodes| image:: https://quay.io/repository/biocontainers/bioconductor-dnabarcodes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dnabarcodes
.. _`bioconductor-dnabarcodes/tags`: https://quay.io/repository/biocontainers/bioconductor-dnabarcodes?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dnabarcodes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dnabarcodes/README.html