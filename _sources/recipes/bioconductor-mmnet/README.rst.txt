:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mmnet'
.. highlight: bash

bioconductor-mmnet
==================

.. conda:recipe:: bioconductor-mmnet
   :replaces_section_title:

   This package gives the implementations microbiome metabolic network constructing and analyzing. It introduces a unique metagenomic systems biology approach\, mapping metagenomic data to the KEGG global metabolic pathway and constructing a systems\-level network. The system\-level network and the next topological analysis will be of great help to analysis the various functional properties\, including regulation and metabolic functionality of the metagenome.

   :homepage: http://bioconductor.org/packages/3.5/bioc/html/mmnet.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mmnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmnet/meta.yaml>`_
   :links: biotools: :biotools:`mmnet`, doi: :doi:`10.1155/2015/167249`

   


.. conda:package:: bioconductor-mmnet

   |downloads_bioconductor-mmnet| |docker_bioconductor-mmnet|

   :versions: 1.13.0-0
   
   :depends bioconductor-biobase: 
   :depends bioconductor-keggrest: 
   :depends r-base: 3.3.2*
   :depends r-biom: 
   :depends r-flexmix: 
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-plyr: 
   :depends r-rcurl: 
   :depends r-reshape2: 
   :depends r-rjsonio: 
   :depends r-stringr: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mmnet

   and update with::

      conda update bioconductor-mmnet

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mmnet:<tag>

   (see `bioconductor-mmnet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mmnet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mmnet.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mmnet| image:: https://quay.io/repository/biocontainers/bioconductor-mmnet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mmnet
.. _`bioconductor-mmnet/tags`: https://quay.io/repository/biocontainers/bioconductor-mmnet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mmnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mmnet/README.html