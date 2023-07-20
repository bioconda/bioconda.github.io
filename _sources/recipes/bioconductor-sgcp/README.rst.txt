:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sgcp'
.. highlight: bash

bioconductor-sgcp
=================

.. conda:recipe:: bioconductor-sgcp
   :replaces_section_title:
   :noindex:

   SGCP\: A semi\-supervised pipeline for gene clustering using self\-training approach in gene co\-expression networks

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SGCP.html
   :license: GPL-3
   :recipe: /`bioconductor-sgcp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sgcp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sgcp/meta.yaml>`_

   SGC is a semi\-supervised pipeline for gene clustering in gene co\-expression networks. SGC consists of multiple novel steps that enable the computation of highly enriched modules in an unsupervised manner. But unlike all existing frameworks\, it further incorporates a novel step that leverages Gene Ontology information in a semi\-supervised clustering method that further improves the quality of the computed modules.


.. conda:package:: bioconductor-sgcp

   |downloads_bioconductor-sgcp| |docker_bioconductor-sgcp|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-annotate: ``>=1.78.0,<1.79.0``
   :depends bioconductor-genefilter: ``>=1.82.0,<1.83.0``
   :depends bioconductor-go.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-gostats: ``>=2.66.0,<2.67.0``
   :depends bioconductor-graph: ``>=1.78.0,<1.79.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-rgraphviz: ``>=2.44.0,<2.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-caret: 
   :depends r-desctools: 
   :depends r-dplyr: 
   :depends r-expm: 
   :depends r-ggplot2: 
   :depends r-ggridges: 
   :depends r-openxlsx: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rspectra: 
   :depends r-xtable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sgcp

   and update with::

      conda update bioconductor-sgcp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sgcp:<tag>

   (see `bioconductor-sgcp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sgcp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sgcp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sgcp
   :alt:   (downloads)
.. |docker_bioconductor-sgcp| image:: https://quay.io/repository/biocontainers/bioconductor-sgcp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sgcp
.. _`bioconductor-sgcp/tags`: https://quay.io/repository/biocontainers/bioconductor-sgcp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sgcp";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sgcp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sgcp/README.html