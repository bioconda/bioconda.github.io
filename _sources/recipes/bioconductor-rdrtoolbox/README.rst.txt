:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rdrtoolbox'
.. highlight: bash

bioconductor-rdrtoolbox
=======================

.. conda:recipe:: bioconductor-rdrtoolbox
   :replaces_section_title:

   A package for nonlinear dimension reduction using the Isomap and LLE algorithm. It also includes a routine for computing the Davis\-Bouldin\-Index for cluster validation\, a plotting tool and a data generator for microarray gene expression data and for the Swiss Roll dataset.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RDRToolbox.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-rdrtoolbox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rdrtoolbox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rdrtoolbox/meta.yaml>`_

   


.. conda:package:: bioconductor-rdrtoolbox

   |downloads_bioconductor-rdrtoolbox| |docker_bioconductor-rdrtoolbox|

   :versions: 1.32.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-mass: 
   :depends r-rgl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rdrtoolbox

   and update with::

      conda update bioconductor-rdrtoolbox

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rdrtoolbox:<tag>

   (see `bioconductor-rdrtoolbox/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rdrtoolbox| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rdrtoolbox.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rdrtoolbox| image:: https://quay.io/repository/biocontainers/bioconductor-rdrtoolbox/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rdrtoolbox
.. _`bioconductor-rdrtoolbox/tags`: https://quay.io/repository/biocontainers/bioconductor-rdrtoolbox?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rdrtoolbox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rdrtoolbox/README.html