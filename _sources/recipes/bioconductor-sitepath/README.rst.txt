:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sitepath'
.. highlight: bash

bioconductor-sitepath
=====================

.. conda:recipe:: bioconductor-sitepath
   :replaces_section_title:

   Detection of sites with fixation of amino acid substitutions in protein evolution

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/sitePath.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-sitepath <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sitepath>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sitepath/meta.yaml>`_

   The package does hierarchical search for fixation events given multiple sequence alignment and phylogenetic tree. These fixation events can be specific to a phylogenetic lineages or shared by multiple lineages.


.. conda:package:: bioconductor-sitepath

   |downloads_bioconductor-sitepath| |docker_bioconductor-sitepath|

   :versions: 1.4.0-0, 1.2.1-0, 1.0.2-0
   
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-ape: 
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-rcpp: 
   :depends r-seqinr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sitepath

   and update with::

      conda update bioconductor-sitepath

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sitepath:<tag>

   (see `bioconductor-sitepath/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sitepath| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sitepath.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sitepath
   :alt:   (downloads)
.. |docker_bioconductor-sitepath| image:: https://quay.io/repository/biocontainers/bioconductor-sitepath/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sitepath
.. _`bioconductor-sitepath/tags`: https://quay.io/repository/biocontainers/bioconductor-sitepath?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sitepath/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sitepath/README.html