:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-srgnet'
.. highlight: bash

bioconductor-srgnet
===================

.. conda:recipe:: bioconductor-srgnet
   :replaces_section_title:

   We developed SRGnet to analyze synergistic regulatory mechanisms in transcriptome profiles that act to enhance the overall cell response to combination of mutations\, drugs or environmental exposure. This package can be used to identify regulatory modules downstream of synergistic response genes\, prioritize synergistic regulatory genes that may be potential intervention targets\, and contextualize gene perturbation experiments.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SRGnet.html
   :license: GPL-2
   :recipe: /`bioconductor-srgnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-srgnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-srgnet/meta.yaml>`_

   


.. conda:package:: bioconductor-srgnet

   |downloads_bioconductor-srgnet| |docker_bioconductor-srgnet|

   :versions: 1.8.0-0
   
   :depends bioconductor-ebcoexpress: >=1.26.0,<1.27.0
   
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-dmwr: >=0.4.1
   
   :depends r-gbm: >=2.1.1
   
   :depends r-hmisc: 
   
   :depends r-igraph: 
   
   :depends r-mass: 
   
   :depends r-matrixstats: 
   
   :depends r-pvclust: >=2.0-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-srgnet

   and update with::

      conda update bioconductor-srgnet

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-srgnet:<tag>

   (see `bioconductor-srgnet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-srgnet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-srgnet.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-srgnet| image:: https://quay.io/repository/biocontainers/bioconductor-srgnet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-srgnet
.. _`bioconductor-srgnet/tags`: https://quay.io/repository/biocontainers/bioconductor-srgnet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-srgnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-srgnet/README.html