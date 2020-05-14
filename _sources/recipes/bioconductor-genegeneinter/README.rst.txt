:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genegeneinter'
.. highlight: bash

bioconductor-genegeneinter
==========================

.. conda:recipe:: bioconductor-genegeneinter
   :replaces_section_title:

   Tools for Testing Gene\-Gene Interaction at the Gene Level

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/GeneGeneInteR.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-genegeneinter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genegeneinter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genegeneinter/meta.yaml>`_

   The aim of this package is to propose several methods for testing gene\-gene interaction in case\-control association studies. Such a test can be done by aggregating SNP\-SNP interaction tests performed at the SNP level \(SSI\) or by using gene\-gene multidimensionnal methods \(GGI\) methods. The package also proposes tools for a graphic display of the results.


.. conda:package:: bioconductor-genegeneinter

   |downloads_bioconductor-genegeneinter| |docker_bioconductor-genegeneinter|

   :versions: 1.14.0-0, 1.12.0-0, 1.10.0-1, 1.8.0-0
   
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-ggtools: >=5.24.0,<5.25.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-rsamtools: >=2.4.0,<2.5.0
   :depends bioconductor-snpstats: >=1.38.0,<1.39.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libcxx: >=9.0.1
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-data.table: 
   :depends r-factominer: 
   :depends r-igraph: 
   :depends r-kernlab: 
   :depends r-mvtnorm: 
   :depends r-plspm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genegeneinter

   and update with::

      conda update bioconductor-genegeneinter

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genegeneinter:<tag>

   (see `bioconductor-genegeneinter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genegeneinter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genegeneinter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genegeneinter
   :alt:   (downloads)
.. |docker_bioconductor-genegeneinter| image:: https://quay.io/repository/biocontainers/bioconductor-genegeneinter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genegeneinter
.. _`bioconductor-genegeneinter/tags`: https://quay.io/repository/biocontainers/bioconductor-genegeneinter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genegeneinter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genegeneinter/README.html