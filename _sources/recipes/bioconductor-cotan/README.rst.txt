:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cotan'
.. highlight: bash

bioconductor-cotan
==================

.. conda:recipe:: bioconductor-cotan
   :replaces_section_title:
   :noindex:

   COexpression Tables ANalysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/COTAN.html
   :license: GPL-3
   :recipe: /`bioconductor-cotan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cotan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cotan/meta.yaml>`_

   Statistical and computational method to analyze the co\-expression of gene pairs at single cell level. It provides the foundation for single\-cell gene interactome analysis. The basic idea is studying the zero UMI counts\' distribution instead of focusing on positive counts\; this is done with a generalized contingency tables framework. COTAN can effectively assess the correlated or anti\-correlated expression of gene pairs. It provides a numerical index related to the correlation and an approximate p\-value for the associated independence test. COTAN can also evaluate whether single genes are differentially expressed\, scoring them with a newly defined global differentiation index. Moreover\, this approach provides ways to plot and cluster genes according to their co\-expression pattern with other genes\, effectively helping the study of gene interactions and becoming a new tool to identify cell\-identity marker genes.


.. conda:package:: bioconductor-cotan

   |downloads_bioconductor-cotan| |docker_bioconductor-cotan|

   :versions:
      
      

      ``2.0.4-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-complexheatmap: ``>=2.16.0,<2.17.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-dendextend: 
   :depends r-dplyr: 
   :depends r-factoextra: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-ggthemes: 
   :depends r-irlba: 
   :depends r-matrix: 
   :depends r-parallelly: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-rfast: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-seurat: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-umap: 
   :depends r-withr: 
   :depends r-zeallot: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cotan

   and update with::

      conda update bioconductor-cotan

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cotan:<tag>

   (see `bioconductor-cotan/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cotan| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cotan.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cotan
   :alt:   (downloads)
.. |docker_bioconductor-cotan| image:: https://quay.io/repository/biocontainers/bioconductor-cotan/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cotan
.. _`bioconductor-cotan/tags`: https://quay.io/repository/biocontainers/bioconductor-cotan?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cotan";
        var versions = ["2.0.4","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cotan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cotan/README.html