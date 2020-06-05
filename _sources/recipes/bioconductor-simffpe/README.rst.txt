:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-simffpe'
.. highlight: bash

bioconductor-simffpe
====================

.. conda:recipe:: bioconductor-simffpe
   :replaces_section_title:
   :noindex:

   NGS Read Simulator for FFPE Tissue

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/SimFFPE.html
   :license: LGPL-3
   :recipe: /`bioconductor-simffpe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simffpe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simffpe/meta.yaml>`_

   This package simulates artifact chimeric reads specifically generated in next\-generation sequencing \(NGS\) process of formalin\-fixed paraffin\-embedded \(FFPE\) tissue.


.. conda:package:: bioconductor-simffpe

   |downloads_bioconductor-simffpe| |docker_bioconductor-simffpe|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.56.0,<2.57.0``
   :depends bioconductor-genomicranges: ``>=1.40.0,<1.41.0``
   :depends bioconductor-iranges: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rsamtools: ``>=2.4.0,<2.5.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-truncnorm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-simffpe

   and update with::

      conda update bioconductor-simffpe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-simffpe:<tag>

   (see `bioconductor-simffpe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-simffpe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-simffpe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-simffpe
   :alt:   (downloads)
.. |docker_bioconductor-simffpe| image:: https://quay.io/repository/biocontainers/bioconductor-simffpe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-simffpe
.. _`bioconductor-simffpe/tags`: https://quay.io/repository/biocontainers/bioconductor-simffpe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-simffpe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-simffpe/README.html