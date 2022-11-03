:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-occugene'
.. highlight: bash

bioconductor-occugene
=====================

.. conda:recipe:: bioconductor-occugene
   :replaces_section_title:
   :noindex:

   Functions for Multinomial Occupancy Distribution

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/occugene.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-occugene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-occugene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-occugene/meta.yaml>`_
   :links: biotools: :biotools:`occugene`, doi: :doi:`10.1007/978-1-59745-321-9_22`

   Statistical tools for building random mutagenesis libraries for prokaryotes. The package has functions for handling the occupancy distribution for a multinomial and for estimating the number of essential genes in random transposon mutagenesis libraries.


.. conda:package:: bioconductor-occugene

   |downloads_bioconductor-occugene| |docker_bioconductor-occugene|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.58.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  </span></summary>
      

      ``1.58.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-occugene

   and update with::

      conda update bioconductor-occugene

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-occugene:<tag>

   (see `bioconductor-occugene/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-occugene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-occugene.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-occugene
   :alt:   (downloads)
.. |docker_bioconductor-occugene| image:: https://quay.io/repository/biocontainers/bioconductor-occugene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-occugene
.. _`bioconductor-occugene/tags`: https://quay.io/repository/biocontainers/bioconductor-occugene?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-occugene";
        var versions = ["1.58.0","1.54.0","1.52.0","1.50.0","1.50.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-occugene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-occugene/README.html