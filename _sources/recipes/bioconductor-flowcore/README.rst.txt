:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowcore'
.. highlight: bash

bioconductor-flowcore
=====================

.. conda:recipe:: bioconductor-flowcore
   :replaces_section_title:
   :noindex:

   flowCore\: Basic structures for flow cytometry data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/flowCore.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowcore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowcore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowcore/meta.yaml>`_
   :links: biotools: :biotools:`flowcore`, doi: :doi:`10.1186/1471-2105-10-106`

   Provides S4 data structures and basic functions to deal with flow cytometry data.


.. conda:package:: bioconductor-flowcore

   |downloads_bioconductor-flowcore| |docker_bioconductor-flowcore|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.0-1</code>,  <code>2.2.0-0</code>,  <code>2.0.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-1</code>,  <code>1.48.1-0</code>,  <code>1.48.0-0</code>,  <code>1.46.2-0</code>,  <code>1.44.0-0</code>,  </span></summary>
      

      ``2.2.0-1``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.48.1-0``,  ``1.48.0-0``,  ``1.46.2-0``,  ``1.44.0-0``,  ``1.42.3-0``,  ``1.42.0-0``,  ``1.38.2-1``,  ``1.38.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-cytolib: ``>=2.2.0,<2.3.0``
   :depends bioconductor-rprotobuflib: ``>=2.2.0,<2.3.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-bh: ``>=1.65.0.1``
   :depends r-matrixstats: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowcore

   and update with::

      conda update bioconductor-flowcore

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowcore:<tag>

   (see `bioconductor-flowcore/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowcore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowcore.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowcore
   :alt:   (downloads)
.. |docker_bioconductor-flowcore| image:: https://quay.io/repository/biocontainers/bioconductor-flowcore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowcore
.. _`bioconductor-flowcore/tags`: https://quay.io/repository/biocontainers/bioconductor-flowcore?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowcore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowcore/README.html