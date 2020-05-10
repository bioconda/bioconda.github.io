:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-treeio'
.. highlight: bash

bioconductor-treeio
===================

.. conda:recipe:: bioconductor-treeio
   :replaces_section_title:

   Base Classes and Functions for Phylogenetic Tree Input and Output

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/treeio.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-treeio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-treeio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-treeio/meta.yaml>`_

   \'treeio\' is an R package to make it easier to import and store phylogenetic tree with associated data\; and to link external data from different sources to phylogeny. It also supports exporting phylogenetic tree with heterogeneous associated data to a single tree file and can be served as a platform for merging tree with associated data and converting file formats.


.. conda:package:: bioconductor-treeio

   |downloads_bioconductor-treeio| |docker_bioconductor-treeio|

   :versions: 1.12.0-0, 1.10.0-0, 1.8.1-0, 1.8.0-0, 1.6.2-0, 1.6.1-0, 1.4.3-0, 1.2.1-0, 1.2.0-0, 1.0.2-0
   
   :depends r-ape: 
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-dplyr: 
   :depends r-jsonlite: 
   :depends r-magrittr: 
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidytree: >=0.2.6
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-treeio

   and update with::

      conda update bioconductor-treeio

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-treeio:<tag>

   (see `bioconductor-treeio/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-treeio| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-treeio.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-treeio
   :alt:   (downloads)
.. |docker_bioconductor-treeio| image:: https://quay.io/repository/biocontainers/bioconductor-treeio/status
   :target: https://quay.io/repository/biocontainers/bioconductor-treeio
.. _`bioconductor-treeio/tags`: https://quay.io/repository/biocontainers/bioconductor-treeio?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-treeio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-treeio/README.html