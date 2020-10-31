:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fastseg'
.. highlight: bash

bioconductor-fastseg
====================

.. conda:recipe:: bioconductor-fastseg
   :replaces_section_title:
   :noindex:

   fastseg \- a fast segmentation algorithm

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/fastseg.html
   :license: LGPL (>= 2.0)
   :recipe: /`bioconductor-fastseg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fastseg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fastseg/meta.yaml>`_
   :links: biotools: :biotools:`fastseg`

   fastseg implements a very fast and efficient segmentation algorithm. It has similar functionality as DNACopy \(Olshen and Venkatraman 2004\)\, but is considerably faster and more flexible. fastseg can segment data from DNA microarrays and data from next generation sequencing for example to detect copy number segments. Further it can segment data from RNA microarrays like tiling arrays to identify transcripts. Most generally\, it can segment data given as a matrix or as a vector. Various data formats can be used as input to fastseg like expression set objects for microarrays or GRanges for sequencing data. The segmentation criterion of fastseg is based on a statistical test in a Bayesian framework\, namely the cyber t\-test \(Baldi 2001\). The speed\-up arises from the facts\, that sampling is not necessary in for fastseg and that a dynamic programming approach is used for calculation of the segments\' first and higher order moments.


.. conda:package:: bioconductor-fastseg

   |downloads_bioconductor-fastseg| |docker_bioconductor-fastseg|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fastseg

   and update with::

      conda update bioconductor-fastseg

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fastseg:<tag>

   (see `bioconductor-fastseg/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fastseg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fastseg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fastseg
   :alt:   (downloads)
.. |docker_bioconductor-fastseg| image:: https://quay.io/repository/biocontainers/bioconductor-fastseg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fastseg
.. _`bioconductor-fastseg/tags`: https://quay.io/repository/biocontainers/bioconductor-fastseg?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fastseg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fastseg/README.html