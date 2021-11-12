:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mai'
.. highlight: bash

bioconductor-mai
================

.. conda:recipe:: bioconductor-mai
   :replaces_section_title:
   :noindex:

   Mechanism\-Aware Imputation

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/MAI.html
   :license: GPL-3
   :recipe: /`bioconductor-mai <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mai>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mai/meta.yaml>`_

   A two\-step approach to imputing missing data in metabolomics. Step 1 uses a random forest classifier to classify missing values as either Missing Completely at Random\/Missing At Random \(MCAR\/MAR\) or Missing Not At Random \(MNAR\). MCAR\/MAR are combined because it is often difficult to distinguish these two missing types in metabolomics data. Step 2 imputes the missing values based on the classified missing mechanisms\, using the appropriate imputation algorithms. Imputation algorithms tested and available for MCAR\/MAR include Bayesian Principal Component Analysis \(BPCA\)\, Multiple Imputation No\-Skip K\-Nearest Neighbors \(Multi\_nsKNN\)\, and Random Forest. Imputation algorithms tested and available for MNAR include nsKNN and a single imputation approach for imputation of metabolites where left\-censoring is present.


.. conda:package:: bioconductor-mai

   |downloads_bioconductor-mai| |docker_bioconductor-mai|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-pcamethods: ``>=1.86.0,<1.87.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-caret: 
   :depends r-doparallel: 
   :depends r-e1071: 
   :depends r-foreach: 
   :depends r-future: 
   :depends r-future.apply: 
   :depends r-missforest: 
   :depends r-tidyverse: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mai

   and update with::

      conda update bioconductor-mai

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mai:<tag>

   (see `bioconductor-mai/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mai| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mai.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mai
   :alt:   (downloads)
.. |docker_bioconductor-mai| image:: https://quay.io/repository/biocontainers/bioconductor-mai/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mai
.. _`bioconductor-mai/tags`: https://quay.io/repository/biocontainers/bioconductor-mai?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mai";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mai/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mai/README.html