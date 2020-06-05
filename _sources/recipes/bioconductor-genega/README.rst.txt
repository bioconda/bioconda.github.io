:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genega'
.. highlight: bash

bioconductor-genega
===================

.. conda:recipe:: bioconductor-genega
   :replaces_section_title:
   :noindex:

   Design gene based on both mRNA secondary structure and codon usage bias using Genetic algorithm

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/GeneGA.html
   :license: GPL version 2
   :recipe: /`bioconductor-genega <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genega>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genega/meta.yaml>`_
   :links: biotools: :biotools:`genega`, doi: :doi:`10.1186/1748-7188-6-26`

   R based Genetic algorithm for gene expression optimization by considering both mRNA secondary structure and codon usage bias\, GeneGA includes the information of highly expressed genes of almost 200 genomes. Meanwhile\, Vienna RNA Package is needed to ensure GeneGA to function properly.


.. conda:package:: bioconductor-genega

   |downloads_bioconductor-genega| |docker_bioconductor-genega|

   :versions:
      
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-hash: 
   :depends r-seqinr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genega

   and update with::

      conda update bioconductor-genega

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genega:<tag>

   (see `bioconductor-genega/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genega| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genega.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genega
   :alt:   (downloads)
.. |docker_bioconductor-genega| image:: https://quay.io/repository/biocontainers/bioconductor-genega/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genega
.. _`bioconductor-genega/tags`: https://quay.io/repository/biocontainers/bioconductor-genega?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genega/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genega/README.html