:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-redseq'
.. highlight: bash

bioconductor-redseq
===================

.. conda:recipe:: bioconductor-redseq
   :replaces_section_title:

   The package includes functions to build restriction enzyme cut site \(RECS\) map\, distribute mapped sequences on the map with five different approaches\, find enriched\/depleted RECSs for a sample\, and identify differentially enriched\/depleted RECSs between samples.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/REDseq.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-redseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-redseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-redseq/meta.yaml>`_

   


.. conda:package:: bioconductor-redseq

   |downloads_bioconductor-redseq| |docker_bioconductor-redseq|

   :versions: 1.28.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-bsgenome: >=1.50.0,<1.51.0
   :depends bioconductor-bsgenome.celegans.ucsc.ce2: >=1.4.0,<1.5.0
   :depends bioconductor-chippeakanno: >=3.16.0,<3.17.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-multtest: >=2.38.0,<2.39.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-redseq

   and update with::

      conda update bioconductor-redseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-redseq:<tag>

   (see `bioconductor-redseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-redseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-redseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-redseq| image:: https://quay.io/repository/biocontainers/bioconductor-redseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-redseq
.. _`bioconductor-redseq/tags`: https://quay.io/repository/biocontainers/bioconductor-redseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-redseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-redseq/README.html