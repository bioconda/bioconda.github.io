:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-coregnet'
.. highlight: bash

bioconductor-coregnet
=====================

.. conda:recipe:: bioconductor-coregnet
   :replaces_section_title:

   This package provides methods to identify active transcriptional programs. Methods and classes are provided to import or infer large scale co\-regulatory network from transcriptomic data. The specificity of the encoded networks is to model Transcription Factor cooperation. External regulation evidences \(TFBS\, ChIP\,...\) can be integrated to assess the inferred network and refine it if necessary. Transcriptional activity of the regulators in the network can be estimated using an measure of their influence in a given sample. Finally\, an interactive UI can be used to navigate through the network of cooperative regulators and to visualize their activity in a specific sample or subgroup sample. The proposed visualization tool can be used to integrate gene expression\, transcriptional activity\, copy number status\, sample classification and a transcriptional network including co\-regulation information.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CoRegNet.html
   :license: GPL-3
   :recipe: /`bioconductor-coregnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coregnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coregnet/meta.yaml>`_

   


.. conda:package:: bioconductor-coregnet

   |downloads_bioconductor-coregnet| |docker_bioconductor-coregnet|

   :versions: 1.20.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends r-arules: 
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-igraph: 
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-coregnet

   and update with::

      conda update bioconductor-coregnet

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-coregnet:<tag>

   (see `bioconductor-coregnet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-coregnet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-coregnet.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-coregnet| image:: https://quay.io/repository/biocontainers/bioconductor-coregnet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-coregnet
.. _`bioconductor-coregnet/tags`: https://quay.io/repository/biocontainers/bioconductor-coregnet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-coregnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-coregnet/README.html