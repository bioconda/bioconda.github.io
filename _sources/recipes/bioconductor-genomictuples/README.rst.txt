:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomictuples'
.. highlight: bash

bioconductor-genomictuples
==========================

.. conda:recipe:: bioconductor-genomictuples
   :replaces_section_title:

   GenomicTuples defines general purpose containers for storing genomic tuples. It aims to provide functionality for tuples of genomic co\-ordinates that are analogous to those available for genomic ranges in the GenomicRanges Bioconductor package.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/GenomicTuples.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomictuples <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomictuples>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomictuples/meta.yaml>`_
   :links: biotools: :biotools:`genomictuples`, doi: :doi:`10.21105/joss.00020`

   


.. conda:package:: bioconductor-genomictuples

   |downloads_bioconductor-genomictuples| |docker_bioconductor-genomictuples|

   :versions: 1.20.0-0, 1.18.0-1, 1.16.0-0, 1.14.1-0, 1.12.0-0, 1.10.0-0
   
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-genomeinfodb: >=1.22.0,<1.23.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-data.table: 
   :depends r-rcpp: >=0.11.2
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genomictuples

   and update with::

      conda update bioconductor-genomictuples

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomictuples:<tag>

   (see `bioconductor-genomictuples/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomictuples| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomictuples.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomictuples
   :alt:   (downloads)
.. |docker_bioconductor-genomictuples| image:: https://quay.io/repository/biocontainers/bioconductor-genomictuples/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomictuples
.. _`bioconductor-genomictuples/tags`: https://quay.io/repository/biocontainers/bioconductor-genomictuples?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomictuples/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomictuples/README.html