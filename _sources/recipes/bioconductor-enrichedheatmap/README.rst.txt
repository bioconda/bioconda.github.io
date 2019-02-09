.. title:: Package Recipe 'bioconductor-enrichedheatmap'
.. highlight: bash


bioconductor-enrichedheatmap
============================

.. conda:recipe:: bioconductor-enrichedheatmap
   :replaces_section_title:

   Enriched heatmap is a special type of heatmap which visualizes the enrichment of genomic signals on specific target regions. Here we implement enriched heatmap by ComplexHeatmap package. Since this type of heatmap is just a normal heatmap but with some special settings\, with the functionality of ComplexHeatmap\, it would be much easier to customize the heatmap as well as concatenating to a list of heatmaps to show correspondance between different data sources.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/EnrichedHeatmap.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-enrichedheatmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enrichedheatmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enrichedheatmap/meta.yaml>`_

   


.. conda:package:: bioconductor-enrichedheatmap

   |downloads_bioconductor-enrichedheatmap| |docker_bioconductor-enrichedheatmap|

   :versions: 1.12.0

   :depends: :conda:package:`bioconductor-complexheatmap` >=1.20.0,<1.21.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-circlize` >=0.4.1 :conda:package:`r-getoptlong`  :conda:package:`r-locfit`  :conda:package:`r-matrixstats`  :conda:package:`r-rcpp`  

   :required~by: |required_by_bioconductor-enrichedheatmap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-enrichedheatmap

   and update with::

      conda update bioconductor-enrichedheatmap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-enrichedheatmap


.. |required_by_bioconductor-enrichedheatmap| conda:required_by:: bioconductor-enrichedheatmap
.. |downloads_bioconductor-enrichedheatmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-enrichedheatmap.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-enrichedheatmap| image:: https://quay.io/repository/biocontainers/bioconductor-enrichedheatmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-enrichedheatmap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-enrichedheatmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-enrichedheatmap/README.html

