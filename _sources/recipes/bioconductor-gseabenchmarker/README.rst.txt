:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gseabenchmarker'
.. highlight: bash

bioconductor-gseabenchmarker
============================

.. conda:recipe:: bioconductor-gseabenchmarker
   :replaces_section_title:
   :noindex:

   Reproducible GSEA Benchmarking

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/GSEABenchmarkeR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gseabenchmarker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gseabenchmarker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gseabenchmarker/meta.yaml>`_

   The GSEABenchmarkeR package implements an extendable framework for reproducible evaluation of set\- and network\-based methods for enrichment analysis of gene expression data. This includes support for the efficient execution of these methods on comprehensive real data compendia \(microarray and RNA\-seq\) using parallel computation on standard workstations and institutional computer grids. Methods can then be assessed with respect to runtime\, statistical significance\, and relevance of the results for the phenotypes investigated.


.. conda:package:: bioconductor-gseabenchmarker

   |downloads_bioconductor-gseabenchmarker| |docker_bioconductor-gseabenchmarker|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-annotationhub: ``>=3.2.0,<3.3.0``
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biocfilecache: ``>=2.2.0,<2.3.0``
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-edger: ``>=3.36.0,<3.37.0``
   :depends bioconductor-enrichmentbrowser: ``>=2.24.0,<2.25.0``
   :depends bioconductor-experimenthub: ``>=2.2.0,<2.3.0``
   :depends bioconductor-keggandmetacoredzpathwaysgeo: ``>=1.14.0,<1.15.0``
   :depends bioconductor-keggdzpathwaysgeo: ``>=1.32.0,<1.33.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
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
   :target: https://anaconda.org/bioconda/bioconductor-gseabenchmarker
   :alt:   (downloads)
.. |docker_bioconductor-gseabenchmarker| image:: https://quay.io/repository/biocontainers/bioconductor-gseabenchmarker/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gseabenchmarker
.. _`bioconductor-gseabenchmarker/tags`: https://quay.io/repository/biocontainers/bioconductor-gseabenchmarker?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gseabenchmarker";
        var versions = ["1.14.0","1.12.0","1.10.1","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gseabenchmarker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gseabenchmarker/README.html