:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gseabenchmarker'
.. highlight: bash

bioconductor-gseabenchmarker
============================

.. conda:recipe:: bioconductor-gseabenchmarker
   :replaces_section_title:

   The GSEABenchmarkeR package implements an extendable framework for reproducible evaluation of set\- and network\-based methods for enrichment analysis of gene expression data. This includes support for the efficient execution of these methods on comprehensive real data compendia \(microarray and RNA\-seq\) using parallel computation on standard workstations and institutional computer grids. Methods can then be assessed with respect to runtime\, statistical significance\, and relevance of the results for the phenotypes investigated.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GSEABenchmarkeR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gseabenchmarker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gseabenchmarker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gseabenchmarker/meta.yaml>`_

   


.. conda:package:: bioconductor-gseabenchmarker

   |downloads_bioconductor-gseabenchmarker| |docker_bioconductor-gseabenchmarker|

   :versions: 1.2.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-annotationhub: >=2.14.0,<2.15.0
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocfilecache: >=1.6.0,<1.7.0
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   :depends bioconductor-edger: >=3.24.0,<3.25.0
   :depends bioconductor-enrichmentbrowser: >=2.12.0,<2.13.0
   :depends bioconductor-experimenthub: >=1.8.0,<1.9.0
   :depends bioconductor-geoquery: >=2.50.0,<2.51.0
   :depends bioconductor-keggandmetacoredzpathwaysgeo: >=1.2.0,<1.3.0
   :depends bioconductor-keggdzpathwaysgeo: >=1.20.0,<1.21.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-rappdirs: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gseabenchmarker

   and update with::

      conda update bioconductor-gseabenchmarker

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gseabenchmarker:<tag>

   (see `bioconductor-gseabenchmarker/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gseabenchmarker| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gseabenchmarker.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gseabenchmarker| image:: https://quay.io/repository/biocontainers/bioconductor-gseabenchmarker/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gseabenchmarker
.. _`bioconductor-gseabenchmarker/tags`: https://quay.io/repository/biocontainers/bioconductor-gseabenchmarker?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gseabenchmarker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gseabenchmarker/README.html