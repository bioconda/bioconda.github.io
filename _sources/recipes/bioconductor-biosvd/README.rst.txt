:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biosvd'
.. highlight: bash

bioconductor-biosvd
===================

.. conda:recipe:: bioconductor-biosvd
   :replaces_section_title:

   The biosvd package contains functions to reduce the input data set from the feature x assay space to the reduced diagonalized eigenfeature x eigenassay space\, with the eigenfeatures and eigenassays unique orthonormal superpositions of the features and assays\, respectively. Results of SVD applied to the data can subsequently be inspected based on generated graphs\, such as a heatmap of the eigenfeature x assay matrix and a bar plot with the eigenexpression fractions of all eigenfeatures. These graphs aid in deciding which eigenfeatures and eigenassays to filter out \(i.e.\, eigenfeatures representing steady state\, noise\, or experimental artifacts\; or when applied to the variance in the data\, eigenfeatures representing steady\-scale variance\). After possible removal of steady state expression\, steady\-scale variance\, noise and experimental artifacts\, and after re\-applying SVD to the normalized data\, a summary html report of the eigensystem is generated\, containing among others polar plots of the assays and features\, a table with the list of features sortable according to their coordinates\, radius and phase in the polar plot\, and a visualization of the data sorted according to the two selected eigenfeatures and eigenassays with colored feature\/assay annotation information when provided. This gives a global picture of the dynamics of expression\/intensity levels\, in which individual features and assays are classified in groups of similar regulation and function or similar cellular state and biological phenotype.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/biosvd.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biosvd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biosvd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biosvd/meta.yaml>`_
   :links: biotools: :biotools:`biosvd`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-biosvd

   |downloads_bioconductor-biosvd| |docker_bioconductor-biosvd|

   :versions: 2.18.0-0, 2.16.0-0, 2.14.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-nmf: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biosvd

   and update with::

      conda update bioconductor-biosvd

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biosvd:<tag>

   (see `bioconductor-biosvd/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biosvd| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biosvd.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-biosvd| image:: https://quay.io/repository/biocontainers/bioconductor-biosvd/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biosvd
.. _`bioconductor-biosvd/tags`: https://quay.io/repository/biocontainers/bioconductor-biosvd?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biosvd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biosvd/README.html