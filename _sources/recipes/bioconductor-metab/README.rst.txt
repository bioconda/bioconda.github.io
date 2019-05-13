:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metab'
.. highlight: bash

bioconductor-metab
==================

.. conda:recipe:: bioconductor-metab
   :replaces_section_title:

   Metab is an R package for high\-throughput processing of metabolomics data analysed by the Automated Mass Spectral Deconvolution and Identification System \(AMDIS\) \(http\:\/\/chemdata.nist.gov\/mass\-spc\/amdis\/downloads\/\). In addition\, it performs statistical hypothesis test \(t\-test\) and analysis of variance \(ANOVA\). Doing so\, Metab considerably speed up the data mining process in metabolomics and produces better quality results. Metab was developed using interactive features\, allowing users with lack of R knowledge to appreciate its functionalities.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Metab.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-metab <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metab>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metab/meta.yaml>`_
   :links: biotools: :biotools:`metab`

   


.. conda:package:: bioconductor-metab

   |downloads_bioconductor-metab| |docker_bioconductor-metab|

   :versions: 1.16.1-0, 1.12.0-0
   
   :depends bioconductor-xcms: >=3.4.0,<3.5.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-pander: 
   :depends r-svdialogs: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metab

   and update with::

      conda update bioconductor-metab

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metab:<tag>

   (see `bioconductor-metab/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metab| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metab.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metab
   :alt:   (downloads)
.. |docker_bioconductor-metab| image:: https://quay.io/repository/biocontainers/bioconductor-metab/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metab
.. _`bioconductor-metab/tags`: https://quay.io/repository/biocontainers/bioconductor-metab?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metab/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metab/README.html