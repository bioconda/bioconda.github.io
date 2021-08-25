:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pdatk'
.. highlight: bash

bioconductor-pdatk
==================

.. conda:recipe:: bioconductor-pdatk
   :replaces_section_title:
   :noindex:

   Pancreatic Ductal Adenocarcinoma Tool\-Kit

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/PDATK.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-pdatk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pdatk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pdatk/meta.yaml>`_

   Pancreatic ductal adenocarcinoma \(PDA\) has a relatively poor prognosis and is one of the most lethal cancers. Molecular classification of gene expression profiles holds the potential to identify meaningful subtypes which can inform therapeutic strategy in the clinical setting. The Pancreatic Cancer Adenocarcinoma Tool\-Kit \(PDATK\) provides an S4 class\-based interface for performing unsupervised subtype discovery\, cross\-cohort meta\-clustering\, gene\-expression\-based classification\, and subsequent survival analysis to identify prognostically useful subtypes in pancreatic cancer and beyond.


.. conda:package:: bioconductor-pdatk

   |downloads_bioconductor-pdatk| |docker_bioconductor-pdatk|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-consensusclusterplus: ``>=1.56.0,<1.57.0``
   :depends bioconductor-coregx: ``>=1.4.0,<1.5.0``
   :depends bioconductor-genefu: ``>=2.24.0,<2.25.0``
   :depends bioconductor-matrixgenerics: ``>=1.4.0,<1.5.0``
   :depends bioconductor-multiassayexperiment: ``>=1.18.0,<1.19.0``
   :depends bioconductor-piano: ``>=2.8.0,<2.9.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-survcomp: ``>=1.42.0,<1.43.0``
   :depends bioconductor-switchbox: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-caret: 
   :depends r-clusterrepro: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggplotify: 
   :depends r-igraph: 
   :depends r-matrixstats: 
   :depends r-plyr: 
   :depends r-proc: 
   :depends r-rcolorbrewer: 
   :depends r-reportroc: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-survival: 
   :depends r-survminer: 
   :depends r-verification: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pdatk

   and update with::

      conda update bioconductor-pdatk

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pdatk:<tag>

   (see `bioconductor-pdatk/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pdatk| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pdatk.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pdatk
   :alt:   (downloads)
.. |docker_bioconductor-pdatk| image:: https://quay.io/repository/biocontainers/bioconductor-pdatk/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pdatk
.. _`bioconductor-pdatk/tags`: https://quay.io/repository/biocontainers/bioconductor-pdatk?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pdatk";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pdatk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pdatk/README.html