:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-adegenet'
.. highlight: bash

r-adegenet
==========

.. conda:recipe:: r-adegenet
   :replaces_section_title:

   Toolset for the exploration of genetic and genomic data. Adegenet provides formal \(S4\) classes for storing and handling various genetic data\, including genetic markers with varying ploidy and hierarchical population structure \(\'genind\' class\)\, alleles counts by populations \(\'genpop\'\)\, and genome\-wide SNP data \(\'genlight\'\). It also implements original multivariate methods \(DAPC\, sPCA\)\, graphics\, statistical tests\, simulation tools\, distance and similarity measures\, and several spatial methods. A range of both empirical and simulated datasets is also provided to illustrate various methods.

   :homepage: https://github.com/thibautjombart/adegenet
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-adegenet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-adegenet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-adegenet/meta.yaml>`_

   


.. conda:package:: r-adegenet

   |downloads_r-adegenet| |docker_r-adegenet|

   :versions: 2.1.1-1, 2.1.1-0, 2.1.0-0
   
   :depends r-ade4: 
   
   :depends r-ape: 
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-boot: 
   
   :depends r-dplyr: >=0.4.1
   
   :depends r-ggplot2: 
   
   :depends r-igraph: 
   
   :depends r-mass: 
   
   :depends r-reshape2: 
   
   :depends r-seqinr: 
   
   :depends r-shiny: 
   
   :depends r-spdep: 
   
   :depends r-vegan: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-adegenet

   and update with::

      conda update r-adegenet

   or use the docker container::

      docker pull quay.io/biocontainers/r-adegenet:<tag>

   (see `r-adegenet/tags`_ for valid values for ``<tag>``)


.. |downloads_r-adegenet| image:: https://img.shields.io/conda/dn/bioconda/r-adegenet.svg?style=flat
   :alt:   (downloads)
.. |docker_r-adegenet| image:: https://quay.io/repository/biocontainers/r-adegenet/status
   :target: https://quay.io/repository/biocontainers/r-adegenet
.. _`r-adegenet/tags`: https://quay.io/repository/biocontainers/r-adegenet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-adegenet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-adegenet/README.html