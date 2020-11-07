:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hipathia'
.. highlight: bash

bioconductor-hipathia
=====================

.. conda:recipe:: bioconductor-hipathia
   :replaces_section_title:
   :noindex:

   HiPathia\: High\-throughput Pathway Analysis

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/hipathia.html
   :license: GPL-2
   :recipe: /`bioconductor-hipathia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hipathia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hipathia/meta.yaml>`_

   Hipathia is a method for the computation of signal transduction along signaling pathways from transcriptomic data. The method is based on an iterative algorithm which is able to compute the signal intensity passing through the nodes of a network by taking into account the level of expression of each gene and the intensity of the signal arriving to it. It also provides a new approach to functional analysis allowing to compute the signal arriving to the functions annotated to each pathway.


.. conda:package:: bioconductor-hipathia

   |downloads_bioconductor-hipathia| |docker_bioconductor-hipathia|

   :versions:
      
      

      ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-1``,  ``1.3.1-0``

      

   
   :depends bioconductor-annotationhub: ``>=2.22.0,<2.23.0``
   :depends bioconductor-delayedarray: ``>=0.16.0,<0.17.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-multiassayexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-preprocesscore: ``>=1.52.0,<1.53.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-coin: 
   :depends r-igraph: ``>=1.0.1``
   :depends r-matrixstats: 
   :depends r-servr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hipathia

   and update with::

      conda update bioconductor-hipathia

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hipathia:<tag>

   (see `bioconductor-hipathia/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hipathia| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hipathia.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hipathia
   :alt:   (downloads)
.. |docker_bioconductor-hipathia| image:: https://quay.io/repository/biocontainers/bioconductor-hipathia/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hipathia
.. _`bioconductor-hipathia/tags`: https://quay.io/repository/biocontainers/bioconductor-hipathia?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hipathia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hipathia/README.html