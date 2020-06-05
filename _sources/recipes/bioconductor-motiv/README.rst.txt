:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-motiv'
.. highlight: bash

bioconductor-motiv
==================

.. conda:recipe:: bioconductor-motiv
   :replaces_section_title:
   :noindex:

   Motif Identification and Validation

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/MotIV.html
   :license: GPL-2
   :recipe: /`bioconductor-motiv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motiv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motiv/meta.yaml>`_
   :links: biotools: :biotools:`motiv`, doi: :doi:`10.1038/nmeth.3252`

   This package makes use of STAMP for comparing a set of motifs to a given database \(e.g. JASPAR\). It can also be used to visualize motifs\, motif distributions\, modules and filter motifs.


.. conda:package:: bioconductor-motiv

   |downloads_bioconductor-motiv| |docker_bioconductor-motiv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.43.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  </span></summary>
      

      ``1.43.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.34.0,<0.35.0``
   :depends bioconductor-biostrings: ``>=2.56.0,<2.57.0``
   :depends bioconductor-genomicranges: ``>=1.40.0,<1.41.0``
   :depends bioconductor-iranges: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rgadem: ``>=2.36.0,<2.37.0``
   :depends bioconductor-s4vectors: ``>=0.26.0,<0.27.0``
   :depends gsl: ``>=1.6``
   :depends gsl: ``>=2.6,<2.7.0a0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends liblapack: ``>=3.8.0,<3.9.0a0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-lattice: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-motiv

   and update with::

      conda update bioconductor-motiv

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-motiv:<tag>

   (see `bioconductor-motiv/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-motiv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-motiv.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-motiv
   :alt:   (downloads)
.. |docker_bioconductor-motiv| image:: https://quay.io/repository/biocontainers/bioconductor-motiv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-motiv
.. _`bioconductor-motiv/tags`: https://quay.io/repository/biocontainers/bioconductor-motiv?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-motiv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-motiv/README.html