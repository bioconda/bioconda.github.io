:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-synmut'
.. highlight: bash

bioconductor-synmut
===================

.. conda:recipe:: bioconductor-synmut
   :replaces_section_title:
   :noindex:

   SynMut\: Designing Synonymously Mutated Sequences with Different Genomic Signatures

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/SynMut.html
   :license: GPL-2
   :recipe: /`bioconductor-synmut <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synmut>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synmut/meta.yaml>`_

   There are increasing demands on designing virus mutants with specific dinucleotide or codon composition. This tool can take both dinucleotide preference and\/or codon usage bias into account while designing mutants. It is a powerful tool for in silico designs of DNA sequence mutants.


.. conda:package:: bioconductor-synmut

   |downloads_bioconductor-synmut| |docker_bioconductor-synmut|

   :versions:
      
      

      ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-seqinr: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-synmut

   and update with::

      conda update bioconductor-synmut

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-synmut:<tag>

   (see `bioconductor-synmut/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-synmut| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-synmut.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-synmut
   :alt:   (downloads)
.. |docker_bioconductor-synmut| image:: https://quay.io/repository/biocontainers/bioconductor-synmut/status
   :target: https://quay.io/repository/biocontainers/bioconductor-synmut
.. _`bioconductor-synmut/tags`: https://quay.io/repository/biocontainers/bioconductor-synmut?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-synmut/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-synmut/README.html