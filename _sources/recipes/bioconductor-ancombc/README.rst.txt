:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ancombc'
.. highlight: bash

bioconductor-ancombc
====================

.. conda:recipe:: bioconductor-ancombc
   :replaces_section_title:
   :noindex:

   Analysis of compositions of microbiomes with bias correction

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/ANCOMBC.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ancombc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ancombc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ancombc/meta.yaml>`_

   ANCOMBC is a package for normalizing the microbial observed abundance data due to unequal sampling fractions across samples\, and identifying taxa \(e.g. phyla\, families\, genera\, species\, etc.\) that are differentially abundant with respect to the covariate of interest \(e.g. study groups\) between two or more groups of multiple samples.


.. conda:package:: bioconductor-ancombc

   |downloads_bioconductor-ancombc| |docker_bioconductor-ancombc|

   :versions:
      
      

      ``2.0.1-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.5-0``,  ``1.0.0-2``

      

   
   :depends bioconductor-mia: ``>=1.6.0,<1.7.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-singlecellexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-treesummarizedexperiment: ``>=2.6.0,<2.7.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-cvxr: 
   :depends r-desctools: 
   :depends r-doparallel: 
   :depends r-dorng: 
   :depends r-dplyr: 
   :depends r-emmeans: 
   :depends r-energy: 
   :depends r-foreach: 
   :depends r-hmisc: 
   :depends r-lme4: 
   :depends r-lmertest: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-nloptr: 
   :depends r-rdpack: 
   :depends r-rlang: 
   :depends r-rngtools: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ancombc

   and update with::

      conda update bioconductor-ancombc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ancombc:<tag>

   (see `bioconductor-ancombc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ancombc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ancombc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ancombc
   :alt:   (downloads)
.. |docker_bioconductor-ancombc| image:: https://quay.io/repository/biocontainers/bioconductor-ancombc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ancombc
.. _`bioconductor-ancombc/tags`: https://quay.io/repository/biocontainers/bioconductor-ancombc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ancombc";
        var versions = ["2.0.1","1.4.0","1.2.0","1.0.5","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ancombc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ancombc/README.html