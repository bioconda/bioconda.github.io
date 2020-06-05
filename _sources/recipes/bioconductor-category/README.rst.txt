:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-category'
.. highlight: bash

bioconductor-category
=====================

.. conda:recipe:: bioconductor-category
   :replaces_section_title:
   :noindex:

   Category Analysis

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/Category.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-category <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-category>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-category/meta.yaml>`_
   :links: biotools: :biotools:`category`, doi: :doi:`10.1038/nmeth.3252`

   A collection of tools for performing category \(gene set enrichment\) analysis.


.. conda:package:: bioconductor-category

   |downloads_bioconductor-category| |docker_bioconductor-category|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.54.0-0</code>,  <code>2.52.0-0</code>,  <code>2.50.0-1</code>,  <code>2.48.0-0</code>,  <code>2.46.0-0</code>,  <code>2.44.0-0</code>,  <code>2.42.1-0</code>,  <code>2.38.0-1</code>,  <code>2.38.0-0</code>,  </span></summary>
      

      ``2.54.0-0``,  ``2.52.0-0``,  ``2.50.0-1``,  ``2.48.0-0``,  ``2.46.0-0``,  ``2.44.0-0``,  ``2.42.1-0``,  ``2.38.0-1``,  ``2.38.0-0``,  ``2.36.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotate: ``>=1.66.0,<1.67.0``
   :depends bioconductor-annotationdbi: ``>=1.50.0,<1.51.0``
   :depends bioconductor-biobase: ``>=2.48.0,<2.49.0``
   :depends bioconductor-biocgenerics: ``>=0.34.0,<0.35.0``
   :depends bioconductor-genefilter: ``>=1.70.0,<1.71.0``
   :depends bioconductor-graph: ``>=1.66.0,<1.67.0``
   :depends bioconductor-gseabase: ``>=1.50.0,<1.51.0``
   :depends bioconductor-rbgl: ``>=1.64.0,<1.65.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dbi: 
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-category

   and update with::

      conda update bioconductor-category

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-category:<tag>

   (see `bioconductor-category/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-category| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-category.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-category
   :alt:   (downloads)
.. |docker_bioconductor-category| image:: https://quay.io/repository/biocontainers/bioconductor-category/status
   :target: https://quay.io/repository/biocontainers/bioconductor-category
.. _`bioconductor-category/tags`: https://quay.io/repository/biocontainers/bioconductor-category?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-category/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-category/README.html