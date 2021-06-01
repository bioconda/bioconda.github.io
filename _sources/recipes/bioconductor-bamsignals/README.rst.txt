:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bamsignals'
.. highlight: bash

bioconductor-bamsignals
=======================

.. conda:recipe:: bioconductor-bamsignals
   :replaces_section_title:
   :noindex:

   Extract read count signals from bam files

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/bamsignals.html
   :license: GPL-2
   :recipe: /`bioconductor-bamsignals <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bamsignals>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bamsignals/meta.yaml>`_
   :links: biotools: :biotools:`bamsignals`, doi: :doi:`10.1038/nmeth.3252`

   This package allows to efficiently obtain count vectors from indexed bam files. It counts the number of reads in given genomic ranges and it computes reads profiles and coverage profiles. It also handles paired\-end data.


.. conda:package:: bioconductor-bamsignals

   |downloads_bioconductor-bamsignals| |docker_bioconductor-bamsignals|

   :versions:
      
      

      ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.10.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rhtslib: ``>=1.24.0,<1.25.0``
   :depends bioconductor-zlibbioc: ``>=1.38.0,<1.39.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcxx: ``>=11.1.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-rcpp: ``>=0.10.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bamsignals

   and update with::

      conda update bioconductor-bamsignals

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bamsignals:<tag>

   (see `bioconductor-bamsignals/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bamsignals| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bamsignals.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bamsignals
   :alt:   (downloads)
.. |docker_bioconductor-bamsignals| image:: https://quay.io/repository/biocontainers/bioconductor-bamsignals/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bamsignals
.. _`bioconductor-bamsignals/tags`: https://quay.io/repository/biocontainers/bioconductor-bamsignals?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bamsignals/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bamsignals/README.html