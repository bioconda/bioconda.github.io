:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-phosr'
.. highlight: bash

bioconductor-phosr
==================

.. conda:recipe:: bioconductor-phosr
   :replaces_section_title:
   :noindex:

   A set of methods and tools for comprehensive analysis of phosphoproteomics data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/PhosR.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-phosr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phosr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phosr/meta.yaml>`_

   PhosR is a package for the comprenhensive analysis of phosphoproteomic data. There are two major components to PhosR\: processing and downstream analysis. PhosR consists of various processing tools for phosphoproteomics data including filtering\, imputation\, normalisation\, and functional analysis for inferring active kinases and signalling pathways.


.. conda:package:: bioconductor-phosr

   |downloads_bioconductor-phosr| |docker_bioconductor-phosr|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-limma: ``>=3.50.0,<3.51.0``
   :depends bioconductor-pcamethods: ``>=1.86.0,<1.87.0``
   :depends bioconductor-preprocesscore: ``>=1.56.0,<1.57.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-circlize: 
   :depends r-dendextend: 
   :depends r-dplyr: 
   :depends r-e1071: 
   :depends r-ggally: 
   :depends r-ggdendro: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-ggtext: 
   :depends r-igraph: 
   :depends r-network: 
   :depends r-pheatmap: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-ruv: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-phosr

   and update with::

      conda update bioconductor-phosr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-phosr:<tag>

   (see `bioconductor-phosr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-phosr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phosr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-phosr
   :alt:   (downloads)
.. |docker_bioconductor-phosr| image:: https://quay.io/repository/biocontainers/bioconductor-phosr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phosr
.. _`bioconductor-phosr/tags`: https://quay.io/repository/biocontainers/bioconductor-phosr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-phosr";
        var versions = ["1.4.0","1.2.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phosr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phosr/README.html