.. title:: Package Recipe 'bioconductor-chromheatmap'
.. highlight: bash


bioconductor-chromheatmap
=========================

.. conda:recipe:: bioconductor-chromheatmap
   :replaces_section_title:

   The ChromHeatMap package can be used to plot genome\-wide data \(e.g. expression\, CGH\, SNP\) along each strand of a given chromosome as a heat map. The generated heat map can be used to interactively identify probes and genes of interest.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ChromHeatMap.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-chromheatmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromheatmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromheatmap/meta.yaml>`_
   :links: biotools: :biotools:`chromheatmap`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-chromheatmap

   |downloads_bioconductor-chromheatmap| |docker_bioconductor-chromheatmap|

   :versions: 1.36.0, 1.34.0, 1.32.0

   :depends: :conda:package:`bioconductor-annotate` >=1.60.0,<1.61.0 :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-chromheatmap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chromheatmap

   and update with::

      conda update bioconductor-chromheatmap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-chromheatmap


.. |required_by_bioconductor-chromheatmap| conda:required_by:: bioconductor-chromheatmap
.. |downloads_bioconductor-chromheatmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chromheatmap.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-chromheatmap| image:: https://quay.io/repository/biocontainers/bioconductor-chromheatmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chromheatmap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chromheatmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chromheatmap/README.html

