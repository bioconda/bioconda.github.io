.. title:: Package Recipe 'bioconductor-rqt'
.. highlight: bash


bioconductor-rqt
================

.. conda:recipe:: bioconductor-rqt
   :replaces_section_title:

   Despite the recent advances of modern GWAS methods\, it still remains an important problem of addressing calculation an effect size and corresponding p\-value for the whole gene rather than for single variant. The R\- package rqt offers gene\-level GWAS meta\-analysis. For more information\, see\: \"Gene\-set association tests for next\-generation sequencing data\" by Lee et al \(2016\)\, Bioinformatics\, 32\(17\)\, i611\-i619\, \<doi\:10.1093\/bioinformatics\/btw429\>.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/rqt.html
   :license: GPL
   :recipe: /`bioconductor-rqt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rqt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rqt/meta.yaml>`_

   


.. conda:package:: bioconductor-rqt

   |downloads_bioconductor-rqt| |docker_bioconductor-rqt|

   :versions: 1.8.0

   :depends: :conda:package:`bioconductor-ropls` >=1.14.0,<1.15.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-car`  :conda:package:`r-compquadform`  :conda:package:`r-glmnet`  :conda:package:`r-matrix`  :conda:package:`r-metap`  :conda:package:`r-pls`  :conda:package:`r-runit`  

   :required~by: |required_by_bioconductor-rqt|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rqt

   and update with::

      conda update bioconductor-rqt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rqt


.. |required_by_bioconductor-rqt| conda:required_by:: bioconductor-rqt
.. |downloads_bioconductor-rqt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rqt.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rqt| image:: https://quay.io/repository/biocontainers/bioconductor-rqt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rqt







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rqt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rqt/README.html

