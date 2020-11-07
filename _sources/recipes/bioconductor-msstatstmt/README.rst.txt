:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msstatstmt'
.. highlight: bash

bioconductor-msstatstmt
=======================

.. conda:recipe:: bioconductor-msstatstmt
   :replaces_section_title:
   :noindex:

   Protein Significance Analysis in shotgun mass spectrometry\-based proteomic experiments with tandem mass tag \(TMT\) labeling

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/MSstatsTMT.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msstatstmt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatstmt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatstmt/meta.yaml>`_

   Tools for protein significance analysis in shotgun mass spectrometry\-based proteomic experiments with tandem mass tag \(TMT\) labeling.


.. conda:package:: bioconductor-msstatstmt

   |downloads_bioconductor-msstatstmt| |docker_bioconductor-msstatstmt|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.5-0``,  ``1.1.2-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-msstats: ``>=3.22.0,<3.23.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-lme4: 
   :depends r-lmertest: 
   :depends r-matrixstats: 
   :depends r-reshape2: 
   :depends r-statmod: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msstatstmt

   and update with::

      conda update bioconductor-msstatstmt

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msstatstmt:<tag>

   (see `bioconductor-msstatstmt/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msstatstmt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstatstmt.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msstatstmt
   :alt:   (downloads)
.. |docker_bioconductor-msstatstmt| image:: https://quay.io/repository/biocontainers/bioconductor-msstatstmt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstatstmt
.. _`bioconductor-msstatstmt/tags`: https://quay.io/repository/biocontainers/bioconductor-msstatstmt?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstatstmt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstatstmt/README.html