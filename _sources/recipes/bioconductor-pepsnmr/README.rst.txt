.. title:: Package Recipe 'bioconductor-pepsnmr'
.. highlight: bash


bioconductor-pepsnmr
====================

.. conda:recipe:: bioconductor-pepsnmr
   :replaces_section_title:

   This package provides R functions for common pre\-procssing steps that are applied on 1H\-NMR data. It also provides a function to read the FID signals directly in the Bruker format.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/PepsNMR.html
   :license: GPL-2 | file LICENSE
   :recipe: /`bioconductor-pepsnmr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pepsnmr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pepsnmr/meta.yaml>`_

   


.. conda:package:: bioconductor-pepsnmr

   |downloads_bioconductor-pepsnmr| |docker_bioconductor-pepsnmr|

   :versions: 1.0.1

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-gridextra`  :conda:package:`r-matrix`  :conda:package:`r-matrixstats`  :conda:package:`r-ptw`  :conda:package:`r-reshape2`  

   :required~by: |required_by_bioconductor-pepsnmr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pepsnmr

   and update with::

      conda update bioconductor-pepsnmr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-pepsnmr


.. |required_by_bioconductor-pepsnmr| conda:required_by:: bioconductor-pepsnmr
.. |downloads_bioconductor-pepsnmr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pepsnmr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pepsnmr| image:: https://quay.io/repository/biocontainers/bioconductor-pepsnmr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pepsnmr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pepsnmr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pepsnmr/README.html

