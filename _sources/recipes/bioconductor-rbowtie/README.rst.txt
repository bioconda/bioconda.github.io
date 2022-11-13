:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rbowtie'
.. highlight: bash

bioconductor-rbowtie
====================

.. conda:recipe:: bioconductor-rbowtie
   :replaces_section_title:
   :noindex:

   R bowtie wrapper

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/Rbowtie.html
   :license: Artistic-2.0 | file LICENSE
   :recipe: /`bioconductor-rbowtie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbowtie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbowtie/meta.yaml>`_
   :links: biotools: :biotools:`rbowtie`, doi: :doi:`10.1038/nmeth.3252`

   This package provides an R wrapper around the popular bowtie short read aligner and around SpliceMap\, a de novo splice junction discovery and alignment tool. The package is used by the QuasR bioconductor package. We recommend to use the QuasR package instead of using Rbowtie directly.


.. conda:package:: bioconductor-rbowtie

   |downloads_bioconductor-rbowtie| |docker_bioconductor-rbowtie|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-2</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-2</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-2``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-2``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rbowtie

   and update with::

      conda update bioconductor-rbowtie

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rbowtie:<tag>

   (see `bioconductor-rbowtie/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rbowtie| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rbowtie.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rbowtie
   :alt:   (downloads)
.. |docker_bioconductor-rbowtie| image:: https://quay.io/repository/biocontainers/bioconductor-rbowtie/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rbowtie
.. _`bioconductor-rbowtie/tags`: https://quay.io/repository/biocontainers/bioconductor-rbowtie?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rbowtie";
        var versions = ["1.38.0","1.34.0","1.34.0","1.34.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rbowtie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rbowtie/README.html