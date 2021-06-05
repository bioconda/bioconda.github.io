:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnaagecalc'
.. highlight: bash

bioconductor-rnaagecalc
=======================

.. conda:recipe:: bioconductor-rnaagecalc
   :replaces_section_title:
   :noindex:

   A multi\-tissue transcriptional age calculator

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/RNAAgeCalc.html
   :license: GPL-2
   :recipe: /`bioconductor-rnaagecalc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaagecalc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaagecalc/meta.yaml>`_

   It has been shown that both DNA methylation and RNA transcription are linked to chronological age and age related diseases. Several estimators have been developed to predict human aging from DNA level and RNA level. Most of the human transcriptional age predictor are based on microarray data and limited to only a few tissues. To date\, transcriptional studies on aging using RNASeq data from different human tissues is limited. The aim of this package is to provide a tool for across\-tissue and tissue\-specific transcriptional age calculation based on GTEx RNASeq data.


.. conda:package:: bioconductor-rnaagecalc

   |downloads_bioconductor-rnaagecalc| |docker_bioconductor-rnaagecalc|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends bioconductor-impute: ``>=1.66.0,<1.67.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.13.0,<3.14.0``
   :depends bioconductor-recount: ``>=1.18.0,<1.19.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rnaagecalc

   and update with::

      conda update bioconductor-rnaagecalc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnaagecalc:<tag>

   (see `bioconductor-rnaagecalc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnaagecalc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnaagecalc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnaagecalc
   :alt:   (downloads)
.. |docker_bioconductor-rnaagecalc| image:: https://quay.io/repository/biocontainers/bioconductor-rnaagecalc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnaagecalc
.. _`bioconductor-rnaagecalc/tags`: https://quay.io/repository/biocontainers/bioconductor-rnaagecalc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnaagecalc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnaagecalc/README.html