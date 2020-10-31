:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-phenopath'
.. highlight: bash

bioconductor-phenopath
======================

.. conda:recipe:: bioconductor-phenopath
   :replaces_section_title:
   :noindex:

   Genomic trajectories with heterogeneous genetic and environmental backgrounds

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/phenopath.html
   :license: Apache License (== 2.0)
   :recipe: /`bioconductor-phenopath <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phenopath>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phenopath/meta.yaml>`_

   PhenoPath infers genomic trajectories \(pseudotimes\) in the presence of heterogeneous genetic and environmental backgrounds and tests for interactions between them.


.. conda:package:: bioconductor-phenopath

   |downloads_bioconductor-phenopath| |docker_bioconductor-phenopath|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-rcpp: ``>=0.12.8``
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-phenopath

   and update with::

      conda update bioconductor-phenopath

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-phenopath:<tag>

   (see `bioconductor-phenopath/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-phenopath| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phenopath.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-phenopath
   :alt:   (downloads)
.. |docker_bioconductor-phenopath| image:: https://quay.io/repository/biocontainers/bioconductor-phenopath/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phenopath
.. _`bioconductor-phenopath/tags`: https://quay.io/repository/biocontainers/bioconductor-phenopath?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phenopath/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phenopath/README.html