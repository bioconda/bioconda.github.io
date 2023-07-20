:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-swathxtend'
.. highlight: bash

bioconductor-swathxtend
=======================

.. conda:recipe:: bioconductor-swathxtend
   :replaces_section_title:
   :noindex:

   SWATH extended library generation and statistical data analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SwathXtend.html
   :license: GPL-2
   :recipe: /`bioconductor-swathxtend <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-swathxtend>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-swathxtend/meta.yaml>`_
   :links: biotools: :biotools:`swathxtend`, doi: :doi:`10.1074/mcp.M115.055558`

   Contains utility functions for integrating spectral libraries for SWATH and statistical data analysis for SWATH generated data.


.. conda:package:: bioconductor-swathxtend

   |downloads_bioconductor-swathxtend| |docker_bioconductor-swathxtend|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  <code>2.12.0-1</code>,  <code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-1</code>,  </span></summary>
      

      ``2.22.0-0``,  ``2.20.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-1``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-e1071: 
   :depends r-lattice: 
   :depends r-openxlsx: 
   :depends r-venndiagram: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-swathxtend

   and update with::

      conda update bioconductor-swathxtend

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-swathxtend:<tag>

   (see `bioconductor-swathxtend/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-swathxtend| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-swathxtend.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-swathxtend
   :alt:   (downloads)
.. |docker_bioconductor-swathxtend| image:: https://quay.io/repository/biocontainers/bioconductor-swathxtend/status
   :target: https://quay.io/repository/biocontainers/bioconductor-swathxtend
.. _`bioconductor-swathxtend/tags`: https://quay.io/repository/biocontainers/bioconductor-swathxtend?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-swathxtend";
        var versions = ["2.22.0","2.20.0","2.16.0","2.14.0","2.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-swathxtend/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-swathxtend/README.html