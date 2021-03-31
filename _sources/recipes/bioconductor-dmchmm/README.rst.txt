:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dmchmm'
.. highlight: bash

bioconductor-dmchmm
===================

.. conda:recipe:: bioconductor-dmchmm
   :replaces_section_title:
   :noindex:

   Differentially Methylated CpG using Hidden Markov Model

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/DMCHMM.html
   :license: GPL-3
   :recipe: /`bioconductor-dmchmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmchmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmchmm/meta.yaml>`_

   A pipeline for identifying differentially methylated CpG sites using Hidden Markov Model in bisulfite sequencing data.


.. conda:package:: bioconductor-dmchmm

   |downloads_bioconductor-dmchmm| |docker_bioconductor-dmchmm|

   :versions:
      
      

      ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-rtracklayer: ``>=1.50.0,<1.51.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-calibrate: 
   :depends r-fdrtool: 
   :depends r-multcomp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dmchmm

   and update with::

      conda update bioconductor-dmchmm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dmchmm:<tag>

   (see `bioconductor-dmchmm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dmchmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dmchmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dmchmm
   :alt:   (downloads)
.. |docker_bioconductor-dmchmm| image:: https://quay.io/repository/biocontainers/bioconductor-dmchmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dmchmm
.. _`bioconductor-dmchmm/tags`: https://quay.io/repository/biocontainers/bioconductor-dmchmm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dmchmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dmchmm/README.html