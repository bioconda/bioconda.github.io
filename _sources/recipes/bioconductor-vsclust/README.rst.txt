:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vsclust'
.. highlight: bash

bioconductor-vsclust
====================

.. conda:recipe:: bioconductor-vsclust
   :replaces_section_title:
   :noindex:

   Feature\-based variance\-sensitive quantitative clustering

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/vsclust.html
   :license: GPL-2
   :recipe: /`bioconductor-vsclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vsclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vsclust/meta.yaml>`_

   Feature\-based variance\-sensitive clustering of omics data. Optimizes cluster assignment by taking into account individual feature variance. Includes several modules for statistical testing\, clustering and enrichment analysis.


.. conda:package:: bioconductor-vsclust

   |downloads_bioconductor-vsclust| |docker_bioconductor-vsclust|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-limma: ``>=3.54.0,<3.55.0``
   :depends bioconductor-multiassayexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-qvalue: ``>=2.30.0,<2.31.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-matrixstats: 
   :depends r-rcpp: 
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-vsclust

   and update with::

      conda update bioconductor-vsclust

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-vsclust:<tag>

   (see `bioconductor-vsclust/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-vsclust| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vsclust.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-vsclust
   :alt:   (downloads)
.. |docker_bioconductor-vsclust| image:: https://quay.io/repository/biocontainers/bioconductor-vsclust/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vsclust
.. _`bioconductor-vsclust/tags`: https://quay.io/repository/biocontainers/bioconductor-vsclust?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-vsclust";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vsclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vsclust/README.html