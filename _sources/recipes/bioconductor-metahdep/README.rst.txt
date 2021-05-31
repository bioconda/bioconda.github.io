:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metahdep'
.. highlight: bash

bioconductor-metahdep
=====================

.. conda:recipe:: bioconductor-metahdep
   :replaces_section_title:
   :noindex:

   Hierarchical Dependence in Meta\-Analysis

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/metahdep.html
   :license: GPL-3
   :recipe: /`bioconductor-metahdep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metahdep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metahdep/meta.yaml>`_
   :links: biotools: :biotools:`metahdep`, doi: :doi:`10.1093/bioinformatics/btp468`

   Tools for meta\-analysis in the presence of hierarchical \(and\/or sampling\) dependence\, including with gene expression studies


.. conda:package:: bioconductor-metahdep

   |downloads_bioconductor-metahdep| |docker_bioconductor-metahdep|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metahdep

   and update with::

      conda update bioconductor-metahdep

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metahdep:<tag>

   (see `bioconductor-metahdep/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metahdep| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metahdep.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metahdep
   :alt:   (downloads)
.. |docker_bioconductor-metahdep| image:: https://quay.io/repository/biocontainers/bioconductor-metahdep/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metahdep
.. _`bioconductor-metahdep/tags`: https://quay.io/repository/biocontainers/bioconductor-metahdep?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metahdep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metahdep/README.html