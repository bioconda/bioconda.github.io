:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqcat'
.. highlight: bash

bioconductor-seqcat
===================

.. conda:recipe:: bioconductor-seqcat
   :replaces_section_title:
   :noindex:

   High Throughput Sequencing Cell Authentication Toolkit

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/seqCAT.html
   :license: MIT + file LICENCE
   :recipe: /`bioconductor-seqcat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqcat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqcat/meta.yaml>`_

   The seqCAT package uses variant calling data \(in the form of VCF files\) from high throughput sequencing technologies to authenticate and validate the source\, function and characteristics of biological samples used in scientific endeavours.


.. conda:package:: bioconductor-seqcat

   |downloads_bioconductor-seqcat| |docker_bioconductor-seqcat|

   :versions:
      
      

      ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.3-0``,  ``1.6.0-1``,  ``1.4.1-0``,  ``1.4.0-0``

      

   
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-rtracklayer: ``>=1.50.0,<1.51.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-variantannotation: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dplyr: ``>=0.5.0``
   :depends r-ggplot2: ``>=2.2.1``
   :depends r-rlang: 
   :depends r-scales: ``>=0.4.1``
   :depends r-tidyr: ``>=0.6.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-seqcat

   and update with::

      conda update bioconductor-seqcat

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqcat:<tag>

   (see `bioconductor-seqcat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqcat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqcat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqcat
   :alt:   (downloads)
.. |docker_bioconductor-seqcat| image:: https://quay.io/repository/biocontainers/bioconductor-seqcat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqcat
.. _`bioconductor-seqcat/tags`: https://quay.io/repository/biocontainers/bioconductor-seqcat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqcat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqcat/README.html