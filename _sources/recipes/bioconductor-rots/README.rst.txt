:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rots'
.. highlight: bash

bioconductor-rots
=================

.. conda:recipe:: bioconductor-rots
   :replaces_section_title:
   :noindex:

   Reproducibility\-Optimized Test Statistic

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/ROTS.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-rots <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rots>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rots/meta.yaml>`_
   :links: biotools: :biotools:`rots`, doi: :doi:`10.1109/tcbb.2007.1078`

   Calculates the Reproducibility\-Optimized Test Statistic \(ROTS\) for differential testing in omics data.


.. conda:package:: bioconductor-rots

   |downloads_bioconductor-rots| |docker_bioconductor-rots|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.10.1-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcxx: ``>=11.1.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rots

   and update with::

      conda update bioconductor-rots

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rots:<tag>

   (see `bioconductor-rots/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rots| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rots.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rots
   :alt:   (downloads)
.. |docker_bioconductor-rots| image:: https://quay.io/repository/biocontainers/bioconductor-rots/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rots
.. _`bioconductor-rots/tags`: https://quay.io/repository/biocontainers/bioconductor-rots?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rots/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rots/README.html