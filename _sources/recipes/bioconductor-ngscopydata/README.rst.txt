:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ngscopydata'
.. highlight: bash

bioconductor-ngscopydata
========================

.. conda:recipe:: bioconductor-ngscopydata
   :replaces_section_title:
   :noindex:

   Subset of BAM files of human tumor and pooled normal sequencing data \(Zhao et al. 2014\) for the NGScopy package

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/NGScopyData.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-ngscopydata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ngscopydata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ngscopydata/meta.yaml>`_

   Subset of BAM files of human lung tumor and pooled normal samples by targeted panel sequencing. \[Zhao et al 2014. Targeted Sequencing in Non\-Small Cell Lung Cancer \(NSCLC\) Using the University of North Carolina \(UNC\) Sequencing Assay Captures Most Previously Described Genetic Aberrations in NSCLC. In preparation.\] Each sample is a 10 percent random subsample drawn from the original sequencing data. The pooled normal sample has been rescaled accroding to the total number of normal samples in the \"pool\". Here provided is the subsampled data on chr6 \(hg19\).


.. conda:package:: bioconductor-ngscopydata

   |downloads_bioconductor-ngscopydata| |docker_bioconductor-ngscopydata|

   :versions:
      
      

      ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends curl: ``>=7.75.0,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ngscopydata

   and update with::

      conda update bioconductor-ngscopydata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ngscopydata:<tag>

   (see `bioconductor-ngscopydata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ngscopydata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ngscopydata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ngscopydata
   :alt:   (downloads)
.. |docker_bioconductor-ngscopydata| image:: https://quay.io/repository/biocontainers/bioconductor-ngscopydata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ngscopydata
.. _`bioconductor-ngscopydata/tags`: https://quay.io/repository/biocontainers/bioconductor-ngscopydata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ngscopydata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ngscopydata/README.html