:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnamodr.ribomethseq'
.. highlight: bash

bioconductor-rnamodr.ribomethseq
================================

.. conda:recipe:: bioconductor-rnamodr.ribomethseq
   :replaces_section_title:
   :noindex:

   Detection of 2\'\-O methylations by RiboMethSeq

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/RNAmodR.RiboMethSeq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rnamodr.ribomethseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnamodr.ribomethseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnamodr.ribomethseq/meta.yaml>`_

   RNAmodR.RiboMethSeq implements the detection of 2\'\-O methylations on RNA from experimental data generated with the RiboMethSeq protocol. The package builds on the core functionality of the RNAmodR package to detect specific patterns of the modifications in high throughput sequencing data.


.. conda:package:: bioconductor-rnamodr.ribomethseq

   |downloads_bioconductor-rnamodr.ribomethseq| |docker_bioconductor-rnamodr.ribomethseq|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-gviz: ``>=1.34.0,<1.35.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-rnamodr: ``>=1.4.0,<1.5.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rnamodr.ribomethseq

   and update with::

      conda update bioconductor-rnamodr.ribomethseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnamodr.ribomethseq:<tag>

   (see `bioconductor-rnamodr.ribomethseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnamodr.ribomethseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnamodr.ribomethseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnamodr.ribomethseq
   :alt:   (downloads)
.. |docker_bioconductor-rnamodr.ribomethseq| image:: https://quay.io/repository/biocontainers/bioconductor-rnamodr.ribomethseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnamodr.ribomethseq
.. _`bioconductor-rnamodr.ribomethseq/tags`: https://quay.io/repository/biocontainers/bioconductor-rnamodr.ribomethseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnamodr.ribomethseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnamodr.ribomethseq/README.html