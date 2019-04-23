:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-simd'
.. highlight: bash

bioconductor-simd
=================

.. conda:recipe:: bioconductor-simd
   :replaces_section_title:

   This package provides a inferential analysis method for detecting differentially expressed CpG sites in MeDIP\-seq data. It uses statistical framework and EM algorithm\, to identify differentially expressed CpG sites. The methods on this package are described in the article \'Methylation\-level Inferences and Detection of Differential Methylation with Medip\-seq Data\' by Yan Zhou\, Jiadi Zhu\, Mingtao Zhao\, Baoxue Zhang\, Chunfu Jiang and Xiyan Yang \(2018\, pending publication\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SIMD.html
   :license: GPL-3
   :recipe: /`bioconductor-simd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simd/meta.yaml>`_

   


.. conda:package:: bioconductor-simd

   |downloads_bioconductor-simd| |docker_bioconductor-simd|

   :versions: 1.0.0-0
   
   :depends bioconductor-edger: >=3.24.0,<3.25.0
   :depends bioconductor-methylmnm: >=1.20.0,<1.21.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-statmod: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-simd

   and update with::

      conda update bioconductor-simd

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-simd:<tag>

   (see `bioconductor-simd/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-simd| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-simd.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-simd| image:: https://quay.io/repository/biocontainers/bioconductor-simd/status
   :target: https://quay.io/repository/biocontainers/bioconductor-simd
.. _`bioconductor-simd/tags`: https://quay.io/repository/biocontainers/bioconductor-simd?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-simd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-simd/README.html