.. title:: Package Recipe 'bioconductor-genomeintervals'
.. highlight: bash


bioconductor-genomeintervals
============================

.. conda:recipe:: bioconductor-genomeintervals
   :replaces_section_title:

   This package defines classes for representing genomic intervals and provides functions and methods for working with these. Note\: The package provides the basic infrastructure for and is enhanced by the package \'girafe\'.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/genomeIntervals.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomeintervals <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomeintervals>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomeintervals/meta.yaml>`_
   :links: biotools: :biotools:`genomeintervals`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-genomeintervals

   |downloads_bioconductor-genomeintervals| |docker_bioconductor-genomeintervals|

   :versions: 1.38.0, 1.36.0, 1.34.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-intervals` >=0.14.0 

   :required~by: |required_by_bioconductor-genomeintervals|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genomeintervals

   and update with::

      conda update bioconductor-genomeintervals

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-genomeintervals


.. |required_by_bioconductor-genomeintervals| conda:required_by:: bioconductor-genomeintervals
.. |downloads_bioconductor-genomeintervals| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomeintervals.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-genomeintervals| image:: https://quay.io/repository/biocontainers/bioconductor-genomeintervals/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomeintervals







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomeintervals/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomeintervals/README.html

