:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-wiggleplotr'
.. highlight: bash

bioconductor-wiggleplotr
========================

.. conda:recipe:: bioconductor-wiggleplotr
   :replaces_section_title:

   Tools to visualise read coverage from sequencing experiments together with genomic annotations \(genes\, transcripts\, peaks\). Introns of long transcripts can be rescaled to a fixed length for better visualisation of exonic read coverage.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/wiggleplotr.html
   :license: Apache License 2.0
   :recipe: /`bioconductor-wiggleplotr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wiggleplotr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wiggleplotr/meta.yaml>`_

   


.. conda:package:: bioconductor-wiggleplotr

   |downloads_bioconductor-wiggleplotr| |docker_bioconductor-wiggleplotr|

   :versions: 1.6.0-0, 1.4.0-0, 1.2.0-0, 1.0.0-0
   
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends r-assertthat: 
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-ggplot2: >=2.2.0
   :depends r-purrr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-wiggleplotr

   and update with::

      conda update bioconductor-wiggleplotr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-wiggleplotr:<tag>

   (see `bioconductor-wiggleplotr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-wiggleplotr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-wiggleplotr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-wiggleplotr
   :alt:   (downloads)
.. |docker_bioconductor-wiggleplotr| image:: https://quay.io/repository/biocontainers/bioconductor-wiggleplotr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-wiggleplotr
.. _`bioconductor-wiggleplotr/tags`: https://quay.io/repository/biocontainers/bioconductor-wiggleplotr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-wiggleplotr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-wiggleplotr/README.html