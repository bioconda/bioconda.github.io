:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ctseq'
.. highlight: bash

ctseq
=====

.. conda:recipe:: ctseq
   :replaces_section_title:
   :noindex:

   ctSeq is a pipeline to analyze methylation patch PCR data

   :homepage: https://github.com/ryanhmiller/ctseq
   :license: MIT / MIT
   :recipe: /`ctseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ctseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ctseq/meta.yaml>`_

   


.. conda:package:: ctseq

   |downloads_ctseq| |docker_ctseq|

   :versions:
      
      

      ``0.0.2-0``

      

   
   :depends bismark: 
   :depends cutadapt: 
   :depends ncurses: ``6.1 he6710b0_1``
   :depends numpy: 
   :depends openssl: ``1.0.2p h14c3975_1002``
   :depends python: ``>=3.7``
   :depends r-base: ``3.5.1.*``
   :depends r-ggplot2: 
   :depends r-pheatmap: 
   :depends r-reshape: 
   :depends samtools: ``1.9.*``
   :depends simplesam: ``0.1.3.1.*``
   :depends umi_tools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ctseq

   and update with::

      conda update ctseq

   or use the docker container::

      docker pull quay.io/biocontainers/ctseq:<tag>

   (see `ctseq/tags`_ for valid values for ``<tag>``)


.. |downloads_ctseq| image:: https://img.shields.io/conda/dn/bioconda/ctseq.svg?style=flat
   :target: https://anaconda.org/bioconda/ctseq
   :alt:   (downloads)
.. |docker_ctseq| image:: https://quay.io/repository/biocontainers/ctseq/status
   :target: https://quay.io/repository/biocontainers/ctseq
.. _`ctseq/tags`: https://quay.io/repository/biocontainers/ctseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ctseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ctseq/README.html