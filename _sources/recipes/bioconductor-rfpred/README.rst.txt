:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rfpred'
.. highlight: bash

bioconductor-rfpred
===================

.. conda:recipe:: bioconductor-rfpred
   :replaces_section_title:

   Based on external numerous data files where rfPred scores are pre\-calculated on all genomic positions of the human exome\, the package gives rfPred scores to missense variants identified by the chromosome\, the position \(hg19 version\)\, the referent and alternative nucleotids and the uniprot identifier of the protein. Note that for using the package\, the user has to be connected on the Internet or to download the TabixFile and index \(approximately 3.3 Go\).

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/rfPred.html
   :license: GPL (>=2 )
   :recipe: /`bioconductor-rfpred <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rfpred>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rfpred/meta.yaml>`_
   :links: biotools: :biotools:`rfpred`, doi: :doi:`10.1101/037127`

   


.. conda:package:: bioconductor-rfpred

   |downloads_bioconductor-rfpred| |docker_bioconductor-rfpred|

   :versions: 1.20.0-0, 1.18.0-0, 1.16.0-0, 1.14.0-0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-data.table: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rfpred

   and update with::

      conda update bioconductor-rfpred

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rfpred:<tag>

   (see `bioconductor-rfpred/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rfpred| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rfpred.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rfpred
   :alt:   (downloads)
.. |docker_bioconductor-rfpred| image:: https://quay.io/repository/biocontainers/bioconductor-rfpred/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rfpred
.. _`bioconductor-rfpred/tags`: https://quay.io/repository/biocontainers/bioconductor-rfpred?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rfpred/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rfpred/README.html