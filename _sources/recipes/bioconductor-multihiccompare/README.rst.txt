.. title:: Package Recipe 'bioconductor-multihiccompare'
.. highlight: bash


bioconductor-multihiccompare
============================

.. conda:recipe:: bioconductor-multihiccompare
   :replaces_section_title:

   multiHiCcompare provides functions for joint normalization and difference detection in multiple Hi\-C datasets. This extension of the original HiCcompare package now allows for Hi\-C experiments with more than 2 groups and multiple samples per group. multiHiCcompare operates on processed Hi\-C data in the form of sparse upper triangular matrices. It accepts four column \(chromosome\, region1\, region2\, IF\) tab\-separated text files storing chromatin interaction matrices. multiHiCcompare provides cyclic loess and fast loess \(fastlo\) methods adapted to jointly normalizing Hi\-C data. Additionally\, it provides a general linear model \(GLM\) framework adapting the edgeR package to detect differences in Hi\-C data in a distance dependent manner.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/multiHiCcompare.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-multihiccompare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multihiccompare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multihiccompare/meta.yaml>`_

   


.. conda:package:: bioconductor-multihiccompare

   |downloads_bioconductor-multihiccompare| |docker_bioconductor-multihiccompare|

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-blma` >=1.6.0,<1.7.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomeinfodbdata` >=1.2.0,<1.3.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-hiccompare` >=1.4.0,<1.5.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-dplyr`  :conda:package:`r-metap`  :conda:package:`r-pbapply`  :conda:package:`r-pheatmap`  :conda:package:`r-qqman`  

   :required~by: |required_by_bioconductor-multihiccompare|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-multihiccompare

   and update with::

      conda update bioconductor-multihiccompare

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-multihiccompare


.. |required_by_bioconductor-multihiccompare| conda:required_by:: bioconductor-multihiccompare
.. |downloads_bioconductor-multihiccompare| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multihiccompare.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-multihiccompare| image:: https://quay.io/repository/biocontainers/bioconductor-multihiccompare/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multihiccompare







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multihiccompare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multihiccompare/README.html

