:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bgeecall'
.. highlight: bash

bioconductor-bgeecall
=====================

.. conda:recipe:: bioconductor-bgeecall
   :replaces_section_title:
   :noindex:

   Automatic RNA\-Seq present\/absent gene expression calls generation

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/BgeeCall.html
   :license: GPL-3
   :recipe: /`bioconductor-bgeecall <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bgeecall>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bgeecall/meta.yaml>`_

   BgeeCall allows to generate present\/absent gene expression calls without using an arbitrary cutoff like TPM\<1. Calls are generated based on reference intergenic sequences. These sequences are generated based on expression of all RNA\-Seq libraries of each species integrated in Bgee \(https\:\/\/bgee.org\).


.. conda:package:: bioconductor-bgeecall

   |downloads_bioconductor-bgeecall| |docker_bioconductor-bgeecall|

   :versions:
      
      

      ``1.6.2-0``,  ``1.6.0-0``,  ``1.4.0-0``

      

   
   :depends bioconductor-biomart: ``>=2.46.0,<2.47.0``
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-genomicfeatures: ``>=1.42.0,<1.43.0``
   :depends bioconductor-rhdf5: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rtracklayer: ``>=1.50.0,<1.51.0``
   :depends bioconductor-tximport: ``>=1.18.0,<1.19.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-jsonlite: 
   :depends r-rslurm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bgeecall

   and update with::

      conda update bioconductor-bgeecall

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bgeecall:<tag>

   (see `bioconductor-bgeecall/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bgeecall| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bgeecall.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bgeecall
   :alt:   (downloads)
.. |docker_bioconductor-bgeecall| image:: https://quay.io/repository/biocontainers/bioconductor-bgeecall/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bgeecall
.. _`bioconductor-bgeecall/tags`: https://quay.io/repository/biocontainers/bioconductor-bgeecall?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bgeecall/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bgeecall/README.html