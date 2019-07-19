:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gdsfmt'
.. highlight: bash

bioconductor-gdsfmt
===================

.. conda:recipe:: bioconductor-gdsfmt
   :replaces_section_title:

   This package provides a high\-level R interface to CoreArray Genomic Data Structure \(GDS\) data files\, which are portable across platforms with hierarchical structure to store multiple scalable array\-oriented data sets with metadata information. It is suited for large\-scale datasets\, especially for data which are much larger than the available random\-access memory. The gdsfmt package offers the efficient operations specifically designed for integers of less than 8 bits\, since a diploid genotype\, like single\-nucleotide polymorphism \(SNP\)\, usually occupies fewer bits than a byte. Data compression and decompression are available with relatively efficient random access. It is also allowed to read a GDS file in parallel with multiple R processes supported by the package parallel.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/gdsfmt.html
   :license: LGPL-3
   :recipe: /`bioconductor-gdsfmt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdsfmt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdsfmt/meta.yaml>`_

   


.. conda:package:: bioconductor-gdsfmt

   |downloads_bioconductor-gdsfmt| |docker_bioconductor-gdsfmt|

   :versions: 1.20.0-1, 1.20.0-0, 1.18.1-0, 1.16.0-0, 1.14.1-0
   
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gdsfmt

   and update with::

      conda update bioconductor-gdsfmt

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gdsfmt:<tag>

   (see `bioconductor-gdsfmt/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gdsfmt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gdsfmt.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gdsfmt
   :alt:   (downloads)
.. |docker_bioconductor-gdsfmt| image:: https://quay.io/repository/biocontainers/bioconductor-gdsfmt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gdsfmt
.. _`bioconductor-gdsfmt/tags`: https://quay.io/repository/biocontainers/bioconductor-gdsfmt?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gdsfmt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gdsfmt/README.html