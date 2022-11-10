:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dexma'
.. highlight: bash

bioconductor-dexma
==================

.. conda:recipe:: bioconductor-dexma
   :replaces_section_title:
   :noindex:

   Differential Expression Meta\-Analysis

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/DExMA.html
   :license: GPL-2
   :recipe: /`bioconductor-dexma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dexma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dexma/meta.yaml>`_

   performing all the steps of gene expression meta\-analysis without eliminating those genes that are presented in at least two datasets. It provides the necessary functions to be able to perform the different methods of gene expression meta\-analysis. In addition\, it contains functions to apply quality controls\, download GEO data sets and show graphical representations of the results.


.. conda:package:: bioconductor-dexma

   |downloads_bioconductor-dexma| |docker_bioconductor-dexma|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-dexmadata: ``>=1.6.0,<1.7.0``
   :depends bioconductor-geoquery: ``>=2.66.0,<2.67.0``
   :depends bioconductor-impute: ``>=1.72.0,<1.73.0``
   :depends bioconductor-limma: ``>=3.54.0,<3.55.0``
   :depends bioconductor-snpstats: ``>=1.48.0,<1.49.0``
   :depends bioconductor-sva: ``>=3.46.0,<3.47.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-bnstruct: 
   :depends r-pheatmap: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-scales: 
   :depends r-swamp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dexma

   and update with::

      conda update bioconductor-dexma

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dexma:<tag>

   (see `bioconductor-dexma/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dexma| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dexma.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dexma
   :alt:   (downloads)
.. |docker_bioconductor-dexma| image:: https://quay.io/repository/biocontainers/bioconductor-dexma/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dexma
.. _`bioconductor-dexma/tags`: https://quay.io/repository/biocontainers/bioconductor-dexma?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dexma";
        var versions = ["1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dexma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dexma/README.html