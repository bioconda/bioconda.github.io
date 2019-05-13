:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nem'
.. highlight: bash

bioconductor-nem
================

.. conda:recipe:: bioconductor-nem
   :replaces_section_title:

   The package \'nem\' allows to reconstruct features of pathways from the nested structure of perturbation effects. It takes as input \(1.\) a set of pathway components\, which were perturbed\, and \(2.\) phenotypic readout of these perturbations \(e.g. gene expression\, protein expression\). The output is a directed graph representing the phenotypic hierarchy.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/nem.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-nem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nem/meta.yaml>`_
   :links: biotools: :biotools:`nem`, doi: :doi:`10.1093/bioinformatics/btq385`

   


.. conda:package:: bioconductor-nem

   |downloads_bioconductor-nem| |docker_bioconductor-nem|

   :versions: 2.56.0-0, 2.54.0-0, 2.52.0-0, 2.50.0-0
   
   :depends bioconductor-graph: >=1.60.0,<1.61.0
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   :depends bioconductor-rbgl: >=1.58.0,<1.59.0
   :depends bioconductor-rgraphviz: >=2.26.0,<2.27.0
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-boot: 
   :depends r-e1071: 
   :depends r-plotrix: 
   :depends r-rcolorbrewer: 
   :depends r-statmod: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nem

   and update with::

      conda update bioconductor-nem

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nem:<tag>

   (see `bioconductor-nem/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nem| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nem.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nem
   :alt:   (downloads)
.. |docker_bioconductor-nem| image:: https://quay.io/repository/biocontainers/bioconductor-nem/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nem
.. _`bioconductor-nem/tags`: https://quay.io/repository/biocontainers/bioconductor-nem?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nem/README.html