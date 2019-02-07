.. title:: Package Recipe 'bioconductor-methyanalysis'
.. highlight: bash


bioconductor-methyanalysis
==========================

.. conda:recipe:: bioconductor-methyanalysis
   :replaces_section_title:

   The methyAnalysis package aims for the DNA methylation data analysis and visualization. A MethyGenoSet class is defined to keep the chromosome location information together with the data. The package also includes functions of estimating the methylation levels from Methy\-Seq data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/methyAnalysis.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-methyanalysis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methyanalysis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methyanalysis/meta.yaml>`_
   :links: biotools: :biotools:`methyanalysis`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-methyanalysis

   |downloads_bioconductor-methyanalysis| |docker_bioconductor-methyanalysis|

   :versions: 1.24.0, 1.22.0, 1.20.0

   :depends: :conda:package:`bioconductor-annotate` >=1.60.0,<1.61.0 :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biomart` >=2.38.0,<2.39.0 :conda:package:`bioconductor-genefilter` >=1.64.0,<1.65.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genoset` >=1.38.0,<1.39.0 :conda:package:`bioconductor-gviz` >=1.26.0,<1.27.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-lumi` >=2.34.0,<2.35.0 :conda:package:`bioconductor-methylumi` >=2.28.0,<2.29.0 :conda:package:`bioconductor-org.hs.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`bioconductor-variantannotation` >=1.28.0,<1.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-methyanalysis|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methyanalysis

   and update with::

      conda update bioconductor-methyanalysis

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-methyanalysis


.. |required_by_bioconductor-methyanalysis| conda:required_by:: bioconductor-methyanalysis
.. |downloads_bioconductor-methyanalysis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methyanalysis.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-methyanalysis| image:: https://quay.io/repository/biocontainers/bioconductor-methyanalysis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methyanalysis







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methyanalysis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methyanalysis/README.html

