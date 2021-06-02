:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genphen'
.. highlight: bash

bioconductor-genphen
====================

.. conda:recipe:: bioconductor-genphen
   :replaces_section_title:
   :noindex:

   A tool for quantification of associations between genotypes and phenotypes in genome wide association studies \(GWAS\) with Bayesian inference and statistical learning

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/genphen.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-genphen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genphen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genphen/meta.yaml>`_

   Genetic association studies are an essential tool for studying the relationship between genotypes and phenotypes. With genphen we can jointly study multiple phenotypes of different types\, by quantifying the association between different genotypes and each phenotype using a hybrid method which uses statistical learning techniques such as random forest and support vector machines\, and Bayesian inference using hierarchical models.


.. conda:package:: bioconductor-genphen

   |downloads_bioconductor-genphen| |docker_bioconductor-genphen|

   :versions:
      
      

      ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-doparallel: 
   :depends r-e1071: 
   :depends r-foreach: 
   :depends r-ranger: 
   :depends r-rcpp: ``>=0.12.17``
   :depends r-rpref: 
   :depends r-rstan: ``>=2.17.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genphen

   and update with::

      conda update bioconductor-genphen

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genphen:<tag>

   (see `bioconductor-genphen/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genphen| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genphen.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genphen
   :alt:   (downloads)
.. |docker_bioconductor-genphen| image:: https://quay.io/repository/biocontainers/bioconductor-genphen/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genphen
.. _`bioconductor-genphen/tags`: https://quay.io/repository/biocontainers/bioconductor-genphen?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genphen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genphen/README.html