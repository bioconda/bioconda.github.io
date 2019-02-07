.. title:: Package Recipe 'bioconductor-genegeneinter'
.. highlight: bash


bioconductor-genegeneinter
==========================

.. conda:recipe:: bioconductor-genegeneinter
   :replaces_section_title:

   The aim of this package is to propose several methods for testing gene\-gene interaction in case\-control association studies. Such a test can be done by aggregating SNP\-SNP interaction tests performed at the SNP level \(SSI\) or by using gene\-gene multidimensionnal methods \(GGI\) methods. The package also proposes tools for a graphic display of the results.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GeneGeneInteR.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-genegeneinter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genegeneinter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genegeneinter/meta.yaml>`_

   


.. conda:package:: bioconductor-genegeneinter

   |downloads_bioconductor-genegeneinter| |docker_bioconductor-genegeneinter|

   :versions: 1.8.0

   :depends: :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-ggtools` >=5.18.0,<5.19.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-snpstats` >=1.32.0,<1.33.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-factominer`  :conda:package:`r-igraph`  :conda:package:`r-kernlab`  :conda:package:`r-mvtnorm`  :conda:package:`r-plspm`  :conda:package:`r-rioja`  

   :required~by: |required_by_bioconductor-genegeneinter|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genegeneinter

   and update with::

      conda update bioconductor-genegeneinter

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-genegeneinter


.. |required_by_bioconductor-genegeneinter| conda:required_by:: bioconductor-genegeneinter
.. |downloads_bioconductor-genegeneinter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genegeneinter.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-genegeneinter| image:: https://quay.io/repository/biocontainers/bioconductor-genegeneinter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genegeneinter







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genegeneinter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genegeneinter/README.html

