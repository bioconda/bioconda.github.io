:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-derfinderhelper'
.. highlight: bash

bioconductor-derfinderhelper
============================

.. conda:recipe:: bioconductor-derfinderhelper
   :replaces_section_title:
   :noindex:

   derfinder helper package

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/derfinderHelper.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-derfinderhelper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-derfinderhelper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-derfinderhelper/meta.yaml>`_
   :links: biotools: :biotools:`derfinderhelper`

   Helper package for speeding up the derfinder package when using multiple cores. This package is particularly useful when using BiocParallel and it helps reduce the time spent loading the full derfinder package when running the F\-statistics calculation in parallel.


.. conda:package:: bioconductor-derfinderhelper

   |downloads_bioconductor-derfinderhelper| |docker_bioconductor-derfinderhelper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.1-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.1-0</code>,  <code>1.16.1-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.1-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.16.1-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-derfinderhelper

   and update with::

      conda update bioconductor-derfinderhelper

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-derfinderhelper:<tag>

   (see `bioconductor-derfinderhelper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-derfinderhelper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-derfinderhelper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-derfinderhelper
   :alt:   (downloads)
.. |docker_bioconductor-derfinderhelper| image:: https://quay.io/repository/biocontainers/bioconductor-derfinderhelper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-derfinderhelper
.. _`bioconductor-derfinderhelper/tags`: https://quay.io/repository/biocontainers/bioconductor-derfinderhelper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-derfinderhelper";
        var versions = ["1.32.0","1.28.0","1.26.0","1.24.1","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-derfinderhelper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-derfinderhelper/README.html