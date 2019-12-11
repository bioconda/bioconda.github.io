:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coinfinder'
.. highlight: bash

coinfinder
==========

.. conda:recipe:: coinfinder
   :replaces_section_title:

   A tool for the identification of coincident \(associating and dissociating\) genes in pangenomes.

   :homepage: https://github.com/fwhelan/coinfinder
   :license: GPL / GPLv3
   :recipe: /`coinfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coinfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coinfinder/meta.yaml>`_
   :links: https: :https:`//doi.org/10.1101/859371`

   


.. conda:package:: coinfinder

   |downloads_coinfinder| |docker_coinfinder|

   :versions: 1.0.1-0, 1.0.0-3, 1.0.0-2, 1.0.0-1, 1.0.0-0
   
   :depends bioconductor-ggtree: 
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends openmp: 
   :depends python: >=3.6,<3.7.0a0
   :depends r-ape: 
   :depends r-base: 
   :depends r-caper: 
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-flock: 
   :depends r-future: 
   :depends r-getopt: 
   :depends r-ggplot2: >=3.0.0
   :depends r-ggraph: 
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-phytools: 
   :depends r-purrr: 
   :depends r-rlang: 
   :depends r-rvcheck: 
   :depends r-tidyr: 
   :depends r-tidytree: >=0.2.6
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install coinfinder

   and update with::

      conda update coinfinder

   or use the docker container::

      docker pull quay.io/biocontainers/coinfinder:<tag>

   (see `coinfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_coinfinder| image:: https://img.shields.io/conda/dn/bioconda/coinfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/coinfinder
   :alt:   (downloads)
.. |docker_coinfinder| image:: https://quay.io/repository/biocontainers/coinfinder/status
   :target: https://quay.io/repository/biocontainers/coinfinder
.. _`coinfinder/tags`: https://quay.io/repository/biocontainers/coinfinder?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coinfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coinfinder/README.html