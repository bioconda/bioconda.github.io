:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowmatch'
.. highlight: bash

bioconductor-flowmatch
======================

.. conda:recipe:: bioconductor-flowmatch
   :replaces_section_title:
   :noindex:

   Matching and meta\-clustering in flow cytometry

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/flowMatch.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowmatch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowmatch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowmatch/meta.yaml>`_
   :links: biotools: :biotools:`flowmatch`, doi: :doi:`10.1038/nmeth.3252`

   Matching cell populations and building meta\-clusters and templates from a collection of FC samples.


.. conda:package:: bioconductor-flowmatch

   |downloads_bioconductor-flowmatch| |docker_bioconductor-flowmatch|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-2</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-2``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-flowcore: ``>=2.6.0,<2.7.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-rcpp: ``>=0.11.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowmatch

   and update with::

      conda update bioconductor-flowmatch

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowmatch:<tag>

   (see `bioconductor-flowmatch/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowmatch| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowmatch.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowmatch
   :alt:   (downloads)
.. |docker_bioconductor-flowmatch| image:: https://quay.io/repository/biocontainers/bioconductor-flowmatch/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowmatch
.. _`bioconductor-flowmatch/tags`: https://quay.io/repository/biocontainers/bioconductor-flowmatch?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowmatch";
        var versions = ["1.30.0","1.28.0","1.26.0","1.26.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowmatch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowmatch/README.html