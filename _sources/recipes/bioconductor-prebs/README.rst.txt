:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-prebs'
.. highlight: bash

bioconductor-prebs
==================

.. conda:recipe:: bioconductor-prebs
   :replaces_section_title:
   :noindex:

   Probe region expression estimation for RNA\-seq data for improved microarray comparability

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/prebs.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-prebs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prebs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prebs/meta.yaml>`_
   :links: biotools: :biotools:`prebs`

   The prebs package aims at making RNA\-sequencing \(RNA\-seq\) data more comparable to microarray data. The comparability is achieved by summarizing sequencing\-based expressions of probe regions using a modified version of RMA algorithm. The pipeline takes mapped reads in BAM format as an input and produces either gene expressions or original microarray probe set expressions as an output.


.. conda:package:: bioconductor-prebs

   |downloads_bioconductor-prebs| |docker_bioconductor-prebs|

   :versions:
      
      

      ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``

      

   
   :depends bioconductor-affy: ``>=1.70.0,<1.71.0``
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicalignments: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rpa: ``>=1.48.0,<1.49.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-prebs

   and update with::

      conda update bioconductor-prebs

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-prebs:<tag>

   (see `bioconductor-prebs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-prebs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-prebs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-prebs
   :alt:   (downloads)
.. |docker_bioconductor-prebs| image:: https://quay.io/repository/biocontainers/bioconductor-prebs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-prebs
.. _`bioconductor-prebs/tags`: https://quay.io/repository/biocontainers/bioconductor-prebs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-prebs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-prebs/README.html