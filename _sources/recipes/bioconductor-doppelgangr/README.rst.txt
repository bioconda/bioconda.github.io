:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-doppelgangr'
.. highlight: bash

bioconductor-doppelgangr
========================

.. conda:recipe:: bioconductor-doppelgangr
   :replaces_section_title:
   :noindex:

   Identify likely duplicate samples from genomic or meta\-data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/doppelgangR.html
   :license: GPL (>=2.0)
   :recipe: /`bioconductor-doppelgangr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-doppelgangr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-doppelgangr/meta.yaml>`_
   :links: biotools: :biotools:`doppelgangr`, doi: :doi:`10.1093/jnci/djw146`

   The main function is doppelgangR\(\)\, which takes as minimal input a list of ExpressionSet object\, and searches all list pairs for duplicated samples.  The search is based on the genomic data \(exprs\(eset\)\)\, phenotype\/clinical data \(pData\(eset\)\)\, and \"smoking guns\" \- supposedly unique identifiers found in pData\(eset\).


.. conda:package:: bioconductor-doppelgangr

   |downloads_bioconductor-doppelgangr| |docker_bioconductor-doppelgangr|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.1-0``

      

   
   :depends bioconductor-biobase: ``>=2.48.0,<2.49.0``
   :depends bioconductor-biocparallel: ``>=1.22.0,<1.23.0``
   :depends bioconductor-impute: ``>=1.62.0,<1.63.0``
   :depends bioconductor-summarizedexperiment: ``>=1.18.0,<1.19.0``
   :depends bioconductor-sva: ``>=3.36.0,<3.37.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-digest: 
   :depends r-mnormt: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-doppelgangr

   and update with::

      conda update bioconductor-doppelgangr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-doppelgangr:<tag>

   (see `bioconductor-doppelgangr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-doppelgangr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-doppelgangr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-doppelgangr
   :alt:   (downloads)
.. |docker_bioconductor-doppelgangr| image:: https://quay.io/repository/biocontainers/bioconductor-doppelgangr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-doppelgangr
.. _`bioconductor-doppelgangr/tags`: https://quay.io/repository/biocontainers/bioconductor-doppelgangr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-doppelgangr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-doppelgangr/README.html