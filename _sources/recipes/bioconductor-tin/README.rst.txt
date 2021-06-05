:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tin'
.. highlight: bash

bioconductor-tin
================

.. conda:recipe:: bioconductor-tin
   :replaces_section_title:
   :noindex:

   Transcriptome instability analysis

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/TIN.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tin/meta.yaml>`_
   :links: biotools: :biotools:`tin`, doi: :doi:`10.4137/CIN.S31363`

   The TIN package implements a set of tools for transcriptome instability analysis based on exon expression profiles. Deviating exon usage is studied in the context of splicing factors to analyse to what degree transcriptome instability is correlated to splicing factor expression. In the transcriptome instability correlation analysis\, the data is compared to both random permutations of alternative splicing scores and expression of random gene sets.


.. conda:package:: bioconductor-tin

   |downloads_bioconductor-tin| |docker_bioconductor-tin|

   :versions:
      
      

      ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      

   
   :depends bioconductor-impute: ``>=1.66.0,<1.67.0``
   :depends r-aroma.affymetrix: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-squash: 
   :depends r-stringr: 
   :depends r-wgcna: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tin

   and update with::

      conda update bioconductor-tin

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tin:<tag>

   (see `bioconductor-tin/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tin| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tin.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tin
   :alt:   (downloads)
.. |docker_bioconductor-tin| image:: https://quay.io/repository/biocontainers/bioconductor-tin/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tin
.. _`bioconductor-tin/tags`: https://quay.io/repository/biocontainers/bioconductor-tin?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tin/README.html