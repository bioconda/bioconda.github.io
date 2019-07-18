:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirsynergy'
.. highlight: bash

bioconductor-mirsynergy
=======================

.. conda:recipe:: bioconductor-mirsynergy
   :replaces_section_title:

   Detect synergistic miRNA regulatory modules by overlapping neighbourhood expansion.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/Mirsynergy.html
   :license: GPL-2
   :recipe: /`bioconductor-mirsynergy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirsynergy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirsynergy/meta.yaml>`_
   :links: biotools: :biotools:`mirsynergy`

   


.. conda:package:: bioconductor-mirsynergy

   |downloads_bioconductor-mirsynergy| |docker_bioconductor-mirsynergy|

   :versions: 1.20.0-1, 1.20.0-0, 1.18.0-0, 1.16.0-0, 1.14.0-0, 1.12.0-0
   
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-rcolorbrewer: 
   :depends r-reshape: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mirsynergy

   and update with::

      conda update bioconductor-mirsynergy

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirsynergy:<tag>

   (see `bioconductor-mirsynergy/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirsynergy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirsynergy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirsynergy
   :alt:   (downloads)
.. |docker_bioconductor-mirsynergy| image:: https://quay.io/repository/biocontainers/bioconductor-mirsynergy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirsynergy
.. _`bioconductor-mirsynergy/tags`: https://quay.io/repository/biocontainers/bioconductor-mirsynergy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirsynergy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirsynergy/README.html