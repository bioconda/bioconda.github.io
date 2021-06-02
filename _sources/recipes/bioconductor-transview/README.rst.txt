:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-transview'
.. highlight: bash

bioconductor-transview
======================

.. conda:recipe:: bioconductor-transview
   :replaces_section_title:
   :noindex:

   Read density map construction and accession. Visualization of ChIPSeq and RNASeq data sets

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/TransView.html
   :license: GPL-3
   :recipe: /`bioconductor-transview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transview/meta.yaml>`_
   :links: biotools: :biotools:`transview`, doi: :doi:`10.1038/nmeth.3252`

   This package provides efficient tools to generate\, access and display read densities of sequencing based data sets such as from RNA\-Seq and ChIP\-Seq.


.. conda:package:: bioconductor-transview

   |downloads_bioconductor-transview| |docker_bioconductor-transview|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rhtslib: ``>=1.24.0,<1.25.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-zlibbioc: ``>=1.38.0,<1.39.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-gplots: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-transview

   and update with::

      conda update bioconductor-transview

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-transview:<tag>

   (see `bioconductor-transview/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-transview| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-transview.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-transview
   :alt:   (downloads)
.. |docker_bioconductor-transview| image:: https://quay.io/repository/biocontainers/bioconductor-transview/status
   :target: https://quay.io/repository/biocontainers/bioconductor-transview
.. _`bioconductor-transview/tags`: https://quay.io/repository/biocontainers/bioconductor-transview?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-transview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-transview/README.html