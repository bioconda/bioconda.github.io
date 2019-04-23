:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scfind'
.. highlight: bash

bioconductor-scfind
===================

.. conda:recipe:: bioconductor-scfind
   :replaces_section_title:

   Recently a very large collection of single\-cell RNA\-seq \(scRNA\-seq\) datasets has been generated and publicly released. For the collection to be useful\, the information must be organized in a way that supports queries that are relevant to researchers. \`scfind\` builds an index from scRNA\-seq datasets which organizes the information in a suitable and compact manner so that the datasets can be very efficiently searched for either cells or cell types in which a given list of genes is expressed.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/scfind.html
   :license: GPL-3
   :recipe: /`bioconductor-scfind <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scfind>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scfind/meta.yaml>`_

   


.. conda:package:: bioconductor-scfind

   |downloads_bioconductor-scfind| |docker_bioconductor-scfind|

   :versions: 1.4.0-0
   
   :depends bioconductor-singlecellexperiment: >=1.4.0,<1.5.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-bit: 
   :depends r-dplyr: 
   :depends r-hash: 
   :depends r-rcpp: >=0.12.12
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scfind

   and update with::

      conda update bioconductor-scfind

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scfind:<tag>

   (see `bioconductor-scfind/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scfind| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scfind.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-scfind| image:: https://quay.io/repository/biocontainers/bioconductor-scfind/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scfind
.. _`bioconductor-scfind/tags`: https://quay.io/repository/biocontainers/bioconductor-scfind?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scfind/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scfind/README.html