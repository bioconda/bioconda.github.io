.. title:: Package Recipe 'bioconductor-suprahex'
.. highlight: bash


bioconductor-suprahex
=====================

.. conda:recipe:: bioconductor-suprahex
   :replaces_section_title:

   A supra\-hexagonal map is a giant hexagon on a 2\-dimensional grid seamlessly consisting of smaller hexagons. It is supposed to train\, analyse and visualise a high\-dimensional omics input data. The supraHex is able to carry out gene clustering\/meta\-clustering and sample correlation\, plus intuitive visualisations to facilitate exploratory analysis. More importantly\, it allows for overlaying additional data onto the trained map to explore relations between input and additional data. So with supraHex\, it is also possible to carry out multilayer omics data comparisons. Newly added utilities are advanced heatmap visualisation and tree\-based analysis of sample relationships. Uniquely to this package\, users can ultrafastly understand any tabular omics data\, both scientifically and artistically\, especially in a sample\-specific fashion but without loss of information on large genes.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/supraHex.html
   :license: GPL-2
   :recipe: /`bioconductor-suprahex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-suprahex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-suprahex/meta.yaml>`_
   :links: biotools: :biotools:`suprahex`

   


.. conda:package:: bioconductor-suprahex

   |downloads_bioconductor-suprahex| |docker_bioconductor-suprahex|

   :versions: 1.20.0, 1.18.0, 1.16.0, 1.14.0

   :depends: :conda:package:`r-ape`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-hexbin`  :conda:package:`r-mass`  

   :required~by: |required_by_bioconductor-suprahex|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-suprahex

   and update with::

      conda update bioconductor-suprahex

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-suprahex


.. |required_by_bioconductor-suprahex| conda:required_by:: bioconductor-suprahex
.. |downloads_bioconductor-suprahex| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-suprahex.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-suprahex| image:: https://quay.io/repository/biocontainers/bioconductor-suprahex/status
   :target: https://quay.io/repository/biocontainers/bioconductor-suprahex







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-suprahex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-suprahex/README.html

