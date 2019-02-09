.. title:: Package Recipe 'bioconductor-fastseg'
.. highlight: bash


bioconductor-fastseg
====================

.. conda:recipe:: bioconductor-fastseg
   :replaces_section_title:

   fastseg implements a very fast and efficient segmentation algorithm. It has similar functionality as DNACopy \(Olshen and Venkatraman 2004\)\, but is considerably faster and more flexible. fastseg can segment data from DNA microarrays and data from next generation sequencing for example to detect copy number segments. Further it can segment data from RNA microarrays like tiling arrays to identify transcripts. Most generally\, it can segment data given as a matrix or as a vector. Various data formats can be used as input to fastseg like expression set objects for microarrays or GRanges for sequencing data. The segmentation criterion of fastseg is based on a statistical test in a Bayesian framework\, namely the cyber t\-test \(Baldi 2001\). The speed\-up arises from the facts\, that sampling is not necessary in for fastseg and that a dynamic programming approach is used for calculation of the segments\' first and higher order moments.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/fastseg.html
   :license: LGPL (>= 2.0)
   :recipe: /`bioconductor-fastseg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fastseg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fastseg/meta.yaml>`_
   :links: biotools: :biotools:`fastseg`

   


.. conda:package:: bioconductor-fastseg

   |downloads_bioconductor-fastseg| |docker_bioconductor-fastseg|

   :versions: 1.28.0, 1.26.0, 1.24.0, 1.22.0, 1.20.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-fastseg|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fastseg

   and update with::

      conda update bioconductor-fastseg

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-fastseg


.. |required_by_bioconductor-fastseg| conda:required_by:: bioconductor-fastseg
.. |downloads_bioconductor-fastseg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fastseg.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-fastseg| image:: https://quay.io/repository/biocontainers/bioconductor-fastseg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fastseg







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fastseg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fastseg/README.html

