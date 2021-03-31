:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcade'
.. highlight: bash

bioconductor-rcade
==================

.. conda:recipe:: bioconductor-rcade
   :replaces_section_title:
   :noindex:

   R\-based analysis of ChIP\-seq And Differential Expression \- a tool for integrating a count\-based ChIP\-seq analysis with differential expression summary data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/Rcade.html
   :license: GPL-2
   :recipe: /`bioconductor-rcade <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcade>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcade/meta.yaml>`_

   Rcade \(which stands for \"R\-based analysis of ChIP\-seq And Differential Expression\"\) is a tool for integrating ChIP\-seq data with differential expression summary data\, through a Bayesian framework. A key application is in identifing the genes targeted by a transcription factor of interest \- that is\, we collect genes that are associated with a ChIP\-seq peak\, and differential expression under some perturbation related to that TF.


.. conda:package:: bioconductor-rcade

   |downloads_bioconductor-rcade| |docker_bioconductor-rcade|

   :versions:
      
      

      ``1.32.0-1``,  ``1.32.0-0``,  ``1.29.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-0``

      

   
   :depends bioconductor-bayseq: ``>=2.24.0,<2.25.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicalignments: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-rsamtools: ``>=2.6.0,<2.7.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-plotrix: 
   :depends r-rgl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rcade

   and update with::

      conda update bioconductor-rcade

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rcade:<tag>

   (see `bioconductor-rcade/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rcade| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcade.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcade
   :alt:   (downloads)
.. |docker_bioconductor-rcade| image:: https://quay.io/repository/biocontainers/bioconductor-rcade/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcade
.. _`bioconductor-rcade/tags`: https://quay.io/repository/biocontainers/bioconductor-rcade?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcade/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcade/README.html