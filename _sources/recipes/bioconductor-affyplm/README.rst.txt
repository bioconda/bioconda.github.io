:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affyplm'
.. highlight: bash

bioconductor-affyplm
====================

.. conda:recipe:: bioconductor-affyplm
   :replaces_section_title:
   :noindex:

   Methods for fitting probe\-level models

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/affyPLM.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-affyplm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affyplm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affyplm/meta.yaml>`_
   :links: biotools: :biotools:`affyplm`

   A package that extends and improves the functionality of the base affy package. Routines that make heavy use of compiled code for speed. Central focus is on implementation of methods for fitting probe\-level models and tools using these models. PLM based quality assessment tools.


.. conda:package:: bioconductor-affyplm

   |downloads_bioconductor-affyplm| |docker_bioconductor-affyplm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.70.0-0</code>,  <code>1.68.0-0</code>,  <code>1.66.0-1</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-1</code>,  <code>1.58.0-0</code>,  <code>1.56.0-0</code>,  </span></summary>
      

      ``1.70.0-0``,  ``1.68.0-0``,  ``1.66.0-1``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.72.0,<1.73.0``
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-gcrma: ``>=2.66.0,<2.67.0``
   :depends bioconductor-preprocesscore: ``>=1.56.0,<1.57.0``
   :depends bioconductor-zlibbioc: ``>=1.40.0,<1.41.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-affyplm

   and update with::

      conda update bioconductor-affyplm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-affyplm:<tag>

   (see `bioconductor-affyplm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-affyplm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affyplm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-affyplm
   :alt:   (downloads)
.. |docker_bioconductor-affyplm| image:: https://quay.io/repository/biocontainers/bioconductor-affyplm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affyplm
.. _`bioconductor-affyplm/tags`: https://quay.io/repository/biocontainers/bioconductor-affyplm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-affyplm";
        var versions = ["1.70.0","1.68.0","1.66.0","1.66.0","1.64.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affyplm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affyplm/README.html