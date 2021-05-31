:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ssize'
.. highlight: bash

bioconductor-ssize
==================

.. conda:recipe:: bioconductor-ssize
   :replaces_section_title:
   :noindex:

   Estimate Microarray Sample Size

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/ssize.html
   :license: LGPL
   :recipe: /`bioconductor-ssize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ssize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ssize/meta.yaml>`_
   :links: biotools: :biotools:`ssize`, doi: :doi:`10.1038/nmeth.3252`

   Functions for computing and displaying sample size information for gene expression arrays.


.. conda:package:: bioconductor-ssize

   |downloads_bioconductor-ssize| |docker_bioconductor-ssize|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.66.0-0</code>,  <code>1.64.0-1</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-1</code>,  <code>1.58.0-0</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  </span></summary>
      

      ``1.66.0-0``,  ``1.64.0-1``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-gdata: 
   :depends r-xtable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ssize

   and update with::

      conda update bioconductor-ssize

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ssize:<tag>

   (see `bioconductor-ssize/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ssize| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ssize.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ssize
   :alt:   (downloads)
.. |docker_bioconductor-ssize| image:: https://quay.io/repository/biocontainers/bioconductor-ssize/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ssize
.. _`bioconductor-ssize/tags`: https://quay.io/repository/biocontainers/bioconductor-ssize?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ssize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ssize/README.html