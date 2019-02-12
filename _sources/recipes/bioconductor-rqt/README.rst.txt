:orphan:  .. only available via index, not via toctree

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

   :versions: 1.8.0-0
   
   :depends bioconductor-ropls: >=1.14.0,<1.15.0
   
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-car: 
   
   :depends r-compquadform: 
   
   :depends r-glmnet: 
   
   :depends r-matrix: 
   
   :depends r-metap: 
   
   :depends r-pls: 
   
   :depends r-runit: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rqt

   and update with::

      conda update bioconductor-rqt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rqt:<tag>

   (see `bioconductor-rqt/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rqt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rqt.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rqt| image:: https://quay.io/repository/biocontainers/bioconductor-rqt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rqt
.. _`bioconductor-rqt/tags`: https://quay.io/repository/biocontainers/bioconductor-rqt?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rqt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rqt/README.html