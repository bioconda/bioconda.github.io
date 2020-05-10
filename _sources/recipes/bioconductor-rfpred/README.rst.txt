:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rfpred'
.. highlight: bash

bioconductor-rfpred
===================

.. conda:recipe:: bioconductor-rfpred
   :replaces_section_title:

   Assign rfPred functional prediction scores to a missense variants list

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/rfPred.html
   :license: GPL (>=2 )
   :recipe: /`bioconductor-rfpred <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rfpred>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rfpred/meta.yaml>`_
   :links: biotools: :biotools:`rfpred`, doi: :doi:`10.1101/037127`

   Based on external numerous data files where rfPred scores are pre\-calculated on all genomic positions of the human exome\, the package gives rfPred scores to missense variants identified by the chromosome\, the position \(hg19 version\)\, the referent and alternative nucleotids and the uniprot identifier of the protein. Note that for using the package\, the user has to be connected on the Internet or to download the TabixFile and index \(approximately 3.3 Go\).


.. conda:package:: bioconductor-rfpred

   |downloads_bioconductor-rfpred| |docker_bioconductor-rfpred|

   :versions: 1.26.0-0, 1.24.0-0, 1.22.0-1, 1.20.0-0, 1.18.0-0, 1.16.0-0, 1.14.0-0
   
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-rsamtools: >=2.4.0,<2.5.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends r-base: >=4.0,<4.1.0a0
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