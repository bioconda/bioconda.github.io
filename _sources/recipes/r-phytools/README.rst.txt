.. title:: Package Recipe 'r-phytools'
.. highlight: bash


r-phytools
==========

.. conda:recipe:: r-phytools
   :replaces_section_title:

   A wide range of functions for phylogenetic analysis. Functionality is concentrated in phylogenetic comparative biology\, but also includes a diverse array of methods for visualizing\, manipulating\, reading or writing\, and even inferring phylogenetic trees and data. Included among the functions in phylogenetic comparative biology are various for ancestral state reconstruction\, model\-fitting\, simulation of phylogenies and data\, and multivariate analysis. There are a broad range of plotting methods for phylogenies and comparative data which include\, but are not restricted to\, methods for mapping trait evolution on trees\, for projecting trees into phenotypic space or a geographic map\, and for visualizing correlated speciation between trees. Finally\, there are a number of functions for reading\, writing\, analyzing\, inferring\, simulating\, and manipulating phylogenetic trees and comparative data not covered by other packages. For instance\, there are functions for randomly or non\-randomly attaching species or clades to a phylogeny\, for estimating supertrees or consensus phylogenies from a set\, for simulating trees and phylogenetic data under a range of models\, and for a wide variety of other manipulations and analyses that phylogenetic biologists might find useful in their research.

   :homepage: http://github.com/liamrevell/phytools
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-phytools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-phytools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-phytools/meta.yaml>`_

   


.. conda:package:: r-phytools

   |downloads_r-phytools| |docker_r-phytools|

   :versions: 0.6_60, 0.6_44

   :depends: :conda:package:`r-animation`  :conda:package:`r-ape` >=4.0 :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-clustergeneration`  :conda:package:`r-coda`  :conda:package:`r-combinat`  :conda:package:`r-expm`  :conda:package:`r-maps`  :conda:package:`r-mass`  :conda:package:`r-mnormt`  :conda:package:`r-nlme`  :conda:package:`r-numderiv`  :conda:package:`r-phangorn` >=2.3.1 :conda:package:`r-plotrix`  :conda:package:`r-scatterplot3d`  

   :required~by: |required_by_r-phytools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-phytools

   and update with::

      conda update r-phytools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-phytools


.. |required_by_r-phytools| conda:required_by:: r-phytools
.. |downloads_r-phytools| image:: https://img.shields.io/conda/dn/bioconda/r-phytools.svg?style=flat
   :alt:   (downloads)
.. |docker_r-phytools| image:: https://quay.io/repository/biocontainers/r-phytools/status
   :target: https://quay.io/repository/biocontainers/r-phytools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-phytools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-phytools/README.html

