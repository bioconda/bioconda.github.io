:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dexus'
.. highlight: bash

bioconductor-dexus
==================

.. conda:recipe:: bioconductor-dexus
   :replaces_section_title:

   DEXUS identifies differentially expressed genes in RNA\-Seq data under all possible study designs such as studies without replicates\, without sample groups\, and with unknown conditions. DEXUS works also for known conditions\, for example for RNA\-Seq data with two or multiple conditions. RNA\-Seq read count data can be provided both by the S4 class Count Data Set and by read count matrices. Differentially expressed transcripts can be visualized by heatmaps\, in which unknown conditions\, replicates\, and samples groups are also indicated. This software is fast since the core algorithm is written in C. For very large data sets\, a parallel version of DEXUS is provided in this package. DEXUS is a statistical model that is selected in a Bayesian framework by an EM algorithm. DEXUS does not need replicates to detect differentially expressed transcripts\, since the replicates \(or conditions\) are estimated by the EM method for each transcript. The method provides an informative\/non\-informative value to extract differentially expressed transcripts at a desired significance level or power.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/dexus.html
   :license: LGPL (>= 2.0)
   :recipe: /`bioconductor-dexus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dexus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dexus/meta.yaml>`_
   :links: biotools: :biotools:`dexus`

   


.. conda:package:: bioconductor-dexus

   |downloads_bioconductor-dexus| |docker_bioconductor-dexus|

   :versions: 1.22.1-0, 1.22.0-0, 1.20.0-0, 1.18.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dexus

   and update with::

      conda update bioconductor-dexus

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dexus:<tag>

   (see `bioconductor-dexus/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dexus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dexus.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-dexus| image:: https://quay.io/repository/biocontainers/bioconductor-dexus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dexus
.. _`bioconductor-dexus/tags`: https://quay.io/repository/biocontainers/bioconductor-dexus?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dexus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dexus/README.html