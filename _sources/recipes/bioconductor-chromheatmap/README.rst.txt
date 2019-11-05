:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chromheatmap'
.. highlight: bash

bioconductor-chromheatmap
=========================

.. conda:recipe:: bioconductor-chromheatmap
   :replaces_section_title:

   The ChromHeatMap package can be used to plot genome\-wide data \(e.g. expression\, CGH\, SNP\) along each strand of a given chromosome as a heat map. The generated heat map can be used to interactively identify probes and genes of interest.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/ChromHeatMap.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-chromheatmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromheatmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromheatmap/meta.yaml>`_
   :links: biotools: :biotools:`chromheatmap`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-chromheatmap

   |downloads_bioconductor-chromheatmap| |docker_bioconductor-chromheatmap|

   :versions: 1.40.0-0, 1.38.0-1, 1.36.0-0, 1.34.0-0, 1.32.0-0
   
   :depends bioconductor-annotate: >=1.64.0,<1.65.0
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-rtracklayer: >=1.46.0,<1.47.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chromheatmap

   and update with::

      conda update bioconductor-chromheatmap

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chromheatmap:<tag>

   (see `bioconductor-chromheatmap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chromheatmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chromheatmap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chromheatmap
   :alt:   (downloads)
.. |docker_bioconductor-chromheatmap| image:: https://quay.io/repository/biocontainers/bioconductor-chromheatmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chromheatmap
.. _`bioconductor-chromheatmap/tags`: https://quay.io/repository/biocontainers/bioconductor-chromheatmap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chromheatmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chromheatmap/README.html