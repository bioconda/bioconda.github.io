:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-benchdamic'
.. highlight: bash

bioconductor-benchdamic
=======================

.. conda:recipe:: bioconductor-benchdamic
   :replaces_section_title:
   :noindex:

   Benchmark of differential abundance methods on microbiome data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/benchdamic.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-benchdamic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-benchdamic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-benchdamic/meta.yaml>`_

   Starting from a microbiome dataset \(16S or WMS with absolute count values\) it is possible to perform several analysis to assess the performances of many differential abundance detection methods. A basic and standardized version of the main differential abundance analysis methods is supplied but the user can also add his method to the benchmark. The analyses focus on 4 main aspects\: i\) the goodness of fit of each method\'s distributional assumptions on the observed count data\, ii\) the ability to control the false discovery rate\, iii\) the within and between method concordances\, iv\) the truthfulness of the findings if any apriori knowledge is given. Several graphical functions are available for result visualization.


.. conda:package:: bioconductor-benchdamic

   |downloads_bioconductor-benchdamic| |docker_bioconductor-benchdamic|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-aldex2: ``>=1.26.0,<1.27.0``
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-deseq2: ``>=1.34.0,<1.35.0``
   :depends bioconductor-edger: ``>=3.36.0,<3.37.0``
   :depends bioconductor-ffpe: ``>=1.38.0,<1.39.0``
   :depends bioconductor-limma: ``>=3.50.0,<3.51.0``
   :depends bioconductor-mast: ``>=1.20.0,<1.21.0``
   :depends bioconductor-metagenomeseq: ``>=1.36.0,<1.37.0``
   :depends bioconductor-phyloseq: ``>=1.38.0,<1.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-zinbwave: ``>=1.16.0,<1.17.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-corncob: 
   :depends r-cowplot: 
   :depends r-ggdendro: 
   :depends r-ggplot2: 
   :depends r-mglm: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-seurat: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-benchdamic

   and update with::

      conda update bioconductor-benchdamic

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-benchdamic:<tag>

   (see `bioconductor-benchdamic/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-benchdamic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-benchdamic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-benchdamic
   :alt:   (downloads)
.. |docker_bioconductor-benchdamic| image:: https://quay.io/repository/biocontainers/bioconductor-benchdamic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-benchdamic
.. _`bioconductor-benchdamic/tags`: https://quay.io/repository/biocontainers/bioconductor-benchdamic?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-benchdamic";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-benchdamic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-benchdamic/README.html