:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-connectivitymap'
.. highlight: bash

bioconductor-connectivitymap
============================

.. conda:recipe:: bioconductor-connectivitymap
   :replaces_section_title:

   The Broad Institute\'s Connectivity Map \(cmap02\) is a \"large reference catalogue of gene\-expression data from cultured human cells perturbed with many chemicals and genetic reagents\"\, containing more than 7000 gene expression profiles and 1300 small molecules.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/ConnectivityMap.html
   :license: GPL-3
   :recipe: /`bioconductor-connectivitymap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-connectivitymap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-connectivitymap/meta.yaml>`_

   


.. conda:package:: bioconductor-connectivitymap

   |downloads_bioconductor-connectivitymap| |docker_bioconductor-connectivitymap|

   :versions: 1.18.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-connectivitymap

   and update with::

      conda update bioconductor-connectivitymap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-connectivitymap:<tag>

   (see `bioconductor-connectivitymap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-connectivitymap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-connectivitymap.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-connectivitymap| image:: https://quay.io/repository/biocontainers/bioconductor-connectivitymap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-connectivitymap
.. _`bioconductor-connectivitymap/tags`: https://quay.io/repository/biocontainers/bioconductor-connectivitymap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-connectivitymap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-connectivitymap/README.html