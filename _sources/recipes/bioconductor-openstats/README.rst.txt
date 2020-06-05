:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-openstats'
.. highlight: bash

bioconductor-openstats
======================

.. conda:recipe:: bioconductor-openstats
   :replaces_section_title:
   :noindex:

   A Robust and Scalable Software Package for Reproducible Analysis of High\-Throughput genotype\-phenotype association

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/OpenStats.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-openstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-openstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-openstats/meta.yaml>`_

   Package contains several methods for statistical analysis of genotype to phenotype association in high\-throughput screening pipelines.


.. conda:package:: bioconductor-openstats

   |downloads_bioconductor-openstats| |docker_bioconductor-openstats|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends r-aiccmodavg: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-car: 
   :depends r-hmisc: 
   :depends r-jsonlite: 
   :depends r-knitr: 
   :depends r-mass: 
   :depends r-nlme: 
   :depends r-rlist: 
   :depends r-summarytools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-openstats

   and update with::

      conda update bioconductor-openstats

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-openstats:<tag>

   (see `bioconductor-openstats/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-openstats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-openstats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-openstats
   :alt:   (downloads)
.. |docker_bioconductor-openstats| image:: https://quay.io/repository/biocontainers/bioconductor-openstats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-openstats
.. _`bioconductor-openstats/tags`: https://quay.io/repository/biocontainers/bioconductor-openstats?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-openstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-openstats/README.html