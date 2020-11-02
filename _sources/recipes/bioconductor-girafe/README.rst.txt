:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-girafe'
.. highlight: bash

bioconductor-girafe
===================

.. conda:recipe:: bioconductor-girafe
   :replaces_section_title:
   :noindex:

   Genome Intervals and Read Alignments for Functional Exploration

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/girafe.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-girafe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-girafe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-girafe/meta.yaml>`_
   :links: biotools: :biotools:`girafe`

   The package \'girafe\' deals with the genome\-level representation of aligned reads from next\-generation sequencing data. It contains an object class for enabling a detailed description of genome intervals with aligned reads and functions for comparing\, visualising\, exporting and working with such intervals and the aligned reads. As such\, the package interacts with and provides a link between the packages ShortRead\, IRanges and genomeIntervals.


.. conda:package:: bioconductor-girafe

   |downloads_bioconductor-girafe| |docker_bioconductor-girafe|

   :versions:
      
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-genomeintervals: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-rsamtools: ``>=2.6.0,<2.7.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-shortread: ``>=1.48.0,<1.49.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-intervals: ``>=0.13.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-girafe

   and update with::

      conda update bioconductor-girafe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-girafe:<tag>

   (see `bioconductor-girafe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-girafe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-girafe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-girafe
   :alt:   (downloads)
.. |docker_bioconductor-girafe| image:: https://quay.io/repository/biocontainers/bioconductor-girafe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-girafe
.. _`bioconductor-girafe/tags`: https://quay.io/repository/biocontainers/bioconductor-girafe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-girafe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-girafe/README.html