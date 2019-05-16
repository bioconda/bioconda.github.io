:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sictools'
.. highlight: bash

bioconductor-sictools
=====================

.. conda:recipe:: bioconductor-sictools
   :replaces_section_title:

   This package is to find SNV\/Indel differences between two bam files with near relationship in a way of pairwise comparison thourgh each base position across the genome region of interest. The difference is inferred by fisher test and euclidean distance\, the input of which is the base count \(A\,T\,G\,C\) in a given position and read counts for indels that span no less than 2bp on both sides of indel region.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/SICtools.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-sictools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sictools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sictools/meta.yaml>`_

   


.. conda:package:: bioconductor-sictools

   |downloads_bioconductor-sictools| |docker_bioconductor-sictools|

   :versions: 1.12.0-0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-doparallel: >=1.0.8
   :depends r-matrixstats: >=0.10.0
   :depends r-plyr: >=1.8.3
   :depends r-stringr: >=0.6.2
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sictools

   and update with::

      conda update bioconductor-sictools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sictools:<tag>

   (see `bioconductor-sictools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sictools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sictools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sictools
   :alt:   (downloads)
.. |docker_bioconductor-sictools| image:: https://quay.io/repository/biocontainers/bioconductor-sictools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sictools
.. _`bioconductor-sictools/tags`: https://quay.io/repository/biocontainers/bioconductor-sictools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sictools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sictools/README.html