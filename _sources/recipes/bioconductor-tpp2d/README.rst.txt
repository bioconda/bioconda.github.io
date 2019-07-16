:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tpp2d'
.. highlight: bash

bioconductor-tpp2d
==================

.. conda:recipe:: bioconductor-tpp2d
   :replaces_section_title:

   FDR\-controlled analysis of 2D\-TPP experiments by functional analysis of dose\-response curves across temperatures.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/TPP2D.html
   :license: GPL-3
   :recipe: /`bioconductor-tpp2d <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tpp2d>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tpp2d/meta.yaml>`_

   


.. conda:package:: bioconductor-tpp2d

   |downloads_bioconductor-tpp2d| |docker_bioconductor-tpp2d|

   :versions: 1.0.0-1
   
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-openxlsx: 
   :depends r-rcurl: 
   :depends r-stringr: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tpp2d

   and update with::

      conda update bioconductor-tpp2d

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tpp2d:<tag>

   (see `bioconductor-tpp2d/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tpp2d| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tpp2d.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tpp2d
   :alt:   (downloads)
.. |docker_bioconductor-tpp2d| image:: https://quay.io/repository/biocontainers/bioconductor-tpp2d/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tpp2d
.. _`bioconductor-tpp2d/tags`: https://quay.io/repository/biocontainers/bioconductor-tpp2d?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tpp2d/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tpp2d/README.html