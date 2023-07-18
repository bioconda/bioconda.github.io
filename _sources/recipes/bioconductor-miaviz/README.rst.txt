:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-miaviz'
.. highlight: bash

bioconductor-miaviz
===================

.. conda:recipe:: bioconductor-miaviz
   :replaces_section_title:
   :noindex:

   Microbiome Analysis Plotting and Visualization

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/miaViz.html
   :license: Artistic-2.0 | file LICENSE
   :recipe: /`bioconductor-miaviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-miaviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-miaviz/meta.yaml>`_

   The miaViz package implements plotting function to work with TreeSummarizedExperiment and related objects in a context of microbiome analysis. Among others this includes plotting tree\, graph and microbiome series data. The package is part of the broader miaverse framework.


.. conda:package:: bioconductor-miaviz

   |downloads_bioconductor-miaviz| |docker_bioconductor-miaviz|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-delayedarray: ``>=0.26.0,<0.27.0``
   :depends bioconductor-dirichletmultinomial: ``>=1.42.0,<1.43.0``
   :depends bioconductor-ggtree: ``>=3.8.0,<3.9.0``
   :depends bioconductor-mia: ``>=1.8.0,<1.9.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-scater: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-treesummarizedexperiment: ``>=2.8.0,<2.9.0``
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggnewscale: 
   :depends r-ggplot2: 
   :depends r-ggraph: ``>=2.0``
   :depends r-purrr: 
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidygraph: 
   :depends r-tidyr: 
   :depends r-tidytree: 
   :depends r-viridis: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-miaviz

   and update with::

      conda update bioconductor-miaviz

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-miaviz:<tag>

   (see `bioconductor-miaviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-miaviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-miaviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-miaviz
   :alt:   (downloads)
.. |docker_bioconductor-miaviz| image:: https://quay.io/repository/biocontainers/bioconductor-miaviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-miaviz
.. _`bioconductor-miaviz/tags`: https://quay.io/repository/biocontainers/bioconductor-miaviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-miaviz";
        var versions = ["1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-miaviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-miaviz/README.html