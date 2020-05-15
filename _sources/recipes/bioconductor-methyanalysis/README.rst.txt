:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methyanalysis'
.. highlight: bash

bioconductor-methyanalysis
==========================

.. conda:recipe:: bioconductor-methyanalysis
   :replaces_section_title:

   DNA methylation data analysis and visualization

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/methyAnalysis.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-methyanalysis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methyanalysis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methyanalysis/meta.yaml>`_
   :links: biotools: :biotools:`methyanalysis`, doi: :doi:`10.1038/nmeth.3252`

   The methyAnalysis package aims for the DNA methylation data analysis and visualization. A MethyGenoSet class is defined to keep the chromosome location information together with the data. The package also includes functions of estimating the methylation levels from Methy\-Seq data.


.. conda:package:: bioconductor-methyanalysis

   |downloads_bioconductor-methyanalysis| |docker_bioconductor-methyanalysis|

   :versions: 1.30.0-0, 1.28.0-0, 1.26.0-1, 1.24.0-0, 1.22.0-0, 1.20.0-0
   
   :depends bioconductor-annotate: >=1.66.0,<1.67.0
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends bioconductor-biomart: >=2.44.0,<2.45.0
   :depends bioconductor-genefilter: >=1.70.0,<1.71.0
   :depends bioconductor-genomeinfodb: >=1.24.0,<1.25.0
   :depends bioconductor-genomicfeatures: >=1.40.0,<1.41.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-genoset: >=1.44.0,<1.45.0
   :depends bioconductor-gviz: >=1.32.0,<1.33.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-lumi: >=2.40.0,<2.41.0
   :depends bioconductor-methylumi: >=2.34.0,<2.35.0
   :depends bioconductor-org.hs.eg.db: >=3.11.0,<3.12.0
   :depends bioconductor-rtracklayer: >=1.48.0,<1.49.0
   :depends bioconductor-summarizedexperiment: >=1.18.0,<1.19.0
   :depends bioconductor-variantannotation: >=1.34.0,<1.35.0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methyanalysis

   and update with::

      conda update bioconductor-methyanalysis

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methyanalysis:<tag>

   (see `bioconductor-methyanalysis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methyanalysis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methyanalysis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methyanalysis
   :alt:   (downloads)
.. |docker_bioconductor-methyanalysis| image:: https://quay.io/repository/biocontainers/bioconductor-methyanalysis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methyanalysis
.. _`bioconductor-methyanalysis/tags`: https://quay.io/repository/biocontainers/bioconductor-methyanalysis?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methyanalysis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methyanalysis/README.html