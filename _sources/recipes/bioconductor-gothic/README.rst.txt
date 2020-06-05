:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gothic'
.. highlight: bash

bioconductor-gothic
===================

.. conda:recipe:: bioconductor-gothic
   :replaces_section_title:
   :noindex:

   Binomial test for Hi\-C data analysis

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/GOTHiC.html
   :license: GPL-3
   :recipe: /`bioconductor-gothic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gothic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gothic/meta.yaml>`_
   :links: biotools: :biotools:`gothic`, doi: :doi:`10.1101/gr.185272.114`

   This is a Hi\-C analysis package using a cumulative binomial test to detect interactions between distal genomic loci that have significantly more reads than expected by chance in Hi\-C experiments. It takes mapped paired NGS reads as input and gives back the list of significant interactions for a given bin size in the genome.


.. conda:package:: bioconductor-gothic

   |downloads_bioconductor-gothic| |docker_bioconductor-gothic|

   :versions:
      
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.6-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.34.0,<0.35.0``
   :depends bioconductor-biostrings: ``>=2.56.0,<2.57.0``
   :depends bioconductor-bsgenome: ``>=1.56.0,<1.57.0``
   :depends bioconductor-genomeinfodb: ``>=1.24.0,<1.25.0``
   :depends bioconductor-genomicranges: ``>=1.40.0,<1.41.0``
   :depends bioconductor-iranges: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rsamtools: ``>=2.4.0,<2.5.0``
   :depends bioconductor-rtracklayer: ``>=1.48.0,<1.49.0``
   :depends bioconductor-s4vectors: ``>=0.26.0,<0.27.0``
   :depends bioconductor-shortread: ``>=1.46.0,<1.47.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-biocmanager: 
   :depends r-data.table: 
   :depends r-ggplot2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gothic

   and update with::

      conda update bioconductor-gothic

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gothic:<tag>

   (see `bioconductor-gothic/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gothic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gothic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gothic
   :alt:   (downloads)
.. |docker_bioconductor-gothic| image:: https://quay.io/repository/biocontainers/bioconductor-gothic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gothic
.. _`bioconductor-gothic/tags`: https://quay.io/repository/biocontainers/bioconductor-gothic?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gothic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gothic/README.html