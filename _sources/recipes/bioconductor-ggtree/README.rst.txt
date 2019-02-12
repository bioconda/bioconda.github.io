:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ggtree'
.. highlight: bash

bioconductor-ggtree
===================

.. conda:recipe:: bioconductor-ggtree
   :replaces_section_title:

   \'ggtree\' extends the \'ggplot2\' plotting system which implemented the grammar of graphics. \'ggtree\' is designed for visualization and annotation of phylogenetic trees with their covariates and other associated data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ggtree.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ggtree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggtree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggtree/meta.yaml>`_
   :links: biotools: :biotools:`ggtree`, doi: :doi:`10.1111/2041-210X.12628`

   


.. conda:package:: bioconductor-ggtree

   |downloads_bioconductor-ggtree| |docker_bioconductor-ggtree|

   :versions: 1.14.4-0, 1.12.7-0, 1.10.0-0, 1.8.2-0, 1.4.20-0, 1.2.12-0
   
   :depends bioconductor-treeio: >=1.6.0,<1.7.0
   
   :depends r-ape: 
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-dplyr: 
   
   :depends r-ggplot2: >=3.0.0
   
   :depends r-magrittr: 
   
   :depends r-purrr: 
   
   :depends r-rlang: 
   
   :depends r-rvcheck: >=0.1.0
   
   :depends r-scales: 
   
   :depends r-tibble: 
   
   :depends r-tidyr: 
   
   :depends r-tidytree: >=0.1.9
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ggtree

   and update with::

      conda update bioconductor-ggtree

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ggtree:<tag>

   (see `bioconductor-ggtree/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ggtree| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ggtree.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ggtree| image:: https://quay.io/repository/biocontainers/bioconductor-ggtree/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ggtree
.. _`bioconductor-ggtree/tags`: https://quay.io/repository/biocontainers/bioconductor-ggtree?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ggtree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ggtree/README.html