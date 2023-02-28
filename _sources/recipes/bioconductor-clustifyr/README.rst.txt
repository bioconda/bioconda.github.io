:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clustifyr'
.. highlight: bash

bioconductor-clustifyr
======================

.. conda:recipe:: bioconductor-clustifyr
   :replaces_section_title:
   :noindex:

   Classifier for Single\-cell RNA\-seq Using Cell Clusters

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/clustifyr.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-clustifyr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clustifyr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clustifyr/meta.yaml>`_

   Package designed to aid in classifying cells from single\-cell RNA sequencing data using external reference data \(e.g.\, bulk RNA\-seq\, scRNA\-seq\, microarray\, gene lists\). A variety of correlation based methods and gene list enrichment methods are provided to assist cell type assignment.


.. conda:package:: bioconductor-clustifyr

   |downloads_bioconductor-clustifyr| |docker_bioconductor-clustifyr|

   :versions:
      
      

      ``1.10.0-0``,  ``1.5.1-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-fgsea: ``>=1.24.0,<1.25.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-singlecellexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-entropy: 
   :depends r-ggplot2: 
   :depends r-httr: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-proxy: 
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-clustifyr

   and update with::

      conda update bioconductor-clustifyr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-clustifyr:<tag>

   (see `bioconductor-clustifyr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clustifyr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clustifyr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clustifyr
   :alt:   (downloads)
.. |docker_bioconductor-clustifyr| image:: https://quay.io/repository/biocontainers/bioconductor-clustifyr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clustifyr
.. _`bioconductor-clustifyr/tags`: https://quay.io/repository/biocontainers/bioconductor-clustifyr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-clustifyr";
        var versions = ["1.10.0","1.5.1","1.4.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clustifyr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clustifyr/README.html