:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-stategra'
.. highlight: bash

bioconductor-stategra
=====================

.. conda:recipe:: bioconductor-stategra
   :replaces_section_title:

   Classes and tools for multi\-omics data integration.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/STATegRa.html
   :license: GPL-2
   :recipe: /`bioconductor-stategra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stategra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stategra/meta.yaml>`_
   :links: biotools: :biotools:`stategra`, doi: :doi:`10.14806/ej.20.a.768`

   


.. conda:package:: bioconductor-stategra

   |downloads_bioconductor-stategra| |docker_bioconductor-stategra|

   :versions: 1.18.0-0, 1.16.1-0, 1.12.0-0, 1.10.0-0
   
   :depends bioconductor-affy: >=1.60.0,<1.61.0
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-edger: >=3.24.0,<3.25.0
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-calibrate: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-gridextra: 
   :depends r-mass: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-stategra

   and update with::

      conda update bioconductor-stategra

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-stategra:<tag>

   (see `bioconductor-stategra/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-stategra| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-stategra.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-stategra
   :alt:   (downloads)
.. |docker_bioconductor-stategra| image:: https://quay.io/repository/biocontainers/bioconductor-stategra/status
   :target: https://quay.io/repository/biocontainers/bioconductor-stategra
.. _`bioconductor-stategra/tags`: https://quay.io/repository/biocontainers/bioconductor-stategra?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-stategra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-stategra/README.html