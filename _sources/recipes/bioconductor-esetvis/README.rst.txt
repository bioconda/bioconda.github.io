:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-esetvis'
.. highlight: bash

bioconductor-esetvis
====================

.. conda:recipe:: bioconductor-esetvis
   :replaces_section_title:

   Visualizations of expressionSet Bioconductor object

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/esetVis.html
   :license: GPL-3
   :recipe: /`bioconductor-esetvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-esetvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-esetvis/meta.yaml>`_
   :links: biotools: :biotools:`esetvis`, doi: :doi:`10.1038/nmeth.3252`

   Utility functions for visualization of expressionSet \(or SummarizedExperiment\) Bioconductor object\, including spectral map\, tsne and linear discriminant analysis. Static plot via the ggplot2 package or interactive via the ggvis or rbokeh packages are available.


.. conda:package:: bioconductor-esetvis

   |downloads_bioconductor-esetvis| |docker_bioconductor-esetvis|

   :versions: 1.14.0-0, 1.12.0-0, 1.10.0-1, 1.8.0-0, 1.6.3-0, 1.4.0-0
   
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends bioconductor-mlp: >=1.36.0,<1.37.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-hexbin: 
   :depends r-mass: 
   :depends r-mpm: 
   :depends r-rtsne: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-esetvis

   and update with::

      conda update bioconductor-esetvis

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-esetvis:<tag>

   (see `bioconductor-esetvis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-esetvis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-esetvis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-esetvis
   :alt:   (downloads)
.. |docker_bioconductor-esetvis| image:: https://quay.io/repository/biocontainers/bioconductor-esetvis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-esetvis
.. _`bioconductor-esetvis/tags`: https://quay.io/repository/biocontainers/bioconductor-esetvis?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-esetvis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-esetvis/README.html