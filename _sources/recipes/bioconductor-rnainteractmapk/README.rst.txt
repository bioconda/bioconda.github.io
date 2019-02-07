.. title:: Package Recipe 'bioconductor-rnainteractmapk'
.. highlight: bash


bioconductor-rnainteractmapk
============================

.. conda:recipe:: bioconductor-rnainteractmapk
   :replaces_section_title:

   This package includes all data used in the paper \-Mapping of Signalling Networks through Synthetic Genetic Interaction Analysis by RNAi\- by Horn\, Sandmann\, Fischer et al..\, Nat. Methods\, 2011. The package vignette shows the R code to reproduce all figures in the paper.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/RNAinteractMAPK.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rnainteractmapk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnainteractmapk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnainteractmapk/meta.yaml>`_

   


.. conda:package:: bioconductor-rnainteractmapk

   |downloads_bioconductor-rnainteractmapk| |docker_bioconductor-rnainteractmapk|

   :versions: 1.20.0

   :depends: :conda:package:`bioconductor-genefilter` >=1.64.0,<1.65.0 :conda:package:`bioconductor-rnainteract` >=1.30.0,<1.31.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-fields`  :conda:package:`r-gdata`  :conda:package:`r-mass`  :conda:package:`r-sparselda`  :conda:package:`wget`  

   :required~by: |required_by_bioconductor-rnainteractmapk|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rnainteractmapk

   and update with::

      conda update bioconductor-rnainteractmapk

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rnainteractmapk


.. |required_by_bioconductor-rnainteractmapk| conda:required_by:: bioconductor-rnainteractmapk
.. |downloads_bioconductor-rnainteractmapk| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnainteractmapk.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rnainteractmapk| image:: https://quay.io/repository/biocontainers/bioconductor-rnainteractmapk/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnainteractmapk







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnainteractmapk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnainteractmapk/README.html

