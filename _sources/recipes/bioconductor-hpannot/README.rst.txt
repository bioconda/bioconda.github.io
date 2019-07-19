:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hpannot'
.. highlight: bash

bioconductor-hpannot
====================

.. conda:recipe:: bioconductor-hpannot
   :replaces_section_title:

   Package containing example and annotation data for Hipathia package. Hipathia is a method for the computation of signal transduction along signaling pathways from transcriptomic data. The method is based on an iterative algorithm which is able to compute the signal intensity passing through the nodes of a network by taking into account the level of expression of each gene and the intensity of the signal arriving to it. It also provides a new approach to functional analysis allowing to compute the signal arriving to the functions annotated to each pathway. Hipathia depends on this package to be functional.

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/hpAnnot.html
   :license: GPL-2
   :recipe: /`bioconductor-hpannot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hpannot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hpannot/meta.yaml>`_

   


.. conda:package:: bioconductor-hpannot

   |downloads_bioconductor-hpannot| |docker_bioconductor-hpannot|

   :versions: 1.0.1-1, 1.0.1-0
   
   :depends curl: >=7.65.2,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hpannot

   and update with::

      conda update bioconductor-hpannot

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hpannot:<tag>

   (see `bioconductor-hpannot/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hpannot| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hpannot.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hpannot
   :alt:   (downloads)
.. |docker_bioconductor-hpannot| image:: https://quay.io/repository/biocontainers/bioconductor-hpannot/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hpannot
.. _`bioconductor-hpannot/tags`: https://quay.io/repository/biocontainers/bioconductor-hpannot?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hpannot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hpannot/README.html