:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-microbiotaprocess'
.. highlight: bash

bioconductor-microbiotaprocess
==============================

.. conda:recipe:: bioconductor-microbiotaprocess
   :replaces_section_title:
   :noindex:

   A comprehensive R package for managing and analyzing microbiome and other ecological data within the tidy framework

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MicrobiotaProcess.html
   :license: GPL (>= 3.0)
   :recipe: /`bioconductor-microbiotaprocess <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiotaprocess>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiotaprocess/meta.yaml>`_

   MicrobiotaProcess is an R package for analysis\, visualization and biomarker discovery of microbial datasets. It introduces MPSE class\, this make it more interoperable with the existing computing ecosystem. Moreover\, it introduces a tidy microbiome data structure paradigm and analysis grammar. It provides a wide variety of microbiome data analysis procedures under the unified and common framework \(tidy\-like framework\).


.. conda:package:: bioconductor-microbiotaprocess

   |downloads_bioconductor-microbiotaprocess| |docker_bioconductor-microbiotaprocess|

   :versions:
      
      

      ``1.12.2-0``,  ``1.10.0-0``,  ``1.6.1-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.3-0``

      

   
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-ggtree: ``>=3.8.0,<3.9.0``
   :depends bioconductor-ggtreeextra: ``>=1.10.0,<1.11.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-treeio: ``>=1.24.0,<1.25.0``
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cli: 
   :depends r-coin: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-dtplyr: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-ggsignif: 
   :depends r-ggstar: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-patchwork: 
   :depends r-pillar: 
   :depends r-plyr: 
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :depends r-tidytree: ``>=0.4.2``
   :depends r-vegan: 
   :depends r-zoo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-microbiotaprocess

   and update with::

      conda update bioconductor-microbiotaprocess

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-microbiotaprocess:<tag>

   (see `bioconductor-microbiotaprocess/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-microbiotaprocess| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-microbiotaprocess.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-microbiotaprocess
   :alt:   (downloads)
.. |docker_bioconductor-microbiotaprocess| image:: https://quay.io/repository/biocontainers/bioconductor-microbiotaprocess/status
   :target: https://quay.io/repository/biocontainers/bioconductor-microbiotaprocess
.. _`bioconductor-microbiotaprocess/tags`: https://quay.io/repository/biocontainers/bioconductor-microbiotaprocess?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-microbiotaprocess";
        var versions = ["1.12.2","1.10.0","1.6.1","1.4.0","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-microbiotaprocess/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-microbiotaprocess/README.html