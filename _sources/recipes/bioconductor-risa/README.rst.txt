:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-risa'
.. highlight: bash

bioconductor-risa
=================

.. conda:recipe:: bioconductor-risa
   :replaces_section_title:

   The Investigation \/ Study \/ Assay \(ISA\) tab\-delimited format is a general purpose framework with which to collect and communicate complex metadata \(i.e. sample characteristics\, technologies used\, type of measurements made\) from experiments employing a combination of technologies\, spanning from traditional approaches to high\-throughput techniques. Risa allows to access metadata\/data in ISA\-Tab format and build Bioconductor data structures. Currently\, data generated from microarray\, flow cytometry and metabolomics\-based \(i.e. mass spectrometry\) assays are supported. The package is extendable and efforts are undergoing to support metadata associated to proteomics assays.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/Risa.html
   :license: LGPL
   :recipe: /`bioconductor-risa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-risa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-risa/meta.yaml>`_
   :links: biotools: :biotools:`risa`

   


.. conda:package:: bioconductor-risa

   |downloads_bioconductor-risa| |docker_bioconductor-risa|

   :versions: 1.28.0-0, 1.26.0-1, 1.24.0-0, 1.20.0-0, 1.18.0-0
   
   :depends bioconductor-affy: >=1.64.0,<1.65.0
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-biocviews: >=1.54.0,<1.55.0
   :depends bioconductor-xcms: >=3.8.0,<3.9.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-rcpp: >=0.9.13
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-risa

   and update with::

      conda update bioconductor-risa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-risa:<tag>

   (see `bioconductor-risa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-risa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-risa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-risa
   :alt:   (downloads)
.. |docker_bioconductor-risa| image:: https://quay.io/repository/biocontainers/bioconductor-risa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-risa
.. _`bioconductor-risa/tags`: https://quay.io/repository/biocontainers/bioconductor-risa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-risa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-risa/README.html