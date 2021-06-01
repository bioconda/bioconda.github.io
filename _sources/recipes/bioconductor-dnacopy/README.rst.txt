:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dnacopy'
.. highlight: bash

bioconductor-dnacopy
====================

.. conda:recipe:: bioconductor-dnacopy
   :replaces_section_title:
   :noindex:

   DNA copy number data analysis

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/DNAcopy.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-dnacopy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnacopy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnacopy/meta.yaml>`_
   :links: biotools: :biotools:`dnacopy`, doi: :doi:`10.1038/nmeth.3252`

   Implements the circular binary segmentation \(CBS\) algorithm to segment DNA copy number data and identify genomic regions with abnormal copy number.


.. conda:package:: bioconductor-dnacopy

   |downloads_bioconductor-dnacopy| |docker_bioconductor-dnacopy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.66.0-0</code>,  <code>1.64.0-1</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-2</code>,  <code>1.58.0-1</code>,  <code>1.58.0-0</code>,  <code>1.56.0-0</code>,  </span></summary>
      

      ``1.66.0-0``,  ``1.64.0-1``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-2``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.1-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dnacopy

   and update with::

      conda update bioconductor-dnacopy

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dnacopy:<tag>

   (see `bioconductor-dnacopy/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dnacopy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dnacopy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dnacopy
   :alt:   (downloads)
.. |docker_bioconductor-dnacopy| image:: https://quay.io/repository/biocontainers/bioconductor-dnacopy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dnacopy
.. _`bioconductor-dnacopy/tags`: https://quay.io/repository/biocontainers/bioconductor-dnacopy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dnacopy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dnacopy/README.html