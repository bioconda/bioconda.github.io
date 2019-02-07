.. title:: Package Recipe 'bioconductor-doppelgangr'
.. highlight: bash


bioconductor-doppelgangr
========================

.. conda:recipe:: bioconductor-doppelgangr
   :replaces_section_title:

   The main function is doppelgangR\(\)\, which takes as minimal input a list of ExpressionSet object\, and searches all list pairs for duplicated samples.  The search is based on the genomic data \(exprs\(eset\)\)\, phenotype\/clinical data \(pData\(eset\)\)\, and \"smoking guns\" \- supposedly unique identifiers found in pData\(eset\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/doppelgangR.html
   :license: GPL (>=2.0)
   :recipe: /`bioconductor-doppelgangr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-doppelgangr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-doppelgangr/meta.yaml>`_
   :links: biotools: :biotools:`doppelgangr`, doi: :doi:`10.1093/jnci/djw146`

   


.. conda:package:: bioconductor-doppelgangr

   |downloads_bioconductor-doppelgangr| |docker_bioconductor-doppelgangr|

   :versions: 1.10.0, 1.8.0, 1.6.0, 1.4.1

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-impute` >=1.56.0,<1.57.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`bioconductor-sva` >=3.30.0,<3.31.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-digest`  :conda:package:`r-mnormt`  

   :required~by: |required_by_bioconductor-doppelgangr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-doppelgangr

   and update with::

      conda update bioconductor-doppelgangr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-doppelgangr


.. |required_by_bioconductor-doppelgangr| conda:required_by:: bioconductor-doppelgangr
.. |downloads_bioconductor-doppelgangr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-doppelgangr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-doppelgangr| image:: https://quay.io/repository/biocontainers/bioconductor-doppelgangr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-doppelgangr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-doppelgangr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-doppelgangr/README.html

